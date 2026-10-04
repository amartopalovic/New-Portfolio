import { Link } from 'react-router'
import type { Project } from '../../data/projects'
import { ButtonLink } from '../ButtonLink'
import { ImageSlot } from '../ImageSlot'

type ProjectCardProps = {
  project: Project
}

// The title link is stretched over the whole card (::after), so the card is one
// click target without nesting interactive elements. Its focus ring is drawn on
// the ::after box so keyboard focus outlines the entire card. Hover opacity 0.73
// is an accessibility adaptation of DESIGN.md's 0.5 card hover; it applies only
// while the stretched link is hovered, so the GitHub link's own hover colour is
// never dimmed further.
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
      <ul aria-label="Technologies" className="flex flex-wrap gap-x-2 text-body-sm">
        {project.tags.map((tag, index) => (
          <li key={tag}>
            {index > 0 && (
              <span aria-hidden="true" className="mr-2">
                ·
              </span>
            )}
            {tag}
          </li>
        ))}
      </ul>
      <ButtonLink
        to={project.githubUrl}
        variant="text"
        size="sm"
        srLabel={`repository for ${project.title}`}
        className="relative z-10 mt-auto self-start"
      >
        GitHub
      </ButtonLink>
    </article>
  )
}
