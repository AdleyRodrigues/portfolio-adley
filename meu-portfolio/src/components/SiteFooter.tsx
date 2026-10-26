import { motion } from 'framer-motion'
import { socialLinks } from '../data/siteContent'

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-950 backdrop-blur-md py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
            Adley Rodrigues de Castro
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            © {new Date().getFullYear()} • Engenharia de Software & Arquitetura de Front-End
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
          <motion.a
            href={socialLinks.email}
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
            whileHover={{ y: -1 }}
          >
            adleyrc.job@gmail.com
          </motion.a>
          <motion.a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
            whileHover={{ y: -1 }}
          >
            WhatsApp
          </motion.a>
          <motion.a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
            whileHover={{ y: -1 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
            whileHover={{ y: -1 }}
          >
            GitHub
          </motion.a>
          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
          <motion.a
            href={socialLinks.company}
            target="_blank"
            rel="noreferrer"
            title="Software House do Adley para serviços sob medida"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            whileHover={{ y: -1 }}
          >
            <span>Guidetech (Software House)</span>
            <span className="text-[10px]">↗</span>
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
