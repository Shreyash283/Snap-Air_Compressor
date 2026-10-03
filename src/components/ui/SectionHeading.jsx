export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) {
  const alignClass =
    align === 'center'
      ? 'text-center items-center mx-auto'
      : 'text-left items-start'

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.3em] ${
            light ? 'text-snap-red' : 'text-snap-red'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-snap-black'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/70' : 'text-snap-gray-dark'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
