import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useParams } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import type { ComponentProps } from 'react'
import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Braces,
  Database,
  BarChart3,
  Network,
  Bot,
  Code,
  Calendar,
  Layers,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { SkipLink } from '../components/SkipLink'
import { Tag } from '../components/ui/Tag'
import { WhatsAppIcon } from '../components/ui/Icons'
import { ProjectMockupFrame } from '../components/ui/ProjectMockupFrame'
import { SolutionArchitectureDiagram } from '../components/ui/SolutionArchitectureDiagram'
import { analyticsEvents, projects, siteUrl, socialLinks } from '../data/siteContent'
import { trackEvent } from '../lib/analytics'

import OnboardingBaasCase from '../content/projects/onboarding-baas.mdx'
import DashboardCase from '../content/projects/design-system-dashboard-react.mdx'
import ChatAiCase from '../content/projects/chat-ai-integration.mdx'
import CypressCase from '../content/projects/pipeline-cypress-ci.mdx'
import SqlReplicaCase from '../content/projects/sql-read-write-separation.mdx'

const caseBySlug = {
  'onboarding-baas': OnboardingBaasCase,
  'fitbank-onboarding-kpi': OnboardingBaasCase,
  'design-system-dashboard-react': DashboardCase,
  'chat-ai-integration': ChatAiCase,
  'pipeline-cypress-ci': CypressCase,
  'sql-read-write-separation': SqlReplicaCase,
}

const mdxComponents = {
  h2: ({ children, ...props }: ComponentProps<'h2'>) => {
    const text = typeof children === 'string' ? children : ''
    const isTradeOff = text.toLowerCase().includes('trade-off')
    const isImpact = text.toLowerCase().includes('impacto') || text.toLowerCase().includes('resultado')
    const isArchitecture = text.toLowerCase().includes('arquitetura') || text.toLowerCase().includes('decis')

    return (
      <div className="mt-10 mb-4 pt-6 border-t border-slate-200/70 dark:border-slate-800/70 first:mt-0 first:pt-0 first:border-0">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5 tracking-tight" {...props}>
          {children}
        </h2>
        <div
          className={`mt-2 h-1 w-12 rounded-full ${
            isTradeOff
              ? 'bg-amber-500'
              : isImpact
              ? 'bg-emerald-500'
              : isArchitecture
              ? 'bg-indigo-600 dark:bg-indigo-400'
              : 'bg-blue-600 dark:bg-blue-400'
          }`}
        />
      </div>
    )
  },
  h3: (props: ComponentProps<'h3'>) => (
    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2 tracking-tight" {...props} />
  ),
  p: (props: ComponentProps<'p'>) => (
    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed" {...props} />
  ),
  ul: (props: ComponentProps<'ul'>) => (
    <ul className="mt-4 space-y-2.5 text-slate-600 dark:text-slate-300 list-none pl-0" {...props} />
  ),
  li: ({ children, ...props }: ComponentProps<'li'>) => (
    <li className="flex items-start gap-3 text-sm sm:text-base leading-relaxed" {...props}>
      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
      <span className="flex-1">{children}</span>
    </li>
  ),
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote
      className="mt-6 border-l-4 border-amber-500 pl-4 py-3 italic text-slate-700 dark:text-slate-300 bg-amber-50/60 dark:bg-amber-950/20 rounded-r-2xl text-sm sm:text-base"
      {...props}
    />
  ),
}

function getStackIcon(tech: string) {
  const value = tech.toLowerCase()
  if (value.includes('react') || value.includes('typescript') || value.includes('api') || value.includes('state')) {
    return <Braces className="w-3.5 h-3.5" />
  }
  if (value.includes('sql') || value.includes('database')) {
    return <Database className="w-3.5 h-3.5" />
  }
  if (value.includes('dashboard') || value.includes('analytics') || value.includes('visualization')) {
    return <BarChart3 className="w-3.5 h-3.5" />
  }
  if (value.includes('cypress') || value.includes('ci') || value.includes('devops')) {
    return <Network className="w-3.5 h-3.5" />
  }
  if (value.includes('ai') || value.includes('genai') || value.includes('llm')) {
    return <Bot className="w-3.5 h-3.5" />
  }
  return <Code className="w-3.5 h-3.5" />
}

export function ProjectCasePage() {
  const { slug } = useParams()
  // Support both new anonymized slugs and legacy alias
  const resolvedSlug = slug === 'fitbank-onboarding-kpi' ? 'onboarding-baas' : slug
  const project = projects.find((item) => item.slug === resolvedSlug || item.slug === slug)
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

  const CaseBody = caseBySlug[slug as keyof typeof caseBySlug] || caseBySlug[resolvedSlug as keyof typeof caseBySlug]
  if (!CaseBody) {
    return <Navigate to="/projetos" replace />
  }

  // Previous & Next navigation
  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1]
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0]

  // Filter out any self-referencing links
  const validExternalLinks = project.links.filter(
    (link) => !link.href.includes(project.slug) && link.href.startsWith('http'),
  )

  const whatsappUrl = `${socialLinks.whatsapp}?text=${encodeURIComponent(
    `Olá Adley! Vi o estudo de caso "${project.title}" no seu portfólio e gostaria de conversar.`
  )}`

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>{`${project.title} | Case Study | Adley Rodrigues`}</title>
        <meta name="description" content={project.summary} />
        <link rel="canonical" href={`${siteUrl}/projetos/${project.slug}`} />
        <meta property="og:title" content={`${project.title} | Case Study | Adley Rodrigues`} />
        <meta property="og:description" content={project.summary} />
        <meta property="og:url" content={`${siteUrl}/projetos/${project.slug}`} />
        <meta property="og:image" content={`${siteUrl}/og/adley-portfolio.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${siteUrl}/og/adley-portfolio.png`} />
      </Helmet>

      {/* Reading Progress Bar */}
      <div
        className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
      />

      <SkipLink />
      <SiteHeader />

      <main id="conteudo-principal" className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
          {/* Top Breadcrumb & Back Link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Início
              </Link>
              <span>/</span>
              <Link to="/projetos" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Projetos
              </Link>
              <span>/</span>
              <span className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-xs">
                {project.slug}
              </span>
            </nav>

            <Link
              to="/projetos"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar para todos os projetos</span>
            </Link>
          </div>

          {/* Header Hero Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 sm:p-10 shadow-lg">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-12 h-44 opacity-80 blur-3xl -z-10"
              style={{ backgroundImage: project.coverGradient }}
            />

            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-mono bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {project.role}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950">
                {project.metric}
              </span>
            </div>

            <h1 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
              {project.headline}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech}>
                  {getStackIcon(tech)}
                  <span>{tech}</span>
                </Tag>
              ))}
            </div>
          </div>

          {/* 2-Column Responsive Grid (65% / 35%) */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Narrative Column (65%) */}
            <div className="lg:col-span-8 space-y-8">
              {/* High-Fidelity Interactive UI Mockup */}
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/70 dark:border-slate-800/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <h2 className="text-base font-bold text-slate-900 dark:text-white">
                      Demonstração Visual da Interface
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Ambiente Simulado
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <ProjectMockupFrame slug={project.slug} />
                </div>
              </div>

              {/* Solution Architecture Diagram */}
              <SolutionArchitectureDiagram />

              {/* Narrative Case Body (MDX) */}
              <article className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 sm:p-10 shadow-xs prose-headings:font-bold">
                <MDXProvider components={mdxComponents}>
                  <CaseBody components={mdxComponents} />
                </MDXProvider>

                {/* Optional external links if present */}
                {validExternalLinks.length > 0 && (
                  <div className="mt-10 pt-6 border-t border-slate-200/70 dark:border-slate-800/70">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                      Recursos e Repositórios
                    </h3>
                    <ul className="flex flex-col gap-2 list-none p-0 m-0">
                      {validExternalLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                            onClick={() => trackEvent(analyticsEvents.caseStudyOpen, { slug: project.slug })}
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </div>

            {/* Sidebar Column (35% Sticky) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              {/* Executive Summary Card */}
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 shadow-xs">
                <div className="flex items-center gap-2 pb-4 border-b border-slate-200/70 dark:border-slate-800/70">
                  <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono">
                    Resumo Executivo
                  </h2>
                </div>

                {/* Metadata List */}
                <div className="mt-5 space-y-4 text-xs">
                  <div>
                    <span className="text-slate-400 font-mono">Papel Técnico</span>
                    <div className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
                      {project.role}
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 font-mono">Duração / Escopo</span>
                    <div className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{project.duration || 'Operação Contínua'}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 font-mono">Modelo de Arquitetura</span>
                    <div className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-slate-400" />
                      <span>Enterprise Multi-Tenant</span>
                    </div>
                  </div>
                </div>

                {/* Impact KPIs */}
                {project.keyMetrics && project.keyMetrics.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-slate-200/70 dark:border-slate-800/70">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
                      Métricas Chave de Impacto
                    </span>
                    <div className="mt-3 grid grid-cols-1 gap-2.5">
                      {project.keyMetrics.map((kpi) => (
                        <div
                          key={kpi.label}
                          className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/80"
                        >
                          <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                            {kpi.value}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                            {kpi.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Full Stack Chips */}
                <div className="mt-6 pt-5 border-t border-slate-200/70 dark:border-slate-800/70">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                    Stack Completa
                  </span>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100/80 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/70 text-slate-700 dark:text-slate-300"
                      >
                        {getStackIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="mt-6 pt-5 border-t border-slate-200/70 dark:border-slate-800/70">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
                    onClick={() => trackEvent(analyticsEvents.whatsappClick, { from: project.slug })}
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Falar no WhatsApp sobre este case</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom Next/Previous Navigation */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject && (
              <Link
                to={`/projetos/${prevProject.slug}`}
                className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all group flex flex-col justify-between"
              >
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" /> Projeto Anterior
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white mt-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            )}
            {nextProject && (
              <Link
                to={`/projetos/${nextProject.slug}`}
                className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all group flex flex-col justify-between text-right"
              >
                <span className="text-xs text-slate-400 font-mono flex items-center justify-end gap-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Próximo Projeto <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white mt-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
