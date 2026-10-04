export type ExperienceStat = {
  value: string
  label: string
}

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  stats: readonly ExperienceStat[]
}

export const experience: Experience = {
  role: 'Backend Engineer Intern',
  company: 'FlyRank AI',
  location: 'Remote',
  period: 'July–September 2026',
  stats: [
    { value: '34', label: 'completed practical assignments' },
    { value: '43', label: 'program meetings attended' },
    { value: '250+', label: 'documented hours' },
  ],
}
