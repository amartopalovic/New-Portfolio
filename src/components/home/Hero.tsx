import { m, type Variants } from 'motion/react'
import { Fragment } from 'react'
import { site } from '../../data/site'
import { ButtonLink } from '../ButtonLink'

// Small first-mount stagger: 4 items x 60ms + 220ms ≈ 400ms total.
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
}

export function Hero() {
  return (
    <section className="bg-hero-art px-gutter py-band lg:py-35">
      <m.div
        className="mx-auto flex max-w-content flex-col gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <m.h1 variants={item} className="text-display-xxl text-ink">
          {site.name},{' '}
          {/* Keep "Full-Stack" from breaking at its hyphen. */}
          {site.role.split(' ').map((word, index) => (
            <Fragment key={word}>
              {index > 0 && ' '}
              <span className="whitespace-nowrap">{word}</span>
            </Fragment>
          ))}
        </m.h1>
        <m.p variants={item} className="max-w-3xl text-body-xl">
          {site.intro}
        </m.p>
        <m.div variants={item} className="flex flex-wrap items-center gap-6">
          <ButtonLink to="/projects">View Projects</ButtonLink>
          <ButtonLink to="/contact" variant="text">
            Contact Me
          </ButtonLink>
        </m.div>
        <m.p variants={item} className="text-secondary">
          {site.availability}
        </m.p>
      </m.div>
    </section>
  )
}
