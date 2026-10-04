export type ResumeLink = {
  label: string
  to: string
}

export type ResumeEntry = {
  title: string
  organization: string
  location?: string
  period: string
  bullets?: readonly string[]
  /** Internal route. */
  link?: ResumeLink
}

export const experienceEntries: readonly ResumeEntry[] = [
  {
    title: 'Backend Engineer Intern',
    organization: 'FlyRank AI',
    location: 'Remote',
    period: 'July–September 2026',
    bullets: [
      'Applied concepts including task design, prompting, API contracts, retrieval and grounding, evaluation, and operations. Practiced taking software work through implementation, testing, documentation, and deployment.',
      'Developed consistent professional working habits through 34 completed practical assignments and 43 attended program meetings, within at least 250 documented hours of practical work, training, and learning.',
      'Gained practical experience in AI-assisted software engineering, using Claude Code as the primary AI coding assistant throughout engineering assignments and AI fluency training.',
      'Independently designed and built a multi-tenant lead-capture platform using TypeScript, Express, React, MongoDB, and Redis, with embeddable widgets, a contact-management dashboard, and live analytics.',
      'Implemented authentication, role-based permissions, workspace data isolation, public API validation, and background email and webhook delivery with retries.',
      'Delivered a mentor-reviewed capstone and deployed it as a public portfolio demo using synthetic data, supported by Docker, GitHub Actions CI, API documentation, and 887 automated tests.',
    ],
    link: {
      label: 'View capstone project',
      to: '/projects/embeddable-widget-lead-capture-platform',
    },
  },
]

export const educationEntries: readonly ResumeEntry[] = [
  {
    title: 'Software Engineering',
    organization: 'International University of Sarajevo (IUS)',
    location: 'Sarajevo, Bosnia and Herzegovina',
    period: '2024–June 2028 (expected graduation)',
    bullets: [
      'Currently in the third year of study.',
      'Academic programming and database experience includes Java and MySQL.',
    ],
  },
]

export const certificateEntries: readonly ResumeEntry[] = [
  { title: 'Backend AI Engineering', organization: 'FlyRank.ai', period: 'September 2026' },
  { title: 'AI Fluency', organization: 'FlyRank.ai', period: 'September 2026' },
]

export const recommendationLetterUrl =
  'https://www.linkedin.com/feed/update/urn:li:activity:7504945016998416384/'
