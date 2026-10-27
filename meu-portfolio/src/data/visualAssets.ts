export type ProjectVisual = {
  cover: string
  gallery: string[]
}

export const heroVisual = '/visual/hero-tech-visual.svg'

export const projectVisuals: Record<string, ProjectVisual> = {
  'onboarding-baas': {
    cover: '/visual/project-fitbank.svg',
    gallery: [],
  },
  'fitbank-onboarding-kpi': {
    cover: '/visual/project-fitbank.svg',
    gallery: [],
  },
  'design-system-dashboard-react': {
    cover: '/visual/project-dashboard.svg',
    gallery: [],
  },
  'chat-ai-integration': {
    cover: '/visual/project-chat.svg',
    gallery: [],
  },
  'pipeline-cypress-ci': {
    cover: '/visual/project-dashboard.svg',
    gallery: [],
  },
  'sql-read-write-separation': {
    cover: '/visual/project-fitbank.svg',
    gallery: [],
  },
}
