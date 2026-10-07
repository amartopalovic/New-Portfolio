import { AnimatePresence, m } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { navItems, site } from '../../data/site'
import { ButtonLink } from '../ButtonLink'
import { buttonClasses } from '../buttonClasses'

const MENU_ID = 'mobile-menu'
const [firstName, ...surname] = site.name.split(' ')

// Keep the persistent active-page marker dark; cyan is a decorative hover accent.
const navLinkClasses =
  'relative flex min-h-11 items-center text-ink transition-colors hover:text-secondary after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100 focus-visible:after:scale-x-100 aria-[current=page]:after:scale-x-100 aria-[current=page]:after:bg-ink'

const cvLinkClasses =
  'group gap-3 hover:bg-accent! hover:text-on-accent focus-visible:bg-accent focus-visible:text-on-accent'

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 shrink-0 text-accent transition-colors group-hover:text-on-accent group-focus-visible:text-on-accent"
    >
      <path d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4" />
    </svg>
  )
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 0)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return scrolled
}

export function Header() {
  const { pathname } = useLocation()
  const scrolled = useScrolled()
  // The menu belongs to the route it was opened on, so any navigation closes it.
  const [openOn, setOpenOn] = useState<string | null>(null)
  const menuOpen = openOn === pathname
  const toggleRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setOpenOn(null)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpenOn(null)
      toggleRef.current?.focus()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const solid = scrolled || menuOpen
  const surface = pathname === '/' && !solid ? 'bg-hero-start' : 'bg-surface-alt'

  return (
    <header
      className={`sticky top-0 z-40 px-gutter transition-colors ${surface}`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 py-4">
        <Link
          to="/"
          aria-label={site.name}
          className="group inline-flex min-h-11 shrink-0 items-center gap-3 text-ink"
        >
          <img
            src="/favicon.svg?v=2"
            alt=""
            width={44}
            height={44}
            className="size-10 shrink-0 sm:size-11"
          />
          <span className="flex flex-col items-start gap-1">
            <span className="text-body-sm leading-none tracking-widest text-secondary uppercase">
              {firstName}
            </span>
            <span className="text-body-lg leading-none tracking-tight uppercase transition-colors group-hover:text-secondary sm:text-body-xl">
              {surname.join(' ')}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={navLinkClasses}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink to={site.cvPath} download srLabel="(PDF)" className={cvLinkClasses}>
            Download CV
            <DownloadIcon />
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className={`${buttonClasses.text} lg:hidden`}
          aria-expanded={menuOpen}
          aria-controls={MENU_ID}
          onClick={() => setOpenOn(menuOpen ? null : pathname)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <m.div
            id={MENU_ID}
            className="bg-surface-alt lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <nav
              aria-label="Primary"
              className="mx-auto flex max-w-content flex-col gap-4 pb-8"
            >
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={`w-fit text-body-lg ${navLinkClasses}`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ButtonLink
                to={site.cvPath}
                download
                srLabel="(PDF)"
                className={`self-start ${cvLinkClasses}`}
                onClick={closeMenu}
              >
                Download CV
                <DownloadIcon />
              </ButtonLink>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
