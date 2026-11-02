import { Check } from 'lucide-react'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { images, imgAt, imgSrcSet } from '../../data/images'

const highlights = [
  'Clinical & revenue cycle experience',
  'Tailored operational support',
  'Focus on accuracy & efficiency',
]

export function WhoWeAre() {
  return (
    <section className="section-pad">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <Reveal className="relative order-last lg:order-first">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200/70 shadow-card">
            <img
              src={imgAt(images.whoWeAre, 800)}
              srcSet={imgSrcSet(images.whoWeAre, [400, 550, 800, 1100])}
              sizes="(min-width: 1024px) 550px, 100vw"
              alt="Revenue cycle specialists collaborating in a modern medical office"
              className="h-full w-full object-cover"
              width={1100}
              height={820}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-card sm:block">
            <p className="text-3xl font-extrabold text-brand-600">USA</p>
            <p className="mt-1 text-sm text-ink-muted">based, internationally supported</p>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={100}>
          <span className="eyebrow mb-4">Who We Are</span>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            Helping healthcare practices navigate the revenue cycle
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-muted">
            <p>
              Solid State Practice is a USA-based, internationally supported company with decades of
              clinical and revenue cycle experience. Our professionals bring genuine passion to your
              clinical and business success.
            </p>
            <p>
              We offer tailored solutions for both routine and complex billing challenges — building
              dependable, day-to-day operational support around the way your practice actually works.
            </p>
          </div>

          <ul className="mt-6 flex flex-col gap-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-ink">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button to="/about" variant="secondary">
              More about us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
