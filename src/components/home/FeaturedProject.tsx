import { featuredFacts, type Project } from '../../data/projects'
import { ButtonLink } from '../ButtonLink'
import { ImageSlot } from '../ImageSlot'

type FeaturedProjectProps = {
  project: Project
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const otherFacts = project.liveUrl
    ? [...featuredFacts.other, 'Live demo']
    : featuredFacts.other

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-display-lg text-ink">Featured project</h2>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
        {/* Below lg this image spans the whole column (up to ~983px), wider than the
            960px card thumbnail, so it uses the 1600px detail image instead. */}
        <ImageSlot image={project.screenshots[0]} />
        <div className="flex flex-col gap-6">
          <h3 className="text-body-xl text-ink">{project.title}</h3>
          <p>{project.summary}</p>
          <ul aria-label="Highlights" className="flex flex-col gap-2">
            <li className="flex items-baseline gap-3">
              <span className="text-display-lg text-ink">{featuredFacts.testCount}</span>
              <span>{featuredFacts.testLabel}</span>
            </li>
            {otherFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <ButtonLink to={`/projects/${project.slug}`} srLabel={project.title}>
              View project
            </ButtonLink>
            <ButtonLink
              to={project.githubUrl}
              variant="text"
              srLabel={`repository for ${project.title}`}
            >
              GitHub
            </ButtonLink>
            {project.liveUrl && (
              <ButtonLink
                to={project.liveUrl}
                variant="text"
                srLabel={`of ${project.title}`}
              >
                Live demo
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
