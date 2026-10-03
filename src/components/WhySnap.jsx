import { whyChooseSnap } from '../data/site'
import SectionHeading from './ui/SectionHeading'

export default function WhySnap() {
  return (
    <section
      id="why-snap"
      className="section-y bg-white"
      aria-labelledby="why-snap-heading"
    >
      <div className="section-padding mx-auto max-w-[1600px]">
        <div className="mb-16 md:mb-20" data-reveal>
          <SectionHeading
            eyebrow="Why Choose SNAP"
            title="Your Reliable Partner in Compressed Air"
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 gap-px bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseSnap.map((item) => (
            <div
              key={item.title}
              className="group bg-white p-8 transition-colors duration-300 hover:bg-snap-gray lg:p-10"
              data-reveal
            >
              <span
                className="mb-6 inline-flex h-10 w-10 items-center justify-center border border-snap-red/25 text-snap-red"
                aria-hidden
              >
                ●
              </span>
              <h3 className="text-xl font-bold text-snap-black">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-snap-gray-dark sm:text-base">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
