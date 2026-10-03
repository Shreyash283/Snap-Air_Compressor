import { useCallback, useState } from 'react'

export default function PlaceholderImage({
  src,
  alt,
  label,
  className = '',
  imgClassName = '',
  aspectClass = 'aspect-[4/3]',
  priority = false,
  objectFit = 'cover',
}) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const showPlaceholder = failed || !loaded

  const onLoad = useCallback(() => setLoaded(true), [])
  const onError = useCallback(() => {
    setFailed(true)
    setLoaded(false)
  }, [])

  const fitClass =
    objectFit === 'contain' ? 'object-contain' : 'object-cover object-center'

  return (
    <div
      className={`relative overflow-hidden bg-charcoal-light ${aspectClass} ${className}`}
    >
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
          showPlaceholder ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!showPlaceholder}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-snap-black" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative z-10 flex max-w-[85%] flex-col items-center gap-2 px-4 text-center">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-snap-red">
            Image placeholder
          </span>
          <span className="text-xs font-light text-white/60 sm:text-sm">
            {label || alt}
          </span>
        </div>
      </div>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={onLoad}
          onError={onError}
          className={`absolute inset-0 h-full w-full ${fitClass} transition-transform duration-700 ease-[var(--ease-premium)] ${imgClassName} ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  )
}
