'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button, GradientText } from '@/components/ui'
import { siteConfig } from '@/config/site.config'
import { es } from '@/lib/i18n/es'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50 glass-panel shadow-navbar">
      <nav aria-label="Navegación principal" className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Inicio — vibeiscoding.com" className="flex items-center gap-2">
          <span className="text-sm font-black uppercase tracking-widest">
            <GradientText variant="full">{es.site.name}</GradientText>
          </span>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#e30071' }} />
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#ac8aff' }} />
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#8ff5ff' }} />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          {siteConfig.features.newsletter && (
            <Button variant="solid" size="sm" href="/#newsletter">
              {es.nav.subscribe}
            </Button>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-surface-variant hover:text-on-surface transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        role="navigation"
        aria-label="Menú móvil"
        className={`md:hidden glass-panel border-t border-outline-variant/10 px-6 flex flex-col gap-6 transition-all duration-300 ease-in-out ${
          mobileOpen
            ? 'max-h-96 py-6 opacity-100 pointer-events-auto'
            : 'max-h-0 py-0 opacity-0 pointer-events-none overflow-hidden'
        }`}
      >
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors"
          >
            {item.label}
          </Link>
        ))}
        {siteConfig.features.newsletter && (
          <Button
            variant="solid"
            size="sm"
            href="/#newsletter"
            onClick={() => setMobileOpen(false)}
          >
            {es.nav.subscribe}
          </Button>
        )}
      </div>
    </header>
  )
}
