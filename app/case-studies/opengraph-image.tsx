import { createOGImage, ogSize, ogContentType } from '@/app/og-utils'

export const alt = 'Case Studies — Krinal Mehta'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return createOGImage({
    title: 'Case Studies',
    subtitle: 'Deep dives into building growth systems at scale. Strategic approach, measurable results.',
    tag: 'Case Studies',
  })
}
