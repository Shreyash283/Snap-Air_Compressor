import { contact } from '../data/site'

export default function StickyContactBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 text-xs font-medium sm:text-sm lg:grid-cols-4"
      aria-label="Quick contact"
    >
      <a
        href={`tel:${contact.phoneTel}`}
        className="flex flex-col justify-center bg-snap-red px-3 py-3 text-white transition-colors hover:bg-snap-red-dark sm:px-4"
      >
        <span className="text-[0.65rem] uppercase tracking-wider opacity-90">
          Call Now
        </span>
        <span className="font-semibold">{contact.phone}</span>
      </a>
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col justify-center bg-charcoal px-3 py-3 text-white transition-colors hover:bg-charcoal-light sm:px-4"
      >
        <span className="text-[0.65rem] uppercase tracking-wider opacity-90">
          Chat on WhatsApp
        </span>
        <span className="font-semibold">Get Instant Response</span>
      </a>
      <a
        href={`mailto:${contact.email}`}
        className="col-span-2 flex flex-col justify-center bg-snap-black px-3 py-3 text-white transition-colors hover:bg-charcoal sm:col-span-1 sm:px-4"
      >
        <span className="text-[0.65rem] uppercase tracking-wider opacity-90">
          Send Enquiry
        </span>
        <span className="truncate font-semibold">{contact.email}</span>
      </a>
      <a
        href="#contact"
        className="col-span-2 flex items-center justify-center gap-2 bg-snap-red px-4 py-3 text-white transition-colors hover:bg-snap-red-dark sm:col-span-1"
      >
        Request a Quote
        <span aria-hidden>→</span>
      </a>
    </div>
  )
}
