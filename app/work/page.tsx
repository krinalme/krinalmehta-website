import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Building growth engines at Newfold Digital (Bluehost, HostGator, Yoast), FreshBooks, and more. Case studies and results from 17 years of scaling organic and paid acquisition.',
}

export default function Work() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* Page Header */}
        <header className="page-header">
          <h1 className="page-title">Work</h1>
          <p className="page-intro"><Link href="/about" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.3)', textUnderlineOffset: '3px' }}>17 years</Link> building growth systems at scale. From hands-on execution to leading global teams across organic, paid, and partnerships.</p>
        </header>

        {/* Roles */}
        <section style={{ padding: 'var(--space-lg) var(--space-md)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>

            {/* Newfold Digital */}
            <div className="work-role">
              <div className="work-role-sidebar">
                <p className="work-role-date">2024 – Present</p>
                <h2 className="work-role-title">Director of SEO</h2>
                <p className="work-role-company">Newfold Digital</p>
                <div className="work-role-tags">
                  <span className="work-role-tag">Bluehost</span>
                  <span className="work-role-tag">HostGator</span>
                  <span className="work-role-tag">Yoast</span>
                </div>
              </div>
              <div className="work-role-content">
                <h3>The challenge</h3>
                <p>Lead organic growth strategy across a portfolio of multi-billion dollar web hosting and SaaS brands, each with distinct audiences and competitive landscapes.</p>

                <div className="work-metrics">
                  <div className="work-metric">
                    <div className="work-metric-value">29</div>
                    <div className="work-metric-label">Team members</div>
                  </div>
                  <Link href="/case-studies/newfold-search-infrastructure" className="work-metric">
                    <div className="work-metric-value">20X</div>
                    <div className="work-metric-label">Query visibility</div>
                  </Link>
                  <Link href="/case-studies/newfold-search-infrastructure" className="work-metric">
                    <div className="work-metric-value">4X</div>
                    <div className="work-metric-label">Content velocity</div>
                  </Link>
                </div>

                <h3>What I built</h3>
                <p><strong>Search data infrastructure.</strong> Merged GSC BigQuery and Google Ads API feeds to expand query visibility from 200K to 4M queries. Trained a deep learning model on 50K manually classified queries to achieve 90-category intent classification. Automated 24-hour refresh cycles and generated 50K semantic internal links.</p>
                <p><strong>AI-powered content operations.</strong> Architected workflows leveraging the 4M-query dataset for intent clustering, competitive analysis, and semantic optimization. Deployed custom GPT bots for brief generation, QA, and visual assets. Reduced production time 70% while increasing output to 150 pieces monthly.</p>
                <p><strong>AEO strategy.</strong> Pioneered the company's Answer Engine Optimization approach, integrating tools like WordLift and Kalicube Pro to enhance semantic optimization and build competitive advantage in AI-driven search.</p>
              </div>
            </div>

            {/* FreshBooks */}
            <div className="work-role">
              <div className="work-role-sidebar">
                <p className="work-role-date">2020 – 2024</p>
                <h2 className="work-role-title">Global SEO Lead</h2>
                <p className="work-role-company">FreshBooks</p>
                <div className="work-role-tags">
                  <span className="work-role-tag">B2B SaaS</span>
                  <span className="work-role-tag">Fintech</span>
                </div>
              </div>
              <div className="work-role-content">
                <h3>The challenge</h3>
                <p>Transform organic search from a supporting channel into the primary revenue driver for a B2B SaaS accounting platform operating in 160+ countries.</p>

                <div className="work-metrics">
                  <Link href="/case-studies/freshbooks-organic-growth" className="work-metric">
                    <div className="work-metric-value">$30M</div>
                    <div className="work-metric-label">ARR from organic</div>
                  </Link>
                  <Link href="/case-studies/freshbooks-organic-growth" className="work-metric">
                    <div className="work-metric-value">400%</div>
                    <div className="work-metric-label">Traffic growth</div>
                  </Link>
                  <div className="work-metric">
                    <div className="work-metric-value">1→8</div>
                    <div className="work-metric-label">Team growth</div>
                  </div>
                </div>

                <h3>What I built</h3>
                <p><strong>Revenue engine.</strong> Scaled organic search from #3 to #1 revenue-generating channel, contributing $30M in new ARR in 2021. Grew organic traffic 400% and increased new user sign-ups from organic by 50% through a comprehensive product-led content strategy.</p>
                <p><strong>Marketplace platform.</strong> Conceived and launched the FreshBooks Accountants Directory, a multi-sided marketplace for local searches like "accountants in NYC." Pitched to C-suite, secured budget, hired agency, and built the product from concept to launch. Created a three-way value exchange driving millions in channel investment.</p>
                <p><strong>International expansion.</strong> Implemented geo-targeted Smart CTA system serving local currency pricing across 7 international markets, delivering 30% conversion rate improvement and supporting the CEO's international expansion mandate.</p>
                <p><strong>Feature-based content strategy.</strong> Reimagined competitive strategy by analyzing FreshBooks' 14 features individually rather than competing solely on "accounting software." Identified unique competitors per feature, conducted content gap analysis yielding 10K topics, and executed publication of 1,200 pieces in 6 months.</p>
              </div>
            </div>

            {/* Earlier roles - condensed */}
            <div className="work-role">
              <div className="work-role-sidebar">
                <p className="work-role-date">2019 – 2021</p>
                <h2 className="work-role-title">Account Manager, B2B SEO & PPC</h2>
                <p className="work-role-company">Search Engine People</p>
              </div>
              <div className="work-role-content">
                <p>Managed growth strategy and execution for enterprise B2B clients at one of Canada's largest digital marketing agencies. Led strategic planning for key accounts including G Adventures, PwC, OpenText, ProntoForms, and York University.</p>
              </div>
            </div>

            <div className="work-role" style={{ borderBottom: 'none' }}>
              <div className="work-role-sidebar">
                <p className="work-role-date">2017 – 2019</p>
                <h2 className="work-role-title">Founder & Chief Growth Officer</h2>
                <p className="work-role-company">Growth Dot Digital</p>
              </div>
              <div className="work-role-content">
                <p>Founded and scaled a digital growth consultancy, achieving 500% revenue growth in two years. Consulted for startups and growth-stage companies across North America and India.</p>
                <p>Notable engagement: Scaled organic traffic 20%+ for Allevents.in (2.5M URL event marketplace platform) in 12 days, meeting an angel investor's growth condition for continued funding.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="work-case-study">
          <div className="work-case-study-inner">
            <p className="work-case-study-eyebrow">Featured Case Study</p>
            <h2 className="work-case-study-title">How FreshBooks safeguarded $1M+ in traffic value with proactive SEO monitoring</h2>
            <div className="work-case-study-grid">
              <div className="work-case-study-content">
                <p>When I joined FreshBooks, keeping tabs on a site with thousands of pages across multiple stakeholders was nearly impossible. I implemented Conductor Website Monitoring to create real-time visibility into site changes and SEO issues.</p>
                <p>The system caught critical issues before they impacted rankings: accidentally no-indexed pages, missing H1 tags, deleted content, broken analytics tags. Beyond firefighting, we used it to establish "The Web Council," a cross-functional committee enforcing SEO governance across the organization.</p>
                <p>The result? Traffic that was NOT lost. Issues caught in hours instead of weeks. A culture of SEO awareness across engineering, content, and product teams.</p>
                <div className="work-case-study-links">
                  <Link href="/case-studies/freshbooks-seo-governance">Read the detailed case study →</Link>
                  <a href="https://www.conductor.com/customer-stories/freshbooks/" target="_blank" rel="noopener noreferrer">View on Conductor →</a>
                </div>
              </div>
              <div className="work-case-study-quote">
                <p>"The value that we've received in the first few months pays for the platform several times over. Not to mention the ability to set up entirely new internal processes, workflows, reporting, and improved communication between teams."</p>
                <cite>— Krinal Mehta, quoted in Conductor case study</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="work-clients">
          <div className="work-clients-inner">
            <h2 className="work-clients-title">Brands I've worked with</h2>
            <p className="work-clients-intro">Across in-house roles and agency/consulting engagements, I've helped scale growth for companies ranging from startups to global enterprises.</p>
            <div className="work-clients-grid">
              {['Bluehost', 'HostGator', 'Yoast', 'FreshBooks', 'PwC', 'OpenText', 'G Adventures', 'York University', 'ProntoForms', 'Allevents.in'].map((brand) => (
                <span key={brand} className="work-client">{brand}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
