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
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {featuredProjects.map((project) => {
          return (
            <motion.div key={project.slug} variants={fadeInUp} className="flex">
              <SpotlightCard className="w-full flex flex-col justify-between group">
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-1.5 mb-3 flex-wrap">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                      {project.role}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 shadow-2xs">
                      {project.metric}
                    </span>
                  </div>

                  {/* High-Fidelity UI Browser Mockup */}
                  <div className="mb-4">
                    <ProjectMockupFrame slug={project.slug} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                    {project.headline}
                  </p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {project.impact}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.8 text-xs font-medium rounded-md bg-transparent border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
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
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                  >
                    <span>Ver estudo de caso</span>
                    <span className="transition-transform group-hover/link:translate-x-1 text-xs">→</span>
                  </Link>
                </div>
              </SpotlightCard>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="mt-8 flex justify-start">
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
        >
          <span>Ver todos os projetos e cases detalhados</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </Section>
  )
}
