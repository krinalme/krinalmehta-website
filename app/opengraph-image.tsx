import { createOGImage, ogSize, ogContentType } from '@/app/og-utils'

export const alt = 'Krinal Mehta — Growth Leader'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return createOGImage({
    title: 'Krinal Mehta',
    subtitle: 'Full-stack growth operator building acquisition systems across organic, paid, and partnerships at multi-billion dollar scale.',
    tag: 'Growth Leader',
  })
}
