import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Krinal Mehta — Growth Leader',
    template: '%s — Krinal Mehta',
  },
  description: 'Full-stack growth operator building acquisition systems across organic, paid, and partnerships at multi-billion dollar scale. Director of SEO at Newfold Digital.',
  metadataBase: new URL('https://krinalmehta.com'),
  openGraph: {
    title: 'Krinal Mehta — Growth Leader',
    description: 'Full-stack growth operator building acquisition systems at multi-billion dollar scale.',
    url: 'https://krinalmehta.com',
    siteName: 'Krinal Mehta',
    images: [
      {
        url: '/images/krinal-headshot.jpg',
        width: 1200,
        height: 630,
      },
    ],
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  )
}
