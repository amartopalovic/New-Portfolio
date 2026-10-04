export type ProjectImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type Project = {
  slug: string
  title: string
  summary: string
  tags: readonly string[]
  githubUrl: string
  liveUrl?: string
  image?: ProjectImage
}

export const projects: readonly Project[] = [
  {
    slug: 'embeddable-widget-lead-capture-platform',
    title: 'Embeddable Widget & Lead Capture Platform',
    summary:
      'Multi-tenant lead-capture platform with embeddable widgets, a contact-management dashboard, and live analytics.',
    tags: ['TypeScript', 'Express', 'React', 'MongoDB', 'Redis', 'Docker', 'GitHub Actions'],
    githubUrl:
      'https://github.com/amartopalovic/Capstone-Project-Embeddable-Widget-and-Lead-Capture-Platform-',
  },
  {
    slug: 'ai-work-study-agent',
    title: 'AI Work & Study Agent',
    summary:
      'Turns natural-language messages into study logs, notes, habits, and reflections, with goals, charts, and AI-generated learning reports.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Ollama', 'Claude API'],
    githubUrl: 'https://github.com/amartopalovic/ai-work-study-agent',
  },
  {
    slug: 'product-listing-enrichment-api',
    title: 'Product Listing Enrichment API',
    summary:
      'Asynchronous API that enriches product listings with categories, summaries, and data-quality flags, built for safe concurrent job processing.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Zod', 'Ollama'],
    githubUrl: 'https://github.com/amartopalovic/enrich-jobs-worker',
  },
  {
    slug: 'ai-decision-flow',
    title: 'AI Decision Flow',
    summary:
      'Visual editor for chaining YES/NO decision nodes and running them through an LLM, with highlighted execution paths and live decision logs.',
    tags: ['React', 'TypeScript', 'React Flow', 'Express', 'Inngest', 'OpenAI API'],
    githubUrl: 'https://github.com/amartopalovic/ai-decision-flow',
  },
  {
    slug: 'natours',
    title: 'Natours',
    summary:
      'Tour discovery and review application with a REST API, authentication, and geospatial queries.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Pug', 'Mapbox'],
    githubUrl: 'https://github.com/amartopalovic/natours-app',
  },
  {
    slug: 'polite-scraper',
    title: 'The Polite Scraper',
    summary:
      'Command-line scraping pipeline that extracted and validated 60 book records from 63 pages.',
    tags: ['JavaScript', 'Node.js', 'Cheerio', 'Zod'],
    githubUrl: 'https://github.com/amartopalovic/Polite-Book-Scraper',
  },
]

export const featuredProjectSlug = 'embeddable-widget-lead-capture-platform'

/** Projects shown under "Other projects" on Home, in display order. */
export const homeProjectSlugs: readonly string[] = [
  'ai-work-study-agent',
  'product-listing-enrichment-api',
  'ai-decision-flow',
]

/** Highlights shown with the featured project on Home ("Live demo" is added only when liveUrl is set). */
export const featuredFacts = {
  testCount: '887',
  testLabel: 'automated tests',
  other: ['Docker', 'GitHub Actions CI'],
} as const

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjects(slugs: readonly string[]): Project[] {
  return slugs.flatMap((slug) => getProject(slug) ?? [])
}
