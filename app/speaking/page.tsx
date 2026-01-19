import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Speaking',
  description: 'Conference talks, webinars, podcasts, and teaching. Krinal Mehta speaks on SEO, growth strategy, AI in marketing, and building high-performing teams.',
}

const webinars = [
  {
    venue: 'SEOTalk',
    title: 'Relevance Engineering in SEO',
    description: 'Deep dive into how relevance engineering is changing the way we think about SEO strategy and content optimization.',
    type: 'Webinar',
    link: 'https://www.youtube.com/watch?v=Uk-3T_0pbl0',
    linkText: 'Watch on YouTube',
  },
  {
    venue: 'SEMrush',
    title: 'SEO Audit / SEO Surgery',
    description: 'Live SEO audit session alongside Jono Alderson (Yoast) and Nitin Manchanda (Trivago). Hosted by SEMrush India.',
    type: 'Webinar',
    link: 'https://www.slideshare.net/slideshow/seo-audit-of-canderecom-krinal-mehta/113745405',
    linkText: 'View slides',
  },
  {
    venue: 'SEOTalk',
    title: 'Custom GPTs for SEOs',
    description: 'How to build and deploy custom GPTs to automate SEO tasks, from content briefs to technical audits.',
    type: 'Webinar',
    link: 'https://www.youtube.com/watch?v=dYaJt9pApCA',
    linkText: 'Watch on YouTube',
  },
  {
    venue: 'Pathmonk',
    title: 'SEO Strategy for SaaS',
    description: 'Discussion on building SEO programs for B2B SaaS companies, including FreshBooks\' approach to content and international expansion.',
    type: 'Podcast',
    link: 'https://www.youtube.com/watch?v=9HJy_Mu97rI',
    linkText: 'Watch on YouTube',
  },
]

const topics = [
  { title: 'AI & Answer Engine Optimization', description: 'How to position your brand for visibility in AI-generated answers. The shift from ranking to being cited.' },
  { title: 'Enterprise SEO at Scale', description: 'Building SEO programs for large organizations. Data infrastructure, team structure, cross-functional alignment.' },
  { title: 'Growth Strategy for B2B SaaS', description: 'Turning organic and paid into a unified acquisition system. Product-led content, marketplace platforms, international expansion.' },
  { title: 'AI-Powered Marketing Operations', description: 'Building AI workflows that actually work. Custom GPTs, automation, increasing team velocity without sacrificing quality.' },
  { title: 'Leadership & Team Building', description: 'Scaling teams from 1 to 25+. Hiring, mentoring, creating cultures of ownership and continuous improvement.' },
  { title: 'Board-Level Communication', description: 'How to present growth strategy to executives and boards. Translating SEO into business outcomes and securing resources.' },
]

export default function Speaking() {
  return (
    <>
      <Navigation />
      
      <main id="main-content">
        {/* Page Header */}
        <header className="page-header">
          <h1 className="page-title">Speaking & Media</h1>
          <p className="page-intro">I speak at conferences, host webinars, appear on podcasts, and teach courses on SEO, growth strategy, and AI in marketing.</p>
        </header>

        {/* Webinars & Talks */}
        <section style={{ padding: 'var(--space-lg) var(--space-md)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 400, marginBottom: 'var(--space-md)' }}>Webinars & Talks</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-md)' }}>
              {webinars.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'block',
                    padding: 'var(--space-md)', 
                    background: 'var(--color-paper)', 
                    border: '1px solid rgba(0,0,0,0.06)', 
                    borderRadius: '8px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-ink-muted)' }}>{item.venue}</span>
                    <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--color-paper-warm)', borderRadius: '4px', color: 'var(--color-ink-muted)' }}>{item.type}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', lineHeight: 1.3, marginBottom: 'var(--space-xs)' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-light)', lineHeight: 1.6, marginBottom: 'var(--space-sm)' }}>{item.description}</p>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-accent)' }}>{item.linkText} →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching */}
        <section style={{ padding: 'var(--space-lg) var(--space-md)', background: 'var(--color-paper-warm)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 400, marginBottom: 'var(--space-md)' }}>Teaching & Training</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-md)' }}>
              <div style={{ padding: 'var(--space-md)', background: 'var(--color-paper)', borderRadius: '8px' }}>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-ink-muted)', marginBottom: 'var(--space-xs)' }}>BrainStation</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: 'var(--space-xs)' }}>Lead Instructor, Search Engine Marketing</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', marginBottom: 'var(--space-sm)' }}>2021 – 2022</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-light)', lineHeight: 1.6 }}>Taught SEO, SEM, and Google Analytics courses to senior industry professionals transitioning into digital marketing or deepening their expertise.</p>
              </div>
              <div style={{ padding: 'var(--space-md)', background: 'var(--color-paper)', borderRadius: '8px' }}>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-ink-muted)', marginBottom: 'var(--space-xs)' }}>IAB Canada</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: 'var(--space-xs)' }}>SEO Trainer</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', marginBottom: 'var(--space-sm)' }}>2020 – 2021</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-light)', lineHeight: 1.6 }}>Recognized as a SEM subject matter expert by the Interactive Advertising Bureau to train marketing leaders from Canada's top enterprise brands.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section style={{ padding: 'var(--space-xl) var(--space-md)', background: 'var(--color-ink)', color: 'var(--color-paper)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, marginBottom: 'var(--space-sm)', opacity: 0.9 }}>Topics I speak on</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.7, marginBottom: 'var(--space-lg)', maxWidth: '600px' }}>These are the areas where I have the most depth and can provide actionable insights.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-md)' }}>
              {topics.map((topic, index) => (
                <div key={index} style={{ padding: 'var(--space-md)', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, marginBottom: 'var(--space-xs)' }}>{topic.title}</h3>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: 1.6 }}>{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'var(--space-xl) var(--space-md)', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, marginBottom: 'var(--space-sm)' }}>Interested in having me speak?</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-ink-light)', marginBottom: 'var(--space-md)' }}>I'm available for conferences, webinars, podcasts, and corporate training sessions.</p>
            <Link href="/contact" style={{ display: 'inline-block', padding: '0.85rem 2rem', background: 'var(--color-ink)', color: 'var(--color-paper)', borderRadius: '6px', fontSize: '1rem' }}>Get in touch</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
