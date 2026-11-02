import { Check, Users, Cpu, ShieldCheck, BarChart3 } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { PageHero } from '../components/shared/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { CTASection } from '../components/shared/CTASection'
import { VisionMission } from '../components/home/VisionMission'
import { Leadership } from '../components/about/Leadership'
import { AboutAlignedCardio } from '../components/home/AboutAlignedCardio'
import { images, imgAt, imgSrcSet } from '../data/images'

const operationalPillars = [
  { icon: Users, label: 'Experienced Healthcare Teams', desc: 'Deep operational and clinical knowledge.' },
  { icon: Cpu, label: 'Automation & AI', desc: 'Streamlining repetitive work and administrative load.' },
  { icon: BarChart3, label: 'Actionable Intelligence', desc: 'Data-driven insights to guide practice leaders.' },
  { icon: ShieldCheck, label: 'Compliance & Quality', desc: 'Rigorous adherence to regulatory standards.' },
]

const operatingPrinciples = [
  'Built from inside a live physician-led healthcare platform',
  'Experienced healthcare professionals at every operational layer',
  'Intelligent automation developed directly within clinical environments',
  'Comprehensive visibility across revenue cycle, patient access, and finance',
  'Scalable infrastructure supporting multisite, multi-specialty practices',
  'Relentless focus on improving physician and patient experiences',
]

export default function About() {
  useSeo({
    title: 'About Us | Healthcare Operations & Technology',
    description:
      'Solid State Practice is the operations and technology engine behind AlignedCardio, combining experienced healthcare teams, analytics, automation and AI to build a better way to run medical practices.',
  })

  return (
    <>
      <PageHero
        eyebrow="About Solid State Practice"
        title="Healthcare operations and technology, built differently."
        description="The operations and technology engine behind AlignedCardio, combining experienced teams, analytics, automation and AI to build a better way to run medical practices."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Our Story & Origin */}
      <section className="section-pad">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow mb-4">Our Origin</span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl leading-tight">
              Built inside healthcare. Proven in practice.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Solid State Practice was built to solve the operational challenges we encounter every
                day inside a growing physician-led healthcare organization.
              </p>
              <p>
                As part of{' '}
                <a
                  href="https://www.alignedcardio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-600 underline-offset-2 transition-colors hover:text-brand-700 hover:underline"
                >
                  AlignedCardio
                </a>
                , SSP supports the infrastructure behind a
                complex, multi-market cardiovascular platform, from revenue cycle and patient access
                to analytics, finance, automation and AI.
              </p>
              <p>
                Our operating environment is our laboratory: we identify problems, build better
                workflows, deploy them in real-world healthcare settings, measure the results and
                continuously improve them. Today, we bring that same operating discipline and
                technology-enabled approach to the organizations we support.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50/70 p-4">
              <p className="text-sm font-bold text-brand-900">
                “Real healthcare experience. Better operations. Technology built for what’s next.”
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200/70 shadow-card">
              <img
                src={imgAt(images.aboutStory, 800)}
                srcSet={imgSrcSet(images.aboutStory, [400, 550, 800, 1100])}
                sizes="(min-width: 1024px) 550px, 100vw"
                alt="Healthcare and operations leaders collaborating on clinical practice workflows"
                className="h-full w-full object-cover"
                width={1100}
                height={820}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Part of AlignedCardio Section */}
      <AboutAlignedCardio />

      {/* Operational Pillars */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Core Strengths"
              title="How we elevate practice operations"
              description="Our operational model unites people, processes, and modern automation to deliver sustained excellence."
              className="mb-12"
            />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {operationalPillars.map((g, i) => (
              <Reveal
                key={g.label}
                delay={i * 80}
                className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-card"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <g.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-bold text-slate-900">{g.label}</h3>
                <p className="mt-2 text-xs text-slate-500 leading-snug">{g.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="section-pad bg-surface-soft">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-last lg:order-first">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200/70 shadow-card">
              <img
                src={imgAt(images.aboutApproach, 800)}
                srcSet={imgSrcSet(images.aboutApproach, [400, 550, 800, 1100])}
                sizes="(min-width: 1024px) 550px, 100vw"
                alt="Operations and technology specialist analyzing healthcare workflow data"
                className="h-full w-full object-cover"
                width={1100}
                height={820}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <span className="eyebrow mb-4">Our Principles</span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl leading-tight">
              Partnership, discipline, and purpose
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              We operate not as an arms-length vendor, but as an embedded engine. Our teams sit
              alongside clinicians and clinic managers, ensuring that workflows are seamless,
              reimbursements are accurate, and technology genuinely lightens the administrative load.
            </p>

            <ul className="mt-6 space-y-3">
              {operatingPrinciples.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-slate-700">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Leadership Section */}
      <Leadership />

      {/* Vision & Mission */}
      <div className="bg-surface-soft">
        <div className="container-page pt-16 text-center sm:pt-20 lg:pt-24">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Purpose"
              title="Our vision and mission"
              className="mx-auto"
            />
          </Reveal>
        </div>
        <VisionMission />
      </div>

      <CTASection
        title="Looking for a dependable operations partner?"
        description="Discover how Solid State Practice can bring stability, automation, and operational discipline to your medical organization."
      />
    </>
  )
}
