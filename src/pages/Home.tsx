import { useSeo } from '../hooks/useSeo'
import { Hero } from '../components/home/Hero'
import { StatsSection } from '../components/home/StatsSection'
import { AboutAlignedCardio } from '../components/home/AboutAlignedCardio'
import { CapabilitiesSection } from '../components/home/CapabilitiesSection'
import { InnovationWorkflowSection } from '../components/home/InnovationWorkflowSection'
import { HowWeInnovateSection } from '../components/home/HowWeInnovateSection'
import { BetterOperatingModelSection } from '../components/home/BetterOperatingModelSection'
import { BuiltAtScaleSection } from '../components/home/BuiltAtScaleSection'
import { VisionMission } from '../components/home/VisionMission'
import { CTASection } from '../components/shared/CTASection'

export default function Home() {
  useSeo({
    title: 'Healthcare Operations & Technology Engine',
    description:
      'Solid State Practice is the operations and technology engine behind AlignedCardio, combining experienced healthcare teams, analytics, automation and AI to build a better way to run medical practices.',
  })

  return (
    <>
      {/* 1. Branding & Hero */}
      <Hero />

      {/* 2. Operations Statistics (120+, 12,000+, 2,000+, 60+) */}
      <StatsSection />

      {/* 3. About SSP & Part of AlignedCardio Platform */}
      <AboutAlignedCardio />

      {/* 4. 6 Operational Capabilities */}
      <CapabilitiesSection />

      {/* 5. Healthcare Operations Innovation & 9-Step Workflow */}
      <InnovationWorkflowSection />

      {/* 6. How We Innovate: 5 Stages (01 Identify to 05 Improve) */}
      <HowWeInnovateSection />

      {/* 7. A Better Operating Model (People + Technology + Data) */}
      <BetterOperatingModelSection />

      {/* 8. Built at Scale (4 Scale Dimensions) */}
      <BuiltAtScaleSection />

      {/* 9. Vision & Mission */}
      <VisionMission />

      {/* 10. Partner CTA */}
      <CTASection
        title="Ready to build a better operating model for your practice?"
        description="Connect with our healthcare operations and technology leadership to discuss how SSP can support your providers and clinical workflows."
      />
    </>
  )
}
