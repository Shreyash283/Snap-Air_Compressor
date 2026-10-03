import { industries } from '../data/industries'
import PlaceholderImage from './ui/PlaceholderImage'
import SectionHeading from './ui/SectionHeading'

export default function Industries() {
  return (
    <section
      id="industries"
      className="section-y bg-charcoal text-white"
      aria-labelledby="industries-heading"
    >
      <div className="section-padding mx-auto max-w-[1600px]">
        <div className="mb-16 md:mb-20" data-reveal>
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Applications Across Multiple Industries"
            description="Compressed air solutions supporting diverse sectors across Indian industry."
            light
          />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {industries.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden"
              data-reveal
            >
              <PlaceholderImage
                src={item.image}
                alt={item.imageAlt}
                label={item.image}
                aspectClass="aspect-square sm:aspect-[4/5]"
                className="transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-snap-black/95 via-snap-black/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="text-base font-bold tracking-tight sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 hidden text-xs leading-relaxed text-white/70 sm:block">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
