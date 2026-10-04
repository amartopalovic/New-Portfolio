import type { ReactNode } from 'react'
import { ImageSlot } from '../components/ImageSlot'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { TagList } from '../components/TagList'
import { about } from '../data/about'
import { descriptions } from '../data/seo'
import { pageTitle } from '../data/site'
import { skillGroups } from '../data/skills'

type AboutSectionProps = {
  title: string
  alt?: boolean
  children: ReactNode
}

function AboutSection({ title, alt = false, children }: AboutSectionProps) {
  return (
    <section className={`px-gutter py-band ${alt ? 'bg-surface-alt' : ''}`}>
      <Reveal className="mx-auto flex max-w-content flex-col gap-8">
        <h2 className="text-display-lg text-ink">{title}</h2>
        {children}
      </Reveal>
    </section>
  )
}

export function About() {
  return (
    <>
      <PageMeta title={pageTitle('About')} description={descriptions.about} />

      <section className="px-gutter py-band lg:py-35">
        <div className="mx-auto grid max-w-content gap-8 lg:grid-cols-3 lg:items-start lg:gap-12">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h1 className="text-display-xl text-ink">About me</h1>
            {about.intro.map((paragraph) => (
              <p key={paragraph} className="max-w-prose text-body-lg">
                {paragraph}
              </p>
            ))}
          </div>
          {/* Photo first on mobile (h1 stays first in the DOM); right-hand third from lg. */}
          <ImageSlot
            image={about.profileImage}
            ratio="portrait"
            className="order-first w-2/3 max-w-xs lg:order-none lg:w-auto lg:max-w-none"
          />
        </div>
      </section>

      <AboutSection title="What I do" alt>
        <div className="grid gap-8 lg:grid-cols-3">
          {about.whatIDo.map((block) => (
            <div key={block.title} className="flex flex-col gap-3">
              <h3 className="text-body-xl text-ink">{block.title}</h3>
              <p className="max-w-prose">{block.text}</p>
            </div>
          ))}
        </div>
      </AboutSection>

      <AboutSection title="How I work">
        <p className="max-w-prose">{about.howIWork}</p>
      </AboutSection>

      <AboutSection title="Skills" alt>
        <dl className="grid gap-x-8 gap-y-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.name} className="flex flex-col gap-1">
              <dt className="text-body-sm text-secondary">{group.name}</dt>
              <dd>
                <TagList items={group.items} className="flex flex-wrap gap-x-2" />
              </dd>
            </div>
          ))}
        </dl>
      </AboutSection>

      <div className="px-gutter py-band">
        <Reveal className="mx-auto grid max-w-content gap-12 md:grid-cols-2 md:gap-8">
          <section className="flex flex-col gap-6">
            <h2 className="text-display-lg text-ink">Languages</h2>
            <ul className="flex flex-col gap-2">
              {about.languages.map((language) => (
                <li key={language.name}>
                  {language.name} ({language.level})
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col gap-6">
            <h2 className="text-display-lg text-ink">Looking for</h2>
            <p className="max-w-prose">{about.lookingFor}</p>
          </section>
        </Reveal>
      </div>
    </>
  )
}
