export type NavItem = {
  label: string
  to: string
}

export const site = {
  name: 'Amar Topalović',
  role: 'Full-Stack Software Developer',
  defaultTitle: 'Amar Topalović | Full-Stack Software Developer',
  intro:
    'Third-year Software Engineering student building full-stack apps with AI integration, REST APIs, authentication, and background processing.',
  availability:
    'Open to full-time, part-time, and internship roles in Bosnia and Herzegovina (remote, hybrid, on-site).',
  location: 'Sarajevo, BiH',
  email: 'amartopalovic27@gmail.com',
  github: 'https://github.com/amartopalovic',
  linkedin: 'https://www.linkedin.com/in/amar-topalovic-223a6836a/',
  cvPath: '/Amar-Topalovic-CV.pdf',
} as const

export const navItems: readonly NavItem[] = [
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]

export function pageTitle(page: string) {
  return `${page} | ${site.name}`
}
