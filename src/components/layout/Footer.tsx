import { site } from '../../data/site'

const linkClasses =
  'inline-flex min-h-11 items-center transition-colors hover:text-secondary'

const externalLinks = [
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
]

export function Footer() {
  return (
    <footer className="bg-surface-alt px-gutter text-ink">
      <div className="mx-auto flex max-w-content flex-col gap-6 py-band text-body-sm md:pt-40 md:pb-15">
        <ul className="flex flex-col md:flex-row md:flex-wrap md:gap-x-6">
          <li>
            <a href={`mailto:${site.email}`} className={linkClasses}>
              {site.email}
            </a>
          </li>
          {externalLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
              >
                {link.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-1">
          <p>{site.location}</p>
          <p>Open to work</p>
        </div>
      </div>
    </footer>
  )
}
