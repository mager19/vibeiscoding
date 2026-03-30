import Link from 'next/link'
import { type ReactNode } from 'react'

interface ButtonProps {
  variant?: 'gradient' | 'ghost' | 'glass' | 'solid'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  href?: string
}

const variants = {
  gradient:
    'bg-gradient-to-r from-primary to-secondary text-black font-bold uppercase tracking-widest hover:opacity-90 hover:shadow-glow-primary transition-all active:scale-95',
  ghost:
    'border border-outline-variant text-on-surface font-bold uppercase tracking-widest hover:bg-surface-high transition-all',
  glass:
    'bg-surface-bright/50 backdrop-blur-sm border border-outline-variant/20 text-on-surface font-bold uppercase tracking-widest hover:bg-surface-bright/70 transition-all',
  solid:
    'bg-primary-dim text-white font-bold uppercase tracking-widest hover:bg-[#a8004f] transition-all active:scale-95',
}

const sizes = {
  sm: 'px-5 py-1.5 text-xs rounded-md',
  md: 'px-8 py-3 text-sm rounded-md',
  lg: 'px-10 py-4 text-sm rounded-md',
}

export function Button({
  variant = 'gradient',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  children,
  onClick,
  type = 'button',
  disabled = false,
  href,
}: ButtonProps) {
  const classes = [
    'inline-flex items-center gap-2',
    variants[variant],
    sizes[size],
    disabled ? 'opacity-40 pointer-events-none' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  )
}
