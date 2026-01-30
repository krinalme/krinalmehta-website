import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Speaking',
  description: 'Conference talks, webinars, podcasts, and teaching. Krinal Mehta speaks on SEO, growth strategy, AI in marketing, and building high-performing teams.',
  alternates: {
    canonical: 'https://krinalmehta.com/speaking/',
  },
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
  { title: 'AI & Answer Engine Optimization', description: 'How to position your brand for visibility in AI-generated answers. The shift from ranking to being cited.', link: null },
  { title: 'Enterprise SEO at Scale', description: 'Building SEO programs for large organizations. Data infrastructure, team structure, cross-functional alignment.', link: '/case-studies/newfold-search-infrastructure' },
  { title: 'Growth Strategy for B2B SaaS', description: 'Turning organic and paid into a unified acquisition system. Product-led content, marketplace platforms, international expansion.', link: '/case-studies/freshbooks-organic-growth' },
  { title: 'AI-Powered Marketing Operations', description: 'Building AI workflows that actually work. Custom GPTs, automation, increasing team velocity without sacrificing quality.', link: '/case-studies/newfold-search-infrastructure' },
  { title: 'Leadership & Team Building', description: 'Scaling teams from 1 to 25+. Hiring, mentoring, creating cultures of ownership and continuous improvement.', link: '/work' },
  { title: 'Board-Level Communication', description: 'How to present growth strategy to executives and boards. Translating SEO into business outcomes and securing resources.', link: null },
]

export default function Speaking() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* Page Header */}
        <header className="page-header">
          <h1 className="page-title">Speaking & Media</h1>
          <p className="page-intro">I speak at conferences, host webinars, appear on podcasts, and teach courses on SEO, <Link href="/work" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.3)', textUnderlineOffset: '3px' }}>growth strategy</Link>, and AI in marketing.</p>
        </header>

        {/* Webinars & Talks */}
        <section style={{ padding: 'var(--space-lg) var(--space-md)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 400, marginBottom: 'var(--space-md)' }}>Webinars & Talks</h2>
            <div className="speaking-grid">
              {webinars.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="speaking-card"
                >
                  <div className="speaking-card-header">
                    <span className="speaking-card-venue">{item.venue}</span>
                    <span className="speaking-card-type">{item.type}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="speaking-card-link">{item.linkText} →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching */}
        <section style={{ padding: 'var(--space-lg) var(--space-md)', background: 'var(--color-paper-warm)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 400, marginBottom: 'var(--space-md)' }}>Teaching & Training</h2>
            <div className="speaking-grid">
              <a href="https://brainstation.io" target="_blank" rel="noopener noreferrer" className="speaking-card" style={{ background: 'var(--color-paper)' }}>
                <p className="speaking-card-venue" style={{ marginBottom: 'var(--space-xs)' }}>BrainStation</p>
                <h3>Lead Instructor, Search Engine Marketing</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', marginBottom: 'var(--space-sm)' }}>2021 – 2022</p>
                <p>Taught SEO, SEM, and Google Analytics courses to senior industry professionals transitioning into digital marketing or deepening their expertise.</p>
              </a>
              <a href="https://iabcanada.com" target="_blank" rel="noopener noreferrer" className="speaking-card" style={{ background: 'var(--color-paper)' }}>
                <p className="speaking-card-venue" style={{ marginBottom: 'var(--space-xs)' }}>IAB Canada</p>
                <h3>SEO Trainer</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', marginBottom: 'var(--space-sm)' }}>2020 – 2021</p>
                <p>Recognized as a SEM subject matter expert by the Interactive Advertising Bureau to train marketing leaders from Canada's top enterprise brands.</p>
              </a>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section style={{ padding: 'var(--space-xl) var(--space-md)', background: 'var(--color-ink)', color: 'var(--color-paper)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, marginBottom: 'var(--space-sm)', opacity: 0.9 }}>Topics I speak on</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.7, marginBottom: 'var(--space-lg)', maxWidth: '600px' }}>These are the areas where I have the most depth and can provide actionable insights.</p>
            <div className="speaking-topics-grid">
              {topics.map((topic, index) => {
                const content = (
                  <>
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                    {topic.link && <span className="speaking-topic-link">See case study →</span>}
                  </>
                );
                return topic.link ? (
                  <Link key={index} href={topic.link} className="speaking-topic">
                    {content}
                  </Link>
                ) : (
                  <div key={index} className="speaking-topic">
                    {content}
                  </div>
                );
              })}
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Relevance Engineering in SEO",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": { "@type": "VirtualLocation", "url": "https://www.youtube.com/watch?v=Uk-3T_0pbl0" },
              "organizer": { "@type": "Organization", "name": "SEOTalk" },
              "performer": { "@type": "Person", "@id": "https://krinalmehta.com/#person", "name": "Krinal Mehta" },
              "description": "Deep dive into how relevance engineering is changing the way we think about SEO strategy and content optimization.",
              "startDate": "2023-01-01"
            },
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "SEO Audit / SEO Surgery",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": { "@type": "VirtualLocation", "url": "https://www.slideshare.net/slideshow/seo-audit-of-canderecom-krinal-mehta/113745405" },
              "organizer": { "@type": "Organization", "name": "SEMrush" },
              "performer": { "@type": "Person", "@id": "https://krinalmehta.com/#person", "name": "Krinal Mehta" },
              "description": "Live SEO audit session alongside Jono Alderson (Yoast) and Nitin Manchanda (Trivago). Hosted by SEMrush India.",
              "startDate": "2019-01-01"
            },
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Custom GPTs for SEOs",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": { "@type": "VirtualLocation", "url": "https://www.youtube.com/watch?v=dYaJt9pApCA" },
              "organizer": { "@type": "Organization", "name": "SEOTalk" },
              "performer": { "@type": "Person", "@id": "https://krinalmehta.com/#person", "name": "Krinal Mehta" },
              "description": "How to build and deploy custom GPTs to automate SEO tasks, from content briefs to technical audits.",
              "startDate": "2024-01-01"
            },
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "SEO Strategy for SaaS",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": { "@type": "VirtualLocation", "url": "https://www.youtube.com/watch?v=9HJy_Mu97rI" },
              "organizer": { "@type": "Organization", "name": "Pathmonk" },
              "performer": { "@type": "Person", "@id": "https://krinalmehta.com/#person", "name": "Krinal Mehta" },
              "description": "Discussion on building SEO programs for B2B SaaS companies, including FreshBooks' approach to content and international expansion.",
              "startDate": "2023-01-01"
            },
            {
              "@context": "https://schema.org",
              "@type": "EducationEvent",
              "name": "Lead Instructor, Search Engine Marketing",
              "organizer": { "@type": "Organization", "name": "BrainStation", "url": "https://brainstation.io" },
              "performer": { "@type": "Person", "@id": "https://krinalmehta.com/#person", "name": "Krinal Mehta" },
              "description": "Taught SEO, SEM, and Google Analytics courses to senior industry professionals transitioning into digital marketing.",
              "startDate": "2021-01-01",
              "endDate": "2022-12-31"
            },
            {
              "@context": "https://schema.org",
              "@type": "EducationEvent",
              "name": "SEO Trainer",
              "organizer": { "@type": "Organization", "name": "IAB Canada", "url": "https://iabcanada.com" },
              "performer": { "@type": "Person", "@id": "https://krinalmehta.com/#person", "name": "Krinal Mehta" },
              "description": "Recognized as a SEM subject matter expert by the Interactive Advertising Bureau to train marketing leaders from Canada's top enterprise brands.",
              "startDate": "2020-01-01",
              "endDate": "2021-12-31"
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://krinalmehta.com/" },
                { "@type": "ListItem", "position": 2, "name": "Speaking & Media" }
              ]
            }
          ])
        }}
      />
    </>
  )
}
