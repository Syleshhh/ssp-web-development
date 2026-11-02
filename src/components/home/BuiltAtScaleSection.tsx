import { MapPin, Users, Stethoscope, TrendingUp, Layers } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const scaleDimensions = [
  {
    title: 'Multiple Locations',
    description: 'Support across geographies.',
    icon: MapPin,
    color: 'text-blue-600',
    badgeBg: 'bg-blue-50',
    borderColor: 'border-blue-200/80',
  },
  {
    title: 'Multiple Providers',
    description: 'From single specialties to multi-specialty groups.',
    icon: Users,
    color: 'text-teal-600',
    badgeBg: 'bg-teal-50',
    borderColor: 'border-teal-200/80',
  },
  {
    title: 'Multiple Service Lines',
    description: 'Across cardiology and adjacent services.',
    icon: Stethoscope,
    color: 'text-indigo-600',
    badgeBg: 'bg-indigo-50',
    borderColor: 'border-indigo-200/80',
  },
  {
    title: 'Growing Patient Volumes',
    description: 'Built to scale with your organization.',
    icon: TrendingUp,
    color: 'text-amber-600',
    badgeBg: 'bg-amber-50',
    borderColor: 'border-amber-200/80',
  },
]

export function BuiltAtScaleSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page space-y-12">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Built at Scale"
            title="Built for complex healthcare organizations."
            description="Our teams support the operational infrastructure behind growing physician organizations across multiple locations, providers and service lines."
            className="mb-14"
          />
        </Reveal>

        {/* 4 Scale Dimensions Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scaleDimensions.map((dim, idx) => {
            const Icon = dim.icon
            return (
              <Reveal key={dim.title} delay={idx * 70}>
                <div
                  className={`group flex h-full flex-col justify-between rounded-3xl border ${dim.borderColor} bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover`}
                >
                  <div>
                    <div
                      className={`flex h-13 w-13 items-center justify-center rounded-2xl ${dim.badgeBg} ${dim.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-slate-900">{dim.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{dim.description}</p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Enterprise Scale
                    </span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Supporting Growing Physician Organizations Callout */}
        <Reveal delay={150}>
          <div className="rounded-3xl border border-slate-200/90 bg-slate-50/60 p-8 sm:p-10 lg:p-12 shadow-soft">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-4 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft">
                  <Layers className="h-8 w-8" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                    At Scale
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    Supporting growing physician organizations.
                  </h4>
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-base leading-relaxed text-slate-600">
                  Our teams and technology are built to handle the complexity of multisite,
                  multi-provider and multi-service organizations. Whether your practice is expanding
                  geographic coverage, adding advanced cardiovascular testing, or managing high-volume
                  referral networks, SSP provides the resilient operational foundation you need to
                  deliver high-quality care without administrative burnout.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
