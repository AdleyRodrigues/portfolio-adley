import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Code, Braces, Database, Network, BarChart3 } from 'lucide-react'
import type { Project } from '../types/site'
import { analyticsEvents } from '../data/siteContent'
import { trackEvent } from '../lib/analytics'
import { Tag } from './ui/Tag'
import { ProjectMockupFrame } from './ui/ProjectMockupFrame'

type ProjectCardProps = {
  project: Project
  compact?: boolean
}

function getStackIcon(stack: string) {
  const value = stack.toLowerCase()
  if (value.includes('react') || value.includes('typescript') || value.includes('api')) {
    return <Braces className="w-3.5 h-3.5" />
  }
  if (value.includes('sql') || value.includes('database')) {
    return <Database className="w-3.5 h-3.5" />
  }
  if (value.includes('dashboard') || value.includes('analytics')) {
    return <BarChart3 className="w-3.5 h-3.5" />
  }
  if (value.includes('ci') || value.includes('devops')) {
    return <Network className="w-3.5 h-3.5" />
  }
  return <Code className="w-3.5 h-3.5" />
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full"
    >
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="mb-4">
            <ProjectMockupFrame slug={project.slug} />
          </div>

          <div className="flex items-center justify-between gap-2 mb-3 h-7">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 font-mono truncate">
              {project.role}
            </span>
            <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 shadow-2xs shrink-0">
              {project.metric}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 min-h-[3.25rem] sm:min-h-[3.5rem] flex items-center">
            {project.title}
          </h3>

          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-2 line-clamp-2 min-h-[2.5rem]">
            {project.headline}
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed line-clamp-3 min-h-[3.75rem]">
            {compact ? project.summary : project.impact}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2 list-none p-0 m-0 min-h-[3rem] content-start">
            {project.stack.slice(0, 4).map((tech) => (
              <li key={tech}>
                <Tag>
                  {getStackIcon(tech)}
                  <span>{tech}</span>
                </Tag>
              </li>
            ))}
            {project.stack.length > 4 && (
              <li>
                <span className="px-2 py-1 text-xs font-mono text-slate-400">
                  +{project.stack.length - 4}
                </span>
              </li>
            )}
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800">
          <Link
            to={`/projetos/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            onClick={() => trackEvent(analyticsEvents.projectCardClick, { slug: project.slug })}
          >
            <span>Ver estudo de caso</span>
            <span className="transition-transform group-hover:translate-x-1 text-xs">→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
