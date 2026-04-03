import { CopyButton } from './CopyButton'
import type { ComponentPropsWithoutRef } from 'react'

type PreProps = ComponentPropsWithoutRef<'pre'>

export function MdxPre({ children, ...props }: PreProps) {
  // Extract raw text from the children tree
  function extractText(node: unknown): string {
    if (typeof node === 'string') return node
    if (typeof node === 'number') return String(node)
    if (Array.isArray(node)) return node.map(extractText).join('')
    if (node && typeof node === 'object' && 'props' in (node as object)) {
      const element = node as { props?: { children?: unknown } }
      if (element.props?.children !== undefined) {
        return extractText(element.props.children)
      }
    }
    return ''
  }

  const text = extractText(children)

  return (
    <div className="relative group">
      <CopyButton text={text} />
      <pre {...props}>{children}</pre>
    </div>
  )
}
