import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { caseStudies } from './data'

export const metadata: Metadata = {
  title: 'Case Studies | Krinal Mehta',
  description: 'Detailed case studies from building growth engines at FreshBooks, Newfold Digital, and more. See how strategic SEO and growth marketing drive measurable business results.',
}

export default function CaseStudies() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <header className="page-header">
          <h1 className="page-title">Case Studies</h1>
          <p className="page-intro">
            Deep dives into how I've built growth systems at scale. Each case study covers the challenge,
            strategic approach, and measurable results delivered. See my <Link href="/work" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.3)', textUnderlineOffset: '3px' }}>full work history</Link> for more context.
          </p>
        </header>

        <section className="case-studies-list">
          <div className="case-studies-list-inner">
            {caseStudies.map((study) => (
              <Link
                href={`/case-studies/${study.slug}`}
                key={study.slug}
                className="case-study-card"
              >
                <div className="case-study-card-left">
                  <span className="case-study-card-company">{study.company}</span>
                  <h2 className="case-study-card-title">{study.title}</h2>
                  <div className="case-study-card-tags">
                    {study.tags.map((tag) => (
                      <span key={tag} className="case-study-card-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="case-study-card-right">
                  <p className="case-study-card-description">{study.description}</p>
                  <div className="case-study-card-metrics">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="case-study-card-metric">
                        <div className="case-study-card-metric-value">{metric.value}</div>
                        <div className="case-study-card-metric-label">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <span className="case-study-card-cta">Read case study →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
