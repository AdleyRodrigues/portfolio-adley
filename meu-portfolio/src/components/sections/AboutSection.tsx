import { Users, ShieldCheck, Zap, Award } from 'lucide-react'
import { Section } from '../Section'
import { recruiterTags } from '../../data/siteContent'

const leadershipPillars = [
  {
    icon: <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    title: 'Liderança Técnica & Governança',
    subtitle: 'Alinhamento de time & previsibilidade',
    description:
      'Liderança de frentes de front-end e produto, condução de code reviews, mentoria técnica e governança de Design Systems em React + TypeScript. Foco contínuo em elevar a barra técnica do time, reduzir débitos técnicos e encurtar o tempo de entrega de novas features.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    title: 'Arquiteturas para Operações Críticas',
    subtitle: 'Escala Fintech & alta disponibilidade',
    description:
      'Concepção de soluções assíncronas para fluxos bancários e corporativos de alta volatilidade. Experiência prática na modernização de onboarding de contas digitais e plataformas white-label atendendo cerca de 50 operações de bancos com conformidade regulatória e zero perda de dados.',
  },
  {
    icon: <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    title: 'Eficiência de Performance & Custos',
    subtitle: 'Impacto direto no CAC e retenção',
    description:
      'Abordagem orientada a métricas de engenharia (Core Web Vitals, bundle-budget e latência de rede). Estruturação de otimizações de leitura/escrita com SQL Server e cache para eliminar gargalos analíticos, reduzindo custos de infraestrutura e melhorando a conversão de produto.',
  },
]

export function AboutSection() {
  return (
    <Section
      id="sobre"
      eyebrow="Sobre Mim & Liderança"
      title="Engenharia de software com foco em retorno de negócio, confiabilidade e escala."
      description="Minha atuação vai além da escrita de código: conecto os objetivos estratégicos de produto, rigor arquitetural e liderança técnica para desenhar sistemas escaláveis que geram impacto mensurável."
    >
      {/* Executive Pillars Grid */}
      <div className="grid grid-cols-1 gap-4">
        {leadershipPillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shrink-0 mt-0.5">
                {pillar.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
                    {pillar.subtitle}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recruiter & Competency Tags Card */}
      <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            Competências Estratégicas &amp; Ferramental
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4">
          Habilidades consolidadas em cenários reais de alta volumetria, governança e liderança técnica.
        </p>
        <div className="flex flex-wrap gap-2">
          {recruiterTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-lg bg-transparent border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
