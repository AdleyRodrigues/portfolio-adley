import { motion } from 'framer-motion'
import { Briefcase, Building2, Users, ShieldCheck } from 'lucide-react'
import { GitHubAnalytics } from '../GitHubAnalytics'
import { githubUsername } from '../../data/siteContent'

const impactStats = [
  {
    number: '5+',
    unit: 'Anos',
    title: 'Experiência em Engenharia',
    description: 'Arquitetura de software e liderança técnica de ponta a ponta',
    icon: Briefcase,
    accent: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    number: '50+',
    unit: 'Operações',
    title: 'Instituições em Produção',
    description: 'Plataforma white-label com core bancário e validações KYC',
    icon: Building2,
    accent: 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
  {
    number: '1.200+',
    unit: 'Colaboradores',
    title: 'Usuários Ativos em Dashboards',
    description: 'Interfaces analíticas corporativas com alta densidade de dados',
    icon: Users,
    accent: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    number: '100%',
    unit: 'TypeScript',
    title: 'Tipagem Estrita & Testes',
    description: 'Código robusto com testes automatizados em pipelines contínuos',
    icon: ShieldCheck,
    accent: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
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

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
            {impactStats.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 p-5 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 shadow-2xs hover:shadow-sm group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className={`p-2 rounded-xl border ${item.accent}`}>
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-md bg-slate-200/60 dark:bg-slate-800/80">
                        {item.unit}
                      </span>
                    </div>

                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {item.number}
                    </div>

                    <h3 className="mt-2 text-sm font-bold text-slate-800 dark:text-slate-200 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
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
