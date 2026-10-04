import { site } from './site'

/** Meta descriptions per page. Project detail pages use the project's summary. */
export const descriptions = {
  home: site.intro,
  projects: 'Selected full-stack, backend/API, and AI-integrated projects by Amar Topalović.',
  about:
    'About Amar Topalović, a third-year Software Engineering student in Sarajevo building full-stack and AI-integrated applications.',
  resume:
    'Resume of Amar Topalović: backend engineering internship at FlyRank AI, Software Engineering studies at IUS, and certificates.',
  contact: 'Contact details for Amar Topalović, including email, phone, LinkedIn, and GitHub.',
  notFound: 'The page you were looking for doesn’t exist.',
} as const
