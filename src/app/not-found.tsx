'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="hero-gradient grain-overlay relative min-h-screen flex items-center overflow-hidden">

      {/* Beam lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 800 700" className="absolute right-0 top-0 h-full w-[55%] opacity-[0.15]" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <filter id="glow404" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <linearGradient id="beam404a" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff89ac" stopOpacity="0"/>
              <stop offset="40%" stopColor="#ff0080" stopOpacity="1"/>
              <stop offset="100%" stopColor="#ac8aff" stopOpacity="0.3"/>
            </linearGradient>
            <linearGradient id="beam404b" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ac8aff" stopOpacity="0"/>
              <stop offset="50%" stopColor="#ac8aff" stopOpacity="1"/>
              <stop offset="100%" stopColor="#8ff5ff" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          <path d="M 650 -50 C 520 150, 750 280, 580 420 C 420 560, 700 620, 620 780" fill="none" stroke="url(#beam404a)" strokeWidth="1.5" filter="url(#glow404)" strokeDasharray="420 800" strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" from="1200" to="-1200" dur="18s" repeatCount="indefinite"/>
          </path>
          <path d="M 720 80 C 580 200, 800 350, 640 500 C 480 640, 760 680, 680 820" fill="none" stroke="url(#beam404b)" strokeWidth="1" filter="url(#glow404)" strokeDasharray="380 900" strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" from="1280" to="-1280" dur="24s" repeatCount="indefinite"/>
          </path>
        </svg>
      </div>

      {/* Neon orbs */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,0,128,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(172,138,255,0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-8 py-24">

        {/* Terminal prompt */}
        <p className="font-mono text-[10px] font-bold uppercase tracking-ultra mb-8" style={{ color: '#8ff5ff' }}>
          <span style={{ color: '#ff89ac' }}>{'>'}</span> error 404 — route not found
        </p>

        {/* 404 */}
        <div className="relative mb-6">
          <span
            className="block font-black uppercase leading-none select-none"
            style={{
              fontSize: 'clamp(6rem, 22vw, 18rem)',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,137,172,0.25)',
              letterSpacing: '-0.04em',
            }}
          >
            404
          </span>
          <span
            className="absolute inset-0 block font-black uppercase leading-none"
            style={{
              fontSize: 'clamp(6rem, 22vw, 18rem)',
              background: 'linear-gradient(135deg, #ff89ac 0%, #ac8aff 50%, #8ff5ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.04em',
              clipPath: 'inset(0 0 55% 0)',
            }}
          >
            404
          </span>
        </div>

        {/* Headline + copy */}
        <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-4">
          PÁGINA NO ENCONTRADA
        </h1>
        <p className="text-on-surface-variant font-light text-sm md:text-base max-w-md mb-10 leading-relaxed mx-auto">
          La IA tampoco sabe qué hay aquí.{' '}
          <span className="text-white/70">Vuelve al inicio o explora los proyectos.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest px-6 py-3 rounded-md transition-all duration-200 hover:scale-[1.02]"
            style={{ background: '#e30071', color: '#fff' }}
          >
            ← VOLVER AL INICIO
          </Link>
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest px-6 py-3 rounded-md transition-all duration-200 hover:border-primary/60"
            style={{ border: '1px solid rgba(255,137,172,0.3)', color: '#ff89ac' }}
          >
            VER PROYECTOS
          </Link>
        </div>

        {/* Status line */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: '#8ff5ff', opacity: 0.6 }}>
            SYSTEM: route_resolver — exit code 404
          </span>
        </div>

      </div>
    </section>
  )
}
