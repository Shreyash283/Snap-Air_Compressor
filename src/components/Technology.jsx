import PlaceholderImage from './ui/PlaceholderImage'
import SectionHeading from './ui/SectionHeading'

const pillars = [
  {
    title: 'Engineering & Performance',
    description:
      'Designed for high performance and reliable operation across industrial applications.',
  },
  {
    title: 'Energy Efficiency',
    description:
      'Energy-efficient solutions designed to help reduce operating costs and improve overall efficiency.',
  },
  {
    title: 'Reliability & Durability',
    description:
      'Robust compressor solutions built for long-term performance with dependable operation.',
  },
]

export default function Technology() {
  return (
    <section
      id="technology"
      className="section-y bg-snap-gray"
      aria-labelledby="technology-heading"
    >
      <div className="section-padding mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div data-reveal>
            <SectionHeading
              eyebrow="Solutions & Technology"
              title="Precision Engineering for Reliable Performance"
              description="At SNAP AIR COMPRESSOR, we focus on high performance, energy efficiency and reliable compressed air solutions designed to meet industrial requirements."
            />
            <ul className="mt-12 space-y-8">
              {pillars.map((item) => (
                <li
                  key={item.title}
                  className="border-l-2 border-snap-red pl-6"
                >
                  <h3 className="text-lg font-semibold text-snap-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-snap-gray-dark sm:text-base">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" data-reveal data-parallax data-parallax-speed="0.12">
            <PlaceholderImage
              src="/images/technology/technology.webp"
              alt="SNAP engineering and technology — visual placeholder"
              label="/images/technology/technology.webp"
              aspectClass="aspect-[4/5] lg:aspect-square"
              className="shadow-xl shadow-black/10"
            />
            <div
              className="absolute -bottom-6 -left-6 hidden h-24 w-24 border border-snap-red/30 lg:block"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  )
}
