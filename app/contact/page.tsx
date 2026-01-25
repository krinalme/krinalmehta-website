import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Krinal Mehta. Connect on LinkedIn or reach out via email.',
}

export default function Contact() {
  return (
    <>
      <Navigation />
      
      <main id="main-content" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-xl) var(--space-md)', paddingTop: 'calc(var(--space-xl) + 60px)' }}>
          <div style={{ maxWidth: '600px', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 'var(--space-md)' }}>Let's connect</h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-ink-light)', lineHeight: 1.7, marginBottom: 'var(--space-lg)' }}>The best way to reach me is on LinkedIn or via email. I typically respond within a few days. Want to learn more first? Check out my <Link href="/work" style={{ color: 'var(--color-ink)', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.3)', textUnderlineOffset: '3px' }}>work history</Link> or <Link href="/case-studies" style={{ color: 'var(--color-ink)', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.3)', textUnderlineOffset: '3px' }}>case studies</Link>.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', alignItems: 'center' }}>
              <a 
                href="https://www.linkedin.com/in/krinal" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  fontSize: '1.1rem', 
                  padding: '1rem 2rem', 
                  border: '1px solid rgba(0,0,0,0.12)', 
                  borderRadius: '8px', 
                  width: '100%', 
                  maxWidth: '320px', 
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              
              <a 
                href="mailto:krinalmehta@gmail.com"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  fontSize: '1.1rem', 
                  padding: '1rem 2rem', 
                  border: '1px solid rgba(0,0,0,0.12)', 
                  borderRadius: '8px', 
                  width: '100%', 
                  maxWidth: '320px', 
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Email
              </a>
              
              <a 
                href="https://twitter.com/krinal" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  fontSize: '1.1rem', 
                  padding: '1rem 2rem', 
                  border: '1px solid rgba(0,0,0,0.12)', 
                  borderRadius: '8px', 
                  width: '100%', 
                  maxWidth: '320px', 
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </a>
            </div>
            
            <p style={{ marginTop: 'var(--space-lg)', fontSize: '0.95rem', color: 'var(--color-ink-muted)' }}>Based in Toronto, Canada · EST timezone</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
