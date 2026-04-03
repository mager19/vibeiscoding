import { MDXRemote } from 'next-mdx-remote/rsc'
import { type ProjectFrontmatter } from '@/types/project'
import { es } from '@/lib/i18n/es'
import { Button, MdxPre, CopyButton } from '@/components/ui'
import { Zap, CheckSquare, BookOpen, Clock, ExternalLink, Layers, ShieldCheck } from 'lucide-react'

const mdxComponents = { pre: MdxPre }

const alternativeTools = [
  { name: 'Claude Code',      color: '#ff89ac', border: 'rgba(255,137,172,0.3)', bg: 'rgba(255,137,172,0.08)' },
  { name: 'Cursor',           color: '#ac8aff', border: 'rgba(172,138,255,0.3)', bg: 'rgba(172,138,255,0.08)' },
  { name: 'GitHub Copilot',   color: '#8ff5ff', border: 'rgba(143,245,255,0.3)', bg: 'rgba(143,245,255,0.08)' },
  { name: 'Windsurf',         color: '#fbbf24', border: 'rgba(251,191,36,0.3)',  bg: 'rgba(251,191,36,0.08)'  },
  { name: 'ChatGPT + IDE',    color: '#4ade80', border: 'rgba(74,222,128,0.3)',  bg: 'rgba(74,222,128,0.08)'  },
]

interface BentoGridProps {
  project: ProjectFrontmatter
  content: string
}

// Split MDX content into named sections by ## headers
function parseSections(content: string): Record<string, string> {
  const sections: Record<string, string> = {}
  const parts = content.split(/^## /m)

  // First part (before any ##) is intro
  if (parts[0].trim()) sections['_intro'] = parts[0].trim()

  for (let i = 1; i < parts.length; i++) {
    const firstNewline = parts[i].indexOf('\n')
    if (firstNewline === -1) continue
    const heading = parts[i].slice(0, firstNewline).trim()
    const body = parts[i].slice(firstNewline + 1).trim()
    sections[heading] = body
  }

  return sections
}

// Extract plain text list items from markdown (max 5)
function extractListItems(markdown: string): string[] {
  return markdown
    .split('\n')
    .filter(line => /^[-*]\s/.test(line.trim()) || /^\d+\.\s/.test(line.trim()))
    .map(line => line.replace(/^[-*\d.]+\s+/, '').replace(/\*\*/g, '').trim())
    .filter(Boolean)
    .slice(0, 5)
}

// Extract all plain text list items from markdown (no limit)
function extractAllListItems(markdown: string): string[] {
  return markdown
    .split('\n')
    .filter(line => /^[-*]\s/.test(line.trim()) || /^\d+\.\s/.test(line.trim()))
    .map(line => line.replace(/^[-*\d.]+\s+/, '').replace(/\*\*/g, '').trim())
    .filter(Boolean)
}

// Parse ### subsections into title + items
function parseSubsections(content: string): Array<{ title: string; body: string; items: string[] }> {
  const parts = content.split(/^### /m)
  return parts.slice(1).map(part => {
    const firstNewline = part.indexOf('\n')
    if (firstNewline === -1) return { title: part.trim(), body: '', items: [] }
    const title = part.slice(0, firstNewline).trim()
    const body = part.slice(firstNewline + 1).trim()
    const items = body
      .split('\n')
      .filter(line => /^[-*]\s/.test(line.trim()))
      .map(line => line.replace(/^[-*]\s+/, '').replace(/\[[ x]\]\s*/i, '').replace(/\*\*/g, '').trim())
      .filter(Boolean)
    return { title, body, items }
  })
}

// Extract first code block content from markdown
function extractCodeBlock(markdown: string): string | null {
  const match = markdown.match(/```[^\n]*\n([\s\S]*?)```/)
  return match ? match[1].trim() : null
}

// Extract **Fase N — ...:** style phases from a section body
function extractPhases(markdown: string): Array<{ label: string; desc: string }> {
  const phases: Array<{ label: string; desc: string }> = []
  const lines = markdown.split('\n')
  for (const line of lines) {
    const match = line.match(/\*\*(Fase\s+\d+[^*]*)\*\*[:\s–—-]+(.+)/)
    if (match) phases.push({ label: match[1].trim(), desc: match[2].trim() })
  }
  return phases
}

export function BentoGrid({ project, content }: BentoGridProps) {
  const sections = parseSections(content)

  // Find sections by approximate name matching
  const overviewKey = Object.keys(sections).find(k => /overview/i.test(k)) || '_intro'
  const problemKey = Object.keys(sections).find(k => /problema/i.test(k))
  const solutionKey = Object.keys(sections).find(k => /soluci/i.test(k))
  const featuresKey = Object.keys(sections).find(k => /feature|mvp/i.test(k))
  const stepsKey = Object.keys(sections).find(k => /pasos|steps/i.test(k))
  const learningKey = Object.keys(sections).find(k => /aprender|learning|aprend/i.test(k))
  const resourcesKey = Object.keys(sections).find(k => /recursos|resources/i.test(k))
  const checklistKey = Object.keys(sections).find(k => /checklist|buenas.pr[aá]cticas|buenas practicas/i.test(k))
  const approachKey = Object.keys(sections).find(k => /abordarlo|abordar|approach/i.test(k))

  const problemItems = problemKey ? extractListItems(sections[problemKey]) : []
  const solutionItems = solutionKey ? extractListItems(sections[solutionKey]) : []
  const featureItems = featuresKey ? extractListItems(sections[featuresKey]) : []
  const stepsItems = stepsKey ? extractAllListItems(sections[stepsKey]) : []
  const learningItems = learningKey ? extractAllListItems(sections[learningKey]) : []

  // Checklist subsections
  const checklistSubs = checklistKey ? parseSubsections(sections[checklistKey]) : []

  // Approach subsections
  const approachSubs = approachKey ? parseSubsections(sections[approachKey]) : []
  const fasesSub = approachSubs.find(s => /fases?/i.test(s.title))
  const agentSub = approachSubs.find(s => /agente|chat/i.test(s.title))
  const toolSub = approachSubs.find(s => /tui|editor/i.test(s.title))
  const promptSub = approachSubs.find(s => /prompt/i.test(s.title))
  const phases = fasesSub ? extractPhases(fasesSub.body) : []
  const promptCode = promptSub ? extractCodeBlock(promptSub.body) : null

  // Split features into 3 columns
  const col = Math.ceil(featureItems.length / 3)
  const featureCols = [
    featureItems.slice(0, col),
    featureItems.slice(col, col * 2),
    featureItems.slice(col * 2),
  ]

  return (
    <div className="bg-black flex flex-col gap-4">

      {/* ROW 1 — Overview + Tech Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Overview — 2/3 */}
        <div className="lg:col-span-2 bg-[#1a1a1a] rounded-md p-5 md:p-8 lg:p-14 transition-transform duration-300 hover:-translate-y-1" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-0.5 h-6 bg-primary-dim flex-shrink-0" />
            <h2 className="text-sm font-black uppercase tracking-widest text-on-surface">OVERVIEW</h2>
          </div>
          <div className="prose prose-invert prose-sm max-w-none
            prose-headings:hidden
            prose-p:text-on-surface-variant prose-p:font-light prose-p:leading-relaxed prose-p:mb-4
            prose-li:text-on-surface-variant prose-li:font-light
            prose-strong:text-on-surface prose-strong:font-bold
            prose-a:text-secondary prose-a:no-underline hover:prose-a:text-primary
            prose-code:text-tertiary prose-code:bg-surface-high prose-code:px-1 prose-code:rounded
          ">
            <MDXRemote source={sections[overviewKey] || content} components={mdxComponents} />
          </div>
        </div>

        {/* Tech Stack — 1/3 */}
        <div className="bg-[#1e1e1e] rounded-md p-5 md:p-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-on-surface mb-6">TECH STACK</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={tech}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md"
                  style={{
                    background: i % 3 === 0 ? 'rgba(255,137,172,0.1)' : i % 3 === 1 ? 'rgba(172,138,255,0.1)' : 'rgba(143,245,255,0.1)',
                    border: `1px solid ${i % 3 === 0 ? 'rgba(255,137,172,0.3)' : i % 3 === 1 ? 'rgba(172,138,255,0.3)' : 'rgba(143,245,255,0.3)'}`,
                    color: i % 3 === 0 ? '#ff89ac' : i % 3 === 1 ? '#ac8aff' : '#8ff5ff',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-green-400/70">
              SYSTEM STATUS: OPTIMAL
            </span>
          </div>
        </div>
      </div>

      {/* ROW 2 — Problem + Solution (only if sections exist) */}
      {(problemKey || solutionKey) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Problem */}
          {problemKey && (
            <div className="bg-[#1a1a1a] rounded-md p-5 md:p-8 lg:p-10 transition-transform duration-300 hover:-translate-y-1" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <h2 className="text-sm font-black uppercase tracking-widest text-on-surface mb-8">THE PROBLEM</h2>
              {problemItems.length > 0 ? (
                <div className="space-y-5">
                  {problemItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-xs font-black text-on-surface-variant/20 w-5 flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm text-on-surface-variant font-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="prose prose-invert prose-sm max-w-none
                  prose-p:text-on-surface-variant prose-p:font-light prose-p:leading-relaxed prose-p:mb-4
                  prose-strong:text-on-surface prose-strong:font-bold
                ">
                  <MDXRemote source={sections[problemKey]} components={mdxComponents} />
                </div>
              )}
            </div>
          )}

          {/* Solution */}
          {solutionKey && (
            <div className="rounded-md p-5 md:p-8 lg:p-10 transition-transform duration-300 hover:-translate-y-1" style={{ background: '#1e1030', border: '1px solid rgba(172,138,255,0.2)' }}>
              <h2 className="text-sm font-black uppercase tracking-widest mb-8" style={{ color: '#ac8aff' }}>PROPOSED SOLUTION</h2>
              {solutionItems.length > 0 ? (
                <div className="space-y-5">
                  {solutionItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <Zap size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#ac8aff' }} />
                      <p className="text-sm text-on-surface-variant font-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="prose prose-invert prose-sm max-w-none
                  prose-p:text-on-surface-variant prose-p:font-light prose-p:leading-relaxed prose-p:mb-4
                  prose-strong:text-on-surface prose-strong:font-bold
                ">
                  <MDXRemote source={sections[solutionKey]} components={mdxComponents} />
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ROW 3+4 — MVP Features + Pasos Sugeridos (combined) */}
      {(featureItems.length > 0 || stepsItems.length > 0) && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* MVP Features — 1/3 (angosto, va primero) */}
          {featureItems.length > 0 && (
            <div className="rounded-md p-5 md:p-8 lg:p-10 flex flex-col transition-transform duration-300 hover:-translate-y-1" style={{ background: '#1e0810', border: '1px solid rgba(227,0,113,0.2)' }}>
              <div className="mb-8">
                <h2 className="text-xl font-black uppercase tracking-tighter">
                  <span className="text-on-surface">MVP </span>
                  <span style={{ color: '#e30071' }}>FEATURES</span>
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/30 block mt-1">
                  RELEASE PHASE: v0.1-ALPHA
                </span>
              </div>
              <div className="space-y-4">
                {featureItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckSquare size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#8ff5ff' }} />
                    <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pasos Sugeridos — 2/3 (ancho) */}
          {stepsItems.length > 0 && (
            <div className="lg:col-span-2 rounded-md p-5 md:p-8 lg:p-14 transition-transform duration-300 hover:-translate-y-1" style={{ background: '#121620', border: '1px solid rgba(100,130,255,0.15)' }}>
              <div className="mb-10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mb-2">
                  // CÓMO EJECUTARLO
                </p>
                <h2 className="text-xl font-black uppercase tracking-tighter text-on-surface">
                  PASOS SUGERIDOS
                </h2>
              </div>
              <div className="space-y-8">
                {stepsItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <span className="text-3xl font-black text-on-surface-variant/20 flex-shrink-0 leading-none w-10 text-right">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* ROW 5+6 — Lo que Aprenderás + Herramientas + Recursos y Referencias (3 cols) */}
      {(learningItems.length > 0 || project.toolSuggestion || (resourcesKey && sections[resourcesKey])) && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Col 1 — Lo que Aprenderás — cyan tint */}
          {learningItems.length > 0 && (
            <div className="rounded-md p-5 md:p-8 lg:p-10 transition-transform duration-300 hover:-translate-y-1" style={{ background: '#0e1e24', border: '1px solid rgba(143,245,255,0.2)' }}>
              <h2 className="text-sm font-black uppercase tracking-widest mb-8" style={{ color: '#8ff5ff' }}>
                LO QUE VAS A APRENDER
              </h2>
              <div className="space-y-4">
                {learningItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <BookOpen size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#8ff5ff' }} />
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Col 2 — Herramientas — purple tint */}
          {(project.toolSuggestion || project.estimatedTime) && (
            <div className="rounded-md p-5 md:p-8 lg:p-10 flex flex-col gap-6 transition-transform duration-300 hover:-translate-y-1" style={{ background: '#181028', border: '1px solid rgba(172,138,255,0.2)' }}>
              <div>
                <h2 className="text-sm font-black uppercase tracking-widest mb-8" style={{ color: '#ac8aff' }}>
                  HERRAMIENTAS
                </h2>
                {project.toolSuggestion && (
                  <div className="mb-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mb-1">
                      PUNTO DE PARTIDA SUGERIDO
                    </p>
                    <p className="text-base font-black" style={{ color: '#ac8aff' }}>
                      {project.toolSuggestion}
                    </p>
                  </div>
                )}
                {project.estimatedTime && (
                  <div className="flex items-center gap-2 mb-6">
                    <Clock size={13} className="text-on-surface-variant/60 flex-shrink-0" />
                    <span className="text-sm text-on-surface-variant font-light">{project.estimatedTime}</span>
                  </div>
                )}
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mb-3">
                  TAMBIÉN FUNCIONA CON
                </p>
                <div className="flex flex-wrap gap-2">
                  {alternativeTools.map(tool => (
                    <span
                      key={tool.name}
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                      style={{ background: tool.bg, border: `1px solid ${tool.border}`, color: tool.color }}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-on-surface-variant/40 font-light mt-4 leading-relaxed">
                  El método importa más que la herramienta. Elige la que ya conoces.
                </p>
              </div>
            </div>
          )}

          {/* Col 3 — Recursos y Referencias — green-dark tint */}
          {resourcesKey && sections[resourcesKey] && (
            <div className="rounded-md p-5 md:p-8 lg:p-10 transition-transform duration-300 hover:-translate-y-1" style={{ background: '#0e1a10', border: '1px solid rgba(74,222,128,0.2)' }}>
              <h2 className="text-sm font-black uppercase tracking-widest mb-8" style={{ color: '#4ade80' }}>
                RECURSOS Y REFERENCIAS
              </h2>
              <div className="prose prose-invert prose-sm max-w-none
                prose-headings:hidden
                prose-p:text-on-surface-variant prose-p:font-light prose-p:mb-2
                prose-li:text-on-surface-variant prose-li:font-light prose-li:leading-relaxed
                prose-a:text-secondary prose-a:underline prose-a:decoration-secondary/30
                hover:prose-a:text-primary hover:prose-a:decoration-primary/50
              ">
                <MDXRemote source={sections[resourcesKey]} components={mdxComponents} />
              </div>
            </div>
          )}

        </div>
      )}

      {/* ROW 7 — Checklist de Buenas Prácticas (only if section exists) */}
      {checklistSubs.length > 0 && (() => {
        const categoryMeta = [
          { pattern: /seguridad/i,               color: '#ff89ac', border: 'rgba(255,137,172,0.2)', bg: '#1e0c14', Icon: ShieldCheck },
          { pattern: /rendimiento|performance/i,  color: '#8ff5ff', border: 'rgba(143,245,255,0.2)', bg: '#0c1e22', Icon: Zap },
          { pattern: /arquitectura/i,             color: '#ac8aff', border: 'rgba(172,138,255,0.2)', bg: '#14102c', Icon: Layers },
          { pattern: /antes|publicar|mvp/i,       color: '#4ade80', border: 'rgba(74,222,128,0.2)',  bg: '#0c1c10', Icon: CheckSquare },
        ]
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category cells */}
            {checklistSubs.map((sub, i) => {
              const meta = categoryMeta.find(c => c.pattern.test(sub.title)) ?? categoryMeta[i % categoryMeta.length]
              const Icon = meta.Icon
              return (
                <div key={i} className="rounded-md p-5 md:p-8 lg:p-10 transition-transform duration-300 hover:-translate-y-1" style={{ background: meta.bg, border: `1px solid ${meta.border}` }}>
                  <div className="flex items-center gap-3 mb-6">
                    <Icon size={14} style={{ color: meta.color }} className="flex-shrink-0" />
                    <h3 className="text-xs font-black uppercase tracking-widest" style={{ color: meta.color }}>
                      {sub.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {sub.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span className="text-xs font-black flex-shrink-0 mt-0.5" style={{ color: meta.color, opacity: 0.4 }}>□</span>
                        <p className="text-sm text-on-surface-variant font-light leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )
      })()}

      {/* ROW 8 — Cómo Abordarlo (only if section exists) */}
      {approachKey && sections[approachKey] && (
        <div id="como-abordarlo" className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Fases — 2/3 */}
          {phases.length > 0 && (
            <div className="lg:col-span-2 rounded-md p-5 md:p-8 lg:p-14 transition-transform duration-300 hover:-translate-y-1" style={{ background: '#111828', border: '1px solid rgba(100,130,255,0.15)' }}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mb-8">
                // FASES DE DESARROLLO
              </p>
              <div className="space-y-7">
                {phases.map((phase, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <span className="text-2xl font-black text-on-surface-variant/15 flex-shrink-0 w-8 text-right leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#ac8aff' }}>
                        {phase.label}
                      </p>
                      <p className="text-sm text-on-surface-variant font-light leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Agente / TUI — 1/3 */}
          {(agentSub || toolSub) && (
            <div className="rounded-md p-5 md:p-8 flex flex-col gap-8 transition-transform duration-300 hover:-translate-y-1" style={{ background: '#180e28', border: '1px solid rgba(172,138,255,0.2)' }}>
              {agentSub && (
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 mb-4">
                    {agentSub.title}
                  </h3>
                  {agentSub.items.length > 0 ? (
                    <div className="space-y-3">
                      {agentSub.items.map((item, i) => (
                        <p key={i} className="text-xs text-on-surface-variant font-light leading-relaxed">{item}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                      {agentSub.body.replace(/\*\*/g, '').slice(0, 220).trim()}
                    </p>
                  )}
                </div>
              )}
              {toolSub && (
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 mb-4">
                    {toolSub.title}
                  </h3>
                  <div className="space-y-3">
                    {toolSub.items.length > 0 ? toolSub.items.map((item, i) => (
                      <p key={i} className="text-xs text-on-surface-variant font-light leading-relaxed">{item}</p>
                    )) : (
                      <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                        {toolSub.body.replace(/\*\*/g, '').slice(0, 220).trim()}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Prompt inicial — spans full width */}
          {promptCode && (
            <div className="lg:col-span-3 rounded-md p-5 md:p-8 lg:p-14 transition-transform duration-300 hover:-translate-y-1" style={{ background: '#0e1c12', border: '1px solid rgba(74,222,128,0.2)' }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: 'rgba(74,222,128,0.5)' }}>
                // PROMPT INICIAL SUGERIDO
              </p>
              <div className="relative group">
                <CopyButton text={promptCode} />
                <pre className="text-xs font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto rounded-lg p-6"
                  style={{
                    color: 'rgba(134,239,172,0.8)',
                    background: '#030a05',
                    border: '1px solid rgba(74,222,128,0.15)',
                  }}>
                  {promptCode}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ROW 9 — CTA Banner */}
      <div className="rounded-md p-5 md:p-8 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        style={{ background: '#e30071' }}>
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tighter text-white mb-2">
            {es.project.cta.headline}
          </h2>
          <p className="text-white/70 font-light text-sm max-w-md">
            {es.project.cta.description}
          </p>
        </div>
        <Button
          variant="solid"
          size="md"
          href="#como-abordarlo"
          icon={<ExternalLink size={14} />}
          className="bg-[#0e0e0e] text-white hover:bg-[#262626] whitespace-nowrap flex-shrink-0"
        >
          {es.project.cta.button}
        </Button>
      </div>

    </div>
  )
}
