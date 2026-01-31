/**
 * Content Analyzer for Internal Linking
 * 
 * Extracts content from MDX/Markdown files and generates embeddings
 * for semantic similarity matching.
 * 
 * Usage: npx ts-node scripts/analyze-content.ts
 */

import { glob } from 'glob';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import matter from 'gray-matter';
import { pipeline, env } from '@xenova/transformers';

// Configure for local model usage
env.allowLocalModels = true;
env.useBrowserCache = false;

interface PageData {
  slug: string;
  url: string;
  title: string;
  description?: string;
  content: string;
  headings: string[];
  category?: string;
  tags?: string[];
  wordCount: number;
  existingLinks: string[];
}

interface PageWithEmbedding extends PageData {
  embedding: number[];
}

let embedder: any = null;

async function getEmbedder() {
  if (!embedder) {
    console.log('Loading embedding model (first run downloads ~90MB)...');
    embedder = await pipeline(
      'feature-extraction',
      'Xenova/all-MiniLM-L6-v2'
    );
    console.log('Model loaded.');
  }
  return embedder;
}

async function generateEmbedding(text: string): Promise<number[]> {
  const model = await getEmbedder();
  const output = await model(text, { pooling: 'mean', normalize: true });
  return Array.from(output.data);
}

function stripMarkdown(content: string): string {
  return content
    .replace(/```[\s\S]*?```/g, '')           // code blocks
    .replace(/`[^`]+`/g, '')                   // inline code
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')   // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')  // links (keep text)
    .replace(/^#{1,6}\s+/gm, '')              // heading markers
    .replace(/[*_~`]/g, '')                    // formatting
    .replace(/\n{3,}/g, '\n\n')               // excessive newlines
    .trim();
}

function extractExistingLinks(content: string): string[] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const links: string[] = [];
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    const url = match[2];
    // Only internal links (relative or same domain)
    if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
      links.push(url.split('#')[0]); // Remove anchors
    }
  }
  
  return [...new Set(links)];
}

function extractHeadings(content: string): string[] {
  const headingRegex = /^#{1,3}\s+(.+)$/gm;
  const headings: string[] = [];
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push(match[1].trim());
  }
  
  return headings;
}

async function analyzeContent(contentDir: string = 'content'): Promise<PageData[]> {
  const patterns = [
    `${contentDir}/**/*.md`,
    `${contentDir}/**/*.mdx`,
  ];
  
  const files: string[] = [];
  for (const pattern of patterns) {
    const matches = await glob(pattern);
    files.push(...matches);
  }
  
  console.log(`Found ${files.length} content files`);
  
  const pages: PageData[] = [];
  
  for (const file of files) {
    try {
      const raw = readFileSync(file, 'utf-8');
      const { data: frontmatter, content } = matter(raw);
      
      const headings = extractHeadings(content);
      const plainContent = stripMarkdown(content);
      
      const slug = file
        .replace(`${contentDir}/`, '')
        .replace(/\.(md|mdx)$/, '')
        .replace(/\/index$/, '');
      
      pages.push({
        slug,
        url: `/${slug}`,
        title: frontmatter.title || headings[0] || slug,
        description: frontmatter.description,
        content: plainContent,
        headings,
        category: frontmatter.category,
        tags: frontmatter.tags || [],
        wordCount: plainContent.split(/\s+/).length,
        existingLinks: extractExistingLinks(content),
      });
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
  
  return pages;
}

async function generateEmbeddings(pages: PageData[]): Promise<PageWithEmbedding[]> {
  console.log(`Generating embeddings for ${pages.length} pages...`);
  
  const pagesWithEmbeddings: PageWithEmbedding[] = [];
  
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    
    // Combine title and content excerpt for embedding
    const textToEmbed = [
      page.title,
      page.description || '',
      page.content.slice(0, 1500) // First ~1500 chars
    ].filter(Boolean).join(' ');
    
    const embedding = await generateEmbedding(textToEmbed);
    
    pagesWithEmbeddings.push({
      ...page,
      embedding,
    });
    
    if ((i + 1) % 10 === 0) {
      console.log(`Processed ${i + 1}/${pages.length} pages`);
    }
  }
  
  return pagesWithEmbeddings;
}

async function main() {
  const contentDir = process.argv[2] || 'content';
  const outputDir = '.internal-links';
  
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }
  
  console.log(`\nAnalyzing content in: ${contentDir}`);
  
  // Step 1: Extract content
  const pages = await analyzeContent(contentDir);
  console.log(`\nExtracted ${pages.length} pages`);
  
  // Step 2: Generate embeddings
  const pagesWithEmbeddings = await generateEmbeddings(pages);
  
  // Step 3: Save results
  const outputPath = `${outputDir}/pages.json`;
  writeFileSync(
    outputPath,
    JSON.stringify(pagesWithEmbeddings, null, 2)
  );
  
  console.log(`\n✓ Saved analysis to ${outputPath}`);
  console.log(`\nSummary:`);
  console.log(`  Total pages: ${pages.length}`);
  console.log(`  Total words: ${pages.reduce((sum, p) => sum + p.wordCount, 0).toLocaleString()}`);
  console.log(`  Avg word count: ${Math.round(pages.reduce((sum, p) => sum + p.wordCount, 0) / pages.length)}`);
  
  // Find orphan candidates (pages with no inbound links in content)
  const linkedUrls = new Set(pages.flatMap(p => p.existingLinks));
  const potentialOrphans = pages.filter(p => !linkedUrls.has(p.url));
  
  if (potentialOrphans.length > 0) {
    console.log(`\n⚠ Potential orphan pages (no inbound content links):`);
    potentialOrphans.slice(0, 10).forEach(p => {
      console.log(`  - ${p.url}`);
    });
    if (potentialOrphans.length > 10) {
      console.log(`  ... and ${potentialOrphans.length - 10} more`);
    }
  }
}

main().catch(console.error);
