import { ButtonLink } from '../components/ButtonLink'
import { FeaturedProject } from '../components/home/FeaturedProject'
import { Hero } from '../components/home/Hero'
import { ProjectCard } from '../components/home/ProjectCard'
import { Reveal } from '../components/Reveal'
import { experience } from '../data/experience'
import { featuredProjectSlug, getProject, getProjects, homeProjectSlugs } from '../data/projects'
import { site } from '../data/site'
import { coreStack } from '../data/skills'

// Large bands: DESIGN.md band spacing on mobile, the measured 140px card padding from lg.
const band = 'px-gutter py-band lg:py-35'
const column = 'mx-auto flex max-w-content flex-col'

export function Home() {
  const featured = getProject(featuredProjectSlug)
  const others = getProjects(homeProjectSlugs)

  return (
    <>
      <title>{site.defaultTitle}</title>

      <Hero />

      <section aria-label="Core stack" className="px-gutter py-section">
        <Reveal className={column}>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-body-lg text-ink">
            {coreStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      {featured && (
        <section className={`bg-surface-alt ${band}`}>
          <Reveal className={column}>
            <FeaturedProject project={featured} />
          </Reveal>
        </section>
      )}

      <section className={band}>
        <Reveal className={`${column} gap-8`}>
          <h2 className="text-display-lg text-ink">Other projects</h2>
          <ul className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {others.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
          <ButtonLink to="/projects" variant="text" className="self-start">
            See all projects
          </ButtonLink>
        </Reveal>
      </section>

      <section className={`bg-surface-alt ${band}`}>
        <Reveal className={`${column} gap-8`}>
          <h2 className="text-display-lg text-ink">Experience</h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-body-xl text-ink">
              {experience.role}, {experience.company}
            </h3>
            <p className="text-secondary">
              {experience.location} · {experience.period}
            </p>
          </div>
          <dl className="grid gap-6 md:grid-cols-3">
            {experience.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1">
                <dt>{stat.label}</dt>
                <dd className="text-display-lg text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <ButtonLink to="/resume" variant="text" className="self-start">
            View resume
          </ButtonLink>
        </Reveal>
      </section>

      <section className={band}>
        <Reveal className={`${column} items-start gap-8`}>
          <h2 className="text-display-xl text-ink">Let’s work together</h2>
          <ButtonLink to="/contact">Contact Me</ButtonLink>
        </Reveal>
      </section>
    </>
  )
}
