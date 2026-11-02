import { ArrowRight, Sparkles, Building2 } from 'lucide-react'
import { Button } from '../ui/Button'
import heroImg from '../../assets/hero-team.jpg'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/40 via-white to-white pt-6 pb-16 lg:pt-10 lg:pb-24">
      {/* Subtle ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-0 -z-10 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl"
      />

      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-6 xl:col-span-7">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/90 px-3.5 py-1.5 shadow-soft backdrop-blur">
            <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-brand-700">
              Healthcare Operations & Technology
            </span>
          </div>

          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl lg:text-[3.5rem]">
            Healthcare operations,{' '}
            <span className="text-gradient-brand">built differently.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 font-normal">
            Solid State Practice is the operations and technology engine behind AlignedCardio,
            combining experienced healthcare teams, analytics, automation and AI to build a better
            way to run medical practices.
          </p>

          <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50/60 p-4 text-sm leading-relaxed text-slate-700">
            <p className="flex items-start gap-2.5">
              <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
              <span>
                <strong>AlignedCardio</strong> has invested in building critical operational
                capabilities directly into its platform, and SSP is a critical part of that
                infrastructure.
              </span>
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Button to="/services" size="lg" className="w-full sm:w-auto shadow-card hover:shadow-card-hover">
              Explore Our Capabilities
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button to="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
              Partner With Us
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm">
            <a
              href="https://www.alignedcardio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              <span>Learn more about AlignedCardio</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Visual with Interactive Chips */}
        <div className="relative lg:col-span-6 xl:col-span-5">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            {/* Visual Frame */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-2 shadow-2xl shadow-brand-900/10">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={heroImg}
                  alt="Healthcare and technology team reviewing operational intelligence and patient workflow dashboards"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  width={1200}
                  height={900}
                  loading="eager"
                  {...{ fetchpriority: 'high' }} /* React 18 only forwards the lowercase attribute */
                />
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute left-4 top-6 hidden animate-float rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-xl backdrop-blur sm:flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand-600">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Operational Intelligence</p>
                  <p className="text-[11px] text-slate-500 font-medium">Performance Analytics</p>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Left */}
              <div
                className="absolute -bottom-3 left-4 hidden rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-xl backdrop-blur sm:flex items-center gap-3"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <span className="text-sm font-bold">12k+</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Patient Access</p>
                  <p className="text-[11px] text-slate-500 font-medium">Patient Support Weekly</p>
                </div>
              </div>

              {/* Floating Badge 3 - Bottom Right */}
              <div
                className="absolute -bottom-3 right-4 hidden rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-xl backdrop-blur sm:flex items-center gap-3"
                style={{ animationDelay: '3s' }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <span className="text-sm font-bold">AI</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Automation & AI</p>
                  <p className="text-[11px] text-slate-500 font-medium">Intelligent Workflows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
