import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About',
  description: '17 years building growth engines at scale. From hands-on SEO specialist to leading global teams across organic, paid, and partnerships at multi-billion dollar companies.',
  openGraph: {
    type: 'profile',
    firstName: 'Krinal',
    lastName: 'Mehta',
  } as any,
  alternates: {
    canonical: 'https://krinalmehta.com/about/',
  },
}

const timeline = [
  { date: '2024 – Present', title: 'Director of SEO', company: 'Newfold Digital', companyUrl: 'https://newfold.com', companySuffix: <> (<a href="https://www.bluehost.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.2)', textUnderlineOffset: '2px' }}>Bluehost</a>, <a href="https://www.hostgator.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.2)', textUnderlineOffset: '2px' }}>HostGator</a>, <a href="https://yoast.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.2)', textUnderlineOffset: '2px' }}>Yoast</a>)</>, description: 'Leading a global team of 29 across SEO, data analytics, content marketing, and development. Built search data infrastructure expanding query visibility 20X. Architected AI-powered content operations increasing velocity 4X.' },
  { date: '2020 – 2024', title: 'Global SEO Lead', company: 'FreshBooks', companyUrl: 'https://www.freshbooks.com', description: 'Grew team from 1 to 8. Scaled organic from #3 to #1 revenue channel, contributing $30M ARR in 2021. Built the Accountants Directory marketplace from concept to launch. Expanded into 7 international markets with 30% conversion lift.' },
  { date: '2019 – 2021', title: 'Account Manager, B2B SEO & PPC', company: 'Search Engine People', companyUrl: 'https://www.searchenginepeople.com', description: 'Managed growth for enterprise clients including G Adventures, PwC, OpenText, ProntoForms, and York University at one of Canada\'s largest digital marketing agencies.' },
  { date: '2017 – 2019', title: 'Founder & Chief Growth Officer', company: 'Growth Dot Digital', description: 'Founded and scaled a digital growth consultancy, achieving 500% revenue growth in two years. Consulted for startups and growth-stage companies across North America and India.' },
  { date: '2017', title: 'Co-Founder', company: 'Squid Sense', description: <>Co-founded an AI-native startup generating automated insights from Google Analytics data. Secured seed funding from the <a href="https://gujaratindia.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.2)', textUnderlineOffset: '2px' }}>Government of Gujarat</a> and incubated at <a href="https://www.glsleaf.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.2)', textUnderlineOffset: '2px' }}>GLS Leaf</a> Ahmedabad. Google launched the same concept six months later as &ldquo;Insights&rdquo; inside Google Analytics.</> },
  { date: '2011 – 2016', title: 'Digital Marketing Manager', company: 'Search Results Media', companyUrl: 'https://www.searchresultsmedia.com/', description: 'Led a 12-member team managing 300+ clients across US, Canada, and UK. Built a custom B2B distribution CRM for a global refrigerant company from conception to launch.' },
  { date: '2008 – 2011', title: 'Early career', company: 'Various roles', description: 'Started in SEO as a specialist, learning the craft through hands-on execution. Progressed through roles in business development and software division management, building a foundation in technical, client, and business operations.' },
]

export default function About() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* Page Header */}
        <header className="page-header with-image">
          <div className="page-header-content">
            <h1 className="page-title">I've spent 17 years <em>obsessed</em> with one question</h1>
            <p className="page-intro">How do you turn organic search into a company's most powerful growth engine?</p>
          </div>
          <div className="page-header-image">
            <Image
              src="/images/krinal-headshot.jpg"
              alt="Krinal Mehta"
              width={400}
              height={500}
              priority
            />
          </div>
        </header>

        {/* Story */}
        <section className="content-section prose" style={{ padding: 'var(--space-lg) var(--space-md)', maxWidth: 'var(--max-width-prose)', margin: '0 auto' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-light)', lineHeight: 1.8, marginBottom: 'var(--space-md)' }}>Today, the answer lies at the intersection of data science, AI, and a deep understanding of the buyer journey. But I didn't start there.</p>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-light)', lineHeight: 1.8, marginBottom: 'var(--space-md)' }}>I started in 2008 in <a href="https://en.wikipedia.org/wiki/Ahmedabad" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-ink)', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.3)', textUnderlineOffset: '3px' }}>Ahmedabad, India</a>. Hands on keyboards, learning SEO by doing SEO. Running campaigns, managing clients, figuring out what actually moved the needle versus what just looked good in reports.</p>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-light)', lineHeight: 1.8, marginBottom: 'var(--space-md)' }}>But even before that, I was deep in computer science. I studied at the graduate level: operating systems, assembly language, system architecture, database design. That technical foundation shapes everything about how I approach growth today. I can speak to engineering teams in their language, understand how systems actually work under the hood, and now, how AI and ML systems process and surface information. Most growth leaders can't do that.</p>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-light)', lineHeight: 1.8, marginBottom: 'var(--space-md)' }}>Over the years, I moved from execution to strategy, from individual contributor to team leader, from agency to in-house. Each step taught me something different. Agencies taught me speed and client management. In-house taught me depth, patience, and how to align growth with business strategy.</p>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-light)', lineHeight: 1.8, marginBottom: 'var(--space-md)' }}><strong style={{ color: 'var(--color-ink)', fontWeight: 500 }}>The pivotal shift came when I realized that SEO wasn't just a marketing channel. It was a growth system.</strong> One that, when built right, compounds over time and becomes a company's most defensible competitive advantage.</p>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-light)', lineHeight: 1.8, marginBottom: 'var(--space-md)' }}>That insight changed how I approach the work. I stopped thinking like an SEO and started thinking like a growth operator. I learned paid media so I could understand the full acquisition picture. I learned data infrastructure so I could build systems that scale. I learned how to communicate with boards and C-suites so I could secure the resources to do ambitious work.</p>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-light)', lineHeight: 1.8, marginBottom: 'var(--space-md)' }}>I've also lived the founder life. In 2017, I co-founded Squid Sense, an AI-native startup that generated automated insights from Google Analytics data. We secured seed funding from the <a href="https://gujaratindia.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-ink)', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.3)', textUnderlineOffset: '3px' }}>Government of Gujarat</a> and had angel investment approved. Within six months, Google launched the same concept for free, literally calling it "Insights" inside Google Analytics. We were ahead of the market. That experience taught me what it actually feels like to build something from zero, and it means I can relate to founders in a way that most operators can't.</p>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-light)', lineHeight: 1.8 }}>Today, I <Link href="/work" style={{ color: 'var(--color-ink)', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.3)', textUnderlineOffset: '3px' }}>lead growth across Bluehost, HostGator, and Yoast at Newfold Digital</Link>, a portfolio of brands that powers millions of websites worldwide. Before that, I spent four years at FreshBooks scaling organic from the #3 revenue channel to #1, <Link href="/case-studies/freshbooks-organic-growth" style={{ color: 'var(--color-ink)', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.3)', textUnderlineOffset: '3px' }}>contributing $30M in ARR</Link>.</p>
        </section>

        {/* Philosophy */}
        <section style={{ padding: 'var(--space-xl) var(--space-md)', background: 'var(--color-paper-warm)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: 'var(--space-lg)' }}>How I think about growth</h2>
            <div className="about-philosophy-grid">
              <div style={{ padding: 'var(--space-md)', background: 'var(--color-paper)', borderRadius: '8px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 400, marginBottom: 'var(--space-sm)' }}>Build data infrastructure first</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-light)', lineHeight: 1.6 }}>You can't optimize what you can't measure. Before tactics, I build systems that give teams visibility into what's actually happening and the ability to act on it.</p>
              </div>
              <div style={{ padding: 'var(--space-md)', background: 'var(--color-paper)', borderRadius: '8px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 400, marginBottom: 'var(--space-sm)' }}>Architect for leverage</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-light)', lineHeight: 1.6 }}>The best growth work creates leverage. AI-powered workflows, automated systems, and scalable processes that make teams faster and smarter over time.</p>
              </div>
              <div style={{ padding: 'var(--space-md)', background: 'var(--color-paper)', borderRadius: '8px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 400, marginBottom: 'var(--space-sm)' }}>Think in systems, not channels</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-light)', lineHeight: 1.6 }}>Organic, paid, partnerships. They're not separate. They're interconnected parts of an acquisition system. The companies that win understand how they work together.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: 'var(--space-xl) var(--space-md)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: 'var(--space-lg)' }}>The path here</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {timeline.map((item, index) => (
                <div key={index} className="about-timeline-item" style={{ borderBottom: index < timeline.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                  <div className="about-timeline-date">{item.date}</div>
                  <div className="about-timeline-content">
                    <h3>{item.title}</h3>
                    <p className="company">
                      {item.companyUrl ? (
                        <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.2)', textUnderlineOffset: '2px' }}>{item.company}</a>
                      ) : item.company}
                      {item.companySuffix}
                    </p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beyond Work */}
        <section style={{ padding: 'var(--space-xl) var(--space-md)', background: 'var(--color-ink)', color: 'var(--color-paper)' }}>
          <div style={{ maxWidth: 'var(--max-width-prose)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, marginBottom: 'var(--space-md)', opacity: 0.9 }}>Beyond work</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.8, marginBottom: 'var(--space-md)' }}>I live in the Waterloo region of Ontario with my wife Priya, our son Yug, and my mother. Multi-generational households are the norm where I come from, and I wouldn't have it any other way. When I'm not thinking about growth systems, I'm usually exploring AI tools, reading about product strategy, or trying to find time for music. I've been wanting to get back into vocal training.</p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.8 }}>I'm also a perpetual teacher. I've been a Lead Instructor at <a href="https://brainstation.io" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-paper)', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.4)', textUnderlineOffset: '3px' }}>BrainStation</a>, a trainer for <a href="https://iabcanada.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-paper)', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.4)', textUnderlineOffset: '3px' }}>IAB Canada</a>, and I regularly <Link href="/speaking" style={{ color: 'var(--color-paper)', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.4)', textUnderlineOffset: '3px' }}>speak at industry events and webinars</Link>. I believe the best way to learn is to teach, and the best way to stay sharp is to share what you know.</p>
          </div>
        </section>

        {/* Connect */}
        <section style={{ padding: 'var(--space-xl) var(--space-md)', textAlign: 'center' }}>
          <div style={{ maxWidth: 'var(--max-width-prose)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, marginBottom: 'var(--space-sm)' }}>Let's connect</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-ink-light)', marginBottom: 'var(--space-md)' }}>I'm always interested in connecting with fellow growth leaders, founders building interesting companies, and anyone thinking deeply about the future of search and AI. Check out my <Link href="/case-studies" style={{ color: 'var(--color-ink)', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.3)', textUnderlineOffset: '3px' }}>case studies</Link> to see my approach in action.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/krinal" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem', color: 'var(--color-ink)', padding: '0.75rem 1.5rem', border: '1px solid rgba(0,0,0,0.15)', borderRadius: '6px', transition: 'all 0.2s ease' }}>LinkedIn</a>
              <a href="https://twitter.com/krinal" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem', color: 'var(--color-ink)', padding: '0.75rem 1.5rem', border: '1px solid rgba(0,0,0,0.15)', borderRadius: '6px', transition: 'all 0.2s ease' }}>Twitter</a>
              <Link href="/contact" style={{ fontSize: '1rem', color: 'var(--color-ink)', padding: '0.75rem 1.5rem', border: '1px solid rgba(0,0,0,0.15)', borderRadius: '6px', transition: 'all 0.2s ease' }}>Get in touch</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://krinalmehta.com/" },
                { "@type": "ListItem", "position": 2, "name": "About" }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Krinal Mehta's approach to building data infrastructure for growth?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can't optimize what you can't measure. Before tactics, Krinal builds systems that give teams visibility into what's actually happening and the ability to act on it. At Newfold Digital, this meant expanding query visibility from 200K to 4M tracked queries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Krinal Mehta use AI and leverage in growth marketing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best growth work creates leverage. AI-powered workflows, automated systems, and scalable processes that make teams faster and smarter over time. Krinal architected AI-powered content operations that reduced production time by 70% while increasing output."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Krinal Mehta's philosophy on growth channels?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Think in systems, not channels. Organic, paid, partnerships—they're not separate. They're interconnected parts of an acquisition system. The companies that win understand how they work together. At FreshBooks, this approach scaled organic from #3 to #1 revenue channel, generating $30M ARR."
                  }
                }
              ]
            }
          ])
        }}
      />
    </>
  )
}
