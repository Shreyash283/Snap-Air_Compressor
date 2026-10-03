import { useEffect, useState } from 'react'
import Logo from './ui/Logo'
import Button from './ui/Button'
import TopBar from './TopBar'

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Applications', href: '#industries' },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'Services', href: '#why-snap' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <TopBar />
      <div
        className={`transition-all duration-500 ease-[var(--ease-premium)] ${
          scrolled || menuOpen
            ? 'bg-white/95 shadow-sm shadow-black/5 backdrop-blur-md'
            : 'bg-white'
        }`}
      >
        <nav
          className="section-padding mx-auto flex h-16 max-w-[1600px] items-center justify-between sm:h-[4.25rem]"
          aria-label="Primary"
        >
          <Logo />

          <ul className="hidden items-center gap-6 xl:gap-8 xl:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.8125rem] font-medium text-charcoal/85 transition-colors hover:text-snap-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden xl:block">
            <Button href="#contact" size="sm" variant="primary">
              Get Quote
            </Button>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-charcoal transition-transform duration-500 ease-[var(--ease-premium)] xl:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col justify-between overflow-y-auto px-8 pb-28 pt-28">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-2xl font-semibold text-white transition-colors hover:text-snap-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href="#contact"
            size="lg"
            variant="primary"
            className="w-full"
            onClick={closeMenu}
          >
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  )
}
