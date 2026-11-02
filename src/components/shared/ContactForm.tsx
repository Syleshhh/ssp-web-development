import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '../ui/Button'
import { services } from '../../data/services'

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  if (!values.email.trim()) errors.email = 'Please enter your work email.'
  else if (!emailRe.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (!values.service) errors.service = 'Please select a service.'
  if (!values.message.trim()) errors.message = 'Please tell us how we can help.'
  return errors
}

const fieldBase =
  'w-full rounded-xl border bg-white px-4 text-[15px] text-ink placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/50'

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }))
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
    }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      // Move focus to first invalid field for accessibility.
      const firstKey = Object.keys(nextErrors)[0]
      document.getElementById(`contact-${firstKey}`)?.focus()
      return
    }

    setSubmitting(true)
    // No backend in this frontend project — simulate submission.
    // Replace with a real API call (e.g. fetch('/api/contact', ...)) later.
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setSubmitted(true)
    setValues(initial)
  }

  const inputHeight = 'h-12'

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-brand-100 bg-brand-50/60 p-10 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-ink">Thank you — message received</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
          A member of our team will get back to you shortly. For urgent needs, please call one of
          our offices directly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field label="Full Name" htmlFor="contact-name" error={errors.name} required>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          className={`${fieldBase} ${inputHeight} ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
          value={values.name}
          onChange={update('name')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
        />
      </Field>

      <Field label="Work Email" htmlFor="contact-email" error={errors.email} required>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          className={`${fieldBase} ${inputHeight} ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
          value={values.email}
          onChange={update('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
        />
      </Field>

      <Field label="Phone Number" htmlFor="contact-phone" hint="Optional">
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          className={`${fieldBase} ${inputHeight} border-slate-200`}
          value={values.phone}
          onChange={update('phone')}
        />
      </Field>

      <Field label="Company / Practice" htmlFor="contact-company" hint="Optional">
        <input
          id="contact-company"
          type="text"
          autoComplete="organization"
          className={`${fieldBase} ${inputHeight} border-slate-200`}
          value={values.company}
          onChange={update('company')}
        />
      </Field>

      <Field
        label="Service Needed"
        htmlFor="contact-service"
        error={errors.service}
        required
        className="sm:col-span-2"
      >
        <select
          id="contact-service"
          className={`${fieldBase} ${inputHeight} appearance-none ${
            errors.service ? 'border-red-400' : 'border-slate-200'
          } ${values.service ? 'text-ink' : 'text-slate-400'}`}
          value={values.service}
          onChange={update('service')}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? 'contact-service-error' : undefined}
        >
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </Field>

      <Field
        label="Message"
        htmlFor="contact-message"
        error={errors.message}
        required
        className="sm:col-span-2"
      >
        <textarea
          id="contact-message"
          rows={5}
          className={`${fieldBase} resize-y py-3 ${
            errors.message ? 'border-red-400' : 'border-slate-200'
          }`}
          value={values.message}
          onChange={update('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
      </Field>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </div>
    </form>
  )
}

interface FieldProps {
  label: string
  htmlFor: string
  error?: string
  hint?: string
  required?: boolean
  className?: string
  children: React.ReactNode
}

function Field({ label, htmlFor, error, hint, required, className = '', children }: FieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-brand-600"> *</span>}
        {hint && <span className="ml-1.5 font-normal text-ink-soft">({hint})</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
