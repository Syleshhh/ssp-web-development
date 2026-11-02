import {
  HeartPulse,
  Workflow,
  Target,
  MessageSquare,
  Scaling,
  Users,
} from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const reasons = [
  {
    icon: HeartPulse,
    title: 'Healthcare-focused expertise',
    description: 'Built specifically around the realities of medical billing and revenue cycle.',
  },
  {
    icon: Workflow,
    title: 'Tailored workflows',
    description: 'Support shaped to how your practice operates — not a rigid template.',
  },
  {
    icon: Target,
    title: 'Accuracy-driven processes',
    description: 'Careful, compliance-minded work that protects your reimbursement.',
  },
  {
    icon: MessageSquare,
    title: 'Responsive support',
    description: 'A dependable partner that communicates clearly and acts quickly.',
  },
  {
    icon: Scaling,
    title: 'Scalable operations',
    description: 'Capacity that flexes with your patient volume without added overhead.',
  },
  {
    icon: Users,
    title: 'Patient-centered approach',
    description: 'Billing handled with empathy so patients stay confident and informed.',
  },
]

export function WhyUs() {
  return (
    <section className="section-pad bg-brand-900">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Why Solid State Practice"
            title={<span className="text-white">A partner practices can rely on</span>}
            description={
              <span className="text-brand-100">
                We combine healthcare expertise with dependable operations to help your practice run
                more smoothly, every day.
              </span>
            }
            className="mb-14 [&_.eyebrow]:text-brand-300"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={(i % 3) * 80}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/[0.08]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <r.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-100">{r.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
