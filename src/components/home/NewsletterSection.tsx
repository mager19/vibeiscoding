'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { GlassPanel } from '@/components/ui'
import { siteConfig } from '@/config/site.config'
import { es } from '@/lib/i18n/es'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  if (!siteConfig.features.newsletter) return null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="newsletter" className="bg-surface-low py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <GlassPanel className="p-6 md:p-12 text-center">
          {/* Headline */}
          <p className="text-[10px] font-bold uppercase tracking-ultra text-tertiary mb-4">
            // transmisión segura
          </p>
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-on-surface">
            {es.home.newsletter.headline}
          </h2>
          <p className="mt-6 text-on-surface-variant font-light max-w-lg mx-auto leading-relaxed">
            {es.home.newsletter.description}
          </p>

          {/* Form */}
          {status === 'success' ? (
            <p className="mt-8 text-tertiary font-bold uppercase tracking-widest text-sm">
              {es.home.newsletter.success}
            </p>
          ) : (
            <form onSubmit={handleSubmit} aria-label="Suscripción al newsletter" className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={es.home.newsletter.placeholder}
                aria-label="Correo electrónico"
                required
                className="flex-1 bg-surface-high border-none rounded-md px-5 py-4 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center justify-center gap-2 bg-primary-dim text-white font-bold uppercase tracking-widest text-xs px-7 py-3 rounded-md hover:bg-[#a8004f] transition-all disabled:opacity-50 whitespace-nowrap"
              >
                <Send size={14} />
                {status === 'loading' ? '...' : es.home.newsletter.cta}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-3 text-error text-xs font-bold uppercase tracking-wider">
              {es.home.newsletter.error}
            </p>
          )}

          <p className="mt-4 text-[10px] text-on-surface-variant/40 uppercase tracking-wider">
            {es.home.newsletter.legal}
          </p>
        </GlassPanel>
      </div>
    </section>
  )
}
