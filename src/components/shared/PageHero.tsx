import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface Crumb {
  label: string
  to?: string
}

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  crumbs?: Crumb[]
  children?: ReactNode
}

/** Compact interior-page hero with breadcrumb, on a soft brand background. */
export function PageHero({ eyebrow, title, description, crumbs, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-surface-soft">
      {/* subtle decorative accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl"
      />
      <div className="container-page relative py-14 sm:py-16 lg:py-20">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {c.to ? (
                    <Link to={c.to} className="transition-colors hover:text-brand-600">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-ink">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <ChevronRight className="h-4 w-4 text-slate-300" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
        <h1 className="max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
