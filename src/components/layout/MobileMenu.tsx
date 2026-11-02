import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown, X } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'
import { mainNav, servicesMenu } from '../../data/navigation'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false)

  // Lock body scroll + close on Escape while open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex min-h-[52px] items-center rounded-xl px-4 text-base font-semibold transition-colors ${
      isActive ? 'bg-brand-50 text-brand-700' : 'text-ink hover:bg-slate-50'
    }`

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${open ? '' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-ink transition-colors hover:bg-slate-50"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) =>
              item.label === 'Services' || item.label === 'Capabilities' ? (
                <li key={item.to}>
                  <div className="flex items-center">
                    <NavLink to={item.to} className={`flex-1 ${''}`}>
                      {({ isActive }) => (
                        <span className={linkClass({ isActive })}>{item.label}</span>
                      )}
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => setServicesExpanded((v) => !v)}
                      aria-label={servicesExpanded ? 'Collapse services' : 'Expand services'}
                      aria-expanded={servicesExpanded}
                      className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink-muted hover:bg-slate-50"
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          servicesExpanded ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      servicesExpanded ? 'max-h-[640px]' : 'max-h-0'
                    }`}
                  >
                    <ul className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-slate-100 pl-3">
                      {servicesMenu.map((s) => (
                        <li key={s.to}>
                          <NavLink
                            to={s.to}
                            className="flex min-h-[44px] items-center gap-2.5 rounded-lg px-3 text-sm font-medium text-ink-muted transition-colors hover:bg-slate-50 hover:text-brand-700"
                          >
                            <s.icon className="h-4 w-4 text-brand-500" aria-hidden="true" />
                            {s.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to} className={linkClass} end={item.to === '/'}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="border-t border-slate-100 p-4">
          <Button to="/contact" size="lg" className="w-full">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  )
}
