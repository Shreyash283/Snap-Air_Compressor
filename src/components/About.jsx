import PlaceholderImage from './ui/PlaceholderImage'
import SectionHeading from './ui/SectionHeading'

export default function About() {
  return (
    <section
      id="about"
      className="section-y bg-white"
      aria-labelledby="about-heading"
    >
      <div className="section-padding mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <SectionHeading
              eyebrow="About SNAP"
              title="Industrial compressed air, thoughtfully built"
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-snap-gray-dark">
              <p>
                SNAP AIR COMPRESSOR serves industries that depend on consistent,
                quality compressed air. This about section is intentionally concise
                until official company history and mission copy is provided.
              </p>
              <p>
                Use this space for leadership message, heritage, and values—
                written in SNAP’s voice once content is confirmed.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7" data-reveal>
            <PlaceholderImage
              src="/images/about/about.webp"
              alt="About SNAP — supporting image placeholder"
              label="/images/about/about.webp"
              aspectClass="aspect-[16/10] lg:aspect-[16/11]"
              className="ring-1 ring-black/5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
