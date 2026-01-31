# Internal Linking Scripts

## Setup

```bash
npm install @xenova/transformers gray-matter glob
npm install -D @types/node typescript ts-node
```

## Usage

### 1. Analyze Content

Extract pages and generate embeddings:

```bash
npx ts-node scripts/analyze-content.ts content/
```

Output: `.internal-links/pages.json`

### 2. Find Link Opportunities

Discover semantically related pages:

```bash
npx ts-node scripts/find-links.ts --threshold 0.7
```

Output: `.internal-links/opportunities.json`

### 3. Review & Implement

Review the opportunities JSON and implement links in your content.

## Thresholds

- `0.8+` = Very strong match, definitely should link
- `0.7-0.8` = Good match, review context
- `0.6-0.7` = Weak match, use judgment
- `<0.6` = Likely not relevant

## Output Format

```json
{
  "sourceUrl": "/blog/seo-guide",
  "targetUrl": "/blog/keyword-research",
  "similarity": 0.823,
  "suggestedAnchors": ["keyword research", "Keyword Research Guide"]
}
```
