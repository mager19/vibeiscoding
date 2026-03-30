import { ImageResponse } from 'next/og'
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects'
import { siteConfig } from '@/config/site.config'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return [{ id: slug, alt: slug }]
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  const title = project?.frontmatter.title ?? 'Proyecto'
  const description = project?.frontmatter.shortDescription ?? siteConfig.description
  const level = project?.frontmatter.level ?? 'BEGINNER'
  const time = project?.frontmatter.estimatedTime ?? ''

  const levelColor =
    level === 'principiante' ? '#8ff5ff' :
    level === 'intermedio'   ? '#ac8aff' :
                               '#ff89ac'

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
        {/* Glow */}
        <div style={{
          position: 'absolute', top: 60, right: 100,
          width: 360, height: 360,
          borderRadius: '50%',
          background: `${levelColor}18`,
          filter: 'blur(80px)',
        }} />

        {/* Top — site + level badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontSize: 16, fontWeight: 900,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            background: 'linear-gradient(90deg, #ff89ac 0%, #ac8aff 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}>
            {siteConfig.name.toUpperCase()}
          </span>
          <span style={{
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            padding: '6px 14px',
            borderRadius: 4,
            border: `1px solid ${levelColor}50`,
            color: levelColor,
            background: `${levelColor}10`,
          }}>
            {level.toUpperCase()}
          </span>
        </div>

        {/* Center — project title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
          }}>
            // PROYECTO
          </div>
          <div style={{
            fontSize: title.length > 30 ? 54 : 68,
            fontWeight: 900,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            lineHeight: 0.95,
            color: '#ffffff',
          }}>
            {title}
          </div>
          <div style={{
            fontSize: 20, fontWeight: 300,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 680,
            lineHeight: 1.5,
          }}>
            {description}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontSize: 13, fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
          }}>
            vibeiscoding.com
          </span>
          {time && (
            <span style={{
              fontSize: 13, fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
            }}>
              {time}
            </span>
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}
