export interface CaseStudy {
  slug: string
  company: string
  title: string
  description: string
  timeframe: string
  role: string
  metrics: {
    value: string
    label: string
  }[]
  tags: string[]
  challenge: string
  approach: string[]
  results: string[]
  quote?: {
    text: string
    author: string
    role: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'freshbooks-organic-growth',
    company: 'FreshBooks',
    title: 'Scaling organic from #3 to #1 revenue channel',
    description: 'How product-led content strategy and international expansion drove $30M in ARR from organic search.',
    timeframe: '2020 - 2024',
    role: 'Global SEO Lead',
    metrics: [
      { value: '$30M', label: 'ARR from Organic' },
      { value: '400%', label: 'Traffic Growth' },
      { value: '7', label: 'Markets Launched' },
    ],
    tags: ['B2B SaaS', 'Fintech', 'Content Strategy', 'International'],
    challenge: 'When I joined FreshBooks, organic search was the third-largest revenue channel, trailing behind paid acquisition and partnerships. The content strategy was product-focused but lacked the depth needed to capture high-intent commercial queries. International markets represented untapped potential with no localized SEO infrastructure.',
    approach: [
      'Developed a product-led content framework that aligned blog content with user jobs-to-be-done, creating natural pathways from educational content to product trials.',
      'Built a geo-targeting infrastructure supporting 7 international markets with hreflang implementation, local keyword research, and market-specific content optimization.',
      'Established cross-functional workflows between SEO, Product Marketing, and Engineering to ship technical improvements at scale.',
      'Implemented a data-driven prioritization model using revenue attribution to focus on highest-impact opportunities.',
    ],
    results: [
      'Grew organic revenue from #3 to #1 channel, generating $30M ARR',
      'Increased organic traffic by 400% over 3 years',
      'Launched and optimized presence in 7 international markets with 30% conversion lift',
      'Built content operations producing 50+ optimized pages per month',
    ],
    quote: {
      text: 'Krinal was our go-to subject matter expert for all things SEO. His deep knowledge and strategic thinking helped scale our brand into new markets, delivering significant results.',
      author: 'Jeff McMahon',
      role: 'SaaS Marketing Leader, Docebo',
    },
  },
  {
    slug: 'newfold-search-infrastructure',
    company: 'Newfold Digital',
    title: 'Building search data infrastructure for 20X visibility',
    description: 'How AI-powered operations and data engineering expanded query visibility from 200K to 4M tracked queries.',
    timeframe: '2024 - Present',
    role: 'Director of SEO',
    metrics: [
      { value: '20X', label: 'Query Visibility' },
      { value: '70%', label: 'Time Reduction' },
      { value: '29', label: 'Team Members' },
    ],
    tags: ['Enterprise SEO', 'AI Operations', 'Data Engineering', 'Team Leadership'],
    challenge: 'Newfold Digital operates multiple billion-dollar web hosting brands including Bluehost, HostGator, and Yoast. The SEO team lacked unified data infrastructure, limiting visibility to only 200K queries across all properties. Content production was manual and slow, unable to scale with business needs.',
    approach: [
      'Architected a centralized search data warehouse consolidating data from all brand properties, enabling cross-brand insights and opportunity identification.',
      'Implemented AI-powered content operations using LLMs for research, brief generation, and quality assurance, reducing production time by 70%.',
      'Built a 29-person global team spanning SEO strategists, data analysts, content marketers, and developers.',
      'Created automated monitoring and alerting systems for real-time visibility into search performance.',
    ],
    results: [
      'Expanded query visibility from 200K to 4M tracked queries (20X increase)',
      'Reduced content production time by 70% through AI-powered workflows',
      'Unified SEO strategy across Bluehost, HostGator, and Yoast brands',
      'Established data-driven prioritization driving measurable traffic and revenue growth',
    ],
  },
  {
    slug: 'freshbooks-seo-governance',
    company: 'FreshBooks',
    title: 'Safeguarding $1M+ in traffic value with SEO governance',
    description: 'How cross-functional collaboration and automated monitoring protected critical organic revenue.',
    timeframe: '2021 - 2024',
    role: 'Global SEO Lead',
    metrics: [
      { value: '$1M+', label: 'Traffic Protected' },
      { value: '24hrs', label: 'Issue Detection' },
      { value: '15+', label: 'Teams Aligned' },
    ],
    tags: ['Technical SEO', 'Governance', 'Cross-functional', 'Monitoring'],
    challenge: 'As FreshBooks scaled its engineering velocity, SEO-impacting changes were shipping without review. Critical pages were being modified, redirected, or removed without SEO input, risking millions in organic traffic value. There was no systematic way to detect issues before they impacted rankings.',
    approach: [
      'Designed and implemented an automated website monitoring system tracking critical URLs, meta data, and technical elements in real-time.',
      'Established SEO governance processes integrated into the product development lifecycle, with clear escalation paths for high-risk changes.',
      'Created an SEO education program for engineering and product teams, building shared understanding of SEO impact.',
      'Built dashboards providing visibility into SEO health metrics for leadership and stakeholders.',
    ],
    results: [
      'Protected $1M+ in annual organic traffic value through proactive monitoring',
      'Reduced issue detection time from weeks to under 24 hours',
      'Aligned 15+ cross-functional teams on SEO best practices and review processes',
      'Established SEO as a key stakeholder in product development decisions',
    ],
    quote: {
      text: 'Krinal\'s understanding of search intent, recognizing it early through signs and signals, allowed him to do SEO with a strong strategic approach, consistently driving results.',
      author: 'Reuben Alex',
      role: 'SEO/GEO Strategies',
    },
  },
  {
    slug: 'mena-international-architecture',
    company: 'National Electronics Retailer (MENA)',
    title: 'Scaling Revenue 900% by Solving International Architecture',
    description: 'How architectural unification and executive alignment fixed a "triple-split" index problem to unlock 225K pages and drive 900% revenue growth.',
    timeframe: '2019',
    role: 'Growth Consultant',
    metrics: [
      { value: '900%', label: 'Revenue Growth' },
      { value: '225K', label: 'Pages Indexed' },
      { value: '5.8X', label: 'Index Expansion' },
    ],
    tags: ['International SEO', 'Technical Architecture', 'E-commerce', 'MENA'],
    challenge: 'A leading electronics retailer in the MENA region had spent 12 months with a previous agency trying to solve a critical visibility crisis. Despite having massive inventory, their indexation was capped at ~39,000 URLs. The problem was a fractured architecture that split their authority into three competing buckets: the English root domain (~13k indexed), an English duplicate subdirectory /en-en/ (~13k indexed), and the Arabic version /ar/ (~13k indexed). Googlebot was confused—treating the /en-en/ subdirectory as a separate site, cannibalizing the root domain, while the Arabic version fought for crawl budget against two English duplicates.',
    approach: [
      'Identified that the /en-en/ subdirectory was a legacy artifact serving no user purpose but diluting 50% of English signals. Removed it entirely and implemented 301 redirects for all 13,000 URLs to their root counterparts.',
      'Implemented granular Language + Category sitemaps (e.g., sitemap-en-laptops.xml, sitemap-ar-laptops.xml) to force targeted re-crawling and pinpoint specific indexation gaps—revealing that while English pages recovered, specific Arabic categories remained blocked by legacy render issues.',
      'Bypassed marketing management and pitched directly to the CTO and CEO, reframing the technical problem as "Inventory Efficiency": "We are paying to host 100% of our inventory, but Google is only selling 30% of it. This fix unlocks the other 70%."',
      'Secured immediate engineering resource allocation by demonstrating the business case in executive-friendly terms, treating the fix as a migration requiring dedicated development capacity.',
    ],
    results: [
      'Expanded indexed pages from ~39,000 (fractured) to 225,000 (unified)—a 5.8X increase',
      'Achieved 900% revenue growth within 6 months of implementation',
      'Transformed crawl efficiency from low (duplicate loops) to high (clean signals)',
      'Solved a complex international SEO conflict that a previous agency couldn\'t fix in 12 months',
    ],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug)
}
