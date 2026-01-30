import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { caseStudies, getCaseStudy, getAllCaseStudySlugs } from '../data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    return {
      title: 'Case Study Not Found | Krinal Mehta',
    }
  }

  return {
    title: `${study.company}: ${study.title} | Krinal Mehta`,
    description: study.description,
    openGraph: {
      type: 'article',
      publishedTime: '2025-01-01T00:00:00Z',
      modifiedTime: '2026-01-25T00:00:00Z',
      authors: ['Krinal Mehta'],
      tags: study.tags,
      images: [{ url: '/images/krinal-headshot.jpg', width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://krinalmehta.com/case-studies/${slug}/`,
    },
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    notFound()
  }

  const currentIndex = caseStudies.findIndex((s) => s.slug === slug)
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null

  return (
    <>
      <Navigation />
      <main id="main-content">
        <header className="case-study-header">
          <p className="case-study-header-eyebrow">{study.company}</p>
          <h1 className="case-study-header-title">{study.title}</h1>
          <div className="case-study-header-meta">
            <span className="case-study-header-meta-item">{study.role}</span>
            <span className="case-study-header-meta-item">{study.timeframe}</span>
          </div>
        </header>

        <section className="case-study-metrics-section">
          <div className="case-study-metrics-inner">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="case-study-metric">
                <div className="case-study-metric-value">{metric.value}</div>
                <div className="case-study-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>

        <article className="case-study-content">
          <h2>The Challenge</h2>
          <p>{study.challenge}</p>

          <h2>The Approach</h2>
          <ul>
            {study.approach.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>The Results</h2>
          <ul>
            {study.results.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>

        {study.quote && (
          <section className="case-study-quote">
            <div className="case-study-quote-inner">
              <p className="case-study-quote-text">{study.quote.text}</p>
              <p className="case-study-quote-author">{study.quote.author}</p>
              <p className="case-study-quote-role">{study.quote.role}</p>
            </div>
          </section>
        )}

        <section className="case-study-cta" style={{ padding: 'var(--space-lg) var(--space-md)', textAlign: 'center', background: 'var(--color-paper-warm)' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-ink-light)', marginBottom: 'var(--space-md)' }}>
              Want to learn more about my approach? Read my <Link href="/about" style={{ color: 'var(--color-ink)', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.3)', textUnderlineOffset: '3px' }}>story</Link> or check out my <Link href="/speaking" style={{ color: 'var(--color-ink)', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.3)', textUnderlineOffset: '3px' }}>speaking engagements</Link>.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', padding: '0.85rem 2rem', background: 'var(--color-ink)', color: 'var(--color-paper)', borderRadius: '6px', fontSize: '1rem', textDecoration: 'none' }}>Get in touch</Link>
          </div>
        </section>

        <nav className="case-study-nav">
          <div className="case-study-nav-inner">
            {prevStudy ? (
              <Link href={`/case-studies/${prevStudy.slug}`} className="case-study-nav-link">
                ← {prevStudy.company}
              </Link>
            ) : (
              <span />
            )}
            <Link href="/case-studies" className="case-study-nav-link">
              All Case Studies
            </Link>
            {nextStudy ? (
              <Link href={`/case-studies/${nextStudy.slug}`} className="case-study-nav-link">
                {nextStudy.company} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </nav>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": `${study.company}: ${study.title}`,
              "description": study.description,
              "author": {
                "@type": "Person",
                "@id": "https://krinalmehta.com/#person",
                "name": "Krinal Mehta"
              },
              "publisher": {
                "@type": "Person",
                "name": "Krinal Mehta",
                "url": "https://krinalmehta.com"
              },
              "mainEntityOfPage": `https://krinalmehta.com/case-studies/${slug}/`,
              "datePublished": "2025-01-01",
              "dateModified": "2026-01-25",
              "keywords": study.tags.join(", "),
              "about": {
                "@type": "Organization",
                "name": study.company
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://krinalmehta.com/" },
                { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://krinalmehta.com/case-studies/" },
                { "@type": "ListItem", "position": 3, "name": `${study.company}: ${study.title}` }
              ]
            }
          ])
        }}
      />
    </>
  )
}
