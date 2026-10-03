export default function Logo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light'
  const snapFill = isLight ? '#ffffff' : '#E31E24'
  const snapStroke = isLight ? '#ffffff' : '#0a0a0b'
  const subFill = isLight ? 'rgba(255,255,255,0.85)' : '#1c1c1e'

  return (
    <a
      href="#top"
      className={`group inline-block leading-none ${className}`}
      aria-label="SNAP AIR COMPRESSOR — home"
    >
      <svg
        viewBox="0 0 220 56"
        className="h-10 w-auto sm:h-11"
        role="img"
        aria-hidden
      >
        <text
          x="0"
          y="34"
          fill={snapFill}
          stroke={snapStroke}
          strokeWidth="1.2"
          paintOrder="stroke fill"
          fontFamily="Poppins, sans-serif"
          fontSize="32"
          fontWeight="800"
          fontStyle="italic"
          letterSpacing="-1"
        >
          SNAP
        </text>
        <text
          x="0"
          y="50"
          fill={subFill}
          fontFamily="Poppins, sans-serif"
          fontSize="9"
          fontWeight="600"
          letterSpacing="3.2"
        >
          AIR COMPRESSOR
        </text>
      </svg>
    </a>
  )
}
