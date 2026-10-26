import { motion } from 'framer-motion'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { SkipLink } from '../components/SkipLink'
import { Button } from '../components/ui/Button'

export function NotFoundPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="conteudo-principal" className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs uppercase font-extrabold tracking-[0.24em] text-indigo-600 dark:text-indigo-400">
              404
            </span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
            <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Página não encontrada
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
              O caminho solicitado não existe. Você pode voltar para a home ou acessar os projetos.
            </p>
          </motion.div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button as="a" href="/">
              Ir para home
            </Button>
            <Button as="a" href="/projetos" variant="ghost">
              Ver projetos
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
