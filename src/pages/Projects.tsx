import { motion } from 'motion/react'
import { useSearchParams } from 'react-router'
import { ProjectCard } from '../components/ProjectCard'
import {
  isProjectCategory,
  projectCategoryOptions,
  projects,
  type ProjectCategory,
} from '../data/projects'
import { pageTitle } from '../data/site'

const chipBase =
  'inline-flex min-h-11 items-center rounded-xs px-4 text-body-md transition-colors'
const chipActive = 'bg-body text-canvas'
const chipInactive = 'bg-surface-alt text-body hover:bg-border'

export function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const param = searchParams.get('category')
  const active: ProjectCategory | null = isProjectCategory(param) ? param : null
  const visible = active
    ? projects.filter((project) => project.categories.includes(active))
    : projects

  const selectCategory = (category: ProjectCategory | null) => {
    setSearchParams(
      (previous) => {
        const next = new URLSearchParams(previous)
        if (category) next.set('category', category)
        else next.delete('category')
        return next
      },
      { replace: true },
    )
  }

  const chips = [{ value: null, label: 'All' }, ...projectCategoryOptions]

  return (
    <section className="px-gutter py-band lg:py-35">
      <title>{pageTitle('Projects')}</title>
      <div className="mx-auto flex max-w-content flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-display-xl text-ink">Projects</h1>
          <p className="text-body-lg">
            Selected work across full-stack, backend/API, and AI-integrated development.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2"
          >
            {chips.map((chip) => {
              const pressed = chip.value === active
              return (
                <button
                  key={chip.label}
                  type="button"
                  aria-pressed={pressed}
                  className={`${chipBase} ${pressed ? chipActive : chipInactive}`}
                  onClick={() => selectCategory(chip.value)}
                >
                  {chip.label}
                </button>
              )
            })}
          </div>
          <p aria-live="polite" className="text-body-sm text-secondary">
            Showing {visible.length} of {projects.length} projects
          </p>
        </div>

        <h2 className="sr-only">Project list</h2>
        <motion.ul
          key={active ?? 'all'}
          className="grid gap-12 md:grid-cols-2 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        >
          {visible.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
