export type ProjectVisual = {
  cover: string
  gallery: string[]
}

export const heroVisual = '/visual/hero-tech-visual.svg'

export const projectVisuals: Record<string, ProjectVisual> = {
  'fitbank-onboarding-kpi': {
    cover: '/visual/project-fitbank.svg',
    gallery: ['/visual/gallery-fitbank-1.svg', '/visual/gallery-fitbank-2.svg'],
  },
  'design-system-dashboard-react': {
    cover: '/visual/project-dashboard.svg',
    gallery: ['/visual/gallery-dashboard-1.svg', '/visual/gallery-dashboard-2.svg'],
  },
  'chat-ai-integration': {
    cover: '/visual/project-chat.svg',
    gallery: ['/visual/gallery-chat-1.svg', '/visual/gallery-chat-2.svg'],
  },
  'pipeline-cypress-ci': {
    cover: '/visual/project-dashboard.svg',
    gallery: ['/visual/gallery-dashboard-1.svg', '/visual/gallery-dashboard-2.svg'],
  },
  'sql-read-write-separation': {
    cover: '/visual/project-fitbank.svg',
    gallery: ['/visual/gallery-fitbank-1.svg', '/visual/gallery-fitbank-2.svg'],
  },
}
