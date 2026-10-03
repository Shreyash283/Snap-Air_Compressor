import { contact } from '../data/site'
import Button from './ui/Button'

export default function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-snap-black text-white lg:block">
      <div className="section-padding mx-auto flex max-w-[1600px] items-center justify-between gap-4 py-2 text-xs">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-white/75">
          <a
            href={`mailto:${contact.email}`}
            className="transition-colors hover:text-white"
          >
            {contact.email}
          </a>
          <span className="hidden xl:inline">{contact.location}</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${contact.phoneTel}`}
            className="font-medium text-white transition-colors hover:text-snap-red"
          >
            {contact.phone}
          </a>
          <Button href="#contact" size="sm" variant="primary" className="!py-2">
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  )
}
