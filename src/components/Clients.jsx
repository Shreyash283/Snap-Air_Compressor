import SectionHeading from './ui/SectionHeading'

const logoSlots = [
  {
    id: 'tata',
    name: 'Tata',
    image: '/images/clients/tata.webp',
  },
  {
    id: 'mahindra',
    name: 'Mahindra',
    image: '/images/clients/mahindra.webp',
  },
  {
    id: 'bajaj',
    name: 'Bajaj',
    image: '/images/clients/bajaj.webp',
  },
  {
    id: 'ceat',
    name: 'CEAT',
    image: '/images/clients/ceat.webp',
  },
  {
    id: 'lt',
    name: 'L&T',
    image: '/images/clients/lt.webp',
  },
  {
    id: 'cipla',
    name: 'Cipla',
    image: '/images/clients/cipla.webp',
  },
]

export default function Clients() {
  return (
      <section
          id="clients"
          className="section-y border-y border-charcoal/10 bg-snap-gray"
          aria-labelledby="clients-heading"
      >
        <div className="section-padding mx-auto max-w-[1600px]">
          <div className="mb-12 md:mb-16" data-reveal>
            <SectionHeading
                eyebrow="Our Clients"
                title="Trusted by Leading Industries"
                description="Trusted by businesses across diverse industrial sectors."
                align="center"
            />
          </div>

          <ul
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6"
              aria-label="Client logos"
          >
            {logoSlots.map((slot) => (
                <li key={slot.id} data-reveal>
                  <div
                      className="flex aspect-[3/2] items-center justify-center border border-charcoal/10 bg-white px-4 transition-shadow duration-300 hover:shadow-md"
                  >
                    <img
                        src={slot.image}
                        alt={`${slot.name} logo`}
                        className="max-h-16 max-w-[80%] object-contain"
                        loading="lazy"
                    />
                  </div>
                </li>
            ))}
          </ul>
        </div>
      </section>
  )
}