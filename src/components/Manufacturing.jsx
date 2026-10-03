import PlaceholderImage from './ui/PlaceholderImage'
import SectionHeading from './ui/SectionHeading'

export default function Manufacturing() {
  return (
    <section
      id="manufacturing"
      className="relative overflow-hidden bg-snap-black text-white"
      aria-labelledby="manufacturing-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative lg:min-h-[85vh]">
          <PlaceholderImage
            src="/images/manufacturing/manufacturing.webp"
            alt="SNAP manufacturing facility — editorial photograph placeholder"
            label="/images/manufacturing/manufacturing.webp"
            aspectClass="aspect-[4/3] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:min-h-[85vh]"
            className="lg:min-h-[85vh]"
          />
          <div className="pointer-events-none absolute inset-0 bg-charcoal/30 lg:bg-gradient-to-r lg:from-transparent lg:to-snap-black/80" />
        </div>

        <div className="section-padding flex flex-col justify-center py-20 lg:py-28 xl:pr-16">
          <div data-reveal>
            <SectionHeading
              eyebrow="Manufacturing"
              title="Where precision meets production"
              description="An editorial view into SNAP’s manufacturing capability. Replace this narrative with verified facility details, processes, and photography."
              light
            />
            <div className="mt-12 space-y-6 text-base leading-relaxed text-white/75">
              <p>
                This block is reserved for authentic manufacturing storytelling—
                equipment, workflow, and quality checkpoints that reflect SNAP’s
                actual operations.
              </p>
              <p>
                The visual system expects a wide-format image at{' '}
                <span className="text-white/90">/images/manufacturing/manufacturing.webp</span>{' '}
                with no layout changes required when real assets are added.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
