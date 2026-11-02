import { Link } from 'react-router-dom'
import logoUrl from '../../assets/logo-ssp-cropped.png'

interface LogoProps {
  /** Light variant places the logo on a white chip for dark backgrounds (e.g. footer) */
  variant?: 'dark' | 'light'
  className?: string
}

/**
 * Solid State Practice logo with "an AlignedCardio partner" endorsement (single image).
 */
export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isLight = variant === 'light'
  const wrap = isLight ? 'rounded-xl bg-white px-3 py-2' : ''

  return (
    <Link
      to="/"
      aria-label="Solid State Practice — an AlignedCardio partner"
      className={`group inline-flex items-center ${wrap} ${className}`}
    >
      <img
        src={logoUrl}
        alt="Solid State Practice — an AlignedCardio partner"
        width={665}
        height={305}
        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14"
      />
    </Link>
  )
}
