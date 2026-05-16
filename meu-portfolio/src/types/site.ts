export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  title: string
  headline: string
  summary: string
  context: string
  challenge: string
  solution: string
  impact: string
  stack: string[]
  role: string
  metric: string
  coverGradient: string
  featured: boolean
  links: ProjectLink[]
}

export type TimelineItem = {
  period: string
  role: string
  company: string
  highlights: string[]
}

export type EducationItem = {
  period: string
  institution: string
  course: string
  highlights: string[]
}
