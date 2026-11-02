import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'
import { mainNav, servicesMenu } from '../../data/navigation'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const closeTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false)
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  const openDropdown = () => {
    window.clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 120)
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-[15px] font-semibold transition-colors ${
      isActive ? 'text-brand-600' : 'text-ink hover:text-brand-600'
    } after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:rounded-full after:bg-brand-500 after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-200/80 bg-white/90 shadow-soft backdrop-blur'
          : 'border-transparent bg-white'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between py-3">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) =>
            item.label === 'Services' || item.label === 'Capabilities' ? (
              <div
                key={item.to}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `${navLinkClass({ isActive })} inline-flex items-center gap-1`
                  }
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen(false)}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </NavLink>

                {servicesOpen && (
                  <div
                    className="absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-3"
                    onMouseEnter={openDropdown}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="animate-fade-up rounded-2xl border border-slate-200 bg-white p-3 shadow-card">
                      <div className="grid grid-cols-2 gap-1">
                        {servicesMenu.map((s) => (
                          <NavLink
                            key={s.to}
                            to={s.to}
                            className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50"
                          >
                            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                              <s.icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-semibold text-ink">{s.label}</span>
                              <span className="mt-0.5 block text-xs leading-snug text-ink-muted">
                                {s.description}
                              </span>
                            </span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} className={navLinkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Button to="/contact" className="hidden sm:inline-flex">
            Schedule a Consultation
          </Button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-ink transition-colors hover:bg-slate-50 lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
