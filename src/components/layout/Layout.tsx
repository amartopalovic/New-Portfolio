import { motion } from 'motion/react'
import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import { buttonClasses } from '../buttonClasses'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  const { pathname, hash, key } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const previousPathname = useRef(pathname)
  // React Router gives the first history entry of a page load the key "default".
  const isInitialLoad = key === 'default'

  // On client-side navigation: scroll to top (unless targeting a hash) and
  // move focus to the new page content. Skipped on the initial page load.
  useEffect(() => {
    if (previousPathname.current === pathname) return
    previousPathname.current = pathname
    if (!hash) window.scrollTo(0, 0)
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname, hash])

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
        <motion.div
          key={pathname}
          initial={isInitialLoad ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
