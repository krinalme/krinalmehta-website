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
    </>
  )
}
