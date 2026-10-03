import { heroProductImage } from '../data/products'
import { contact, hero } from '../data/site'
import Button from './ui/Button'
import PlaceholderImage from './ui/PlaceholderImage'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-snap-black text-white"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-1/4 top-0 h-full w-2/3 skew-x-[-12deg] bg-snap-red/20"
        aria-hidden
      />

      <div className="section-padding relative mx-auto grid min-h-[100svh] max-w-[1600px] grid-cols-1 items-center gap-10 pt-28 pb-24 lg:grid-cols-12 lg:gap-6 lg:pt-36 lg:pb-28">
        <div className="relative z-10 lg:col-span-5 xl:col-span-4">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-snap-red">
            SNAP Air Compressor
          </p>
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
          >
            {hero.headline}{' '}
            <span className="text-snap-red">{hero.headlineAccent}</span>
          </h1>
          <p className="mt-5 text-sm font-medium tracking-wide text-white/75 sm:text-base">
            {hero.subline}
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {hero.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-white/85"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-snap-red"
                  aria-hidden
                />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact" size="lg" variant="primary">
              Get Best Quote →
            </Button>
            <Button
              href={contact.whatsapp}
              size="lg"
              variant="outlineLight"
              className="border-white/30"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>

        <div
          className="relative lg:col-span-7 lg:col-start-6 xl:col-span-8 xl:col-start-5"
          data-hero-visual
        >
          <PlaceholderImage
            src={heroProductImage.src}
            alt={heroProductImage.alt}
            label="Replace with /images/products/hero-compressor.webp"
            aspectClass="aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] xl:aspect-[16/11]"
            className="shadow-2xl shadow-black/40 ring-1 ring-white/10"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      <div
        className="section-padding absolute bottom-20 right-0 hidden flex-col items-end gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/45 lg:flex"
        aria-hidden
      >
        {hero.serviceTags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div
        className="pointer-events-none absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 lg:flex"
        aria-hidden
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="block h-10 w-px animate-pulse bg-white/25" />
      </div>
    </section>
  )
}
