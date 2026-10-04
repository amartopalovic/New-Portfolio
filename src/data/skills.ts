export const coreStack: readonly string[] = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Redis',
  'Docker',
]

export type SkillGroup = {
  name: string
  items: readonly string[]
}

export const skillGroups: readonly SkillGroup[] = [
  {
    name: 'Main stack',
    items: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    name: 'Frontend',
    items: ['Tailwind CSS', 'React Router', 'React Flow', 'responsive interfaces'],
  },
  {
    name: 'Backend and data',
    items: [
      'Node.js',
      'Express',
      'REST APIs',
      'Mongoose',
      'Redis',
      'BullMQ',
      'authentication',
      'role-based access control',
      'schema validation',
    ],
  },
  {
    name: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'GitHub Actions', 'OpenAPI/Swagger'],
  },
  {
    name: 'AI',
    items: [
      'Claude Code',
      'Codex',
      'Ollama',
      'Anthropic Claude API',
      'OpenAI API',
      'structured model outputs',
    ],
  },
  {
    name: 'Basic knowledge',
    items: ['Java', 'Python', 'C++'],
  },
  {
    name: 'Additional',
    items: ['PostgreSQL', 'MySQL', 'working with Internet of Things (IoT) devices'],
  },
]
