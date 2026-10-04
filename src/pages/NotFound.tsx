import { ButtonLink } from '../components/ButtonLink'
import { pageTitle } from '../data/site'

export function NotFound() {
  return (
    <section className="px-gutter py-band">
      <title>{pageTitle('Page not found')}</title>
      <div className="mx-auto flex max-w-content flex-col gap-6">
        <h1 className="text-display-xl text-ink">Page not found</h1>
        <p>Sorry, the page you were looking for doesn’t exist or has moved.</p>
        <div className="flex flex-wrap items-center gap-6">
          <ButtonLink to="/">Home</ButtonLink>
          <ButtonLink to="/projects" variant="text">
            Projects
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
