import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Search, Sliders, PlayCircle, TrendingUp } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Assess',
    description: 'We understand your workflow and pinpoint the billing challenges holding you back.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Optimize',
    description: 'We identify practical opportunities to streamline processes and reduce denials.',
    icon: Sliders,
  },
  {
    num: '03',
    title: 'Execute',
    description: 'We deliver reliable, day-to-day operational support across the revenue cycle.',
    icon: PlayCircle,
  },
  {
    num: '04',
    title: 'Improve',
    description: 'We monitor workflows and continuously refine performance over time.',
    icon: TrendingUp,
  },
]

export function ProcessSection() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How We Help"
            title="A simpler path to better revenue cycle operations"
            description="A clear, four-step approach that turns billing complexity into dependable, measurable operations."
            className="mb-14"
          />
        </Reveal>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* connecting line on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block"
          />
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 90} className="relative">
              <div className="flex flex-col items-start">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-card-hover">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="mt-5 text-sm font-extrabold tracking-widest text-brand-400">
                  {step.num}
                </span>
                <h3 className="mt-1 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
