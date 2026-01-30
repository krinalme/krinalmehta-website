import type { Metadata } from 'next'
import { Instrument_Serif, DM_Sans } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Krinal Mehta — Growth Leader',
    template: '%s — Krinal Mehta',
  },
  description: 'Full-stack growth operator building acquisition systems across organic, paid, and partnerships at multi-billion dollar scale. Director of SEO at Newfold Digital.',
  metadataBase: new URL('https://www.krinalmehta.com'),
  openGraph: {
    title: 'Krinal Mehta — Growth Leader',
    description: 'Full-stack growth operator building acquisition systems at multi-billion dollar scale.',
    url: 'https://www.krinalmehta.com',
    siteName: 'Krinal Mehta',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krinal Mehta — Growth Leader',
    description: 'Full-stack growth operator building acquisition systems at multi-billion dollar scale.',
    site: '@krinal',
    creator: '@krinal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.krinalmehta.com/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Krinal Mehta",
              "url": "https://www.krinalmehta.com",
              "description": "Full-stack growth operator building acquisition systems across organic, paid, and partnerships at multi-billion dollar scale.",
              "author": {
                "@type": "Person",
                "name": "Krinal Mehta",
                "url": "https://www.krinalmehta.com"
              }
            })
          }}
        />
      </body>
    </html>
  )
}
