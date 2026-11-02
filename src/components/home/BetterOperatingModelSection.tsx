import { TrendingUp, Maximize2, PiggyBank, Users, Laptop, Database } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const outcomes = [
  {
    num: '01',
    title: 'Better Performance',
    description:
      'Streamline day-to-day healthcare operations with experienced teams, connected workflows, and technology.',
    icon: TrendingUp,
    badgeBg: 'bg-blue-50 text-blue-600',
    borderColor: 'border-blue-200',
  },
  {
    num: '02',
    title: 'Greater Scalability',
    description:
      'Build operational capabilities that can grow with your practice and evolving business needs.',
    icon: Maximize2,
    badgeBg: 'bg-purple-50 text-purple-600',
    borderColor: 'border-purple-200',
  },
  {
    num: '03',
    title: 'Lower Administrative Cost',
    description:
      'Improve efficiency and reduce administrative overhead through better processes, technology, and automation.',
    icon: PiggyBank,
    badgeBg: 'bg-emerald-50 text-emerald-600',
    borderColor: 'border-emerald-200',
  },
]

export function BetterOperatingModelSection() {
  return (
    <section className="section-pad bg-surface-soft border-t border-slate-200/80">
      <div className="container-page space-y-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow justify-center">Our Operating Model</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
              A Better Operating Model
            </h2>
            <p className="mt-2 text-xl font-bold text-brand-700">
              Better performance. Greater scalability. Lower administrative cost.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              SSP combines healthcare expertise, technology, automation, and data to create more
              efficient operating models for medical practices.
            </p>
          </div>
        </Reveal>

        {/* Visual Formula Strip: PEOPLE + TECHNOLOGY + DATA */}
        <Reveal delay={100}>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Users className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900">PEOPLE</p>
                  <p className="text-[11px] text-slate-500 font-medium">Experienced Teams</p>
                </div>
              </div>

              <span className="text-slate-300 font-bold text-lg hidden sm:block">+</span>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <Laptop className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900">TECHNOLOGY</p>
                  <p className="text-[11px] text-slate-500 font-medium">Automation & AI</p>
                </div>
              </div>

              <span className="text-slate-300 font-bold text-lg hidden sm:block">+</span>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Database className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900">DATA</p>
                  <p className="text-[11px] text-slate-500 font-medium">Actionable Insights</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3 Balanced Outcome Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, idx) => {
            const Icon = item.icon
            return (
              <Reveal key={item.num} delay={idx * 100}>
                <div
                  className={`group relative flex h-full flex-col justify-between rounded-3xl border ${item.borderColor} bg-white p-7 sm:p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black tracking-widest text-slate-400">
                        {item.num}
                      </span>
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.badgeBg}`}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600">
                      <span>Operational Outcome</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Outcome Statement Banner */}
        <Reveal delay={200}>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 text-center shadow-soft">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
              Outcome
            </span>
            <p className="mt-2 text-xl sm:text-2xl font-extrabold text-slate-900">
              Stronger performance, scalable operations, and greater administrative efficiency.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
