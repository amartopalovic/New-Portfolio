import profilePhoto from '../assets/images/profile/amar-topalovic.webp'
import type { ImageAsset } from './image'

export type AboutBlock = {
  title: string
  text: string
}

export type Language = {
  name: string
  level: string
}

export type About = {
  intro: readonly string[]
  whatIDo: readonly AboutBlock[]
  howIWork: string
  languages: readonly Language[]
  lookingFor: string
  /** Portrait photo (4:5, 960x1200 WebP). */
  profileImage?: ImageAsset
}

export const about: About = {
  intro: [
    'I’m a third-year Software Engineering student at the International University of Sarajevo (IUS) in Sarajevo, Bosnia and Herzegovina. I build full-stack applications with AI integration, REST APIs, authentication, and background processing.',
    'In summer 2026 I completed a backend engineering internship at FlyRank AI, where I independently designed and built a multi-tenant lead-capture platform as my capstone.',
  ],
  whatIDo: [
    {
      title: 'Full-stack development',
      text: 'Building complete applications with JavaScript, TypeScript, React, Node.js, Express, and MongoDB.',
    },
    {
      title: 'Backend and API engineering',
      text: 'Designing REST APIs with authentication, role-based access control, schema validation, and background processing.',
    },
    {
      title: 'AI-assisted development and integration',
      text: 'Integrating AI providers such as Ollama, the Anthropic Claude API, and the OpenAI API with structured model outputs, and using Claude Code and Codex in my development workflow.',
    },
  ],
  howIWork:
    'I use Claude Code as my primary AI coding assistant. I take work through implementation, testing, documentation, and deployment. My capstone shipped with 887 automated tests, GitHub Actions CI, API documentation, and Docker.',
  languages: [
    { name: 'Bosnian', level: 'native' },
    { name: 'English', level: 'fluent' },
  ],
  lookingFor:
    'Full-time positions, part-time positions, and internships in Bosnia and Herzegovina, with remote, hybrid, or on-site arrangements.',
  profileImage: {
    src: profilePhoto,
    alt: 'Portrait of Amar Topalović in a white T-shirt with a sea harbour in the background.',
    width: 960,
    height: 1200,
  },
}
