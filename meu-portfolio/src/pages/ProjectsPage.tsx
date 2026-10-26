import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ProjectCard } from '../components/ProjectCard'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { SkipLink } from '../components/SkipLink'
import { Button } from '../components/ui/Button'
import { analyticsEvents, projects, siteUrl } from '../data/siteContent'
import { trackEvent } from '../lib/analytics'
import { fadeInUp, staggerContainer } from '../lib/motion'

export function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projetos | Adley Rodrigues de Castro</title>
        <meta
          name="description"
          content="Seleção de projetos com contexto, decisões técnicas, trade-offs e impacto para o negócio."
        />
        <link rel="canonical" href={`${siteUrl}/projetos`} />
      </Helmet>

      <SkipLink />
      <SiteHeader />
      <main id="conteudo-principal" className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="text-xs uppercase font-extrabold tracking-[0.24em] text-indigo-600 dark:text-indigo-400">
              Projetos
            </span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }}>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Cases e entregas relevantes
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.16 }}>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Esta página mantém um highlight reel com até 5 projetos para facilitar triagem de recrutadores, tech leads e
              CTOs.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {projects.map((project) => (
              <motion.div key={project.slug} variants={fadeInUp} className="flex">
                <div className="w-full">
                  <ProjectCard project={project} compact />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12">
            <Button as="a" href="/#contato" onClick={() => trackEvent(analyticsEvents.contactEmailClick)}>
              Vamos conversar sobre uma oportunidade
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
