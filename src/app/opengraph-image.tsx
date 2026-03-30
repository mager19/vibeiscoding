import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site.config'

export const runtime = 'edge'
export const alt = siteConfig.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#0a0a0a',
          position: 'relative',
        }}
      >
        {/* Glow orbs */}
        <div style={{
          position: 'absolute', top: 80, right: 120,
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'rgba(227,0,113,0.12)',
          filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute', bottom: 60, left: 80,
          width: 300, height: 300,
          borderRadius: '50%',
          background: 'rgba(172,138,255,0.10)',
          filter: 'blur(60px)',
        }} />

        {/* Top — site name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{
            fontSize: 18, fontWeight: 900,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            background: 'linear-gradient(90deg, #ff89ac 0%, #ac8aff 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}>
            {siteConfig.name.toUpperCase()}
          </span>
          <div style={{ display: 'flex', gap: 6, marginLeft: 4 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#e30071' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ac8aff' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#8ff5ff' }} />
          </div>
        </div>

        {/* Center — headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#8ff5ff',
          }}>
            PROYECTOS REALES. CÓDIGO CON IA.
          </div>
          <div style={{
            fontSize: 80, fontWeight: 900,
            letterSpacing: '-0.04em', textTransform: 'uppercase',
            lineHeight: 0.9,
            background: 'linear-gradient(90deg, #ffffff 0%, #ac8aff 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}>
            VIBE<br />CODING
          </div>
          <div style={{
            fontSize: 22, fontWeight: 300,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 600,
            lineHeight: 1.5,
          }}>
            {siteConfig.description}
          </div>
        </div>

        {/* Bottom — URL */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{
            fontSize: 14, fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
          }}>
            vibeiscoding.com
          </span>
          <div style={{
            fontSize: 12, fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(227,0,113,0.6)',
          }}>
            un proyecto de mager19
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
