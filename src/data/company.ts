// Central company information. Values here reflect Solid State Practice's
// positioning as a healthcare operations and technology organization and its
// partnership with AlignedCardio.

export const company = {
  name: 'Solid State Practice',
  shortName: 'SSP',
  partner: 'AlignedCardio',
  tagline: 'Healthcare Operations & Technology',
  eyebrow: 'HEALTHCARE OPERATIONS & TECHNOLOGY',
  heading: 'Healthcare operations, built differently.',
  description:
    'Solid State Practice is the operations and technology engine behind AlignedCardio, combining experienced healthcare teams, analytics, automation and AI to build a better way to run medical practices.',
  alignedCardioNote:
    'AlignedCardio has invested in building critical operational capabilities directly into its platform, and SSP is a critical part of that infrastructure.',
  highlightMessage:
    'Real healthcare experience. Better operations. Technology built for what’s next.',
  founded: 2023,
  offices: {
    usa: {
      label: 'USA Office',
      lines: ['445 Charles H. Dimmock Pkwy', 'Suite #104', 'Colonial Heights, VA 23834', 'USA'],
      phone: '+1 512-333-4695',
      phoneHref: 'tel:+15123334695',
    },
    india: {
      label: 'India Office',
      lines: [
        'Solid Practice Service Private Limited',
        '4th floor, DC 13&14, Elcot Sez Tidel Park',
        'Coimbatore – 641014',
      ],
      phone: '+91 96008 23909',
      phoneHref: 'tel:+919600823909',
    },
  },
  social: [] as { label: string; href: string; icon: 'facebook' | 'twitter' | 'linkedin' }[],
} as const

export const visionMission = {
  vision:
    'To be an exemplary operations and technology engine for physician organizations, setting a new standard for modern healthcare operations through experienced teams, intelligent automation, and measurable practice outcomes.',
  mission:
    'To solve real operational challenges inside physician-led healthcare organizations by unifying experienced teams, technology, analytics, and automation — enabling clinicians to focus entirely on patient care.',
}
