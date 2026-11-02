import {
  FileText,
  Users,
  BarChart3,
  Coins,
  Settings2,
  Cpu,
  Lightbulb,
  Wrench,
  Send,
  LineChart,
  RotateCw,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const coreAreas = [
  { label: 'Revenue Cycle', icon: FileText, color: 'text-blue-600 bg-blue-50' },
  { label: 'Patient Access', icon: Users, color: 'text-teal-600 bg-teal-50' },
  { label: 'Analytics', icon: BarChart3, color: 'text-indigo-600 bg-indigo-50' },
  { label: 'Finance', icon: Coins, color: 'text-purple-600 bg-purple-50' },
  { label: 'Automation', icon: Settings2, color: 'text-cyan-600 bg-cyan-50' },
  { label: 'AI', icon: Cpu, color: 'text-amber-600 bg-amber-50' },
]

const operatingLoop = [
  { label: 'REAL HEALTHCARE PROBLEM', icon: Lightbulb },
  { label: 'BUILD', icon: Wrench },
  { label: 'DEPLOY', icon: Send },
  { label: 'MEASURE', icon: LineChart },
  { label: 'IMPROVE', icon: RotateCw },
]

const alignedNodes = [
  { label: 'AlignedCardio', subtitle: 'Physician Platform', isBrand: true },
  { label: 'Real Healthcare Operations', subtitle: 'Live Practice Needs', icon: Users },
  { label: 'Solid State Practice', subtitle: 'Operations Engine', icon: Layers },
  { label: 'Healthcare Operations + Technology', subtitle: 'Integrated Delivery', icon: Settings2 },
  { label: 'Better Infrastructure', subtitle: 'Physicians & Patients', icon: LineChart },
]

export function AboutAlignedCardio() {
  return (
    <section id="alignedcardio" className="section-pad !pt-6 sm:!pt-8 lg:!pt-10 !pb-8 sm:!pb-10 lg:!pb-12 bg-surface-soft scroll-mt-24">
      <div className="container-page space-y-12">
        {/* Card 1: Built by Healthcare Operators */}
        <Reveal>
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 lg:p-12 shadow-card">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-6 xl:col-span-6 space-y-5">
                <span className="eyebrow">Operational Heritage</span>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Built by healthcare operators.
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-slate-600">
                  <p>
                    Solid State Practice was built to solve the operational challenges we encounter
                    every day inside a growing physician-led healthcare organization.
                  </p>
                  <p>
                    As part of <strong>AlignedCardio</strong>, we support the infrastructure behind a
                    complex, multi-market cardiovascular platform across revenue cycle, patient access,
                    analytics, finance, automation and AI.
                  </p>
                  <p>
                    We identify real operational challenges, build better workflows and technology,
                    deploy them in real-world healthcare settings, measure the results and continuously
                    improve. Today, we bring that same operating discipline and technology-enabled
                    approach to the organizations we support.
                  </p>
                </div>

                <div className="pt-2">
                  <div className="inline-block rounded-xl border border-brand-100 bg-brand-50/70 px-4 py-2.5 text-sm font-semibold text-brand-800">
                    “Real healthcare experience. Better operations. Technology built for what’s next.”
                  </div>
                </div>
              </div>

              {/* Right Column: 6 Capabilities Grid */}
              <div className="lg:col-span-6 xl:col-span-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                  {coreAreas.map((area) => (
                    <div
                      key={area.label}
                      className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 text-center transition-all duration-200 hover:border-brand-300 hover:bg-white hover:shadow-card"
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${area.color} transition-transform duration-200 group-hover:scale-110`}
                      >
                        <area.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="mt-3 text-sm font-bold text-slate-900">{area.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Loop Strip */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center mb-6">
                Our Continuous Improvement Loop
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {operatingLoop.map((step, idx) => (
                  <div key={step.label} className="relative flex flex-col items-center text-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600 border border-brand-200/60 shadow-soft">
                      <step.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="mt-2.5 text-[11px] font-bold tracking-wider text-slate-700">
                      {step.label}
                    </span>
                    {idx < operatingLoop.length - 1 && (
                      <span
                        className="hidden sm:block absolute top-5 -right-2 text-slate-300 font-bold"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Card 2: Part of AlignedCardio */}
        <Reveal delay={100}>
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 lg:p-12 shadow-card">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              {/* Left Column: AlignedCardio Narrative */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                  Cardiovascular Infrastructure
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Part of AlignedCardio
                </h2>
                <p className="text-base leading-relaxed text-slate-600">
                  Solid State Practice is part of <strong>AlignedCardio</strong>, a physician-led
                  cardiovascular platform built around a simple idea:{' '}
                  <em>physicians and patients deserve better infrastructure.</em>
                </p>
                <p className="text-base leading-relaxed text-slate-600">
                  AlignedCardio has invested in building critical operational capabilities directly
                  into its platform rather than relying entirely on multiple external vendors. SSP is
                  a critical part of that infrastructure, bringing together experienced healthcare
                  teams, technology, analytics, automation and AI to support better healthcare operations.
                </p>

                <div className="pt-2">
                  <a
                    href="https://alignedcardio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-50 px-5 py-3 text-sm font-bold text-brand-700 transition-colors hover:bg-brand-100"
                  >
                    <span>Learn more about AlignedCardio</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Right Column: Connected Node Visualization */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center mb-6">
                    Integrated Platform Architecture
                  </p>

                  <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2">
                    {/* Horizontal connecting line on desktop */}
                    <div
                      aria-hidden="true"
                      className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-brand-300 via-teal-300 to-indigo-300 -z-0"
                    />

                    {alignedNodes.map((node) => (
                      <div
                        key={node.label}
                        className="relative z-10 flex flex-col items-center text-center max-w-[110px]"
                      >
                        {node.isBrand ? (
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-brand-500 shadow-md">
                            <span className="text-[11px] font-black tracking-tighter text-brand-700 leading-tight">
                              Aligned<br />Cardio
                            </span>
                          </div>
                        ) : (
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-slate-200 shadow-md text-brand-600">
                            {node.icon && <node.icon className="h-6 w-6" aria-hidden="true" />}
                          </div>
                        )}
                        <span className="mt-3 text-xs font-bold text-slate-900 leading-tight">
                          {node.label}
                        </span>
                        <span className="mt-1 text-[10px] text-slate-500 font-medium leading-tight">
                          {node.subtitle}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
