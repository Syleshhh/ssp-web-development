import type { LucideIcon } from 'lucide-react'
import {
  Users,
  Stethoscope,
  FileText,
  BadgeDollarSign,
  BarChart3,
  Cpu,
  PhoneCall,
  Calendar,
  ShieldCheck,
  FileCheck2,
  UserCheck,
  Code2,
  Receipt,
  CreditCard,
  TrendingUp,
} from 'lucide-react'

export interface Capability {
  id: string
  number: string
  title: string
  eyebrow: string
  description: string
  details: string
  icon: LucideIcon
  color: string
  badgeBg: string
  badgeText: string
  features: string[]
}

export const capabilities: Capability[] = [
  {
    id: 'patient-access',
    number: '01',
    title: 'Patient Access',
    eyebrow: 'Access & Engagement',
    description: 'Patient engagement, appointment scheduling and access support.',
    details:
      'Creating a seamless front door for patients while reducing administrative burden on clinical practices. From multi-channel intake to insurance verification.',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    badgeText: 'text-blue-600',
    features: [
      'Multi-channel patient engagement',
      'Centralized appointment scheduling',
      'Pre-service access & intake support',
      'Patient reminder & recall workflows',
    ],
  },
  {
    id: 'clinical-operations',
    number: '02',
    title: 'Clinical Operations',
    eyebrow: 'Provider & Care Support',
    description: 'Support for providers, care teams and day-to-day clinical operations.',
    details:
      'Empowering clinical teams with coordinated operational workflows, reducing friction between administrative tasks and patient care delivery.',
    icon: Stethoscope,
    color: 'from-teal-500 to-emerald-500',
    badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
    badgeText: 'text-teal-600',
    features: [
      'Provider administrative support',
      'Care team workflow coordination',
      'Documentation & charting assistance',
      'Clinical throughput optimization',
    ],
  },
  {
    id: 'revenue-cycle',
    number: '03',
    title: 'Revenue Cycle',
    eyebrow: 'End-to-End RCM',
    description: 'End-to-end RCM, including claims, denials, accounts receivable and collections.',
    details:
      'Technology-enabled revenue cycle operations designed around accuracy, speed, and complete financial visibility from charge capture to payment resolution.',
    icon: FileText,
    color: 'from-indigo-500 to-blue-600',
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    badgeText: 'text-indigo-600',
    features: [
      'Accurate coding & charge capture',
      'Clean claim scrubbing & submission',
      'Proactive denial management & appeals',
      'Persistent accounts receivable resolution',
    ],
  },
  {
    id: 'finance',
    number: '04',
    title: 'Finance',
    eyebrow: 'Financial Operations',
    description: 'Financial operations, reporting and revenue visibility.',
    details:
      'Comprehensive financial reconciliation, remittance management, and executive-level visibility into practice cash flow and net collections.',
    icon: BadgeDollarSign,
    color: 'from-purple-500 to-indigo-600',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
    badgeText: 'text-purple-600',
    features: [
      'Payment posting & ERA reconciliation',
      'Practice financial performance reporting',
      'Cash flow forecasting & tracking',
      'Audit readiness & compliance reporting',
    ],
  },
  {
    id: 'analytics',
    number: '05',
    title: 'Analytics',
    eyebrow: 'Data & Intelligence',
    description: 'Data, reporting and insights to drive better decisions.',
    details:
      'Transforming fragmented operational data into real-time, actionable intelligence that helps practice leaders identify bottlenecks and drive growth.',
    icon: BarChart3,
    color: 'from-sky-500 to-blue-600',
    badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
    badgeText: 'text-sky-600',
    features: [
      'Executive KPI & operational dashboards',
      'Denial trends & root-cause analysis',
      'Provider productivity & throughput metrics',
      'Predictive volume & capacity forecasting',
    ],
  },
  {
    id: 'technology',
    number: '06',
    title: 'Technology',
    eyebrow: 'Automation & AI',
    description: 'Technology-enabled workflows and automation to improve efficiency and scale.',
    details:
      'Developing and deploying modern software tools, intelligent robotic process automation (RPA), and AI workflows built directly inside live healthcare operations.',
    icon: Cpu,
    color: 'from-amber-500 to-orange-500',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    badgeText: 'text-amber-600',
    features: [
      'Intelligent robotic process automation',
      'EHR & practice management integration',
      'AI-assisted prior authorization checks',
      'Automated patient communications',
    ],
  },
]

// 9-Step Healthcare Workflow Visualization
export interface WorkflowStep {
  step: number
  title: string
  subtitle: string
  icon: LucideIcon
  color: string
  lightBg: string
}

export const healthcareWorkflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: 'Patient Calls',
    subtitle: 'Front Door Inquiries',
    icon: PhoneCall,
    color: 'text-blue-600',
    lightBg: 'bg-blue-50 border-blue-200',
  },
  {
    step: 2,
    title: 'Scheduling',
    subtitle: 'Coordinated Access',
    icon: Calendar,
    color: 'text-teal-600',
    lightBg: 'bg-teal-50 border-teal-200',
  },
  {
    step: 3,
    title: 'Eligibility',
    subtitle: 'Benefits Verification',
    icon: ShieldCheck,
    color: 'text-purple-600',
    lightBg: 'bg-purple-50 border-purple-200',
  },
  {
    step: 4,
    title: 'Authorization',
    subtitle: 'Prior Auth Approval',
    icon: FileCheck2,
    color: 'text-amber-600',
    lightBg: 'bg-amber-50 border-amber-200',
  },
  {
    step: 5,
    title: 'Visit',
    subtitle: 'Clinical Care Encounter',
    icon: UserCheck,
    color: 'text-rose-600',
    lightBg: 'bg-rose-50 border-rose-200',
  },
  {
    step: 6,
    title: 'Coding',
    subtitle: 'Accurate Charting',
    icon: Code2,
    color: 'text-cyan-600',
    lightBg: 'bg-cyan-50 border-cyan-200',
  },
  {
    step: 7,
    title: 'Claim',
    subtitle: 'Clean Submission',
    icon: Receipt,
    color: 'text-emerald-600',
    lightBg: 'bg-emerald-50 border-emerald-200',
  },
  {
    step: 8,
    title: 'Payment',
    subtitle: 'Remittance Posting',
    icon: CreditCard,
    color: 'text-violet-600',
    lightBg: 'bg-violet-50 border-violet-200',
  },
  {
    step: 9,
    title: 'A/R',
    subtitle: 'Resolution & Recovery',
    icon: TrendingUp,
    color: 'text-amber-600',
    lightBg: 'bg-amber-50 border-amber-200',
  },
]

// 5-Stage How We Innovate
export interface InnovationStage {
  num: string
  title: string
  description: string
  color: string
}

export const innovationStages: InnovationStage[] = [
  {
    num: '01',
    title: 'Identify',
    description: 'Find friction inside real healthcare operations.',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    num: '02',
    title: 'Build',
    description: 'Design better workflows, automation and technology.',
    color: 'from-teal-600 to-emerald-600',
  },
  {
    num: '03',
    title: 'Deploy',
    description: 'Implement within live healthcare environments.',
    color: 'from-amber-600 to-orange-600',
  },
  {
    num: '04',
    title: 'Measure',
    description: 'Track operational and financial outcomes.',
    color: 'from-purple-600 to-indigo-600',
  },
  {
    num: '05',
    title: 'Improve',
    description: 'Iterate and scale what works.',
    color: 'from-rose-600 to-pink-600',
  },
]

// Statistics
export const operationsStats = [
  {
    value: '120+',
    label: 'Healthcare Operations Professionals',
    icon: Users,
  },
  {
    value: '12,000+',
    label: 'Patient Calls Weekly',
    icon: PhoneCall,
  },
  {
    value: '2,000+',
    label: 'Appointments Scheduled Weekly',
    icon: Calendar,
  },
  {
    value: '60+',
    label: 'Providers Supported',
    icon: Stethoscope,
  },
]
