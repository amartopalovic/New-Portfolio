import { useLocation } from 'react-router'
import { site } from '../data/site'

type PageMetaProps = {
  title: string
  description: string
  /** Keep the page out of search results (404s, which Netlify serves with 200). */
  noindex?: boolean
}

/** Per-page head tags, hoisted into <head> by React 19. */
export function PageMeta({ title, description, noindex = false }: PageMetaProps) {
  const { pathname } = useLocation()
  const path = pathname.replace(/\/+$/, '')
  const canonical = path ? `${site.url}${path}` : site.url

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={canonical} />
    </>
  )
}
