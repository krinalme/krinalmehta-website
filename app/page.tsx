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
                I'm a full-stack growth operator with 17 years turning organic, paid, and partnerships into a company's most powerful acquisition channel. Currently leading growth across Bluehost, HostGator, and Yoast at Newfold Digital.
              </p>
              <div className="hero-meta">
                <span className="hero-meta-item">Director of SEO, Newfold Digital</span>
                <span className="hero-meta-item">Former Global SEO Lead, FreshBooks</span>
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
              <span className="brand-item">Bluehost</span>
              <span className="brand-item">HostGator</span>
              <span className="brand-item">Yoast</span>
              <span className="brand-item">FreshBooks</span>
              <span className="brand-item">PwC</span>
              <span className="brand-item">OpenText</span>
              <span className="brand-item">York University</span>
              <span className="brand-item">ProntoForms</span>
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
              <div className="proof-card">
                <div className="proof-card-stat">$30M</div>
                <div className="proof-card-label">ARR from Organic</div>
                <p className="proof-card-context">Scaled organic search from #3 to #1 revenue channel at FreshBooks in 2021.</p>
              </div>
              <div className="proof-card">
                <div className="proof-card-stat">400%</div>
                <div className="proof-card-label">Traffic Growth</div>
                <p className="proof-card-context">Grew organic traffic 4X through product-led content strategy at FreshBooks.</p>
              </div>
              <div className="proof-card">
                <div className="proof-card-stat">20X</div>
                <div className="proof-card-label">Query Visibility</div>
                <p className="proof-card-context">Built search data infrastructure expanding visibility from 200K to 4M queries at Bluehost.</p>
              </div>
              <div className="proof-card">
                <div className="proof-card-stat">29</div>
                <div className="proof-card-label">Team Members</div>
                <p className="proof-card-context">Leading a global cross-functional team of SEOs, data analysts, content marketers, and developers.</p>
              </div>
              <div className="proof-card">
                <div className="proof-card-stat">70%</div>
                <div className="proof-card-label">Time Reduction</div>
                <p className="proof-card-context">Architected AI-powered content operations increasing velocity 4X at Bluehost.</p>
              </div>
              <div className="proof-card">
                <div className="proof-card-stat">7</div>
                <div className="proof-card-label">Markets Launched</div>
                <p className="proof-card-context">Implemented geo-targeted systems across international markets with 30% conversion lift.</p>
              </div>
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
                  <span className="testimonial-role">SaaS Marketing Leader, Docebo · Managed Krinal at FreshBooks</span>
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
              <a href="https://www.youtube.com/watch?v=Uk-3T_0pbl0" target="_blank" rel="noopener noreferrer" className="speaking-preview-item">
                <p className="speaking-preview-item-venue">SEOTalk Webinar</p>
                <h3 className="speaking-preview-item-title">Relevance Engineering in SEO</h3>
                <p className="speaking-preview-item-type">Webinar · Watch on YouTube</p>
              </a>
              <a href="https://www.slideshare.net/slideshow/seo-audit-of-canderecom-krinal-mehta/113745405" target="_blank" rel="noopener noreferrer" className="speaking-preview-item">
                <p className="speaking-preview-item-venue">SEMrush</p>
                <h3 className="speaking-preview-item-title">SEO Audit / SEO Surgery</h3>
                <p className="speaking-preview-item-type">Webinar · with Jono Alderson (Yoast)</p>
              </a>
              <div className="speaking-preview-item">
                <p className="speaking-preview-item-venue">BrainStation</p>
                <h3 className="speaking-preview-item-title">Search Engine Marketing</h3>
                <p className="speaking-preview-item-type">Lead Instructor · 2021-2022</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Krinal Mehta",
            "givenName": "Krinal",
            "familyName": "Mehta",
            "jobTitle": "Director of SEO",
            "worksFor": {
              "@type": "Organization",
              "name": "Newfold Digital",
              "url": "https://newfold.com"
            },
            "url": "https://krinalmehta.com",
            "sameAs": [
              "https://www.linkedin.com/in/krinal",
              "https://twitter.com/krinal",
              "https://www.youtube.com/@krinal"
            ],
            "knowsAbout": [
              "Search Engine Optimization",
              "Growth Strategy",
              "Paid Media",
              "B2B SaaS",
              "Answer Engine Optimization",
              "AI-Powered Marketing"
            ],
            "image": "https://krinalmehta.com/images/krinal-headshot.jpg"
          })
        }}
      />
    </>
  )
}
