import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Tag = 'h2',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col ${alignment} ${align === 'center' ? 'max-w-2xl' : ''} ${className}`}>
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <Tag
        className={`text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${
          Tag === 'h1' ? 'lg:text-5xl' : ''
        }`}
      >
        {title}
      </Tag>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
