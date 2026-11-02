import { Users, Cpu, BarChart3 } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { healthcareWorkflowSteps } from '../../data/capabilities'

export function InnovationWorkflowSection() {
  return (
    <section className="section-pad bg-surface-soft border-t border-slate-200/80">
      <div className="container-page space-y-12">
        {/* Top Header & 3-Column Context Block */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow justify-center">Automation & AI</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
              Building what’s next in{' '}
              <span className="text-gradient-brand">healthcare operations.</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Problem</span>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Healthcare administration remains too manual, fragmented and dependent on people
                moving information between disconnected systems.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-200 bg-white p-6 shadow-soft">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">SSP Approach</span>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We believe the next generation of healthcare operations will combine experienced
                teams with intelligent automation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:col-span-2 lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Active Deployment</span>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                SSP is actively developing and deploying technology across patient access, revenue
                cycle and practice operations—automating repetitive work, surfacing the information
                people need and allowing healthcare teams to focus on higher-value decisions.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 9-Step Healthcare Workflow Visualization (Exact order) */}
        <Reveal delay={100}>
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-card">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                  Connected Healthcare Workflow
                </span>
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  End-to-End Operational Lifecycle
                </h3>
              </div>
              <span className="self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                9 Sequential Milestones
              </span>
            </div>

            {/* Desktop / Tablet Horizontal Workflow with Connecting Dots */}
            <div className="hidden lg:grid lg:grid-cols-9 gap-2 items-center">
              {healthcareWorkflowSteps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="relative flex flex-col items-center text-center">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${step.lightBg} shadow-sm transition-transform duration-300 hover:scale-110`}
                    >
                      <Icon className={`h-6 w-6 ${step.color}`} aria-hidden="true" />
                    </div>
                    <span className="mt-3 text-xs font-bold text-slate-900 leading-tight">
                      {step.title}
                    </span>
                    <span className="mt-1 text-[10px] text-slate-400 font-medium leading-tight">
                      {step.subtitle}
                    </span>

                    {/* Connecting arrow */}
                    {idx < healthcareWorkflowSteps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute -right-3 top-5 text-slate-300 font-bold"
                      >
                        →
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Mobile / Tablet Responsive Layout (Strictly 1 to 9 in exact sequence) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:hidden">
              {healthcareWorkflowSteps.map((step) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.title}
                    className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/60 p-3.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black text-slate-400">0{step.step}</span>
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${step.lightBg}`}
                      >
                        <Icon className={`h-5 w-5 ${step.color}`} aria-hidden="true" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                      <p className="text-xs text-slate-500">{step.subtitle}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>

        {/* Supporting Pillars: People + Technology + Data */}
        <Reveal delay={150}>
          <div className="rounded-3xl border border-brand-100 bg-white p-6 sm:p-8 lg:p-10 shadow-card">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4 lg:gap-8 items-center">
              {/* People */}
              <div className="flex items-center gap-4 rounded-2xl bg-blue-50/50 p-5 border border-blue-100/60">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-soft">
                  <Users className="h-7 w-7" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">People</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-snug">
                    Experienced healthcare teams who understand operations and patients.
                  </p>
                </div>
              </div>

              {/* Technology */}
              <div className="flex items-center gap-4 rounded-2xl bg-cyan-50/50 p-5 border border-cyan-100/60">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft">
                  <Cpu className="h-7 w-7" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Technology</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-snug">
                    Automation and AI that streamline repetitive work and surface useful information.
                  </p>
                </div>
              </div>

              {/* Data */}
              <div className="flex items-center gap-4 rounded-2xl bg-indigo-50/50 p-5 border border-indigo-100/60">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-soft">
                  <BarChart3 className="h-7 w-7" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Data</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-snug">
                    Actionable insights that help teams make better operational decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
