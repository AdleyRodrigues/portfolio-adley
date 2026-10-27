import { Layers, ShieldCheck, Cpu, Database, ArrowRight, CheckCircle2 } from 'lucide-react'

type SolutionArchitectureDiagramProps = {
  className?: string
}

export function SolutionArchitectureDiagram({ className = '' }: SolutionArchitectureDiagramProps) {
  const steps = [
    {
      stepNumber: '01',
      title: 'Client UI (Interface Reativa)',
      tech: 'React • TypeScript • State Machine (FSM)',
      description:
        'Interface multi-tenant com persistência incremental de rascunhos. Tolera quedas de rede sem perda de dados preenchidos pelo usuário.',
      badge: 'Edge / Frontend',
      icon: Layers,
      accent: 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400',
      highlight: 'Zero perda de estado',
    },
    {
      stepNumber: '02',
      title: 'API Gateway & BFF',
      tech: 'REST • Zod Schema Validation',
      description:
        'Roteamento multi-tenant seguro, sanitização rigorosa de payloads, rate limiting e autenticação unificada por tokens bancários.',
      badge: 'Contratos & Segurança',
      icon: ShieldCheck,
      accent: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
      highlight: 'Tipagem estrita ponta a ponta',
    },
    {
      stepNumber: '03',
      title: 'Fila Assíncrona & Workers',
      tech: 'Event Workers • Resilient Retries',
      description:
        'Desacoplamento de uploads pesados de documentos e imagens biométricas, com fila de reprocessamento automático e polling de status.',
      badge: 'Alta Resiliência',
      icon: Cpu,
      accent: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
      highlight: 'Processamento não-bloqueante',
    },
    {
      stepNumber: '04',
      title: 'Serviço KYC & Core Bancário',
      tech: 'Motores Antifraude • SQL Server',
      description:
        'Checagem biométrica, verificação de listas restritivas e conciliação transacional direta para abertura e aprovação de contas.',
      badge: 'BaaS / FinOps',
      icon: Database,
      accent: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      highlight: 'Auditoria & Compliance BACEN',
    },
  ]

  return (
    <div
      className={`rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 sm:p-8 shadow-xs ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
            Arquitetura da Solução
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Fluxo Transacional Assíncrono &amp; Resiliente
          </h2>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold self-start sm:self-auto">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Multi-Tenant Validado</span>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
        A arquitetura foi projetada para desacoplar a camada de apresentação das validações regulatórias pesadas. O usuário nunca fica bloqueado aguardando respostas demoradas de terceiros.
      </p>

      {/* Visual Sequence Ribbon / Flow Stepper */}
      <div className="mt-6 mb-6 p-3 rounded-2xl bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-2 overflow-x-auto text-xs">
        <div className="flex items-center gap-2 shrink-0 font-mono font-bold text-slate-800 dark:text-slate-200">
          <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px]">1</span>
          <span>Client UI</span>
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

        <div className="flex items-center gap-2 shrink-0 font-mono font-bold text-slate-800 dark:text-slate-200">
          <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px]">2</span>
          <span>API Gateway</span>
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

        <div className="flex items-center gap-2 shrink-0 font-mono font-bold text-slate-800 dark:text-slate-200">
          <span className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[11px]">3</span>
          <span>Fila Assíncrona</span>
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

        <div className="flex items-center gap-2 shrink-0 font-mono font-bold text-slate-800 dark:text-slate-200">
          <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px]">4</span>
          <span>Core Bancário</span>
        </div>
      </div>

      {/* Spacious 2x2 Grid with Perfect Alignment and Equal Heights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 items-stretch">
        {steps.map((step) => {
          const Icon = step.icon

          return (
            <div
              key={step.stepNumber}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 p-5 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-2xs h-full"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`p-2 rounded-xl border ${step.accent}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                      Fase {step.stepNumber}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider font-mono text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-slate-800/80">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-0.5 font-medium">
                  {step.tech}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="text-emerald-600 dark:text-emerald-400 font-sans font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {step.highlight}
                </span>
                <span className="text-slate-400 dark:text-slate-500">Pipeline OK</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
