import { createOGImage, ogSize, ogContentType } from '@/app/og-utils'

export const alt = 'Speaking & Media — Krinal Mehta'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return createOGImage({
    title: 'Speaking & Media',
    subtitle: 'Conference talks, webinars, podcasts, and corporate training on SEO, growth strategy, and AI in marketing.',
    tag: 'Speaking',
  })
}
