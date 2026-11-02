import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, MapPin, Phone } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { company } from '../../data/company'
import { capabilities } from '../../data/capabilities'

const companyLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
]

const socialIcons = { facebook: Facebook, twitter: Twitter, linkedin: Linkedin }

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-900 text-slate-300">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
        {/* Brand + description */}
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            {company.description}
          </p>
          {company.social.length > 0 && (
            <div className="mt-6 flex gap-3">
              {company.social.map((s) => {
                const Icon = socialIcons[s.icon as keyof typeof socialIcons]
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition-colors hover:bg-brand-600 hover:text-white"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          )}
        </div>

        {/* Company */}
        <div className="lg:col-span-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {companyLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-slate-400 transition-colors hover:text-brand-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Capabilities & Services */}
        <div className="lg:col-span-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Capabilities</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {capabilities.map((c) => (
              <li key={c.id}>
                <Link
                  to={`/services#${c.id}`}
                  className="text-slate-400 transition-colors hover:text-brand-400"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 flex flex-col gap-5 text-sm">
            {[company.offices.usa, company.offices.india].map((office) => (
              <li key={office.label}>
                <p className="font-semibold text-white">{office.label}</p>
                <p className="mt-1.5 flex gap-2 text-slate-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  <span>{office.lines.join(', ')}</span>
                </p>
                <a
                  href={office.phoneHref}
                  className="mt-1.5 inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-brand-400"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  {office.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-400 sm:flex-row">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="text-slate-500">Healthcare Operations & Technology • Part of AlignedCardio</p>
        </div>
      </div>
    </footer>
  )
}
