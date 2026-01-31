# Krinal Mehta Personal Website - Project Documentation

## Project Overview

This is **Krinal Mehta's Professional Personal Website** - a portfolio and personal brand website showcasing 17+ years of growth marketing and SEO leadership experience.

**Purpose:**
- Professional portfolio and executive biography
- Showcase work history and case studies
- Speaking engagements and media appearances
- Contact and networking hub
- Newsletter subscription landing page

**Live Site:** (Custom domain recommended: krinalmehta.com)

---

## Tech Stack

### Core Technologies
- **Next.js 14** with App Router (latest version)
- **React 18.2.0** for UI components
- **TypeScript 5.3.0** for type safety
- **Pure CSS** (no CSS frameworks like Tailwind or Bootstrap)

### Fonts
- **Display:** Instrument Serif (Google Fonts)
- **Body:** DM Sans (Google Fonts)

### Deployment
- **Static Export** (`output: 'export'` in next.config.js)
- **Recommended Platform:** Vercel
- Compatible with any static hosting provider

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout with metadata, fonts, structured data
│   ├── globals.css             # All CSS (777 lines - design system & components)
│   ├── page.tsx                # Homepage (hero, brands, proof, newsletter, testimonials)
│   ├── about/page.tsx          # About page (bio, story, timeline, philosophy)
│   ├── work/page.tsx           # Work/case studies (detailed role descriptions)
│   ├── speaking/page.tsx       # Speaking engagements and webinars
│   └── contact/page.tsx        # Contact page (email, LinkedIn, Twitter)
├── components/
│   ├── Navigation.tsx          # Sticky nav with mobile hamburger menu
│   └── Footer.tsx              # Footer with social links
├── public/
│   ├── favicon.svg
│   └── images/
│       └── krinal-headshot.jpg # Main headshot used throughout site
├── package.json                # Minimal dependencies
├── next.config.js              # Static export configuration
├── tsconfig.json               # TypeScript configuration
└── .gitignore
```

---

## Key Files

### Configuration Files

#### package.json
- **Production Dependencies:**
  - `next@14.0.4`
  - `react@^18.2.0`
  - `react-dom@^18.2.0`
- **Dev Dependencies:**
  - `@types/node@^20.10.0`
  - `@types/react@^18.2.0`
  - `@types/react-dom@^18.2.0`
  - `typescript@^5.3.0`

#### next.config.js
```javascript
{
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
}
```

#### tsconfig.json
- Strict TypeScript settings
- Path aliasing: `@/*` → project root

---

### Layout & Shared Components

#### app/layout.tsx
- Sets site-wide metadata (title, description, Open Graph, Twitter Cards)
- Imports Google Fonts (Instrument Serif + DM Sans)
- Includes skip link for accessibility
- Schema.org JSON-LD structured data (Person type)
- Root HTML structure

#### components/Navigation.tsx
- **Features:**
  - Fixed sticky navigation bar
  - Mobile hamburger menu (breakpoint: 768px)
  - Scroll-triggered styling
  - Active page highlighting
- **Links:**
  - About
  - Work
  - Newsletter (external: newsletter.krinalmehta.com)
  - Speaking
  - Contact

#### components/Footer.tsx
- Brand name
- Social media links (LinkedIn, Twitter, YouTube)
- Contact link

---

### Page Files

#### page.tsx (Homepage)
**Sections:**
1. Hero section with headshot and introduction
2. Brands section (logos: Bluehost, HostGator, Yoast, FreshBooks, PwC, etc.)
3. Proof/Results section (6 metric cards)
4. Newsletter signup section
5. Testimonials section (2 cards)
6. Speaking preview (3 featured talks)

**Key Metrics Displayed:**
- $30M ARR from organic
- 400% traffic growth
- 20X query visibility
- 70% faster production
- 7 international markets
- 29-person team

#### about/page.tsx
**Content:**
- Detailed personal biography (17 years in growth/SEO)
- Professional philosophy (3 core beliefs)
- Career timeline (2008-Present, 7 major roles)
- Beyond work section (personal life, family, interests)
- CTA for connections

#### work/page.tsx
**Content:**
- Current role: Newfold Digital (2024-Present)
  - Team of 29
  - 20X query visibility
  - AI-powered content operations
- Previous role: FreshBooks (2020-2024)
  - $30M ARR from organic
  - 400% traffic growth
  - Marketplace launch
- Earlier roles summary
- Featured case study
- Client list (10 brands)

#### speaking/page.tsx
**Content:**
- Webinar/talk listings (4 events with links)
- Teaching experience (BrainStation, IAB Canada)
- 6 speaking topics (AI/AEO, Enterprise SEO, B2B SaaS, etc.)
- CTA for speaking inquiries

#### contact/page.tsx
**Contact Methods:**
- LinkedIn
- Email: krinalmehta@gmail.com
- Twitter
- Location: Toronto, Canada (EST timezone)

---

## Design System

### Colors (CSS Variables)
```css
--color-ink: #1a1a1a;           /* Primary text */
--color-ink-light: #4a4a4a;     /* Secondary text */
--color-ink-lighter: #717171;   /* Tertiary text */
--color-paper: #fafaf9;         /* Background */
--color-paper-warm: #f5f4f0;    /* Warm background */
--color-accent: #2563eb;        /* Links/buttons */
```

### Typography
```css
--font-display: 'Instrument Serif', serif;
--font-body: 'DM Sans', sans-serif;
--font-size-base: 18px;         /* Desktop */
--font-size-base-mobile: 16px;  /* Mobile */
```

### Spacing Scale
```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 2rem;     /* 32px */
--space-lg: 4rem;     /* 64px */
--space-xl: 6rem;     /* 96px */
```

### Layout Widths
```css
--max-width: 1200px;       /* Content container */
--max-width-prose: 720px;  /* Text-heavy sections */
```

---

## Responsive Design

### Breakpoints
- **900px:** Multi-column to single column (hero, grids)
- **768px:** Mobile navigation hamburger menu
- **600px:** Adjusted brand grid and font sizes

### Mobile Optimizations
- Hamburger menu for navigation
- Single column layouts
- Smaller font sizes
- Centered content
- Hidden scroll indicator
- Adjusted image sizes (280px mobile vs 450px desktop)

---

## Key Features

### Visual & Interaction
- Responsive design (mobile, tablet, desktop)
- Sticky navigation with scroll effects
- Mobile hamburger menu
- Smooth scroll behavior
- Hover effects on cards and links
- Grayscale filter on images
- Scroll indicator animation on homepage
- Skip link for keyboard accessibility
- Focus states for keyboard navigation

### SEO Features
- Server-side metadata generation
- Open Graph and Twitter Card support
- Schema.org structured data (Person type)
- Semantic HTML
- Alt text on images
- Robots meta tags

### Accessibility
- WCAG compliance
- Skip link for keyboard navigation
- Semantic HTML structure
- Focus-visible styling
- Keyboard navigation support

---

## Content Overview

### Professional Identity
- Director of SEO at Newfold Digital
- Former Global SEO Lead at FreshBooks
- Founder of Growth Dot Digital
- Co-founder of Squid Sense AI
- Speaker and instructor

### Focus Areas
- Growth strategy at scale
- SEO and organic acquisition
- Paid media and partnerships
- AI-powered marketing operations
- B2B SaaS expertise
- Enterprise team leadership
- Data infrastructure

### Key Achievements
- 17 years of experience
- $30M ARR generated from organic at FreshBooks
- 400% traffic growth
- 20X query visibility improvement
- 29-person team leadership
- 70% production time reduction through AI
- 7 international markets launched

---

## Development Commands

```bash
npm run dev     # Start development server (http://localhost:3000)
npm run build   # Build for production (static export to /out)
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Auto-deploys on push to main
3. Configure custom domain (krinalmehta.com)

### Other Static Hosts
The site builds to a static export (`/out` folder) and can be hosted on:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

---

## File Naming Conventions

- **Components:** PascalCase (e.g., `Navigation.tsx`, `Footer.tsx`)
- **Pages:** lowercase with Next.js App Router conventions (e.g., `page.tsx`, `layout.tsx`)
- **Styles:** lowercase with dashes (e.g., `globals.css`)
- **Images:** lowercase with dashes (e.g., `krinal-headshot.jpg`)

---

## Code Style

### TypeScript
- Strict mode enabled
- Interface for props
- Type annotations on functions
- No implicit any

### React
- Functional components only
- Server components by default
- Client components marked with 'use client'
- Metadata API for SEO

### CSS
- CSS variables for design tokens
- BEM-like naming convention
- Mobile-first approach
- Avoid !important
- Logical property values (e.g., `inline-start` instead of `left`)

---

## External Links

### Newsletter
- **URL:** newsletter.krinalmehta.com
- **Platform:** Substack
- Opens in new tab

### Social Media
- **LinkedIn:** linkedin.com/in/krinalmehta
- **Twitter:** @Krinal (twitter.com/Krinal)
- **YouTube:** youtube.com/@krinalmehta

---

## Images

### Main Headshot
- **Location:** `/public/images/krinal-headshot.jpg`
- **Usage:** Homepage hero, About page, Contact page
- **Styling:** Grayscale filter, rounded corners
- **Sizes:**
  - Desktop: 450px × 450px
  - Mobile: 280px × 280px

### Future Images
Place new images in `/public/images/` directory.

---

## Recent Changes (Git History)

- **3d05874** - Reduce about page image height
- **525c6a4** - Fix syntax errors in page.tsx brand items
- **ced45b4** - Initial commit: Next.js personal website

---

## Known Issues / TODO

(Add any known issues or future improvements here)

---

## Contact for Technical Issues

**Email:** krinalmehta@gmail.com
**Location:** Toronto, Canada (EST timezone)

---

## Notes for Future Development

### When Adding New Pages:
1. Create folder in `/app` directory
2. Add `page.tsx` file
3. Include metadata export
4. Update Navigation component if needed
5. Test on mobile and desktop

### When Modifying Styles:
1. Use CSS variables from `globals.css`
2. Test at all breakpoints (900px, 768px, 600px)
3. Verify mobile hamburger menu still works
4. Check skip link functionality

### When Adding Images:
1. Place in `/public/images/`
2. Use Next.js Image component
3. Add descriptive alt text
4. Consider mobile sizing

---

**Last Updated:** 2026-01-25
**Next.js Version:** 14.0.4
**Node Version Required:** 20+
