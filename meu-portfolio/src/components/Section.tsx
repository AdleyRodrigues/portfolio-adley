import type { PropsWithChildren, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, staggerContainer } from '../lib/motion'

type SectionProps = PropsWithChildren<{
  id: string
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
  layout?: 'sidebar' | 'stacked'
  className?: string
}>

export function Section({
  id,
  eyebrow,
  title,
  description,
  actions,
  layout = 'sidebar',
  className = '',
  children,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      style={{ scrollMarginTop: 96 }}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`border-t border-slate-200/80 dark:border-slate-800 py-16 md:py-24 ${className}`}
    >
      {layout === 'stacked' ? (
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-200/60 dark:border-slate-800/60"
          >
            <div className="max-w-3xl flex flex-col gap-3">
              {eyebrow ? (
                <span className="text-xs uppercase font-bold tracking-[0.2em] font-mono text-blue-600 dark:text-blue-400">
                  {eyebrow}
                </span>
              ) : null}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {title}
              </h2>
              {description ? (
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {description}
                </p>
              ) : null}
            </div>
            {actions ? <div className="shrink-0 pb-1">{actions}</div> : null}
          </motion.div>

          <motion.div variants={fadeInUp} className="w-full">
            {children}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:gap-14 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.75fr)]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-3 lg:sticky lg:top-24 h-fit"
          >
            {eyebrow ? (
              <span className="text-xs uppercase font-bold tracking-[0.2em] font-mono text-blue-600 dark:text-blue-400">
                {eyebrow}
              </span>
            ) : null}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {title}
            </h2>
            {description ? (
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                {description}
              </p>
            ) : null}
            {actions}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            {children}
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  )
}
