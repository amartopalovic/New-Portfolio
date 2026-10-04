// TEMPORARY placeholder for pages whose content is built in a later stage.
import { site } from '../data/site'

type PagePlaceholderProps = {
  name: string
  /** Omit to keep the default title from index.html. */
  title?: string
}

export function PagePlaceholder({ name, title }: PagePlaceholderProps) {
  return (
    <section className="px-gutter py-band">
      <title>{title ?? site.defaultTitle}</title>
      <div className="mx-auto flex max-w-content flex-col gap-6">
        <h1 className="text-display-xl text-ink">{name}</h1>
        <p>This page is built in a later stage.</p>
      </div>
    </section>
  )
}
