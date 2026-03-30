import { type ReactNode } from 'react'

interface GradientTextProps {
  variant?: 'primary' | 'full'
  className?: string
  children: ReactNode
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p'
}

const gradients = {
  primary: 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent',
  full: 'bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent',
}

export function GradientText({
  variant = 'primary',
  className = '',
  children,
  as: Tag = 'span',
}: GradientTextProps) {
  return (
    <Tag className={`${gradients[variant]} ${className}`}>
      {children}
    </Tag>
  )
}
