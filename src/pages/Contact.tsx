import { MapPin, Phone, Clock, Building2 } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { PageHero } from '../components/shared/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { ContactForm } from '../components/shared/ContactForm'
import { company } from '../data/company'

const offices = [company.offices.usa, company.offices.india]

export default function Contact() {
  useSeo({
    title: 'Contact Us',
    description:
      'Get in touch with Solid State Practice. Offices in Colonial Heights, VA (USA) and Coimbatore (India). Tell us how we can support your practice.',
  })

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s work together"
        description="Tell us how we can support your practice. Our team will get back to you shortly."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: contact info */}
          <Reveal className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-ink">Get in touch</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              Prefer to talk? Reach out to either office directly, or send us a message and we’ll
              respond as soon as we can.
            </p>
    
            <div className="mt-8 flex flex-col gap-5">
              {offices.map((office) => (
                  <div
                  key={office.label}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Building2 className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-bold text-ink">{office.label}</h3>
                  </div>
                  <p className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-ink-muted">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                    <span>{office.lines.join(', ')}</span>
                  </p>
                  <a
                    href={office.phoneHref}
                    className="mt-3 inline-flex items-center gap-3 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                  >
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {office.phone}
                  </a>
                </div>
              ))}

              <div className="flex items-center gap-3 rounded-2xl bg-surface-soft p-5 text-sm text-ink-muted">
                <Clock className="h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span>
                  Patient call center support is available <strong className="text-ink">24/7</strong>.
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={100} className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-ink">Send us a message</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Fields marked with <span className="text-brand-600">*</span> are required.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
