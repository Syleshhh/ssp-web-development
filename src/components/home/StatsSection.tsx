import { Users, PhoneCall, Calendar, Stethoscope } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const stats = [
  {
    value: '120+',
    labelFirst: 'Healthcare Operations',
    labelSecond: 'Professionals',
    icon: Users,
  },
  {
    value: '12,000+',
    labelFirst: 'Patient Calls',
    labelSecond: 'Weekly',
    icon: PhoneCall,
  },
  {
    value: '2,000+',
    labelFirst: 'Appointments',
    labelSecond: 'Scheduled Weekly',
    icon: Calendar,
  },
  {
    value: '60+',
    labelFirst: 'Providers',
    labelSecond: 'Supported',
    icon: Stethoscope,
  },
]

export function StatsSection() {
  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 mb-6 sm:mb-10">
      <div className="container-page">
        <Reveal>
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-card">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200/80">
              {stats.map((s, idx) => (
                <div
                  key={s.value}
                  className={`flex flex-col items-center text-center ${
                    idx > 0 ? 'lg:pl-8' : ''
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-300 hover:scale-110">
                    <s.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-brand-900 leading-none">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-600 leading-snug">
                    <span className="block">{s.labelFirst}</span>
                    <span className="block">{s.labelSecond}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
