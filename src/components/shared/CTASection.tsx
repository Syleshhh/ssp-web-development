import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

interface CTASectionProps {
  title?: string
  description?: string
  /** Hide the secondary "Explore Our Services" button (e.g. on the Services page). */
  hideSecondary?: boolean
}

/** Conversion band shown before the footer on most pages. */
export function CTASection({
  title = "Let's make your revenue cycle work smarter",
  description = 'Tell us about your practice and the challenges you’re looking to solve. Our team will help you find a better path forward.',
  hideSecondary = false,
}: CTASectionProps) {
  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl bg-brand-800 px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          {/* decorative accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-600/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-100">
              {description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/contact" variant="white" size="lg" className="w-full sm:w-auto">
                Schedule a Consultation
              </Button>
              {!hideSecondary && (
                <Button
                  to="/services"
                  size="lg"
                  className="w-full border border-white/25 bg-transparent text-white hover:bg-white/10 sm:w-auto"
                >
                  Explore Our Services
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
