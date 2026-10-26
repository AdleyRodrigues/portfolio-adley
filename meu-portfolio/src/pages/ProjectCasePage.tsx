import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useParams } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import type { ComponentProps } from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { SkipLink } from '../components/SkipLink'
import { Tag } from '../components/ui/Tag'
import { analyticsEvents, projects, siteUrl } from '../data/siteContent'
import { projectVisuals } from '../data/visualAssets'
import { trackEvent } from '../lib/analytics'
import FitbankCase from '../content/projects/fitbank-onboarding-kpi.mdx'
import DashboardCase from '../content/projects/design-system-dashboard-react.mdx'
import ChatAiCase from '../content/projects/chat-ai-integration.mdx'

const caseBySlug = {
  'fitbank-onboarding-kpi': FitbankCase,
  'design-system-dashboard-react': DashboardCase,
  'chat-ai-integration': ChatAiCase,
}

const mdxComponents = {
  h2: (props: ComponentProps<'h2'>) => (
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3" {...props} />
  ),
  h3: (props: ComponentProps<'h3'>) => (
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2" {...props} />
  ),
  p: (props: ComponentProps<'p'>) => (
    <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed" {...props} />
  ),
  ul: (props: ComponentProps<'ul'>) => (
    <ul className="mt-3 pl-6 list-disc text-slate-600 dark:text-slate-300 space-y-1.5" {...props} />
  ),
}

export function ProjectCasePage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const visual = slug ? projectVisuals[slug] : undefined
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.body.scrollHeight - window.innerHeight
      const progress = height > 0 ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0
      setReadingProgress(progress)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!slug || !project) {
    return <Navigate to="/projetos" replace />
  }

  const CaseBody = caseBySlug[slug as keyof typeof caseBySlug]
  if (!CaseBody) {
    return <Navigate to="/projetos" replace />
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Case Study | Adley Rodrigues de Castro</title>
        <meta name="description" content={project.summary} />
        <link rel="canonical" href={`${siteUrl}/projetos/${project.slug}`} />
        <meta property="og:title" content={`${project.title} | Case Study`} />
        <meta property="og:description" content={project.summary} />
        <meta property="og:url" content={`${siteUrl}/projetos/${project.slug}`} />
        <meta property="og:image" content={`${siteUrl}/og/adley-portfolio.svg`} />
      </Helmet>

      {/* Reading Progress Bar */}
      <div
        className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-teal-400 transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
      />

      <SkipLink />
      <SiteHeader />

      <main id="conteudo-principal" className="min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          {/* Header Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 sm:p-10 shadow-lg">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-12 h-40 opacity-90 blur-3xl -z-10"
              style={{ backgroundImage: project.coverGradient }}
            />

            <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-600 dark:text-indigo-400">
              {project.role}
            </span>
            <h1 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.headline}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>

          {/* MDX Body Card */}
          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 sm:p-10 shadow-xs">
            <MDXProvider components={mdxComponents}>
              <CaseBody />
            </MDXProvider>
          </div>

          {/* Visual Gallery */}
          {visual?.gallery?.length ? (
            <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Galeria visual do projeto
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Capturas representativas da solução para destacar arquitetura de interface, densidade de informação e
                decisões visuais.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {visual.gallery.map((imageSrc, index) => (
                  <motion.img
                    key={imageSrc}
                    src={imageSrc}
                    loading="lazy"
                    alt={`Visual ${index + 1} do case ${project.title}`}
                    width={600}
                    height={375}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="w-full h-auto rounded-2xl border border-slate-200/80 dark:border-white/10 object-cover"
                  />
                ))}
              </div>
            </div>
          ) : null}

          {/* Project Links */}
          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Links do projeto
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 list-none p-0 m-0">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline underline-offset-4"
                    onClick={() => trackEvent(analyticsEvents.caseStudyOpen, { slug: project.slug })}
                  >
                    <span>{link.label}</span>
                    {link.href.startsWith('http') ? <ExternalLink className="w-3.5 h-3.5" /> : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 underline underline-offset-4"
            >
              ← Voltar para todos os projetos
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
