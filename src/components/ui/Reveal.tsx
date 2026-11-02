import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Stagger delay in ms */
  delay?: number
}

/** Wraps content in a scroll-triggered fade-up reveal. */
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }: RevealProps) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
