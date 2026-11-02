import {
  HeartHandshake,
  GraduationCap,
  Scale,
  Sparkles,
  Users,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { PageHero } from '../components/shared/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { images, imgAt, imgSrcSet } from '../data/images'
import { company } from '../data/company'

const values = [
  {
    icon: HeartHandshake,
    title: 'People treated fairly',
    description: 'We aspire to treat our people fairly and generously, it’s part of who we are.',
  },
  {
    icon: Sparkles,
    title: 'Innovation & growth',
    description: 'We embrace new technology and processes as we grow in the marketplace.',
  },
  {
    icon: Scale,
    title: 'Accuracy & integrity',
    description: 'We hold ourselves to high standards of accuracy and integrity in every task.',
  },
  {
    icon: Users,
    title: 'Customer-focused',
    description: 'We stay easy to work with and focused on the people we serve.',
  },
]

const whyJoin = [
  { icon: GraduationCap, title: 'Learn continuously', description: 'Grow your skills across the full revenue cycle.' },
  { icon: TrendingUp, title: 'Room to advance', description: 'Build a long-term career as we scale.' },
  { icon: HeartHandshake, title: 'Supportive culture', description: 'Collaborate with people who value your work.' },
]

export default function Careers() {
  useSeo({
    title: 'Careers',
    description:
      'Build your career in healthcare operations with Solid State Practice. Join a customer-focused team that values accuracy, innovation, and treating people fairly.',
  })

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career in healthcare operations"
        description="Join a customer-focused team that values accuracy, continuous improvement, and treating people fairly."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Careers' }]}
      />

      {/* Why join us */}
      <section className="section-pad">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow mb-4">Why Join Us</span>
            <h2 className="text-3xl leading-tight sm:text-4xl">
              Meaningful work that supports better patient care
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              At Solid State Practice, the work you do helps healthcare practices run more smoothly,
              so clinicians can focus on their patients. We’re building a team that’s innovative,
              dependable, and genuinely supportive of one another.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {whyJoin.map((w) => (
                <div key={w.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                  <w.icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-bold text-ink">{w.title}</h3>
                  <p className="mt-1 text-xs leading-snug text-ink-muted">{w.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100} className="relative order-first lg:order-last">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200/70 shadow-card">
              <img
                src={imgAt(images.careers, 800)}
                srcSet={imgSrcSet(images.careers, [400, 550, 800, 1100])}
                sizes="(min-width: 1024px) 550px, 100vw"
                alt="Team members collaborating in a bright, modern office"
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

      {/* What we value */}
      <section className="section-pad bg-surface-soft">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What We Value"
              title="The principles that shape our culture"
              description="Our values come straight from how we work with clients and with each other."
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 80}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <v.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities / no-openings honest state */}
      <section className="section-pad">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-card sm:p-12">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <Users className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-ink sm:text-3xl">Interested in joining us?</h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
              We’re always glad to hear from talented people who care about healthcare operations.
              Reach out and tell us how you’d like to contribute. We’ll be in touch when a suitable
              opportunity opens up.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/contact" size="lg">
                Get in touch
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button href={company.offices.india.phoneHref} variant="secondary" size="lg">
                Call our team
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
