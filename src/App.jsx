import { useScrollAnimations } from './hooks/useScrollAnimations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import Industries from './components/Industries'
import Technology from './components/Technology'
import WhySnap from './components/WhySnap'
import Manufacturing from './components/Manufacturing'
import About from './components/About'
import Clients from './components/Clients'
import Enquiry from './components/Enquiry'
import Footer from './components/Footer'

export default function App() {
  useScrollAnimations()

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-charcoal"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProductShowcase />
        <Industries />
        <Technology />
        <WhySnap />
        <Manufacturing />
        <About />
        <Clients />
        <Enquiry />
      </main>
      <Footer />
    </>
  )
}
