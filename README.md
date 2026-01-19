# krinalmehta.com

Personal website for Krinal Mehta - Growth Leader.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS (no external CSS frameworks)
- **Fonts**: Instrument Serif + DM Sans (Google Fonts)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy via GitHub

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Custom Domain Setup

1. In Vercel dashboard, go to your project
2. Go to Settings → Domains
3. Add `krinalmehta.com`
4. Update your domain's DNS:
   - Add an A record pointing to `76.76.21.21`
   - Or add a CNAME record pointing to `cname.vercel-dns.com`

### Substack Newsletter Subdomain

To set up `newsletter.krinalmehta.com`:

1. Create your Substack publication
2. In Substack Settings → Publication details → Custom domain
3. Enter `newsletter.krinalmehta.com`
4. In your DNS provider, add a CNAME record:
   - Name: `newsletter`
   - Value: `target.substack-custom-domains.com`

## Project Structure

```
krinal-nextjs/
├── app/
│   ├── layout.tsx      # Root layout with fonts & metadata
│   ├── globals.css     # All styles
│   ├── page.tsx        # Homepage
│   ├── about/
│   │   └── page.tsx    # About page
│   ├── work/
│   │   └── page.tsx    # Work page
│   ├── speaking/
│   │   └── page.tsx    # Speaking page
│   └── contact/
│       └── page.tsx    # Contact page
├── components/
│   ├── Navigation.tsx  # Shared navigation
│   └── Footer.tsx      # Shared footer
├── public/
│   └── images/
│       └── krinal-headshot.jpg
├── package.json
├── next.config.js
└── tsconfig.json
```

## Making Edits

### Content Changes

All content is in the page files (`app/*/page.tsx`). Just find the text you want to change and edit it.

### Style Changes

All styles are in `app/globals.css`. CSS variables at the top control:
- Colors (`--color-ink`, `--color-paper`, etc.)
- Fonts (`--font-display`, `--font-body`)
- Spacing (`--space-sm`, `--space-md`, etc.)

### Adding a New Page

1. Create a new folder in `app/` (e.g., `app/new-page/`)
2. Add a `page.tsx` file inside it
3. Import Navigation and Footer components
4. Add a link to the nav in `components/Navigation.tsx`

## Performance

This site is optimized for Core Web Vitals:
- Static generation (no server-side rendering)
- Minimal JavaScript
- System font fallbacks while Google Fonts load
- Responsive images via Next.js Image component
- Skip link for accessibility
- Reduced motion support

## License

All rights reserved. This is a personal website.
