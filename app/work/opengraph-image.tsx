import { createOGImage, ogSize, ogContentType } from '@/app/og-utils'

export const alt = 'Work Experience — Krinal Mehta'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return createOGImage({
    title: 'Work & Experience',
    subtitle: 'Building and scaling growth teams from startup to enterprise. Currently Director of SEO at Newfold Digital.',
    tag: 'Experience',
  })
}
