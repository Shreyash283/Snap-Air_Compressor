import Button from './ui/Button'

export default function Enquiry() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-charcoal py-24 md:py-32 lg:py-40"
      aria-labelledby="enquiry-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #d71920 0%, transparent 45%), radial-gradient(circle at 80% 50%, #d71920 0%, transparent 40%)',
        }}
      />
      <div className="section-padding relative mx-auto max-w-[1600px] text-center" data-reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-snap-red">
          Get in touch
        </p>
        <h2
          id="enquiry-heading"
          className="text-balance mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Let&apos;s Build Your Compressed Air Solution
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/65 sm:text-lg">
          Enquiry form and contact details can be connected here. No phone numbers
          or addresses are shown until official SNAP contact information is added.
        </p>
        <div className="mt-10">
          <Button href="#contact" size="lg" variant="primary">
            Enquire Now
          </Button>
        </div>

        <form
          className="mx-auto mt-16 max-w-xl space-y-4 text-left"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Enquiry form placeholder"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 transition-colors focus:border-snap-red focus:bg-white/10 focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="sr-only">Company</span>
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 transition-colors focus:border-snap-red focus:bg-white/10 focus:outline-none"
              />
            </label>
          </div>
          <label className="block">
            <span className="sr-only">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 transition-colors focus:border-snap-red focus:bg-white/10 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your compressed air requirements"
              className="w-full resize-y border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 transition-colors focus:border-snap-red focus:bg-white/10 focus:outline-none"
            />
          </label>
          <Button type="submit" size="md" variant="primary" className="w-full sm:w-auto">
            Submit enquiry
          </Button>
          <p className="text-xs text-white/40">
            Form submission endpoint to be configured with SNAP backend or CRM.
          </p>
        </form>
      </div>
    </section>
  )
}
