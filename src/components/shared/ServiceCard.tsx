import { Link } from 'react-router-dom'
import type { Service } from '../../data/services'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <Link
      to={`/services#${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-ink transition-colors duration-300 group-hover:text-brand-700">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{service.short}</p>
    </Link>
  )
}
