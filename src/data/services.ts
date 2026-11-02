import type { LucideIcon } from 'lucide-react'
import {
  ClipboardCheck,
  FileText,
  ShieldCheck,
  Stethoscope,
  Receipt,
  Wallet,
  LineChart,
  Headphones,
  BadgeCheck,
  Search,
} from 'lucide-react'

export interface Service {
  slug: string
  title: string
  short: string
  description: string
  icon: LucideIcon
  benefits: string[]
}

// Service catalogue derived from the "Our Services" list on the existing site.
export const services: Service[] = [
  {
    slug: 'medical-coding',
    title: 'Medical Coding',
    short: 'Accurate CPT, ICD-10, and HCPCS coding aligned with payer rules.',
    description:
      'Certified-level coding support that translates clinical documentation into clean, compliant claims — reducing denials and protecting reimbursement.',
    icon: BadgeCheck,
    benefits: [
      'CPT, ICD-10 & HCPCS coding',
      'Documentation review & queries',
      'Compliance-focused workflows',
    ],
  },
  {
    slug: 'medical-billing',
    title: 'Medical Billing',
    short: 'End-to-end claim creation, submission, and follow-up.',
    description:
      'We manage the full billing lifecycle — from charge capture through submission and follow-up — so claims move faster and revenue is protected.',
    icon: FileText,
    benefits: ['Clean claim submission', 'Denial prevention', 'Faster reimbursement cycles'],
  },
  {
    slug: 'eligibility-verification',
    title: 'Eligibility & Benefits Verification',
    short: 'Confirm coverage and benefits before the visit.',
    description:
      'Verify patient coverage and benefits ahead of service to reduce claim rejections, surprise balances, and downstream rework.',
    icon: ShieldCheck,
    benefits: ['Real-time coverage checks', 'Benefit & copay confirmation', 'Fewer front-end denials'],
  },
  {
    slug: 'prior-authorization',
    title: 'Prior Authorization',
    short: 'Timely authorizations to keep care on schedule.',
    description:
      'We handle authorization requests and follow-ups end to end, keeping procedures on schedule and reducing avoidable payer delays.',
    icon: ClipboardCheck,
    benefits: ['Auth request & tracking', 'Payer follow-up', 'Reduced scheduling delays'],
  },
  {
    slug: 'charge-entry-claim-audit',
    title: 'Charge Entry & Claim Audit',
    short: 'Precise charge capture with proactive claim review.',
    description:
      'Accurate charge entry paired with claim audits catches errors before submission — improving first-pass acceptance and protecting revenue.',
    icon: Search,
    benefits: ['Accurate charge capture', 'Pre-submission audits', 'Higher first-pass rates'],
  },
  {
    slug: 'payment-posting',
    title: 'Payment Posting & Remittance',
    short: 'Reconciled posting for clear financial visibility.',
    description:
      'Timely, reconciled payment posting and remittance processing gives your practice a clear, trustworthy view of financial performance.',
    icon: Receipt,
    benefits: ['ERA & EOB posting', 'Reconciliation', 'Denial identification'],
  },
  {
    slug: 'accounts-receivable',
    title: 'Accounts Receivable',
    short: 'Persistent AR follow-up to recover what you’re owed.',
    description:
      'Structured AR management and appeals reduce aging balances and recover revenue that would otherwise be written off.',
    icon: Wallet,
    benefits: ['Aging analysis', 'Denial appeals', 'Reduced days in AR'],
  },
  {
    slug: 'patient-call-center',
    title: 'Patient Call Center',
    short: '24/7 patient support for billing and inquiries.',
    description:
      'A responsive patient call center handles billing questions and support with empathy — improving the patient financial experience.',
    icon: Headphones,
    benefits: ['24/7 patient support', 'Billing inquiries', 'Patient-first communication'],
  },
]

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)

// Higher-level value pillars used across Home / Why-us sections.
export const valuePillars: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Experienced Healthcare Professionals',
    description: 'Decades of combined clinical and revenue cycle experience behind every workflow.',
    icon: Stethoscope,
  },
  {
    title: 'End-to-End Revenue Cycle Support',
    description: 'From eligibility to AR — one accountable partner across the entire cycle.',
    icon: LineChart,
  },
  {
    title: 'Scalable Operational Solutions',
    description: 'Support that flexes with your patient volume without adding overhead.',
    icon: BadgeCheck,
  },
  {
    title: 'Patient-Centered Support',
    description: 'Billing handled with care so your team stays focused on patients.',
    icon: Headphones,
  },
]
