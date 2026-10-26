import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Printer, Mail, MapPin, Sparkles, Briefcase, GraduationCap, Code2, Layers } from 'lucide-react'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from '../components/ui/Icons'
import { about, education, siteUrl, socialLinks, timeline } from '../data/siteContent'
import { fadeInUp, staggerContainer } from '../lib/motion'

const skillCategories = [
  {
    title: 'Front-End & Engenharia de Interface',
    skills: [
      'React (18/19)',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'Design Systems',
      'Micro-Frontends',
      'Core Web Vitals',
      'Acessibilidade (WCAG)',
      'State Management (Zustand/Redux)',
    ],
  },
  {
    title: 'Back-End & Arquitetura de Dados',
    skills: [
      'C#',
      '.NET / ASP.NET Core',
      'APIs RESTful',
      'SQL Server',
      'Separação Leitura/Escrita',
      'Entity Framework',
      'Clean Architecture',
      'Autenticação & JWT',
      'Node.js',
    ],
  },
  {
    title: 'Qualidade, DevOps & Ferramentas',
    skills: [
      'Cypress (E2E)',
      'Azure DevOps',
      'Pipelines CI/CD',
      'Git & GitHub',
      'Vite & Rollup',
      'Docker',
      'PNPM Monorepos',
      'Integrações com IA (LLMs)',
    ],
  },
  {
    title: 'Liderança Técnica & Governança',
    skills: [
      'Tech Lead de Squads',
      'Arquitetura de Soluções',
      'Code Review & Pair Programming',
      'Mentoria Técnica',
      'Decomposição de Épicos & Histórias',
      'Scrum & Kanban',
      'Alinhamento com Stakeholders',
    ],
  },
]

export function CurriculoPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Currículo Profissional | Adley Rodrigues de Castro</title>
        <meta
          name="description"
          content="Currículo detalhado de Adley Rodrigues de Castro, Engenheiro de Software Sênior com atuação em React, TypeScript, ecossistema .NET e liderança técnica."
        />
        <link rel="canonical" href={`${siteUrl}/curriculo`} />
        <meta property="og:title" content="Currículo | Adley Rodrigues de Castro" />
        <meta
          property="og:description"
          content="Trajetória profissional, stack técnica e experiências de liderança técnica em front-end e produtos escaláveis."
        />
        <meta property="og:url" content={`${siteUrl}/curriculo`} />
      </Helmet>

      <SiteHeader />

      <main className="min-h-screen py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Actions (Hidden in Print) */}
          <div className="no-print flex items-center justify-between gap-4 mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao início</span>
            </Link>

            <button
              type="button"
              onClick={handlePrint}
              title="Imprimir ou salvar este currículo em PDF"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/25 active:scale-95 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Salvar em PDF</span>
            </button>
          </div>

          {/* Resume Container Sheet */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="resume-sheet rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900/90 p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-md transition-colors"
          >
            {/* Header Resume */}
            <motion.header variants={fadeInUp} className="border-b border-slate-200 dark:border-white/10 pb-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Adley Rodrigues de Castro
                  </h1>
                  <p className="mt-1.5 text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                    Engenheiro de Software Sênior • Tech Lead • Front-End & Arquitetura
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>Ceará, Brasil • Atuação Remota Nacional / Internacional</span>
                  </p>
                </div>

                <div className="no-print hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 w-fit">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Disponível para novos desafios</span>
                </div>
              </div>

              {/* Contacts Bar */}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <a
                  href={socialLinks.email}
                  className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-indigo-500" />
                  <span>adleyrc.job@gmail.com</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-sky-500" />
                  <span>linkedin.com/in/adley-castro</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>github.com/AdleyRodrigues</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                  <span>+55 (88) 99244-5274</span>
                </a>
              </div>
            </motion.header>

            {/* Section: Resumo Profissional */}
            <motion.section variants={fadeInUp} className="py-8 border-b border-slate-200 dark:border-white/10 print-avoid-break">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Resumo Profissional
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                {about}
              </p>
            </motion.section>

            {/* Section: Experiência Profissional */}
            <motion.section variants={fadeInUp} className="py-8 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Experiência Profissional
                </h2>
              </div>

              <div className="space-y-8">
                {timeline.map((item) => (
                  <div key={`${item.company}-${item.period}`} className="print-avoid-break relative pl-6 border-l-2 border-indigo-500/30">
                    <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-indigo-600 ring-4 ring-white dark:ring-slate-900" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-500/20 px-2.5 py-0.5 rounded-full w-fit">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
                      {item.company}
                    </p>

                    <ul className="mt-3 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="leading-relaxed">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section: Habilidades Técnicas */}
            <motion.section variants={fadeInUp} className="py-8 border-b border-slate-200 dark:border-white/10 print-avoid-break">
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Habilidades Técnicas & Competências
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {skillCategories.map((cat) => (
                  <div
                    key={cat.title}
                    className="p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Layers className="w-3.5 h-3.5 text-indigo-500" />
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {cat.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-2xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section: Formação Acadêmica */}
            <motion.section variants={fadeInUp} className="pt-8 print-avoid-break">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Formação Acadêmica
                </h2>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={`${edu.institution}-${edu.period}`} className="print-avoid-break">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {edu.course}
                    </p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      {edu.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
