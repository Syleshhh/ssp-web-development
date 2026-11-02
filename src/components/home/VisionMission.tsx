import { Eye, Compass } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { visionMission } from '../../data/company'

const cards = [
  {
    icon: Eye,
    label: 'Our Vision',
    body: visionMission.vision,
  },
  {
    icon: Compass,
    label: 'Our Mission',
    body: visionMission.mission,
  },
]

export function VisionMission() {
  return (
    <section className="section-pad !pt-8 sm:!pt-10 lg:!pt-12">
      <div className="container-page grid gap-6 md:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal
            key={card.label}
            delay={i * 100}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-card sm:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-50"
            />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white">
              <card.icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <h3 className="relative mt-6 text-2xl font-bold text-ink">{card.label}</h3>
            <p className="relative mt-3 text-base leading-relaxed text-ink-muted">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
