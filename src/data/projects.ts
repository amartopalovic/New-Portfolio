export type ProjectImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type ProjectCategory = 'full-stack' | 'backend-api' | 'ai'

export type ProjectDetail = {
  overview: string
  built: readonly string[]
  decisions: readonly string[]
  result: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  tags: readonly string[]
  categories: readonly ProjectCategory[]
  githubUrl: string
  liveUrl?: string
  /** Card thumbnail (Home and Projects). */
  image?: ProjectImage
  detail: ProjectDetail
  /** Detail-page gallery. */
  screenshots?: readonly ProjectImage[]
}

export const projects: readonly Project[] = [
  {
    slug: 'embeddable-widget-lead-capture-platform',
    title: 'Embeddable Widget & Lead Capture Platform',
    summary:
      'Multi-tenant lead-capture platform with embeddable widgets, a contact-management dashboard, and live analytics.',
    tags: ['TypeScript', 'Express', 'React', 'MongoDB', 'Redis', 'Docker', 'GitHub Actions'],
    categories: ['full-stack', 'backend-api'],
    githubUrl:
      'https://github.com/amartopalovic/Capstone-Project-Embeddable-Widget-and-Lead-Capture-Platform-',
    detail: {
      overview:
        'A multi-tenant lead-capture platform with embeddable widgets, a contact-management dashboard, and live analytics. I designed and built it independently as the mentor-reviewed capstone of my FlyRank AI Backend Engineer internship.',
      built: [
        'Embeddable widgets that capture leads',
        'A contact-management dashboard with live analytics',
        'Authentication and role-based permissions',
        'Public API validation',
        'Background email and webhook delivery with retries',
        'Docker setup, GitHub Actions CI, and API documentation',
      ],
      decisions: [
        'Workspace data isolation between tenants',
        'Role-based permissions',
        'Validation on the public API',
        'Background delivery of emails and webhooks with retries',
      ],
      result:
        'Delivered as a mentor-reviewed capstone and deployed as a public portfolio demo with synthetic data, supported by Docker, GitHub Actions CI, API documentation, and 887 automated tests.',
    },
  },
  {
    slug: 'ai-work-study-agent',
    title: 'AI Work & Study Agent',
    summary:
      'Turns natural-language messages into study logs, notes, habits, and reflections, with goals, charts, and AI-generated learning reports.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Ollama', 'Claude API'],
    categories: ['full-stack', 'ai'],
    githubUrl: 'https://github.com/amartopalovic/ai-work-study-agent',
    detail: {
      overview:
        'A full-stack productivity application that converts natural-language messages into study logs, notes, habits, and reflections.',
      built: [
        'Natural-language input turned into study logs, notes, habits, and reflections',
        'Goals and charts',
        'A focus timer',
        'AI-generated learning reports',
      ],
      decisions: [
        'Interchangeable AI providers (Ollama and the Claude API)',
        'Structured AI responses with a fallback classifier',
        'Token revocation',
        'Input validation',
        'Corrected goal-tracking logic',
      ],
      result:
        'A working full-stack application with goals, charts, a focus timer, and AI-generated learning reports, built with React, Node.js, Express, MongoDB, and Tailwind CSS.',
    },
  },
  {
    slug: 'product-listing-enrichment-api',
    title: 'Product Listing Enrichment API',
    summary:
      'Asynchronous API that enriches product listings with categories, summaries, and data-quality flags, built for safe concurrent job processing.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Zod', 'Ollama'],
    categories: ['backend-api', 'ai'],
    githubUrl: 'https://github.com/amartopalovic/enrich-jobs-worker',
    detail: {
      overview:
        'An asynchronous API that processes product listings into categories, summaries, data-quality flags, and confidence scores.',
      built: [
        'Asynchronous job processing for product listings',
        'Schema validation with a repair attempt for malformed model responses',
        'Atomic job claiming',
        'Crashed-worker recovery',
        'Bounded retries with persistent backoff',
      ],
      decisions: [
        'Schema validation (Zod) with a repair attempt for malformed model responses',
        'Atomic job claiming, so concurrent workers do not claim the same job',
        'Crashed-worker recovery',
        'Bounded retries with persistent backoff',
      ],
      result:
        'Tested three concurrent workers against 40 queued jobs with no duplicate claims.',
    },
  },
  {
    slug: 'ai-decision-flow',
    title: 'AI Decision Flow',
    summary:
      'Visual editor for chaining YES/NO decision nodes and running them through an LLM, with highlighted execution paths and live decision logs.',
    tags: ['React', 'TypeScript', 'React Flow', 'Express', 'Inngest', 'OpenAI API'],
    categories: ['full-stack', 'ai'],
    githubUrl: 'https://github.com/amartopalovic/ai-decision-flow',
    detail: {
      overview:
        'A visual workflow editor for connecting YES/NO decision nodes and executing them through an LLM.',
      built: [
        'A visual editor built with React Flow',
        'Execution of YES/NO decision nodes through an LLM',
        'Highlighted execution paths',
        'Continuously updated decision logs',
      ],
      decisions: [
        'Inngest steps to retry individual model decisions',
        'Validation of workflow structure',
        'An execution limit',
        'Sanitized outgoing errors to reduce exposure of sensitive information',
      ],
      result:
        'A working editor that runs decision flows through an LLM, with per-decision retries, structure validation, an execution limit, and sanitized errors.',
    },
  },
  {
    slug: 'natours',
    title: 'Natours',
    summary:
      'Tour discovery and review application with a REST API, authentication, and geospatial queries.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Pug', 'Mapbox'],
    categories: ['full-stack', 'backend-api'],
    githubUrl: 'https://github.com/amartopalovic/natours-app',
    detail: {
      overview:
        'A tour discovery and review application built with Node.js, Express, MongoDB, Pug, and Mapbox.',
      built: [
        'REST APIs with filtering, sorting, and pagination',
        'Authentication, role-based permissions, and password recovery',
        'Tour discovery and reviews',
      ],
      decisions: [
        'Geospatial queries',
        'Aggregation-based tour statistics',
        'Review-rating recalculation after review creation, updates, and deletion',
      ],
      result:
        'A tour discovery and review application with REST APIs, authentication, role-based permissions, and password recovery.',
    },
  },
  {
    slug: 'polite-scraper',
    title: 'The Polite Scraper',
    summary:
      'Command-line scraping pipeline that extracted and validated 60 book records from 63 pages.',
    tags: ['JavaScript', 'Node.js', 'Cheerio', 'Zod'],
    categories: ['backend-api'],
    githubUrl: 'https://github.com/amartopalovic/Polite-Book-Scraper',
    detail: {
      overview:
        'A command-line scraping pipeline built as a FlyRank internship project, extracting and validating book records from a practice bookstore.',
      built: [
        'Extraction of book records from 63 pages',
        'Request delays, local caching, timeouts, and selective retries',
        'Per-page failure handling',
        'Separate outputs for valid records, rejected records, and run diagnostics',
      ],
      decisions: [
        'Request delays',
        'Local caching',
        'Timeouts and selective retries',
        'Validation with Zod',
        'Separate outputs for valid records, rejected records, and run diagnostics',
      ],
      result:
        'Extracted and validated 60 book records from 63 pages.',
    },
  },
]

/** Filter options on the Projects page, in display order ("All" is implicit). */
export const projectCategoryOptions: readonly { value: ProjectCategory; label: string }[] = [
  { value: 'full-stack', label: 'Full-stack' },
  { value: 'backend-api', label: 'Backend/API' },
  { value: 'ai', label: 'AI' },
]

export function isProjectCategory(value: string | null): value is ProjectCategory {
  return projectCategoryOptions.some((option) => option.value === value)
}

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
