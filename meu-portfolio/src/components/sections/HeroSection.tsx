import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { analyticsEvents, recruiterTags, socialLinks } from '../../data/siteContent'
import { trackEvent } from '../../lib/analytics'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import { BlurText } from '../ui/BlurText'
import { WhatsAppIcon } from '../ui/Icons'

export function HeroSection() {
  const topSkills = recruiterTags.slice(0, 6)

  return (
    <section className="relative overflow-hidden pt-8 pb-10 md:pt-10 md:pb-12 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950 transition-colors">
      {/* Minimalist Grid Pattern (Monochromatic Big-Tech Style) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 backdrop-blur-md shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Disponível para novos desafios e projetos de alto impacto
            </span>
          </motion.div>

          {/* Headline H1 with letter-by-letter Blur animation */}
          <BlurText
            as="h1"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.14]"
            delay={0.1}
            stagger={0.035}
            segments={[
              { text: 'Engenheiro de Software Sênior focado em' },
              {
                text: 'arquiteturas escaláveis',
                className: 'text-blue-600 dark:text-blue-500',
              },
              { text: 'e interfaces de alta performance.' },
            ]}
          />

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl"
          >
            Sou <strong className="font-semibold text-slate-900 dark:text-slate-200">Adley Rodrigues de Castro</strong>.
            Combino liderança técnica, experiência de ponta com{' '}
            <span className="text-slate-900 dark:text-slate-100 font-semibold">React, TypeScript e ecossistema .NET</span>{' '}
            para desenhar soluções que transformam requisitos complexos em produtos intuitivos, rápidos e confiáveis.
          </motion.p>

          {/* Tech Badges (Minimalist Border & Neutral Tones) */}
          <motion.div
            variants={fadeInUp}
            className="mt-4 flex flex-wrap justify-center gap-2 max-w-2xl"
          >
            {topSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs sm:text-sm font-medium rounded-lg bg-transparent border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* CTAs (High Contrast Monochrome Palette) */}
          <motion.div
            variants={fadeInUp}
            className="mt-7 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
          >
            <a
              href="#projetos"
              onClick={() => trackEvent(analyticsEvents.heroPrimaryCtaClick)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-200 dark:text-slate-950 shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explorar cases de impacto</span>
              <span className="group-hover:translate-y-0.5 transition-transform text-xs">↓</span>
            </a>

            <Link
              to="/curriculo"
              onClick={() => trackEvent(analyticsEvents.resumeDownload)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200 bg-transparent border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900/80 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Ver Currículo</span>
              <span className="text-xs text-slate-400 group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent(analyticsEvents.whatsappClick)}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-medium text-sm sm:text-base text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-800/80 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
