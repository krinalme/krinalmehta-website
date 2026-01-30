import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main id="main-content">
        {/* Hero */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-eyebrow">Growth Leader · Toronto, Canada</p>
              <h1 className="hero-title">Building <em>growth engines</em> at multi-billion dollar scale</h1>
              <p className="hero-description">
                I'm a full-stack growth operator with <Link href="/about" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.3)', textUnderlineOffset: '3px' }}>17 years</Link> turning organic, paid, and partnerships into a company's most powerful acquisition channel. Currently leading growth across Bluehost, HostGator, and Yoast at Newfold Digital.
              </p>
              <div className="hero-meta">
                <Link href="/work" className="hero-meta-item" style={{ textDecoration: 'none', color: 'inherit' }}>Director of SEO, Newfold Digital</Link>
                <Link href="/case-studies/freshbooks-organic-growth" className="hero-meta-item" style={{ textDecoration: 'none', color: 'inherit' }}>Former Global SEO Lead, FreshBooks</Link>
              </div>
            </div>
            <div className="hero-image">
              <Image
                src="/images/krinal-headshot.jpg"
                alt="Krinal Mehta"
                width={450}
                height={600}
                priority
              />
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Scroll</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* Brands */}
        <section className="brands">
          <div className="brands-inner">
            <p className="brands-label">Brands I've Scaled</p>
            <div className="brands-grid">
              <a href="https://www.bluehost.com" target="_blank" rel="noopener noreferrer" className="brand-item">Bluehost</a>
              <a href="https://www.hostgator.com" target="_blank" rel="noopener noreferrer" className="brand-item">HostGator</a>
              <a href="https://yoast.com" target="_blank" rel="noopener noreferrer" className="brand-item">Yoast</a>
              <a href="https://www.freshbooks.com" target="_blank" rel="noopener noreferrer" className="brand-item">FreshBooks</a>
              <a href="https://www.pwc.com" target="_blank" rel="noopener noreferrer" className="brand-item">PwC</a>
              <a href="https://www.opentext.com" target="_blank" rel="noopener noreferrer" className="brand-item">OpenText</a>
              <a href="https://www.yorku.ca" target="_blank" rel="noopener noreferrer" className="brand-item">York University</a>
              <a href="https://www.prontoforms.com" target="_blank" rel="noopener noreferrer" className="brand-item">ProntoForms</a>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="proof">
          <div className="proof-inner">
            <div className="proof-header">
              <h2 className="proof-title">Results that matter</h2>
              <p className="proof-subtitle">A few highlights from building growth systems at scale.</p>
            </div>
            <div className="proof-grid">
              <Link href="/case-studies/freshbooks-organic-growth" className="proof-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="proof-card-stat">$30M</div>
                <div className="proof-card-label">ARR from Organic</div>
                <p className="proof-card-context">Scaled organic search from #3 to #1 revenue channel at FreshBooks in 2021.</p>
              </Link>
              <Link href="/case-studies/freshbooks-organic-growth" className="proof-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="proof-card-stat">400%</div>
                <div className="proof-card-label">Traffic Growth</div>
                <p className="proof-card-context">Grew organic traffic 4X through product-led content strategy at FreshBooks.</p>
              </Link>
              <Link href="/case-studies/newfold-search-infrastructure" className="proof-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="proof-card-stat">20X</div>
                <div className="proof-card-label">Query Visibility</div>
                <p className="proof-card-context">Built search data infrastructure expanding visibility from 200K to 4M queries at Bluehost.</p>
              </Link>
              <Link href="/work" className="proof-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="proof-card-stat">29</div>
                <div className="proof-card-label">Team Members</div>
                <p className="proof-card-context">Leading a global cross-functional team of SEOs, data analysts, content marketers, and developers.</p>
              </Link>
              <Link href="/case-studies/newfold-search-infrastructure" className="proof-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="proof-card-stat">70%</div>
                <div className="proof-card-label">Time Reduction</div>
                <p className="proof-card-context">Architected AI-powered content operations increasing velocity 4X at Bluehost.</p>
              </Link>
              <Link href="/case-studies/freshbooks-organic-growth" className="proof-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="proof-card-stat">7</div>
                <div className="proof-card-label">Markets Launched</div>
                <p className="proof-card-context">Implemented geo-targeted systems across international markets with 30% conversion lift.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="case-studies-preview">
          <div className="case-studies-preview-inner">
            <div className="case-studies-preview-header">
              <h2 className="case-studies-preview-title">Case Studies</h2>
              <Link href="/case-studies" className="case-studies-preview-link">View all →</Link>
            </div>
            <div className="case-studies-preview-grid">
              <Link href="/case-studies/freshbooks-organic-growth" className="case-studies-preview-item">
                <p className="case-studies-preview-item-company">FreshBooks</p>
                <h3 className="case-studies-preview-item-title">Scaling organic from #3 to #1 revenue channel</h3>
                <div className="case-studies-preview-item-stat">
                  <span className="stat-value">$30M</span>
                  <span className="stat-label">ARR Generated</span>
                </div>
              </Link>
              <Link href="/case-studies/newfold-search-infrastructure" className="case-studies-preview-item">
                <p className="case-studies-preview-item-company">Newfold Digital</p>
                <h3 className="case-studies-preview-item-title">Building search data infrastructure for 20X visibility</h3>
                <div className="case-studies-preview-item-stat">
                  <span className="stat-value">20X</span>
                  <span className="stat-label">Query Visibility</span>
                </div>
              </Link>
              <Link href="/case-studies/freshbooks-seo-governance" className="case-studies-preview-item">
                <p className="case-studies-preview-item-company">FreshBooks</p>
                <h3 className="case-studies-preview-item-title">Safeguarding $1M+ in traffic value with SEO governance</h3>
                <div className="case-studies-preview-item-stat">
                  <span className="stat-value">$1M+</span>
                  <span className="stat-label">Traffic Protected</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter">
          <div className="newsletter-inner">
            <div className="newsletter-content">
              <h2>Newsletter</h2>
              <p>I write about growth strategy, organic and paid acquisition, AI in marketing, and what it actually takes to build and lead high-performing teams at scale.</p>
              <a href="https://newsletter.krinalmehta.com" className="newsletter-link" target="_blank" rel="noopener noreferrer">
                Subscribe →
              </a>
            </div>
            <div className="newsletter-topics">
              <span className="newsletter-topic">Growth Strategy</span>
              <span className="newsletter-topic">Organic & SEO</span>
              <span className="newsletter-topic">Paid Media</span>
              <span className="newsletter-topic">AI & AEO</span>
              <span className="newsletter-topic">Leadership</span>
              <span className="newsletter-topic">Industry Analysis</span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="testimonials-inner">
            <div className="testimonials-header">
              <h2 className="testimonials-title">What colleagues say</h2>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p className="testimonial-quote">"Krinal was our go-to subject matter expert for all things SEO. His deep knowledge and strategic thinking helped scale our brand into new markets, including the UK, EU, AU, and ZA, delivering significant results. What truly sets Krinal apart is his passion and curiosity for SEO. It's more than just an occupation to him—it's a calling."</p>
                <div className="testimonial-author">
                  <span className="testimonial-name">Jeff McMahon</span>
                  <span className="testimonial-role">Director, Digital Performance, <a href="https://www.docebo.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.4)', textUnderlineOffset: '3px' }}>Docebo</a> · Managed Krinal at <a href="https://www.freshbooks.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.4)', textUnderlineOffset: '3px' }}>FreshBooks</a></span>
                </div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-quote">"Krinal and I worked very closely together for almost three years at FreshBooks. I admired his leadership and problem-solving skills. His understanding of search intent, recognizing it early through signs and signals, allowed him to do SEO with a strong strategic approach, consistently driving results."</p>
                <div className="testimonial-author">
                  <span className="testimonial-name">Reuben Alex</span>
                  <span className="testimonial-role">SEO/GEO Strategies · Reported to Krinal at FreshBooks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speaking Preview */}
        <section className="speaking-preview">
          <div className="speaking-preview-inner">
            <div className="speaking-preview-header">
              <h2 className="speaking-preview-title">Speaking & Media</h2>
              <Link href="/speaking" className="speaking-preview-link">View all →</Link>
            </div>
            <div className="speaking-preview-grid">
              <a href="https://www.youtube.com/watch?v=23_KVSVqI6U" target="_blank" rel="noopener noreferrer" className="speaking-preview-item">
                <div className="speaking-preview-thumb">
                  <img src="https://img.youtube.com/vi/23_KVSVqI6U/hqdefault.jpg" alt="Visibility Stack: Entity SEO, Reddit, AI" loading="lazy" width={480} height={360} />
                  <div className="speaking-preview-play">
                    <svg viewBox="0 0 68 48" width="68" height="48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#212121" fillOpacity="0.8"/><path d="M45 24L27 14v20" fill="#fff"/></svg>
                  </div>
                </div>
                <p className="speaking-preview-item-venue">SEO Video Show</p>
                <h3 className="speaking-preview-item-title">Visibility Stack: Entity SEO, Reddit, AI</h3>
              </a>
              <a href="https://www.youtube.com/watch?v=9HJy_Mu97rI" target="_blank" rel="noopener noreferrer" className="speaking-preview-item">
                <div className="speaking-preview-thumb">
                  <img src="https://img.youtube.com/vi/9HJy_Mu97rI/hqdefault.jpg" alt="Custom GPTs for SEOs: Automate Smarter, Rank Faster" loading="lazy" width={480} height={360} />
                  <div className="speaking-preview-play">
                    <svg viewBox="0 0 68 48" width="68" height="48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#212121" fillOpacity="0.8"/><path d="M45 24L27 14v20" fill="#fff"/></svg>
                  </div>
                </div>
                <p className="speaking-preview-item-venue">SEOTalk Webinar</p>
                <h3 className="speaking-preview-item-title">Custom GPTs for SEOs: Automate Smarter, Rank Faster</h3>
              </a>
              <a href="https://www.youtube.com/watch?v=dYaJt9pApCA" target="_blank" rel="noopener noreferrer" className="speaking-preview-item">
                <div className="speaking-preview-thumb">
                  <img src="https://img.youtube.com/vi/dYaJt9pApCA/hqdefault.jpg" alt="Relevance Engineering in SEO" loading="lazy" width={480} height={360} />
                  <div className="speaking-preview-play">
                    <svg viewBox="0 0 68 48" width="68" height="48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#212121" fillOpacity="0.8"/><path d="M45 24L27 14v20" fill="#fff"/></svg>
                  </div>
                </div>
                <p className="speaking-preview-item-venue">SEOTalk Webinar</p>
                <h3 className="speaking-preview-item-title">Relevance Engineering in SEO</h3>
              </a>
              <a href="https://www.youtube.com/watch?v=kwl5j_zTq-g" target="_blank" rel="noopener noreferrer" className="speaking-preview-item">
                <div className="speaking-preview-thumb">
                  <img src="https://img.youtube.com/vi/kwl5j_zTq-g/hqdefault.jpg" alt="Accounting Software and SEO Strategy" loading="lazy" width={480} height={360} />
                  <div className="speaking-preview-play">
                    <svg viewBox="0 0 68 48" width="68" height="48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#212121" fillOpacity="0.8"/><path d="M45 24L27 14v20" fill="#fff"/></svg>
                  </div>
                </div>
                <p className="speaking-preview-item-venue">Pathmonk Presents</p>
                <h3 className="speaking-preview-item-title">Accounting Software and SEO Strategy</h3>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.krinalmehta.com/#person",
              "name": "Krinal Mehta",
              "givenName": "Krinal",
              "familyName": "Mehta",
              "jobTitle": "Director of SEO",
              "worksFor": {
                "@type": "Organization",
                "name": "Newfold Digital",
                "url": "https://newfold.com"
              },
              "url": "https://www.krinalmehta.com",
              "sameAs": [
                "https://www.linkedin.com/in/krinal",
                "https://twitter.com/krinal",
                "https://www.youtube.com/@krinalmehta"
              ],
              "knowsAbout": [
                "Search Engine Optimization",
                "Growth Strategy",
                "Paid Media",
                "B2B SaaS",
                "Answer Engine Optimization",
                "AI-Powered Marketing",
                "Enterprise SEO",
                "Content Strategy",
                "Data Infrastructure"
              ],
              "image": "https://www.krinalmehta.com/images/krinal-headshot.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "Ontario",
                "addressCountry": "CA"
              },
              "affiliation": [
                { "@type": "Organization", "name": "Bluehost", "url": "https://www.bluehost.com" },
                { "@type": "Organization", "name": "HostGator", "url": "https://www.hostgator.com" },
                { "@type": "Organization", "name": "Yoast", "url": "https://yoast.com" },
                { "@type": "Organization", "name": "FreshBooks", "url": "https://www.freshbooks.com" }
              ],
              "alumniOf": [
                { "@type": "Organization", "name": "FreshBooks", "url": "https://www.freshbooks.com" },
                { "@type": "Organization", "name": "Search Engine People", "url": "https://www.searchenginepeople.com" }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Speaking & Media Appearances",
              "itemListElement": [
                {
                  "@type": "VideoObject",
                  "position": 1,
                  "name": "Visibility Stack: Entity SEO, Reddit, AI",
                  "description": "Krinal Mehta discusses entity SEO, Reddit visibility, and AI strategies on the SEO Video Show.",
                  "thumbnailUrl": "https://img.youtube.com/vi/23_KVSVqI6U/hqdefault.jpg",
                  "contentUrl": "https://www.youtube.com/watch?v=23_KVSVqI6U",
                  "embedUrl": "https://www.youtube.com/embed/23_KVSVqI6U",
                  "uploadDate": "2024-01-01"
                },
                {
                  "@type": "VideoObject",
                  "position": 2,
                  "name": "Custom GPTs for SEOs: Automate Smarter, Rank Faster",
                  "description": "How to build and deploy custom GPTs to automate SEO tasks, from content briefs to technical audits.",
                  "thumbnailUrl": "https://img.youtube.com/vi/9HJy_Mu97rI/hqdefault.jpg",
                  "contentUrl": "https://www.youtube.com/watch?v=9HJy_Mu97rI",
                  "embedUrl": "https://www.youtube.com/embed/9HJy_Mu97rI",
                  "uploadDate": "2024-01-01"
                },
                {
                  "@type": "VideoObject",
                  "position": 3,
                  "name": "Relevance Engineering in SEO",
                  "description": "Deep dive into how relevance engineering is changing SEO strategy and content optimization.",
                  "thumbnailUrl": "https://img.youtube.com/vi/dYaJt9pApCA/hqdefault.jpg",
                  "contentUrl": "https://www.youtube.com/watch?v=dYaJt9pApCA",
                  "embedUrl": "https://www.youtube.com/embed/dYaJt9pApCA",
                  "uploadDate": "2023-01-01"
                },
                {
                  "@type": "VideoObject",
                  "position": 4,
                  "name": "Accounting Software and SEO Strategy",
                  "description": "Discussion on building SEO programs for B2B SaaS companies, featuring FreshBooks' approach.",
                  "thumbnailUrl": "https://img.youtube.com/vi/kwl5j_zTq-g/hqdefault.jpg",
                  "contentUrl": "https://www.youtube.com/watch?v=kwl5j_zTq-g",
                  "embedUrl": "https://www.youtube.com/embed/kwl5j_zTq-g",
                  "uploadDate": "2023-01-01"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Recommendation",
              "author": { "@type": "Person", "name": "Jeff McMahon", "jobTitle": "Director, Digital Performance", "worksFor": { "@type": "Organization", "name": "Docebo" } },
              "reviewBody": "Krinal was our go-to subject matter expert for all things SEO. His deep knowledge and strategic thinking helped scale our brand into new markets, including the UK, EU, AU, and ZA, delivering significant results. What truly sets Krinal apart is his passion and curiosity for SEO. It's more than just an occupation to him—it's a calling.",
              "about": { "@type": "Person", "@id": "https://www.krinalmehta.com/#person" }
            },
            {
              "@context": "https://schema.org",
              "@type": "Recommendation",
              "author": { "@type": "Person", "name": "Reuben Alex", "jobTitle": "SEO/GEO Strategies" },
              "reviewBody": "Krinal and I worked very closely together for almost three years at FreshBooks. I admired his leadership and problem-solving skills. His understanding of search intent, recognizing it early through signs and signals, allowed him to do SEO with a strong strategic approach, consistently driving results.",
              "about": { "@type": "Person", "@id": "https://www.krinalmehta.com/#person" }
            }
          ])
        }}
      />
    </>
  )
}
