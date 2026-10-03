const variants = {
  primary:
    'bg-snap-red text-white hover:bg-snap-red-dark border border-transparent',
  secondary:
    'bg-transparent text-charcoal border border-charcoal/25 hover:border-charcoal hover:bg-charcoal/5',
  light:
    'bg-white text-charcoal border border-white/20 hover:bg-white/90',
  outlineLight:
    'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10',
}

const sizes = {
  sm: 'px-5 py-2.5 text-xs tracking-wide',
  md: 'px-7 py-3.5 text-sm font-medium tracking-wide',
  lg: 'px-8 py-4 text-sm font-semibold uppercase tracking-wider',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick,
  type = 'button',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-none transition-all duration-300 ease-[var(--ease-premium)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-snap-red'

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
