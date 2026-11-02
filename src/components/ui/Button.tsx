import { Link } from 'react-router-dom'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'white'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-sm hover:bg-brand-700 hover:shadow-card-hover active:translate-y-px',
  secondary:
    'bg-white text-brand-700 border border-brand-200 hover:border-brand-400 hover:bg-brand-50 active:translate-y-px',
  ghost: 'bg-transparent text-brand-700 hover:bg-brand-50 active:translate-y-px',
  white:
    'bg-white text-brand-700 shadow-sm hover:bg-brand-50 hover:shadow-card-hover active:translate-y-px',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'> & {
    to?: undefined
    href?: undefined
  }

type ButtonAsLink = CommonProps & {
  to: string
  href?: undefined
}

type ButtonAsAnchor = CommonProps &
  Omit<ComponentPropsWithoutRef<'a'>, 'className' | 'children' | 'href'> & {
    href: string
    to?: undefined
  }

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if ('to' in props && props.to) {
    const { to } = props
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const { href, to: _to, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const { variant: _v, size: _s, className: _c, children: _ch, to: _to, href: _h, ...rest } =
    props as ButtonAsButton
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
