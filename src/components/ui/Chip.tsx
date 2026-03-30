'use client'

import { type ReactNode } from 'react'

interface ChipProps {
  children: ReactNode
  active?: boolean
  onClick?: () => void
  className?: string
}

export function Chip({ children, active = false, onClick, className = '' }: ChipProps) {
  const base =
    'inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all'
  const activeClass = 'bg-secondary-container text-on-secondary-container'
  const inactiveClass = 'bg-surface-high text-on-surface-variant'
  const interactiveClass = onClick
    ? 'cursor-pointer hover:bg-surface-highest hover:text-on-surface'
    : ''

  if (onClick) {
    return (
      <span
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        className={`${base} ${active ? activeClass : inactiveClass} ${interactiveClass} ${className}`}
      >
        {children}
      </span>
    )
  }

  return (
    <span className={`${base} ${active ? activeClass : inactiveClass} ${className}`}>
      {children}
    </span>
  )
}
