import { valuePillars } from '../../data/services'
import { Reveal } from '../ui/Reveal'

export function TrustStrip() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-12">
        {valuePillars.map((pillar, i) => (
          <Reveal
            key={pillar.title}
            delay={i * 80}
            className="flex items-start gap-4"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <pillar.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-ink">{pillar.title}</h3>
              <p className="mt-1 text-sm leading-snug text-ink-muted">{pillar.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
