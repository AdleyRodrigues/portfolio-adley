import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { analyticsEvents } from '../data/siteContent'
import { trackEvent } from '../lib/analytics'

const VISIBILITY_THRESHOLD = 480

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > VISIBILITY_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    trackEvent(analyticsEvents.backToTopClick)
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            type="button"
            aria-label="Voltar ao topo"
            onClick={handleClick}
            className="w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
