import { createBrowserRouter } from 'react-router'
import { Layout } from './components/layout/Layout'
import { pageTitle } from './data/site'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { PagePlaceholder } from './pages/PagePlaceholder'
import { ProjectDetail } from './pages/ProjectDetail'
import { Projects } from './pages/Projects'

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'projects', Component: Projects },
      { path: 'projects/:slug', Component: ProjectDetail },
      { path: 'about', element: <PagePlaceholder name="About" title={pageTitle('About')} /> },
      { path: 'resume', element: <PagePlaceholder name="Resume" title={pageTitle('Resume')} /> },
      {
        path: 'contact',
        element: <PagePlaceholder name="Contact" title={pageTitle('Contact')} />,
      },
      { path: '*', Component: NotFound },
    ],
  },
])
