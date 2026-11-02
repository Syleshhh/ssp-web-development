import { capabilities } from './capabilities'

export interface NavItem {
  label: string
  to: string
}

export const mainNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Capabilities', to: '/services' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
]

// Dropdown entries for the Capabilities & Services mega-menu
export const capabilitiesMenu = capabilities.map((c) => ({
  label: c.title,
  to: `/services#${c.id}`,
  description: c.description,
  icon: c.icon,
}))

export const servicesMenu = capabilitiesMenu
