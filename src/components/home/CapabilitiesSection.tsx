import { ArrowRight, Check } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { capabilities } from '../../data/capabilities'

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section-pad !pt-8 sm:!pt-10 lg:!pt-12 bg-white scroll-mt-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="What We Do"
            title="Healthcare Operations & Technology"
            description="Integrated people, processes and technology to help medical practices operate more efficiently and deliver better patient experiences."
            className="mb-14"
          />
        </Reveal>

        {/* 6 Capabilities Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <Reveal key={cap.id} delay={i * 70}>
                <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover">
                  <div>
                    {/* Top bar with icon and number */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-black tracking-widest text-slate-300 group-hover:text-brand-400">
                        {cap.number}
                      </span>
                    </div>

                    <div className="mt-5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600">
                        {cap.eyebrow}
                      </span>
                      <h3 className="mt-1 text-xl font-extrabold text-slate-900 group-hover:text-brand-700">
                        {cap.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600 font-medium">
                        {cap.description}
                      </p>
                    </div>

                    {/* Feature list */}
                    <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                      {cap.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5 text-xs text-slate-600">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                            <Check className="h-2.5 w-2.5" />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 pt-4">
                    <Button
                      to={`/services#${cap.id}`}
                      variant="ghost"
                      className="w-full justify-between px-0 text-sm font-bold text-brand-600 hover:bg-transparent hover:text-brand-700"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* More than billing banner */}
        <Reveal delay={150}>
          <div className="mt-14 rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50/70 via-white to-brand-50/40 p-8 sm:p-10 text-center shadow-soft">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              More Than Billing
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              SSP supports the entire healthcare operations lifecycle.
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
              From front-door patient access to modern automation and financial reconciliation, we
              combine people, process and technology to help physician organizations operate more
              efficiently and scale with confidence.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button to="/services" size="lg">
                View Full Operational Capabilities
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Schedule Operational Review
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
