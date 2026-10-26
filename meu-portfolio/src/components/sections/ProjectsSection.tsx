import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Section } from '../Section'
import { SpotlightCard } from '../ui/SpotlightCard'
import { analyticsEvents, projects } from '../../data/siteContent'
import { ProjectMockupFrame } from '../ui/ProjectMockupFrame'
import { trackEvent } from '../../lib/analytics'
import { fadeInUp, staggerContainer } from '../../lib/motion'

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)

export function ProjectsSection() {
  return (
    <Section
      id="projetos"
      eyebrow="Cases e Produtos"
      title="Engenharia de software com impacto direto no negócio."
      description="Projetos reais onde liderei arquitetura front-end, criei fluxos assíncronos e estruturei sistemas escaláveis de alta criticidade."
      layout="stacked"
      actions={
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
        >
          <span>Ver todos os 5 cases detalhados</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      }
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
      >
        {featuredProjects.map((project) => {
          return (
            <motion.div key={project.slug} variants={fadeInUp} className="flex">
              <SpotlightCard className="w-full p-6 sm:p-7 flex flex-col justify-between group hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3.5 flex-wrap">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                      {project.role}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 shadow-2xs">
                      {project.metric}
                    </span>
                  </div>

                  {/* High-Fidelity UI Browser Mockup */}
                  <div className="mb-5">
                    <ProjectMockupFrame slug={project.slug} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {project.headline}
                  </p>
                  <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {project.impact}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    to={`/projetos/${project.slug}`}
                    onClick={() => trackEvent(analyticsEvents.projectCardClick, { slug: project.slug })}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                  >
                    <span>Ver estudo de caso</span>
                    <span className="transition-transform group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>
              </SpotlightCard>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="mt-8 flex justify-center md:hidden">
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 transition-colors"
        >
          <span>Ver todos os 5 cases detalhados</span>
          <span>→</span>
        </Link>
      </div>
    </Section>
  )
}
