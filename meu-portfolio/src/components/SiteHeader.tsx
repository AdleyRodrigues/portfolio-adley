import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { analyticsEvents, navigation } from '../data/siteContent'
import { trackEvent } from '../lib/analytics'
import { Button } from './ui/Button'
import { ThemeToggleButton } from '../theme/ThemeToggleButton'

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/75 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="/"
          className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Adley Rodrigues de Castro
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-6"
        >
          {navigation.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              whileHover={{ y: -1.5 }}
              transition={{ duration: 0.15 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <ThemeToggleButton />

          <div className="hidden sm:block">
            <Button
              as="a"
              href="/curriculo"
              variant="ghost"
              size="small"
              onClick={() => trackEvent(analyticsEvents.resumeDownload)}
            >
              Currículo
            </Button>
          </div>

          {/* Hamburger button for mobile */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={isOpen}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-slate-200/80 dark:border-white/10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl"
          >
            <div className="max-w-7xl mx-auto px-5 py-5">
              <nav aria-label="Navegação mobile" className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="text-base font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="pt-2 sm:hidden">
                  <Button
                    as="a"
                    href="/curriculo"
                    variant="solid"
                    size="small"
                    className="w-full text-center"
                    onClick={() => {
                      trackEvent(analyticsEvents.resumeDownload)
                      handleLinkClick()
                    }}
                  >
                    Ver Currículo
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
