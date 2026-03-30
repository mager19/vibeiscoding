import { type ReactNode } from 'react'

interface GlassPanelProps {
  className?: string
  children: ReactNode
  as?: 'div' | 'section' | 'article' | 'aside'
}

export function GlassPanel({
  className = '',
  children,
  as: Tag = 'div',
}: GlassPanelProps) {
  return (
    <Tag className={`glass-panel rounded-xl ${className}`}>
      {children}
    </Tag>
  )
}
