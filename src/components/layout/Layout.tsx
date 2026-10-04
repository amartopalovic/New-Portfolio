import { m } from 'motion/react'
import { useEffect, useRef } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import { buttonClasses } from '../buttonClasses'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  const { pathname, key } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const previousPathname = useRef(pathname)
  // React Router gives the first history entry of a page load the key "default".
  const isInitialLoad = key === 'default'

  // On client-side navigation, move focus to the new page content (scrolling is
  // handled by ScrollRestoration). Skipped on the initial page load.
  useEffect(() => {
    if (previousPathname.current === pathname) return
    previousPathname.current = pathname
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main"
        className={`${buttonClasses.filled} sr-only focus:not-sr-only focus:fixed focus:px-3.5 focus:py-2.5 focus:top-2 focus:left-5 focus:z-50`}
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1} className="flex-1 outline-none">
        <m.div
          key={pathname}
          initial={isInitialLoad ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <Outlet />
        </m.div>
      </main>
      <Footer />
      {/* PUSH: top of page; Back/Forward: restore position; #hash: scroll to target. */}
      <ScrollRestoration />
    </div>
  )
}
