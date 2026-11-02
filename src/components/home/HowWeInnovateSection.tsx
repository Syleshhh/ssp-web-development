import {
  Search,
  Sliders,
  Send,
  BarChart,
  RefreshCw,
} from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const stages = [
  {
    num: '01',
    title: 'Identify',
    description: 'Find friction inside real healthcare operations.',
    icon: Search,
    color: 'text-blue-600',
    borderColor: 'border-blue-200',
    badgeBg: 'bg-blue-50',
  },
  {
    num: '02',
    title: 'Build',
    description: 'Design better workflows, automation and technology.',
    icon: Sliders,
    color: 'text-teal-600',
    borderColor: 'border-teal-200',
    badgeBg: 'bg-teal-50',
  },
  {
    num: '03',
    title: 'Deploy',
    description: 'Implement within live healthcare environments.',
    icon: Send,
    color: 'text-amber-600',
    borderColor: 'border-amber-200',
    badgeBg: 'bg-amber-50',
  },
  {
    num: '04',
    title: 'Measure',
    description: 'Track operational and financial outcomes.',
    icon: BarChart,
    color: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    badgeBg: 'bg-indigo-50',
  },
  {
    num: '05',
    title: 'Improve',
    description: 'Iterate and scale what works.',
    icon: RefreshCw,
    color: 'text-rose-600',
    borderColor: 'border-rose-200',
    badgeBg: 'bg-rose-50',
  },
]

export function HowWeInnovateSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How We Innovate"
            title="From idea to real-world deployment."
            description="We turn real operational challenges into practical solutions that create measurable impact for healthcare practices."
            className="mb-14"
          />
        </Reveal>

        {/* 5 Stages Sequence Cards with Connecting Indicators */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {stages.map((stage, idx) => {
            const Icon = stage.icon
            return (
              <Reveal key={stage.num} delay={idx * 80}>
                <div
                  className={`group relative flex h-full flex-col justify-between rounded-3xl border ${stage.borderColor} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card`}
                >
                  <div>
                    {/* Stage number */}
                    <span className="text-2xl font-black text-slate-300 group-hover:text-brand-600 transition-colors">
                      {stage.num}
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-slate-900">{stage.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {stage.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${stage.badgeBg} ${stage.color}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    {idx < stages.length - 1 && (
                      <span className="hidden lg:block text-slate-300 font-bold" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Concluding Statement Banner */}
        <Reveal delay={200}>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-brand-200/80 bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 p-8 sm:p-12 text-white shadow-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl"
            />
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-300">
                Real-World Grounding
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                Our innovation doesn’t happen in a demo environment.{' '}
                <span className="text-brand-300">It happens inside healthcare operations.</span>
              </h3>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                By co-developing solutions directly with clinical providers and administrative
                staff inside AlignedCardio practices, every workflow is validated against real
                patient interactions and actual payer responses.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
