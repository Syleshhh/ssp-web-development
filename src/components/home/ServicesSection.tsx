import { SectionHeading } from '../ui/SectionHeading'
import { ServiceCard } from '../shared/ServiceCard'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { services } from '../../data/services'

export function ServicesSection() {
  return (
    <section className="section-pad bg-surface-soft">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="What We Do"
            title="End-to-end revenue cycle support"
            description="Practical solutions designed to simplify complex billing operations and help practices operate more efficiently."
            className="mb-12"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 4) * 70}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to="/services" variant="secondary" size="lg">
            View all services
          </Button>
        </div>
      </div>
    </section>
  )
}
