import type { ReactNode } from 'react'
import { Reveal } from '../components/Reveal'
import { pageTitle, site } from '../data/site'

// Underlined so links don't rely on colour alone; py-2 gives a 44px hit area,
// and wrap-anywhere is a fallback for any value too long for the column.
const contactLinkClasses =
  'inline-block py-2 text-body-xl text-ink underline underline-offset-4 wrap-anywhere transition-colors hover:text-secondary'

type ContactRow = {
  label: string
  text: ReactNode
  href: string
  external?: boolean
}

const [emailUser, emailDomain] = site.email.split('@')

const contactRows: readonly ContactRow[] = [
  // <wbr> lets the address break after "@" instead of mid-word on phones.
  {
    label: 'Email',
    text: (
      <>
        {emailUser}@<wbr />
        {emailDomain}
      </>
    ),
    href: `mailto:${site.email}`,
  },
  { label: 'Phone', text: site.phone, href: site.phoneHref },
  { label: 'LinkedIn', text: 'View LinkedIn profile', href: site.linkedin, external: true },
  { label: 'GitHub', text: 'View GitHub profile', href: site.github, external: true },
]

type ContactSectionProps = {
  title: string
  alt?: boolean
  children: ReactNode
}

function ContactSection({ title, alt = false, children }: ContactSectionProps) {
  return (
    <section className={`px-gutter py-band ${alt ? 'bg-surface-alt' : ''}`}>
      <Reveal className="mx-auto flex max-w-content flex-col gap-8">
        <h2 className="text-display-lg text-ink">{title}</h2>
        {children}
      </Reveal>
    </section>
  )
}

export function Contact() {
  return (
    <>
      <title>{pageTitle('Contact')}</title>

      <section className="px-gutter pt-band pb-band lg:pt-35">
        <div className="mx-auto flex max-w-content flex-col gap-6">
          <h1 className="text-display-xl text-ink">Contact</h1>
          <p className="max-w-prose text-body-lg">
            Have a question or an opportunity in mind? Reach out using any of the links below.
          </p>
        </div>
      </section>

      <ContactSection title="Contact details" alt>
        <dl className="flex flex-col gap-6">
          {contactRows.map((row) => (
            <div key={row.label} className="grid gap-1 md:grid-cols-3 md:items-baseline md:gap-8">
              <dt className="text-body-sm text-secondary">{row.label}</dt>
              <dd className="min-w-0 md:col-span-2">
                {row.external ? (
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={contactLinkClasses}
                  >
                    {row.text}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <a href={row.href} className={contactLinkClasses}>
                    {row.text}
                  </a>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </ContactSection>

      <ContactSection title="Availability">
        <div className="flex flex-col gap-4">
          <p className="max-w-prose">{site.availability}</p>
          <p className="max-w-prose">Typical response time: within 1–2 business days.</p>
        </div>
      </ContactSection>
    </>
  )
}
