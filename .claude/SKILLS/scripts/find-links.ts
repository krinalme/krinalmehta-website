/**
 * Find Internal Link Opportunities
 * 
 * Uses semantic similarity to identify pages that should link to each other.
 * 
 * Usage: npx ts-node scripts/find-links.ts [--threshold 0.7]
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';

interface PageWithEmbedding {
  slug: string;
  url: string;
  title: string;
  content: string;
  headings: string[];
  category?: string;
  tags?: string[];
  wordCount: number;
  existingLinks: string[];
  embedding: number[];
}

interface LinkOpportunity {
  sourceUrl: string;
  sourceTitle: string;
  targetUrl: string;
  targetTitle: string;
  similarity: number;
  reason: string;
  suggestedAnchors: string[];
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

function findSharedKeywords(page1: PageWithEmbedding, page2: PageWithEmbedding): string[] {
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
    'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
    'could', 'should', 'may', 'might', 'must', 'shall', 'can', 'need',
    'this', 'that', 'these', 'those', 'it', 'its', 'you', 'your', 'we',
    'our', 'they', 'their', 'what', 'which', 'who', 'when', 'where', 'how'
  ]);
  
  const getKeywords = (text: string): Set<string> => {
    return new Set(
      text.toLowerCase()
        .split(/\W+/)
        .filter(w => w.length > 3 && !stopWords.has(w))
    );
  };
  
  const kw1 = getKeywords(page1.title + ' ' + page1.content.slice(0, 500));
  const kw2 = getKeywords(page2.title + ' ' + page2.content.slice(0, 500));
  
  return [...kw1].filter(w => kw2.has(w)).slice(0, 5);
}

function generateAnchorSuggestions(
  sourcePage: PageWithEmbedding,
  targetPage: PageWithEmbedding
): string[] {
  const suggestions: string[] = [];
  
  // Option 1: Target page title
  suggestions.push(targetPage.title);
  
  // Option 2: First heading if different from title
  if (targetPage.headings[0] && targetPage.headings[0] !== targetPage.title) {
    suggestions.push(targetPage.headings[0]);
  }
  
  // Option 3: Keywords from title
  const titleWords = targetPage.title
    .split(/\s+/)
    .filter(w => w.length > 4);
  if (titleWords.length >= 2) {
    suggestions.push(titleWords.slice(0, 3).join(' '));
  }
  
  // Option 4: Category-based if available
  if (targetPage.category) {
    suggestions.push(`${targetPage.category} guide`);
  }
  
  return [...new Set(suggestions)].slice(0, 4);
}

function findLinkOpportunities(
  pages: PageWithEmbedding[],
  threshold: number = 0.7
): LinkOpportunity[] {
  const opportunities: LinkOpportunity[] = [];
  
  console.log(`Finding opportunities with similarity threshold >= ${threshold}`);
  
  for (let i = 0; i < pages.length; i++) {
    const sourcePage = pages[i];
    
    for (let j = 0; j < pages.length; j++) {
      if (i === j) continue;
      
      const targetPage = pages[j];
      
      // Skip if link already exists
      if (sourcePage.existingLinks.includes(targetPage.url)) {
        continue;
      }
      
      const similarity = cosineSimilarity(
        sourcePage.embedding,
        targetPage.embedding
      );
      
      if (similarity >= threshold) {
        const sharedKeywords = findSharedKeywords(sourcePage, targetPage);
        
        opportunities.push({
          sourceUrl: sourcePage.url,
          sourceTitle: sourcePage.title,
          targetUrl: targetPage.url,
          targetTitle: targetPage.title,
          similarity: Math.round(similarity * 1000) / 1000,
          reason: sharedKeywords.length > 0 
            ? `Shared topics: ${sharedKeywords.join(', ')}`
            : 'High semantic similarity',
          suggestedAnchors: generateAnchorSuggestions(sourcePage, targetPage),
        });
      }
    }
  }
  
  // Sort by similarity (highest first)
  return opportunities.sort((a, b) => b.similarity - a.similarity);
}

function groupBySource(opportunities: LinkOpportunity[]): Map<string, LinkOpportunity[]> {
  const grouped = new Map<string, LinkOpportunity[]>();
  
  for (const opp of opportunities) {
    if (!grouped.has(opp.sourceUrl)) {
      grouped.set(opp.sourceUrl, []);
    }
    grouped.get(opp.sourceUrl)!.push(opp);
  }
  
  return grouped;
}

async function main() {
  const args = process.argv.slice(2);
  const thresholdIndex = args.indexOf('--threshold');
  const threshold = thresholdIndex >= 0 
    ? parseFloat(args[thresholdIndex + 1]) 
    : 0.7;
  
  const inputPath = '.internal-links/pages.json';
  const outputPath = '.internal-links/opportunities.json';
  
  if (!existsSync(inputPath)) {
    console.error('Error: pages.json not found. Run analyze-content.ts first.');
    process.exit(1);
  }
  
  const pages: PageWithEmbedding[] = JSON.parse(readFileSync(inputPath, 'utf-8'));
  console.log(`Loaded ${pages.length} pages\n`);
  
  const opportunities = findLinkOpportunities(pages, threshold);
  
  writeFileSync(outputPath, JSON.stringify(opportunities, null, 2));
  
  console.log(`\n✓ Found ${opportunities.length} link opportunities`);
  console.log(`  Saved to ${outputPath}`);
  
  // Summary by source page
  const grouped = groupBySource(opportunities);
  
  console.log(`\n📊 Summary by page:`);
  const sortedGroups = [...grouped.entries()]
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 10);
  
  for (const [url, opps] of sortedGroups) {
    console.log(`  ${url}: ${opps.length} opportunities`);
  }
  
  // Top opportunities
  console.log(`\n🔗 Top 10 link opportunities:`);
  opportunities.slice(0, 10).forEach((opp, i) => {
    console.log(`\n  ${i + 1}. [${opp.similarity}] ${opp.sourceTitle}`);
    console.log(`     → ${opp.targetTitle}`);
    console.log(`     Anchors: "${opp.suggestedAnchors[0]}"`);
  });
}

main().catch(console.error);
