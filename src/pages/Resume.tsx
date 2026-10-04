import type { ReactNode } from 'react'
import { ButtonLink } from '../components/ButtonLink'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import {
  certificateEntries,
  educationEntries,
  experienceEntries,
  recommendationLetterUrl,
  type ResumeEntry,
} from '../data/resume'
import { descriptions } from '../data/seo'
import { pageTitle, site } from '../data/site'

type ResumeSectionProps = {
  title: string
  alt?: boolean
  children: ReactNode
}

function ResumeSection({ title, alt = false, children }: ResumeSectionProps) {
  return (
    <section className={`px-gutter py-band ${alt ? 'bg-surface-alt' : ''}`}>
      <Reveal className="mx-auto flex max-w-content flex-col gap-8">
        <h2 className="text-display-lg text-ink">{title}</h2>
        {children}
      </Reveal>
    </section>
  )
}

// Plain two-column entry from md: period and location left, details right.
function EntryList({ entries }: { entries: readonly ResumeEntry[] }) {
  return (
    <ul className="flex flex-col gap-12">
      {entries.map((entry) => (
        <li key={entry.title} className="grid gap-3 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col text-body-sm text-secondary">
            <p>{entry.period}</p>
            {entry.location && <p>{entry.location}</p>}
          </div>
          <div className="flex flex-col gap-3 md:col-span-2">
            <h3 className="text-body-xl text-ink">{entry.title}</h3>
            <p>{entry.organization}</p>
            {entry.bullets && (
              <ul className="flex max-w-prose list-disc flex-col gap-3 pl-5 marker:text-secondary">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {entry.link && (
              <ButtonLink to={entry.link.to} variant="text" className="self-start">
                {entry.link.label}
              </ButtonLink>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export function Resume() {
  return (
    <>
      <PageMeta title={pageTitle('Resume')} description={descriptions.resume} />

      <section className="px-gutter pt-band pb-band lg:pt-35">
        <div className="mx-auto flex max-w-content flex-col items-start gap-8">
          <h1 className="text-display-xl text-ink">Resume</h1>
          <ButtonLink to={site.cvPath} size="lg" download>
            Download CV (PDF)
          </ButtonLink>
        </div>
      </section>

      <ResumeSection title="Experience" alt>
        <EntryList entries={experienceEntries} />
      </ResumeSection>

      <ResumeSection title="Education">
        <EntryList entries={educationEntries} />
      </ResumeSection>

      <ResumeSection title="Certificates" alt>
        <EntryList entries={certificateEntries} />
      </ResumeSection>

      <ResumeSection title="Recommendation letter">
        <p className="max-w-prose">
          Read the{' '}
          <a
            href={recommendationLetterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-secondary"
          >
            recommendation letter on LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
      </ResumeSection>
    </>
  )
}
