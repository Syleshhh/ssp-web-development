import { Check, ArrowRight } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { PageHero } from '../components/shared/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { CTASection } from '../components/shared/CTASection'
import { ServiceCard } from '../components/shared/ServiceCard'
import { capabilities } from '../data/capabilities'
import { services } from '../data/services'

export default function Services() {
  useSeo({
    title: 'Healthcare Operations & Capabilities',
    description:
      'Explore Solid State Practice’s six core capabilities: Patient Access, Clinical Operations, Revenue Cycle, Finance, Analytics, and Technology-enabled automation.',
  })

  return (
    <>
      <PageHero
        eyebrow="Healthcare Operations & Technology"
        title="Comprehensive capabilities for modern medical practices"
        description="SSP supports the entire healthcare operations lifecycle, from patient access and clinical coordination to end-to-end revenue cycle, finance, analytics, and intelligent automation."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Capabilities & Services' }]}
      >
        <Button to="/contact" size="lg">
          Schedule an Operational Review
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Button>
      </PageHero>

      {/* 6 Core Capabilities Section */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="eyebrow justify-center">Core Operational Scope</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The Six Pillars of Healthcare Operations
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We organize our operational teams, workflows, and technology across six essential
                disciplines designed to relieve administrative pressure and elevate practice performance.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon
              return (
                <Reveal key={cap.id} delay={i * 70}>
                  <div
                    id={cap.id}
                    className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover scroll-mt-24"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
                          <Icon className="h-7 w-7" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-black tracking-widest text-slate-300">
                          {cap.number}
                        </span>
                      </div>

                      <div className="mt-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                          {cap.eyebrow}
                        </span>
                        <h3 className="mt-1 text-2xl font-extrabold text-slate-900 group-hover:text-brand-700">
                          {cap.title}
                        </h3>
                        <p className="mt-3 text-sm font-semibold text-slate-700">
                          {cap.description}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-slate-500">
                          {cap.details}
                        </p>
                      </div>

                      <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                        {cap.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                              <Check className="h-2.5 w-2.5" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services & Specialized Workflows */}
      <section className="section-pad bg-surface-soft border-t border-slate-200/80">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <span className="eyebrow">Detailed Services</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Specialized Operations & RCM Workflows
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Drill down into our specific execution modules across coding, claims processing,
                prior authorizations, and patient contact services.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 4) * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Anchored Breakdown Sections */}
      <div className="bg-white">
        {services.map((service, i) => {
          const Icon = service.icon
          const reversed = i % 2 === 1
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="border-b border-slate-100 last:border-0 scroll-mt-24"
            >
              <div className="container-page py-14 sm:py-16 lg:py-20">
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    reversed ? 'lg:[&>*:first-child]:order-last' : ''
                  }`}
                >
                  <Reveal>
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-card-hover">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h2 className="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </Reveal>

                  <Reveal delay={100}>
                    <div className="rounded-3xl border border-slate-200 bg-surface-soft p-8 shadow-card">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-brand-600">
                        Operational Deliverables
                      </h3>
                      <ul className="mt-5 flex flex-col gap-4">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                              <Check className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span className="text-[15px] font-medium text-slate-800">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <CTASection
        title="Ready to evaluate your practice operations?"
        description="Tell us about your organization’s locations, specialty mix, and operational challenges. We’ll design a tailored operations model for you."
        hideSecondary
      />
    </>
  )
}
