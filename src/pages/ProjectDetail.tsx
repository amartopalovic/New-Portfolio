import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router'
import { ButtonLink } from '../components/ButtonLink'
import { ImageSlot } from '../components/ImageSlot'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { TagList } from '../components/TagList'
import { getProject } from '../data/projects'
import { pageTitle } from '../data/site'
import { NotFound } from './NotFound'

type DetailSectionProps = {
  title: string
  alt?: boolean
  children: ReactNode
}

// Full-width band; from lg the heading takes the first of three columns.
function DetailSection({ title, alt = false, children }: DetailSectionProps) {
  return (
    <section className={`px-gutter py-band ${alt ? 'bg-surface-alt' : ''}`}>
      <Reveal className="mx-auto grid max-w-content gap-6 lg:grid-cols-3 lg:gap-8">
        <h2 className="text-display-lg text-ink">{title}</h2>
        <div className="lg:col-span-2">{children}</div>
      </Reveal>
    </section>
  )
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-3 pl-5 marker:text-secondary">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function ProjectDetail() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFound />

  const { detail, screenshots } = project
  // "Screenshots" only when every image is a real capture; otherwise "Preview".
  const galleryTitle = screenshots.every((image) => image.kind === 'screenshot')
    ? 'Screenshots'
    : 'Preview'

  return (
    <>
      <PageMeta title={pageTitle(project.title)} description={project.summary} />

      {/* No bottom padding: the canvas Overview band continues this intro block. */}
      <section className="px-gutter pt-band lg:pt-35">
        <div className="mx-auto flex max-w-content flex-col gap-6">
          <Link
            to="/projects"
            className="inline-flex min-h-11 items-center self-start text-body-sm text-secondary transition-colors hover:text-body"
          >
            Back to projects
          </Link>
          {/* display-xl (60px) can't fit words like "Embeddable" in a 320px column,
              so phones get display-lg. */}
          <h1 className="text-display-lg wrap-break-word text-ink md:text-display-xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-body-xl">{project.summary}</p>
          <TagList
            items={project.tags}
            aria-label="Technologies"
            className="flex flex-wrap gap-x-2 text-body-sm"
          />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <ButtonLink to={project.githubUrl} srLabel={`for ${project.title}`}>
              View on GitHub
            </ButtonLink>
            {project.liveUrl && (
              <ButtonLink to={project.liveUrl} variant="text" srLabel={`of ${project.title}`}>
                Live demo
              </ButtonLink>
            )}
          </div>
        </div>
      </section>

      <DetailSection title="Overview">
        <p className="max-w-prose">{detail.overview}</p>
      </DetailSection>

      <DetailSection title="What I built" alt>
        <BulletList items={detail.built} />
      </DetailSection>

      <DetailSection title="Key technical decisions">
        <BulletList items={detail.decisions} />
      </DetailSection>

      <DetailSection title="Result" alt>
        <p className="max-w-prose">{detail.result}</p>
      </DetailSection>

      <DetailSection title={galleryTitle}>
        {/* One image spans the full column; two or more use a 2-column grid. */}
        <ul className={`grid gap-8 ${screenshots.length > 1 ? 'md:grid-cols-2' : ''}`}>
          {screenshots.map((image) => (
            <li key={image.src}>
              <figure className="flex flex-col gap-2">
                <ImageSlot image={image} />
                <figcaption className="text-body-sm text-secondary">
                  {image.kind === 'screenshot' ? 'Screenshot' : 'Project illustration'}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </DetailSection>
    </>
  )
}
