import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { navItems, site } from '../../data/site'
import { ButtonLink } from '../ButtonLink'
import { buttonClasses } from '../buttonClasses'

const MENU_ID = 'mobile-menu'

const navLinkClasses =
  'transition-colors hover:text-secondary aria-[current=page]:underline aria-[current=page]:underline-offset-4'

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

  return (
    <header
      className={`sticky top-0 z-40 px-gutter transition-colors ${solid ? 'bg-canvas' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 py-4">
        <Link to="/" className="text-body-lg text-ink transition-colors hover:text-secondary">
          {site.name}
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
          <ButtonLink to={site.cvPath} download srLabel="(PDF)">
            Download CV
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
          <motion.div
            id={MENU_ID}
            className="bg-canvas lg:hidden"
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
                      className={`flex min-h-11 items-center text-body-lg ${navLinkClasses}`}
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
                className="self-start"
                onClick={closeMenu}
              >
                Download CV
              </ButtonLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
