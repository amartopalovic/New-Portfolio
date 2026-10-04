import { Link } from 'react-router'
import type { Project } from '../data/projects'
import { ButtonLink } from './ButtonLink'
import { ImageSlot } from './ImageSlot'
import { TagList } from './TagList'

type ProjectCardProps = {
  project: Project
}

// The title link is stretched over the whole card (::after), so the card is one
// click target without nesting interactive elements. Its focus ring is drawn on
// the ::after box so keyboard focus outlines the entire card. Hover opacity 0.73
// is an accessibility adaptation of DESIGN.md's 0.5 card hover; it applies only
// while the stretched link is hovered, so the GitHub/Live demo links' own hover colour
// is never dimmed further.
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="relative flex h-full flex-col gap-4 transition-opacity has-[[data-card-link]:hover]:opacity-73">
      <ImageSlot image={project.image} />
      <h3 className="text-body-xl text-ink">
        <Link
          to={`/projects/${project.slug}`}
          data-card-link
          className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-focus-ring"
        >
          {project.title}
        </Link>
      </h3>
      <p>{project.summary}</p>
      <TagList
        items={project.tags}
        aria-label="Technologies"
        className="flex flex-wrap gap-x-2 text-body-sm"
      />
      <div className="relative z-10 mt-auto flex flex-wrap gap-x-6 self-start">
        <ButtonLink
          to={project.githubUrl}
          variant="text"
          size="sm"
          srLabel={`repository for ${project.title}`}
        >
          GitHub
        </ButtonLink>
        {project.liveUrl && (
          <ButtonLink to={project.liveUrl} variant="text" size="sm" srLabel={`of ${project.title}`}>
            Live demo
          </ButtonLink>
        )}
      </div>
    </article>
  )
}
