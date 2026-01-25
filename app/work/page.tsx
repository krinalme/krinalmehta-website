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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--space-lg)', padding: 'var(--space-lg) 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)', marginBottom: 'var(--space-xs)' }}>2024 – Present</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 400, marginBottom: '0.25rem' }}>Director of SEO</h2>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)', marginBottom: 'var(--space-sm)' }}>Newfold Digital</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem', background: 'var(--color-paper-warm)', borderRadius: '4px', color: 'var(--color-ink-muted)' }}>Bluehost</span>
                  <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem', background: 'var(--color-paper-warm)', borderRadius: '4px', color: 'var(--color-ink-muted)' }}>HostGator</span>
                  <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem', background: 'var(--color-paper-warm)', borderRadius: '4px', color: 'var(--color-ink-muted)' }}>Yoast</span>
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, marginBottom: 'var(--space-sm)' }}>The challenge</h3>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)', lineHeight: 1.7, marginBottom: 'var(--space-sm)' }}>Lead organic growth strategy across a portfolio of multi-billion dollar web hosting and SaaS brands, each with distinct audiences and competitive landscapes.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-sm)', margin: 'var(--space-md) 0' }}>
                  <div style={{ padding: 'var(--space-sm)', background: 'var(--color-paper-warm)', borderRadius: '6px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', lineHeight: 1, marginBottom: '0.25rem' }}>29</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>Team members</div>
                  </div>
                  <Link href="/case-studies/newfold-search-infrastructure" style={{ padding: 'var(--space-sm)', background: 'var(--color-paper-warm)', borderRadius: '6px', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', lineHeight: 1, marginBottom: '0.25rem' }}>20X</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>Query visibility</div>
                  </Link>
                  <Link href="/case-studies/newfold-search-infrastructure" style={{ padding: 'var(--space-sm)', background: 'var(--color-paper-warm)', borderRadius: '6px', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', lineHeight: 1, marginBottom: '0.25rem' }}>4X</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>Content velocity</div>
                  </Link>
                </div>
                
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, marginBottom: 'var(--space-sm)', marginTop: 'var(--space-md)' }}>What I built</h3>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)', lineHeight: 1.7, marginBottom: 'var(--space-sm)' }}><strong style={{ color: 'var(--color-ink)' }}>Search data infrastructure.</strong> Merged GSC BigQuery and Google Ads API feeds to expand query visibility from 200K to 4M queries. Trained a deep learning model on 50K manually classified queries to achieve 90-category intent classification. Automated 24-hour refresh cycles and generated 50K semantic internal links.</p>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)', lineHeight: 1.7, marginBottom: 'var(--space-sm)' }}><strong style={{ color: 'var(--color-ink)' }}>AI-powered content operations.</strong> Architected workflows leveraging the 4M-query dataset for intent clustering, competitive analysis, and semantic optimization. Deployed custom GPT bots for brief generation, QA, and visual assets. Reduced production time 70% while increasing output to 150 pieces monthly.</p>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)', lineHeight: 1.7 }}><strong style={{ color: 'var(--color-ink)' }}>AEO strategy.</strong> Pioneered the company's Answer Engine Optimization approach, integrating tools like WordLift and Kalicube Pro to enhance semantic optimization and build competitive advantage in AI-driven search.</p>
              </div>
            </div>

            {/* FreshBooks */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--space-lg)', padding: 'var(--space-lg) 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)', marginBottom: 'var(--space-xs)' }}>2020 – 2024</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 400, marginBottom: '0.25rem' }}>Global SEO Lead</h2>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)', marginBottom: 'var(--space-sm)' }}>FreshBooks</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem', background: 'var(--color-paper-warm)', borderRadius: '4px', color: 'var(--color-ink-muted)' }}>B2B SaaS</span>
                  <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem', background: 'var(--color-paper-warm)', borderRadius: '4px', color: 'var(--color-ink-muted)' }}>Fintech</span>
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, marginBottom: 'var(--space-sm)' }}>The challenge</h3>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)', lineHeight: 1.7, marginBottom: 'var(--space-sm)' }}>Transform organic search from a supporting channel into the primary revenue driver for a B2B SaaS accounting platform operating in 160+ countries.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-sm)', margin: 'var(--space-md) 0' }}>
                  <Link href="/case-studies/freshbooks-organic-growth" style={{ padding: 'var(--space-sm)', background: 'var(--color-paper-warm)', borderRadius: '6px', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', lineHeight: 1, marginBottom: '0.25rem' }}>$30M</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>ARR from organic</div>
                  </Link>
                  <Link href="/case-studies/freshbooks-organic-growth" style={{ padding: 'var(--space-sm)', background: 'var(--color-paper-warm)', borderRadius: '6px', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', lineHeight: 1, marginBottom: '0.25rem' }}>400%</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>Traffic growth</div>
                  </Link>
                  <div style={{ padding: 'var(--space-sm)', background: 'var(--color-paper-warm)', borderRadius: '6px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', lineHeight: 1, marginBottom: '0.25rem' }}>1→8</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>Team growth</div>
                  </div>
                </div>
                
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, marginBottom: 'var(--space-sm)', marginTop: 'var(--space-md)' }}>What I built</h3>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)', lineHeight: 1.7, marginBottom: 'var(--space-sm)' }}><strong style={{ color: 'var(--color-ink)' }}>Revenue engine.</strong> Scaled organic search from #3 to #1 revenue-generating channel, contributing $30M in new ARR in 2021. Grew organic traffic 400% and increased new user sign-ups from organic by 50% through a comprehensive product-led content strategy.</p>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)', lineHeight: 1.7, marginBottom: 'var(--space-sm)' }}><strong style={{ color: 'var(--color-ink)' }}>Marketplace platform.</strong> Conceived and launched the FreshBooks Accountants Directory, a multi-sided marketplace for local searches like "accountants in NYC." Pitched to C-suite, secured budget, hired agency, and built the product from concept to launch. Created a three-way value exchange driving millions in channel investment.</p>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)', lineHeight: 1.7, marginBottom: 'var(--space-sm)' }}><strong style={{ color: 'var(--color-ink)' }}>International expansion.</strong> Implemented geo-targeted Smart CTA system serving local currency pricing across 7 international markets, delivering 30% conversion rate improvement and supporting the CEO's international expansion mandate.</p>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)', lineHeight: 1.7 }}><strong style={{ color: 'var(--color-ink)' }}>Feature-based content strategy.</strong> Reimagined competitive strategy by analyzing FreshBooks' 14 features individually rather than competing solely on "accounting software." Identified unique competitors per feature, conducted content gap analysis yielding 10K topics, and executed publication of 1,200 pieces in 6 months.</p>
              </div>
            </div>

            {/* Earlier roles - condensed */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--space-lg)', padding: 'var(--space-lg) 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)', marginBottom: 'var(--space-xs)' }}>2019 – 2021</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 400, marginBottom: '0.25rem' }}>Account Manager, B2B SEO & PPC</h2>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)' }}>Search Engine People</p>
              </div>
              <div>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)', lineHeight: 1.7 }}>Managed growth strategy and execution for enterprise B2B clients at one of Canada's largest digital marketing agencies. Led strategic planning for key accounts including G Adventures, PwC, OpenText, ProntoForms, and York University.</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--space-lg)', padding: 'var(--space-lg) 0' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)', marginBottom: 'var(--space-xs)' }}>2017 – 2019</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 400, marginBottom: '0.25rem' }}>Founder & Chief Growth Officer</h2>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)' }}>Growth Dot Digital</p>
              </div>
              <div>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)', lineHeight: 1.7, marginBottom: 'var(--space-sm)' }}>Founded and scaled a digital growth consultancy, achieving 500% revenue growth in two years. Consulted for startups and growth-stage companies across North America and India.</p>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-light)', lineHeight: 1.7 }}>Notable engagement: Scaled organic traffic 20%+ for Allevents.in (2.5M URL event marketplace platform) in 12 days, meeting an angel investor's growth condition for continued funding.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section style={{ padding: 'var(--space-xl) var(--space-md)', background: 'var(--color-ink)', color: 'var(--color-paper)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: 'var(--space-sm)' }}>Featured Case Study</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, marginBottom: 'var(--space-md)', maxWidth: '700px' }}>How FreshBooks safeguarded $1M+ in traffic value with proactive SEO monitoring</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-lg)' }}>
              <div>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85, marginBottom: 'var(--space-md)' }}>When I joined FreshBooks, keeping tabs on a site with thousands of pages across multiple stakeholders was nearly impossible. I implemented Conductor Website Monitoring to create real-time visibility into site changes and SEO issues.</p>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85, marginBottom: 'var(--space-md)' }}>The system caught critical issues before they impacted rankings: accidentally no-indexed pages, missing H1 tags, deleted content, broken analytics tags. Beyond firefighting, we used it to establish "The Web Council," a cross-functional committee enforcing SEO governance across the organization.</p>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85, marginBottom: 'var(--space-md)' }}>The result? Traffic that was NOT lost. Issues caught in hours instead of weeks. A culture of SEO awareness across engineering, content, and product teams.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link href="/case-studies/freshbooks-seo-governance" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-paper)', fontSize: '0.95rem', opacity: 0.9 }}>Read the detailed case study →</Link>
                  <a href="https://www.conductor.com/customer-stories/freshbooks/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-paper)', fontSize: '0.95rem', opacity: 0.7 }}>View on Conductor →</a>
                </div>
              </div>
              <div style={{ padding: 'var(--space-md)', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderLeft: '3px solid rgba(255,255,255,0.3)', alignSelf: 'start' }}>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, fontStyle: 'italic', opacity: 0.9, marginBottom: 'var(--space-sm)' }}>"The value that we've received in the first few months pays for the platform several times over. Not to mention the ability to set up entirely new internal processes, workflows, reporting, and improved communication between teams."</p>
                <cite style={{ fontSize: '0.85rem', fontStyle: 'normal', opacity: 0.6 }}>— Krinal Mehta, quoted in Conductor case study</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section style={{ padding: 'var(--space-xl) var(--space-md)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, marginBottom: 'var(--space-md)' }}>Brands I've worked with</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-light)', marginBottom: 'var(--space-lg)', maxWidth: '600px' }}>Across in-house roles and agency/consulting engagements, I've helped scale growth for companies ranging from startups to global enterprises.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
              {['Bluehost', 'HostGator', 'Yoast', 'FreshBooks', 'PwC', 'OpenText', 'G Adventures', 'York University', 'ProntoForms', 'Allevents.in'].map((brand) => (
                <span key={brand} style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--color-ink-muted)', padding: 'var(--space-sm) var(--space-md)', background: 'var(--color-paper-warm)', borderRadius: '6px' }}>{brand}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
