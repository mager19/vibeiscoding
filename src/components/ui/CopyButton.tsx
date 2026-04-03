'use client'

import { useState } from 'react'

interface CopyButtonProps {
  text: string
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      title={copied ? 'Copiado' : 'Copiar al portapapeles'}
      className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest transition-all duration-200 select-none"
      style={{
        background: copied ? 'rgba(74,222,128,0.12)' : 'rgba(255,255,255,0.05)',
        border: copied ? '1px solid rgba(74,222,128,0.35)' : '1px solid rgba(255,255,255,0.08)',
        color: copied ? '#4ade80' : 'rgba(255,255,255,0.3)',
      }}
      onMouseEnter={e => {
        if (!copied) {
          ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)'
          ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.7)'
        }
      }}
      onMouseLeave={e => {
        if (!copied) {
          ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)'
          ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.3)'
        }
      }}
    >
      {copied ? (
        <>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Copiado
        </>
      ) : (
        <>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copiar
        </>
      )}
    </button>
  )
}
