import { createBrowserRouter } from 'react-router'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'

// Layout and Home (the landing page) ship in the main bundle; every other page
// is its own chunk, loaded when its route is matched.
export const router = createBrowserRouter([
  {
    Component: Layout,
    // Shown only while a lazy page chunk loads on a direct visit. The page is
    // already blank until the app's JS runs, so nothing is rendered here either.
    HydrateFallback: () => null,
    children: [
      { index: true, Component: Home },
      {
        path: 'projects',
        lazy: { Component: async () => (await import('./pages/Projects')).Projects },
      },
      {
        path: 'projects/:slug',
        lazy: { Component: async () => (await import('./pages/ProjectDetail')).ProjectDetail },
      },
      { path: 'about', lazy: { Component: async () => (await import('./pages/About')).About } },
      { path: 'resume', lazy: { Component: async () => (await import('./pages/Resume')).Resume } },
      {
        path: 'contact',
        lazy: { Component: async () => (await import('./pages/Contact')).Contact },
      },
      { path: '*', lazy: { Component: async () => (await import('./pages/NotFound')).NotFound } },
    ],
  },
])
