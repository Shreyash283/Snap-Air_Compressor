import Logo from './ui/Logo'

const copyrightYear = new Date().getFullYear()

const footerNav = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Manufacturing', href: '#manufacturing' },
    { label: 'Why SNAP', href: '#why-snap' },
  ],
  Products: [
    { label: 'Product range', href: '#products' },
    { label: 'Industries', href: '#industries' },
    { label: 'Technology', href: '#technology' },
  ],
  Contact: [{ label: 'Enquire', href: '#contact' }],
}

const socialPlaceholders = [
  { label: 'LinkedIn — placeholder', href: '#' },
  { label: 'YouTube — placeholder', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-snap-black text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="section-padding mx-auto max-w-[1600px] py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              SNAP AIR COMPRESSOR — industrial compressed air solutions. Contact
              details and social links to be added when official channels are
              confirmed.
            </p>
            <ul className="mt-8 flex gap-6" aria-label="Social links">
              {socialPlaceholders.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs font-medium uppercase tracking-wider text-white/50 transition-colors hover:text-snap-red"
                    aria-label={item.label}
                  >
                    {item.label.split(' —')[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:justify-items-end">
            {Object.entries(footerNav).map(([group, links]) => (
              <div key={group}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  {group}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {copyrightYear} SNAP AIR COMPRESSOR. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Address, phone, and email placeholders intentionally omitted.
          </p>
        </div>
      </div>
    </footer>
  )
}
