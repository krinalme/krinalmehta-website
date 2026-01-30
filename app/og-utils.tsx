import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

const instrumentSerif = readFileSync(join(process.cwd(), 'app/fonts/InstrumentSerif-Regular.ttf'))
const dmSans = readFileSync(join(process.cwd(), 'app/fonts/DMSans-Regular.ttf'))

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

export function createOGImage({
  title,
  subtitle,
  tag,
}: {
  title: string
  subtitle: string
  tag?: string
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          backgroundColor: '#1a1a1a',
          color: '#fafaf9',
          fontFamily: 'DM Sans',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 18, opacity: 0.5 }}>www.krinalmehta.com</span>
          {tag && (
            <span
              style={{
                fontSize: 14,
                opacity: 0.5,
                border: '1px solid rgba(250,250,249,0.25)',
                padding: '6px 16px',
                borderRadius: 20,
              }}
            >
              {tag}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 56,
              fontFamily: 'Instrument Serif',
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 22,
              opacity: 0.65,
              lineHeight: 1.5,
              maxWidth: 800,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 2, backgroundColor: 'rgba(250,250,249,0.3)' }} />
          <span style={{ fontSize: 14, opacity: 0.4, letterSpacing: 2 }}>KRINAL MEHTA</span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: 'Instrument Serif', data: instrumentSerif, style: 'normal' as const, weight: 400 as const },
        { name: 'DM Sans', data: dmSans, style: 'normal' as const, weight: 400 as const },
      ],
    }
  )
}
