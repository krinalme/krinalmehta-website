import { createOGImage, ogSize, ogContentType } from '@/app/og-utils'

export const alt = 'Contact Krinal Mehta'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return createOGImage({
    title: 'Get in Touch',
    subtitle: 'Available for speaking engagements, consulting, and growth advisory. Based in Toronto, Canada.',
    tag: 'Contact',
  })
}
