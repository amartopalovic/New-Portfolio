// TEMPORARY placeholder for pages whose content is built in a later stage.
import { useParams } from 'react-router'
import { pageTitle, site } from '../data/site'

type PagePlaceholderProps = {
  name: string
  /** Omit on Home so the default title from index.html is kept. */
  title?: string
  detail?: string
}

export function PagePlaceholder({ name, title, detail }: PagePlaceholderProps) {
  return (
    <section className="px-gutter py-band">
      <title>{title ?? site.defaultTitle}</title>
      <div className="mx-auto flex max-w-content flex-col gap-6">
        <h1 className="text-display-xl text-ink">{name}</h1>
        <p>This page is built in a later stage.</p>
        {detail && <p className="text-secondary">{detail}</p>}
      </div>
    </section>
  )
}

export function ProjectDetailPlaceholder() {
  const { slug = '' } = useParams()
  return (
    <PagePlaceholder
      name="Project detail"
      title={pageTitle('Project detail')}
      detail={`Slug: ${slug}`}
    />
  )
}
