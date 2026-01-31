---
name: semantic-internal-linking
description: "Automated semantic internal linking for Next.js websites optimized for SEO and AEO (Answer Engine Optimization). Use when: (1) Analyzing content for internal link opportunities, (2) Generating link suggestions based on semantic similarity, (3) Implementing automated linking in Next.js/MDX content, (4) Building topic clusters and pillar page structures, (5) Auditing existing internal link structure, (6) Optimizing for AI crawlers and Google AI Overviews."
---

# Semantic Internal Linking for Next.js

Automated system for discovering and implementing internal links that establish meaningful topical relationships, optimized for both traditional SEO and AI-powered answer engines.

## Quick Reference

| Task | Approach |
|------|----------|
| Analyze content for links | Run `scripts/analyze-content.ts` to extract pages and embeddings |
| Find link opportunities | Run `scripts/find-links.ts` with similarity threshold ≥0.7 |
| Generate link suggestions | Run `scripts/suggest-links.ts` for actionable recommendations |
| Implement in MDX | Use the `AutoLink` component or remark plugin |
| Audit existing links | Run `scripts/audit-links.ts` for gap analysis |
| Build topic clusters | See TOPIC-CLUSTERS.md for architecture patterns |

## Core Principles

**Semantic links establish meaningful relationships** based on topical relevance, not arbitrary connections. Research shows:
- Pages with exact-match anchor text receive **5x more organic traffic**
- Topic clusters generate **3.2x more AI citations** than single pages
- Optimal link count: **40-50 internal links per page** (diminishing returns above 50)
- Link density: approximately **1 link per 200-300 words**

**Link placement hierarchy by SEO value:**
1. Contextual links in main content (highest)
2. Navigation and header links
3. Breadcrumbs (confirmed by Google for PageRank)
4. Sidebar links
5. Footer links (lowest)

## Setup

### Install Dependencies

```bash
npm install @xenova/transformers natural cheerio gray-matter glob
npm install -D @types/natural @types/cheerio
```

For vector storage (choose one):
```bash
# Option 1: SQLite with vector extension (simplest)
npm install better-sqlite3 sqlite-vec

# Option 2: PostgreSQL with pgvector
npm install pg pgvector

# Option 3: Pinecone (managed service)
npm install @pinecone-database/pinecone
```

### Project Structure

```
your-nextjs-site/
├── content/           # MDX/Markdown content
├── lib/
│   └── internal-links/
│       ├── analyzer.ts      # Content analysis
│       ├── embeddings.ts    # Vector generation
│       ├── suggestions.ts   # Link recommendations
│       └── types.ts         # TypeScript interfaces
├── components/
│   └── AutoLink.tsx   # Automatic link component
└── scripts/
    ├── analyze-content.ts
    ├── find-links.ts
    ├── suggest-links.ts
    └── audit-links.ts
```

## Content Analysis

### Step 1: Extract and Index Content

```typescript
// scripts/analyze-content.ts
import { glob } from 'glob';
import matter from 'gray-matter';
import { readFileSync } from 'fs';
import { pipeline } from '@xenova/transformers';

interface PageData {
  slug: string;
  url: string;
  title: string;
  content: string;
  headings: string[];
  category?: string;
  tags?: string[];
  wordCount: number;
}

async function analyzeContent(): Promise<PageData[]> {
  const files = await glob('content/**/*.{md,mdx}');
  const pages: PageData[] = [];

  for (const file of files) {
    const raw = readFileSync(file, 'utf-8');
    const { data: frontmatter, content } = matter(raw);
    
    // Extract headings for anchor text candidates
    const headings = content.match(/^#{1,3}\s+(.+)$/gm)?.map(h => 
      h.replace(/^#+\s+/, '')
    ) || [];

    const slug = file
      .replace('content/', '')
      .replace(/\.(md|mdx)$/, '');

    pages.push({
      slug,
      url: `/${slug}`,
      title: frontmatter.title || headings[0] || slug,
      content: stripMarkdown(content),
      headings,
      category: frontmatter.category,
      tags: frontmatter.tags,
      wordCount: content.split(/\s+/).length,
    });
  }

  return pages;
}

function stripMarkdown(content: string): string {
  return content
    .replace(/```[\s\S]*?```/g, '')  // code blocks
    .replace(/`[^`]+`/g, '')          // inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')  // links
    .replace(/[#*_~`]/g, '')          // formatting
    .replace(/\n+/g, ' ')             // newlines
    .trim();
}
```

### Step 2: Generate Embeddings

```typescript
// lib/internal-links/embeddings.ts
import { pipeline, env } from '@xenova/transformers';

// Use local models (no API costs)
env.allowLocalModels = true;
env.useBrowserCache = false;

let embedder: any = null;

async function getEmbedder() {
  if (!embedder) {
    // all-MiniLM-L6-v2: 384 dimensions, good balance of speed/quality
    embedder = await pipeline(
      'feature-extraction',
      'Xenova/all-MiniLM-L6-v2'
    );
  }
  return embedder;
}

export async function generateEmbedding(text: string): Promise<number[]> {
  const model = await getEmbedder();
  const output = await model(text, { pooling: 'mean', normalize: true });
  return Array.from(output.data);
}

export function cosineSimilarity(a: number[], b: number[]): number {
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
```

## Finding Link Opportunities

### Similarity-Based Discovery

```typescript
// scripts/find-links.ts
import { generateEmbedding, cosineSimilarity } from '../lib/internal-links/embeddings';

interface LinkOpportunity {
  sourcePage: string;
  targetPage: string;
  similarity: number;
  suggestedAnchor: string;
  context: string;
}

async function findLinkOpportunities(
  pages: PageData[],
  threshold: number = 0.7
): Promise<LinkOpportunity[]> {
  const opportunities: LinkOpportunity[] = [];
  
  // Generate embeddings for all pages
  const embeddings = await Promise.all(
    pages.map(async (page) => ({
      page,
      embedding: await generateEmbedding(page.title + ' ' + page.content.slice(0, 1000))
    }))
  );

  // Find similar pages
  for (let i = 0; i < embeddings.length; i++) {
    for (let j = i + 1; j < embeddings.length; j++) {
      const similarity = cosineSimilarity(
        embeddings[i].embedding,
        embeddings[j].embedding
      );

      if (similarity >= threshold) {
        // Check if link already exists
        const sourceContent = embeddings[i].page.content;
        const targetUrl = embeddings[j].page.url;
        
        if (!sourceContent.includes(targetUrl)) {
          opportunities.push({
            sourcePage: embeddings[i].page.url,
            targetPage: embeddings[j].page.url,
            similarity,
            suggestedAnchor: embeddings[j].page.title,
            context: findBestContext(sourceContent, embeddings[j].page)
          });
        }
      }
    }
  }

  return opportunities.sort((a, b) => b.similarity - a.similarity);
}

function findBestContext(sourceContent: string, targetPage: PageData): string {
  // Find sentences mentioning related topics
  const sentences = sourceContent.split(/[.!?]+/);
  const keywords = [
    targetPage.title.toLowerCase(),
    ...(targetPage.tags || []).map(t => t.toLowerCase())
  ];

  for (const sentence of sentences) {
    const lower = sentence.toLowerCase();
    if (keywords.some(kw => lower.includes(kw))) {
      return sentence.trim();
    }
  }

  return '';
}
```

### TF-IDF Pre-filtering (For Large Sites)

```typescript
// lib/internal-links/tfidf.ts
import natural from 'natural';

const TfIdf = natural.TfIdf;

export function findCandidatesWithTfIdf(
  pages: PageData[],
  topK: number = 20
): Map<string, string[]> {
  const tfidf = new TfIdf();
  
  // Add all documents
  pages.forEach(page => {
    tfidf.addDocument(page.content);
  });

  const candidates = new Map<string, string[]>();

  // For each page, find similar pages by TF-IDF
  pages.forEach((sourcePage, sourceIndex) => {
    const scores: { index: number; score: number }[] = [];
    
    // Get top terms from source
    const terms = tfidf.listTerms(sourceIndex)
      .slice(0, 10)
      .map(t => t.term);

    // Score other documents
    pages.forEach((_, targetIndex) => {
      if (sourceIndex === targetIndex) return;
      
      let score = 0;
      terms.forEach(term => {
        score += tfidf.tfidf(term, targetIndex);
      });
      
      scores.push({ index: targetIndex, score });
    });

    // Keep top K candidates
    const topCandidates = scores
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .map(s => pages[s.index].url);

    candidates.set(sourcePage.url, topCandidates);
  });

  return candidates;
}
```

## Link Suggestion Generation

### Anchor Text Optimization

```typescript
// lib/internal-links/suggestions.ts

interface LinkSuggestion {
  sourceUrl: string;
  targetUrl: string;
  anchorText: string;
  anchorType: 'exact' | 'partial' | 'natural' | 'branded';
  insertionPoint: string;  // Sentence where link should be added
  confidence: number;
}

export function generateAnchorText(
  targetPage: PageData,
  context: string,
  existingAnchors: string[]
): { text: string; type: LinkSuggestion['anchorType'] } {
  // Avoid duplicate anchor text
  const used = new Set(existingAnchors.map(a => a.toLowerCase()));

  // Priority 1: Natural phrase from context
  const naturalMatch = findNaturalAnchor(context, targetPage);
  if (naturalMatch && !used.has(naturalMatch.toLowerCase())) {
    return { text: naturalMatch, type: 'natural' };
  }

  // Priority 2: Partial match using keywords
  const keywords = extractKeywords(targetPage.title);
  for (const kw of keywords) {
    if (!used.has(kw.toLowerCase()) && context.toLowerCase().includes(kw.toLowerCase())) {
      return { text: kw, type: 'partial' };
    }
  }

  // Priority 3: Exact match (use sparingly - 10-20% of links)
  if (!used.has(targetPage.title.toLowerCase())) {
    return { text: targetPage.title, type: 'exact' };
  }

  // Fallback: Descriptive variation
  return { 
    text: `guide to ${targetPage.title.toLowerCase()}`,
    type: 'natural'
  };
}

function findNaturalAnchor(context: string, targetPage: PageData): string | null {
  // Look for 2-5 word phrases that relate to target
  const words = context.split(/\s+/);
  const targetWords = new Set(
    targetPage.title.toLowerCase().split(/\s+/)
  );

  for (let i = 0; i < words.length - 2; i++) {
    for (let len = 2; len <= 5 && i + len <= words.length; len++) {
      const phrase = words.slice(i, i + len).join(' ');
      const phraseWords = phrase.toLowerCase().split(/\s+/);
      
      // Check if phrase relates to target
      const overlap = phraseWords.filter(w => targetWords.has(w)).length;
      if (overlap >= 1 && phrase.length >= 10 && phrase.length <= 50) {
        return phrase;
      }
    }
  }

  return null;
}

function extractKeywords(title: string): string[] {
  const stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by']);
  return title
    .split(/\s+/)
    .filter(w => w.length > 3 && !stopWords.has(w.toLowerCase()));
}
```

### Optimal Anchor Text Distribution

Target this distribution for a healthy link profile:
- **10-20% exact match**: Full target page title
- **20-30% partial match**: Keywords from title
- **30-40% natural/descriptive**: Contextual phrases
- **10-20% branded**: Site/brand name mentions
- **5-10% generic**: "Learn more", "Read more" (use sparingly)

## Next.js Implementation

### Server Component for Related Links

```tsx
// components/RelatedLinks.tsx
import Link from 'next/link';
import { getRelatedPages } from '@/lib/internal-links/suggestions';

interface RelatedLinksProps {
  currentSlug: string;
  limit?: number;
}

export async function RelatedLinks({ currentSlug, limit = 5 }: RelatedLinksProps) {
  const related = await getRelatedPages(currentSlug, limit);

  if (related.length === 0) return null;

  return (
    <nav aria-label="Related content">
      <h2>Related Articles</h2>
      <ul>
        {related.map((page) => (
          <li key={page.url}>
            <Link href={page.url}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

### MDX Auto-Linking Component

```tsx
// components/AutoLink.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

interface AutoLinkProps {
  children: ReactNode;
  linkMap: Map<string, { url: string; title: string }>;
}

export function AutoLink({ children, linkMap }: AutoLinkProps) {
  if (typeof children !== 'string') return <>{children}</>;

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let text = children;

  // Sort by length (longest first) to avoid partial matches
  const entries = Array.from(linkMap.entries())
    .sort((a, b) => b[0].length - a[0].length);

  for (const [keyword, { url, title }] of entries) {
    const regex = new RegExp(`\\b${escapeRegex(keyword)}\\b`, 'gi');
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      
      parts.push(
        <Link key={`${url}-${match.index}`} href={url} title={title}>
          {match[0]}
        </Link>
      );
      
      lastIndex = match.index + match[0].length;
      break; // Only link first occurrence
    }
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
```

### Remark Plugin for Build-Time Linking

```typescript
// lib/remark-auto-link.ts
import { visit } from 'unist-util-visit';
import type { Root, Text, Link } from 'mdast';

interface LinkRule {
  pattern: RegExp;
  url: string;
  title: string;
}

export function remarkAutoLink(rules: LinkRule[]) {
  return (tree: Root) => {
    visit(tree, 'text', (node: Text, index, parent) => {
      if (!parent || index === undefined) return;
      
      // Skip if already inside a link
      if (parent.type === 'link') return;

      for (const rule of rules) {
        const match = node.value.match(rule.pattern);
        if (match) {
          const before = node.value.slice(0, match.index);
          const after = node.value.slice(match.index! + match[0].length);
          
          const linkNode: Link = {
            type: 'link',
            url: rule.url,
            title: rule.title,
            children: [{ type: 'text', value: match[0] }]
          };

          const newNodes: (Text | Link)[] = [];
          if (before) newNodes.push({ type: 'text', value: before });
          newNodes.push(linkNode);
          if (after) newNodes.push({ type: 'text', value: after });

          parent.children.splice(index, 1, ...newNodes);
          return; // Process one link per text node
        }
      }
    });
  };
}
```

### MDX Configuration

```typescript
// next.config.mjs
import createMDX from '@next/mdx';
import { remarkAutoLink } from './lib/remark-auto-link.js';
import { getLinkRules } from './lib/internal-links/rules.js';

const linkRules = await getLinkRules();

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      [remarkAutoLink, linkRules]
    ],
  },
});

export default withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
});
```

## AI Crawler Optimization

### Critical: Server-Side Rendering

AI crawlers (GPTBot, ChatGPT-User, etc.) **cannot execute JavaScript**. All internal links must be present in the initial HTML response:

```tsx
// ✅ CORRECT: Server Component - links in initial HTML
export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  const related = await getRelatedPosts(params.slug);
  
  return (
    <article>
      <PostContent content={post.content} />
      <RelatedLinks posts={related} />
    </article>
  );
}

// ❌ WRONG: Client-side fetching - invisible to AI crawlers
'use client';
export default function BlogPost({ params }) {
  const [related, setRelated] = useState([]);
  
  useEffect(() => {
    fetch(`/api/related/${params.slug}`)
      .then(r => r.json())
      .then(setRelated);
  }, [params.slug]);
  
  return <RelatedLinks posts={related} />;
}
```

### Schema.org Markup

Add structured data to help AI systems understand link relationships:

```tsx
// components/BreadcrumbSchema.tsx
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://yourdomain.com${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### Related Links Schema

```tsx
// components/RelatedLinksSchema.tsx
export function RelatedLinksSchema({ 
  currentUrl, 
  relatedUrls 
}: { 
  currentUrl: string;
  relatedUrls: string[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'url': `https://yourdomain.com${currentUrl}`,
    'relatedLink': relatedUrls.map(url => `https://yourdomain.com${url}`),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

## Link Auditing

### Orphan Page Detection

```typescript
// scripts/audit-links.ts
import { glob } from 'glob';
import { JSDOM } from 'jsdom';

interface AuditResult {
  orphanPages: string[];
  lowLinkPages: { url: string; inboundCount: number }[];
  brokenLinks: { source: string; target: string }[];
  overlinkedPages: { url: string; linkCount: number }[];
}

async function auditInternalLinks(siteUrl: string): Promise<AuditResult> {
  const pages = await crawlSite(siteUrl);
  const linkGraph = buildLinkGraph(pages);

  // Find orphans (no inbound links except from sitemap)
  const orphanPages = pages
    .filter(page => {
      const inbound = linkGraph.inbound.get(page.url) || [];
      return inbound.length === 0 && page.url !== '/';
    })
    .map(p => p.url);

  // Find pages with few inbound links
  const lowLinkPages = pages
    .map(page => ({
      url: page.url,
      inboundCount: (linkGraph.inbound.get(page.url) || []).length
    }))
    .filter(p => p.inboundCount > 0 && p.inboundCount < 3)
    .sort((a, b) => a.inboundCount - b.inboundCount);

  // Find overlinked pages (>50 links)
  const overlinkedPages = pages
    .map(page => ({
      url: page.url,
      linkCount: (linkGraph.outbound.get(page.url) || []).length
    }))
    .filter(p => p.linkCount > 50)
    .sort((a, b) => b.linkCount - a.linkCount);

  // Find broken internal links
  const allUrls = new Set(pages.map(p => p.url));
  const brokenLinks: AuditResult['brokenLinks'] = [];
  
  for (const [source, targets] of linkGraph.outbound) {
    for (const target of targets) {
      if (!allUrls.has(target)) {
        brokenLinks.push({ source, target });
      }
    }
  }

  return { orphanPages, lowLinkPages, brokenLinks, overlinkedPages };
}

function buildLinkGraph(pages: { url: string; links: string[] }[]) {
  const inbound = new Map<string, string[]>();
  const outbound = new Map<string, string[]>();

  for (const page of pages) {
    outbound.set(page.url, page.links);
    
    for (const link of page.links) {
      if (!inbound.has(link)) {
        inbound.set(link, []);
      }
      inbound.get(link)!.push(page.url);
    }
  }

  return { inbound, outbound };
}
```

### Crawl Depth Analysis

```typescript
// scripts/analyze-depth.ts
interface DepthResult {
  url: string;
  depth: number;
  path: string[];
}

function analyzeClickDepth(
  linkGraph: Map<string, string[]>,
  startUrl: string = '/'
): DepthResult[] {
  const visited = new Map<string, DepthResult>();
  const queue: { url: string; depth: number; path: string[] }[] = [
    { url: startUrl, depth: 0, path: [startUrl] }
  ];

  while (queue.length > 0) {
    const { url, depth, path } = queue.shift()!;
    
    if (visited.has(url)) continue;
    
    visited.set(url, { url, depth, path });
    
    const links = linkGraph.get(url) || [];
    for (const link of links) {
      if (!visited.has(link)) {
        queue.push({
          url: link,
          depth: depth + 1,
          path: [...path, link]
        });
      }
    }
  }

  return Array.from(visited.values())
    .sort((a, b) => b.depth - a.depth);
}
```

## Database Schema (Optional)

For production sites, store link data in a database:

```sql
-- PostgreSQL with pgvector
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE pages (
  id SERIAL PRIMARY KEY,
  url VARCHAR(500) UNIQUE NOT NULL,
  title VARCHAR(500) NOT NULL,
  content TEXT,
  embedding vector(384),
  word_count INTEGER,
  category VARCHAR(100),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE internal_links (
  id SERIAL PRIMARY KEY,
  source_page_id INTEGER REFERENCES pages(id),
  target_page_id INTEGER REFERENCES pages(id),
  anchor_text VARCHAR(200),
  anchor_type VARCHAR(20),
  position INTEGER,  -- Character offset in content
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(source_page_id, target_page_id, anchor_text)
);

CREATE TABLE link_suggestions (
  id SERIAL PRIMARY KEY,
  source_page_id INTEGER REFERENCES pages(id),
  target_page_id INTEGER REFERENCES pages(id),
  suggested_anchor VARCHAR(200),
  similarity_score FLOAT,
  insertion_context TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  reviewed_at TIMESTAMP,
  reviewed_by VARCHAR(100)
);

-- Index for similarity search
CREATE INDEX ON pages USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 100);
```

## Best Practices Checklist

### Content Strategy
- [ ] Every cluster page links to pillar page above the fold
- [ ] Pillar page links to all cluster pages
- [ ] Related cluster pages cross-link
- [ ] No orphan pages (all pages have ≥1 inbound link)
- [ ] Important pages within 3 clicks of homepage

### Technical Implementation
- [ ] All links use Next.js `<Link>` component
- [ ] Links render server-side (not client-side fetched)
- [ ] Breadcrumb schema implemented
- [ ] Related links schema on content pages
- [ ] XML sitemap updated with all pages

### Anchor Text
- [ ] 10-20% exact match anchors
- [ ] 20-30% partial match anchors
- [ ] 30-40% natural/descriptive anchors
- [ ] Varied anchor text (no single phrase >20%)
- [ ] No generic "click here" or "read more" anchors

### Link Quality
- [ ] 40-50 internal links per page maximum
- [ ] ~1 link per 200-300 words
- [ ] Contextual links in body content prioritized
- [ ] No broken internal links
- [ ] Links are topically relevant

## Troubleshooting

### Links Not Appearing in Search Console
1. Verify links are in initial HTML (View Source)
2. Check robots.txt isn't blocking pages
3. Submit updated sitemap
4. Wait 2-4 weeks for reprocessing

### AI Crawlers Missing Content
1. Disable client-side rendering for critical content
2. Add server-side fallbacks
3. Check server logs for GPTBot/ChatGPT-User visits
4. Verify no JavaScript-only navigation

### Low Similarity Scores
1. Ensure content is long enough (>500 words)
2. Check content isn't mostly code/images
3. Try different embedding model
4. Lower threshold to 0.6 for sparse content

## Additional Resources

- See `TOPIC-CLUSTERS.md` for pillar/cluster architecture
- See `scripts/README.md` for CLI tool documentation
- See `METRICS.md` for measurement and KPIs
