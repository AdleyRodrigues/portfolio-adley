import { motion } from 'framer-motion'
import { GitHubAnalytics } from '../GitHubAnalytics'
import { githubUsername } from '../../data/siteContent'

const impactStats = [
  { value: '5+ anos', label: 'Em engenharia e arquitetura de software' },
  { value: '~50 bancos', label: 'Operações white-label atendidas no FitBank' },
  { value: '1.200+', label: 'Usuários corporativos em dashboards gerenciados' },
  { value: '100% TS', label: 'Código em TypeScript com tipagem estrita e testes' },
]

export function StatsSection() {
  return (
    <>
      {/* Impact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 sm:p-10 shadow-xs"
        >
          <span className="text-xs uppercase font-bold tracking-[0.2em] font-mono text-blue-600 dark:text-blue-400">
            Impacto Operacional &amp; Métricas
          </span>
          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white max-w-4xl tracking-tight leading-snug">
            Menos decoração, mais resultado: dados e escala técnica comprovados em produção.
          </h2>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0 m-0">
            {impactStats.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 p-5 flex flex-col justify-between"
              >
                <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                  {item.value}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* GitHub Section */}
      <section
        id="github"
        className="border-t border-slate-200/80 dark:border-slate-800 py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 max-w-3xl mb-8">
            <span className="text-xs uppercase font-bold tracking-[0.2em] font-mono text-blue-600 dark:text-blue-400">
              GitHub Analytics
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Presença técnica transparente com métricas e atividade em tempo real.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Histórico de commits, evolução e consistência de contribuições técnicas disponíveis publicamente para avaliação de recrutadores e lideranças.
            </p>
          </div>

          <GitHubAnalytics username={githubUsername} />
        </div>
      </section>
    </>
  )
}
