import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reducedMotion) {
      gsap.set('[data-reveal]', { opacity: 1, y: 0 })
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })

      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxSpeed || '0.15')
        gsap.to(el, {
          y: () => speed * 120,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      const heroVisual = document.querySelector('[data-hero-visual]')
      if (heroVisual) {
        gsap.to(heroVisual, {
          y: 80,
          ease: 'none',
          scrollTrigger: {
            trigger: heroVisual,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      const productIntro = document.querySelector('[data-pin-intro]')
      if (productIntro && window.innerWidth >= 1024) {
        ScrollTrigger.create({
          trigger: productIntro,
          start: 'top top',
          end: '+=40%',
          pin: true,
          pinSpacing: true,
        })
      }
    })

    return () => ctx.revert()
  }, [])
}
