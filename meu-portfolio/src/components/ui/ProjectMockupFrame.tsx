import {
  CheckCircle2,
  TrendingUp,
  Bot,
  ShieldCheck,
  Send,
  Check,
  Database,
  Server,
} from 'lucide-react'

type ProjectMockupFrameProps = {
  slug: string
  className?: string
}

export function ProjectMockupFrame({ slug, className = '' }: ProjectMockupFrameProps) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-sm text-left select-none font-sans ${className}`}
    >
      {/* Browser Window Header */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-slate-950 border-b border-slate-800/80">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80" />
        </div>

        {/* Address Bar Simulation */}
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono tracking-tight max-w-[200px] sm:max-w-xs truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="truncate">
            {slug === 'fitbank-onboarding-kpi' && 'fitbank.com.br/onboarding/pj-v2'}
            {slug === 'design-system-dashboard-react' && 'app.febracis.com.br/rh/analytics'}
            {slug === 'chat-ai-integration' && 'copilot.internal/ai-assistant'}
            {slug === 'pipeline-cypress-ci' && 'devops.cloud/pipelines/ci-e2e'}
            {slug === 'sql-read-write-separation' && 'monitor.infra/sql-read-replica'}
          </span>
        </div>

        <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
          <span className="hidden sm:inline">PROD</span>
        </div>
      </div>

      {/* Mockup Canvas */}
      <div className="p-3 sm:p-4 bg-[#090d16] text-slate-200 h-48 sm:h-52 overflow-hidden flex flex-col justify-between">
        {slug === 'fitbank-onboarding-kpi' && <FitBankMockup />}
        {slug === 'design-system-dashboard-react' && <DashboardRhMockup />}
        {slug === 'chat-ai-integration' && <ChatAiMockup />}
        {slug === 'pipeline-cypress-ci' && <CypressCiMockup />}
        {slug === 'sql-read-write-separation' && <SqlReplicaMockup />}
      </div>
    </div>
  )
}

/* 1. FitBank Onboarding White-Label & Banking Dashboard */
function FitBankMockup() {
  return (
    <div className="flex flex-col h-full justify-between gap-2 text-xs">
      {/* Mini Header & Step Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-[11px] tracking-tight">FitBank White-Label</span>
          <span className="px-1.5 py-0.2 rounded text-[9px] bg-blue-500/20 text-blue-400 border border-blue-500/30 font-medium">
            50+ Tenants
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-400">
          <span className="flex items-center gap-0.5 text-emerald-400 font-medium">
            <Check className="w-2.5 h-2.5" /> KYC OK
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-blue-400 font-medium">Assíncrono</span>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800/80">
          <div className="text-[10px] text-slate-400 flex items-center justify-between">
            <span>Volume Ativo</span>
            <TrendingUp className="w-3 h-3 text-emerald-400" />
          </div>
          <div className="text-sm font-bold text-white mt-0.5">R$ 48,2 Mi</div>
          <div className="text-[9px] text-emerald-400 font-medium mt-0.5">+18.4% este mês</div>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800/80">
          <div className="text-[10px] text-slate-400 flex items-center justify-between">
            <span>Conversão Onboarding</span>
            <ShieldCheck className="w-3 h-3 text-blue-400" />
          </div>
          <div className="text-sm font-bold text-white mt-0.5">99.4%</div>
          <div className="text-[9px] text-slate-400 font-medium mt-0.5">Zero perda de dados</div>
        </div>
      </div>

      {/* Mini Data Feed Table */}
      <div className="rounded-lg bg-slate-900/60 border border-slate-800/80 p-2 space-y-1">
        <div className="flex items-center justify-between text-[10px] text-slate-300 font-mono">
          <span className="flex items-center gap-1.5 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span>Banco Digital Alpha — Conta PJ</span>
          </span>
          <span className="text-emerald-400 font-sans text-[9px] font-semibold shrink-0">Aprovado (1.2s)</span>
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
          <span className="flex items-center gap-1.5 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
            <span>Fintech Veloce — Validação KYC</span>
          </span>
          <span className="text-blue-400 font-sans text-[9px] shrink-0">Assíncrono (0.8s)</span>
        </div>
      </div>
    </div>
  )
}

/* 2. Febracis RH Dashboard & Design System */
function DashboardRhMockup() {
  return (
    <div className="flex h-full gap-2 text-xs">
      {/* Mini Left Sidebar */}
      <div className="w-16 shrink-0 rounded-lg bg-slate-900/90 border border-slate-800/80 p-1.5 flex flex-col justify-between hidden sm:flex">
        <div className="space-y-1.5">
          <div className="w-full h-2 rounded bg-blue-500/60" />
          <div className="w-3/4 h-1.5 rounded bg-slate-700" />
          <div className="w-1/2 h-1.5 rounded bg-slate-700" />
        </div>
        <div className="text-[8px] text-slate-500 font-mono">v2.4 DS</div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-between gap-1.5">
        {/* Topbar */}
        <div className="flex items-center justify-between pb-1 border-b border-slate-800">
          <span className="font-bold text-white text-[11px]">Dashboard Gestão RH</span>
          <span className="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-300 font-mono">Q3 • Ativo</span>
        </div>

        {/* 2 Metrics */}
        <div className="grid grid-cols-2 gap-1.5">
          <div className="p-1.5 rounded bg-slate-900/90 border border-slate-800">
            <div className="text-[9px] text-slate-400">Headcount Ativo</div>
            <div className="text-xs font-bold text-white">1.248 colabs</div>
          </div>
          <div className="p-1.5 rounded bg-slate-900/90 border border-slate-800">
            <div className="text-[9px] text-slate-400">Tempo Contratação</div>
            <div className="text-xs font-bold text-emerald-400">-35% dias</div>
          </div>
        </div>

        {/* CSS Bar Chart Simulation */}
        <div className="p-2 rounded bg-slate-900/70 border border-slate-800/80">
          <div className="flex items-center justify-between text-[9px] text-slate-400 mb-1.5">
            <span>Produtividade / Entregas Mensais</span>
            <span className="text-blue-400 font-mono">+24%</span>
          </div>
          <div className="flex items-end justify-between h-9 gap-1.5 pt-1">
            <div className="w-full bg-slate-800 hover:bg-blue-600 rounded-t h-[45%] transition-all" />
            <div className="w-full bg-slate-800 hover:bg-blue-600 rounded-t h-[65%] transition-all" />
            <div className="w-full bg-slate-800 hover:bg-blue-600 rounded-t h-[80%] transition-all" />
            <div className="w-full bg-blue-600 rounded-t h-[95%]" />
            <div className="w-full bg-blue-500 rounded-t h-[85%]" />
            <div className="w-full bg-blue-400 rounded-t h-[100%]" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* 3. AI Asynchronous Support Assistant */
function ChatAiMockup() {
  return (
    <div className="flex flex-col h-full justify-between gap-1.5 text-xs">
      {/* Chat Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-white">
            <Bot className="w-3 h-3" />
          </div>
          <span className="font-bold text-white text-[11px]">Assistente IA de Operações</span>
        </div>
        <span className="flex items-center gap-1 text-[9px] text-emerald-400 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Claude 3.5 Sonnet
        </span>
      </div>

      {/* Messages Feed */}
      <div className="space-y-1.5 overflow-hidden">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="max-w-[85%] px-2.5 py-1.5 rounded-xl rounded-tr-xs bg-blue-600 text-white text-[10px] leading-tight">
            Como emitir o extrato consolidado de onboarding do polo?
          </div>
        </div>

        {/* AI Response */}
        <div className="flex justify-start items-start gap-1.5">
          <div className="w-4 h-4 rounded bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
            <Bot className="w-2.5 h-2.5" />
          </div>
          <div className="max-w-[90%] px-2.5 py-1.5 rounded-xl rounded-tl-xs bg-slate-900 border border-slate-800 text-slate-300 text-[10px] leading-relaxed">
            Relatório gerado em <strong>Relatórios &gt; Exportar CSV</strong>. Os dados foram sincronizados assincronamente com sucesso.
          </div>
        </div>
      </div>

      {/* Input Bar Simulation */}
      <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-slate-400">
        <span className="flex-1 px-1.5 text-slate-500 truncate">Digite para consultar a documentação...</span>
        <button type="button" className="p-1 rounded bg-blue-600 text-white">
          <Send className="w-2.5 h-2.5" />
        </button>
      </div>
    </div>
  )
}

/* 4. Cypress CI Pipeline */
function CypressCiMockup() {
  return (
    <div className="flex flex-col h-full justify-between gap-2 text-xs">
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
        <span className="font-bold text-white text-[11px]">Azure DevOps • Pipeline CI</span>
        <span className="text-[9px] text-emerald-400 font-mono flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> PASSING (0 fail)
        </span>
      </div>
      <div className="space-y-1 font-mono text-[10px]">
        <div className="p-1.5 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between text-slate-300">
          <span>✓ Typecheck &amp; Lint (Strict TS)</span>
          <span className="text-slate-500">12s</span>
        </div>
        <div className="p-1.5 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between text-slate-300">
          <span>✓ Cypress E2E — 48 specs bancárias</span>
          <span className="text-emerald-400 font-semibold">100% OK (1m 40s)</span>
        </div>
        <div className="p-1.5 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between text-slate-300">
          <span>✓ Automated Artifact Deploy (Prod)</span>
          <span className="text-blue-400">Deployed</span>
        </div>
      </div>
    </div>
  )
}

/* 5. SQL Server Read-Write Separation */
function SqlReplicaMockup() {
  return (
    <div className="flex flex-col h-full justify-between gap-2 text-xs">
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
        <span className="font-bold text-white text-[11px]">SQL Server • Réplica Leitura/Escrita</span>
        <span className="text-[9px] text-blue-400 font-mono">Alta Disponibilidade</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
          <div className="text-[10px] text-slate-400 flex items-center gap-1">
            <Database className="w-3 h-3 text-amber-400" /> Nó Principal (Write)
          </div>
          <div className="text-sm font-bold text-white mt-1">CPU: 18%</div>
          <div className="text-[9px] text-emerald-400">Zero deadlocks</div>
        </div>
        <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
          <div className="text-[10px] text-slate-400 flex items-center gap-1">
            <Server className="w-3 h-3 text-blue-400" /> Réplicas (Read Only)
          </div>
          <div className="text-sm font-bold text-white mt-1">4.8k req/s</div>
          <div className="text-[9px] text-blue-400">Carga isolada</div>
        </div>
      </div>
      <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800 text-[10px] text-slate-400 flex justify-between font-mono">
        <span>Queries Analíticas de Dashboards</span>
        <span className="text-emerald-400 font-semibold">100% offload</span>
      </div>
    </div>
  )
}
