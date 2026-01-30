import { createOGImage, ogSize, ogContentType } from '@/app/og-utils'

export const dynamic = 'force-static'
export const alt = 'About Krinal Mehta'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return createOGImage({
    title: 'About Krinal Mehta',
    subtitle: '17 years building growth engines across SEO, partnerships, and paid media. From startup founder to enterprise director.',
    tag: 'About',
  })
}
