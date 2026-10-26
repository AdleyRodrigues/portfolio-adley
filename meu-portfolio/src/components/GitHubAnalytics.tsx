import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Star,
  GitFork,
  Code2,
  ExternalLink,
  Zap,
  Calendar,
  GitBranch,
} from 'lucide-react'
import {
  fetchGitHubEvents,
  fetchGitHubRepos,
  fetchGitHubUser,
  type GitHubEvent,
  type GitHubRepo,
} from '../lib/github'

type GitHubAnalyticsProps = {
  username: string
}

type State = {
  loading: boolean
  error: string | null
  repos: GitHubRepo[]
  events: GitHubEvent[]
  reposCount: number
  followers: number
  publicGists: number
  accountCreatedAt: string
}

const FEATURED_REPOS_WHITELIST = [
  {
    name: 'Sistema-Gestao-Hospitalar',
    fallbackDescription: 'Sistema completo de gestão hospitalar com TypeScript, módulos clínicos e prontuário.',
  },
  {
    name: 'financial-wallet-challenge',
    fallbackDescription: 'Full-stack financial wallet challenge construído com Next.js, TypeScript e arquitetura moderna.',
  },
  {
    name: 'notification-platform',
    fallbackDescription: 'Plataforma para orquestração de notificações e mensageria multi-canal com React e TypeScript.',
  },
  {
    name: 'price-tracker',
    fallbackDescription: 'Rastreador de preços e monitoramento em tempo real desenvolvido com TypeScript.',
  },
  {
    name: 'reliable-webhook-processor',
    fallbackDescription: 'API .NET inspirada em cenários de alta resiliência para processamento confiável de webhooks.',
  },
  {
    name: 'portfolio-adley',
    fallbackDescription: 'Portfólio de engenharia de software com foco em arquitetura front-end, acessibilidade e performance.',
  },
]

export function GitHubAnalytics({ username }: GitHubAnalyticsProps) {
  const [state, setState] = useState<State>({
    loading: true,
    error: null,
    repos: [],
    events: [],
    reposCount: 0,
    followers: 0,
    publicGists: 0,
    accountCreatedAt: '',
  })

  useEffect(() => {
    let active = true

    async function load() {
      try {
        const [user, repos, eventsResult] = await Promise.all([
          fetchGitHubUser(username),
          fetchGitHubRepos(username),
          fetchGitHubEvents(username).catch(() => [] as GitHubEvent[]),
        ])
        if (!active) return

        setState({
          loading: false,
          error: null,
          repos,
          events: eventsResult,
          reposCount: user.public_repos,
          followers: user.followers,
          publicGists: user.public_gists,
          accountCreatedAt: user.created_at,
        })
      } catch (error) {
        if (!active) return
        setState((current) => ({
          ...current,
          loading: false,
          error: error instanceof Error ? error.message : 'Erro ao carregar dados',
        }))
      }
    }

    load()
    return () => {
      active = false
    }
  }, [username])

  const topRepos = useMemo(() => {
    const whitelistNames = FEATURED_REPOS_WHITELIST.map((item) => item.name.toLowerCase())
    const matched = state.repos.filter((repo) => whitelistNames.includes(repo.name.toLowerCase()))

    const listToUse =
      matched.length > 0
        ? matched
        : state.repos.filter(
            (r) => !r.fork && !r.archived && r.language !== 'Java' && !r.name.toLowerCase().includes('algebra'),
          )

    const enriched = listToUse.map((repo) => {
      const config = FEATURED_REPOS_WHITELIST.find((item) => item.name.toLowerCase() === repo.name.toLowerCase())
      return {
        ...repo,
        description: repo.description || config?.fallbackDescription || 'Projeto de engenharia de software.',
      }
    })

    return enriched
      .sort((a, b) => {
        const indexA = FEATURED_REPOS_WHITELIST.findIndex((item) => item.name.toLowerCase() === a.name.toLowerCase())
        const indexB = FEATURED_REPOS_WHITELIST.findIndex((item) => item.name.toLowerCase() === b.name.toLowerCase())
        if (indexA !== -1 && indexB !== -1) return indexA - indexB
        return b.stargazers_count - a.stargazers_count
      })
      .slice(0, 4)
  }, [state.repos])

  const summary = useMemo(() => {
    const totalStars = state.repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
    const totalForks = state.repos.reduce((sum, repo) => sum + repo.forks_count, 0)
    const ninetyDaysAgo = Date.now() - 90 * 24 * 60 * 60 * 1000
    const activeRepos = state.repos.filter((repo) => new Date(repo.updated_at).getTime() >= ninetyDaysAgo).length

    const languageCount = new Map<string, number>()
    state.repos.forEach((repo) => {
      if (!repo.language) return
      languageCount.set(repo.language, (languageCount.get(repo.language) ?? 0) + 1)
    })
    const topLanguages = Array.from(languageCount.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([language, count]) => `${language} (${count})`)

    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000
    const recentEvents = state.events.filter((event) => new Date(event.created_at).getTime() >= thirtyDaysAgo)
    const pushEvents30d = recentEvents.filter((event) => event.type === 'PushEvent').length
    const reposTouched30d = new Set(recentEvents.map((event) => event.repo.name)).size

    const accountAgeYears = state.accountCreatedAt
      ? Math.max(0, Math.floor((Date.now() - new Date(state.accountCreatedAt).getTime()) / (365.25 * 24 * 60 * 60 * 1000)))
      : 0

    return {
      totalStars,
      totalForks,
      activeRepos,
      topLanguages,
      pushEvents30d,
      reposTouched30d,
      accountAgeYears,
    }
  }, [state.repos, state.events, state.accountCreatedAt])

  return (
    <div className="flex flex-col gap-6">
      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-5 shadow-xs">
          <span className="text-xs uppercase font-extrabold tracking-wider text-slate-500 dark:text-slate-400">
            Repositórios públicos
          </span>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
            {state.loading ? '--' : state.reposCount}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-5 shadow-xs">
          <span className="text-xs uppercase font-extrabold tracking-wider text-slate-500 dark:text-slate-400">
            Seguidores
          </span>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
            {state.loading ? '--' : state.followers}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-5 shadow-xs">
          <span className="text-xs uppercase font-extrabold tracking-wider text-slate-500 dark:text-slate-400">
            Gists públicos
          </span>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
            {state.loading ? '--' : state.publicGists}
          </p>
        </div>
      </div>

      {/* Snapshot Técnico */}
      <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 shadow-xs">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Snapshot técnico</h3>

        {state.loading ? (
          <div className="py-8 flex justify-center items-center">
            <div className="w-7 h-7 rounded-full border-2 border-indigo-600 dark:border-indigo-400 border-t-transparent animate-spin" />
          </div>
        ) : state.error ? (
          <p className="mt-4 text-sm text-rose-500">
            {state.error}. Tente novamente em alguns instantes.
          </p>
        ) : (
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0 m-0">
            <li className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 p-3.5 flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
              <Star className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Stars totais: <strong className="font-semibold text-slate-900 dark:text-white">{summary.totalStars}</strong></span>
            </li>
            <li className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 p-3.5 flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
              <GitFork className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>Forks totais: <strong className="font-semibold text-slate-900 dark:text-white">{summary.totalForks}</strong></span>
            </li>
            <li className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 p-3.5 flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
              <Calendar className="w-4 h-4 text-sky-500 shrink-0" />
              <span>Conta ativa há: <strong className="font-semibold text-slate-900 dark:text-white">{summary.accountAgeYears} anos</strong></span>
            </li>
            <li className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 p-3.5 flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
              <Zap className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Push events (30d): <strong className="font-semibold text-slate-900 dark:text-white">{summary.pushEvents30d}</strong></span>
            </li>
            <li className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 p-3.5 flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
              <GitBranch className="w-4 h-4 text-purple-500 shrink-0" />
              <span>Repos atualizados (90d): <strong className="font-semibold text-slate-900 dark:text-white">{summary.activeRepos}</strong></span>
            </li>
            <li className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 p-3.5 flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
              <Code2 className="w-4 h-4 text-pink-500 shrink-0" />
              <span>Linguagens top: <strong className="font-semibold text-slate-900 dark:text-white">{summary.topLanguages.length ? summary.topLanguages.join(' • ') : 'N/A'}</strong></span>
            </li>
            <li className="md:col-span-2 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 p-3.5 flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
              <ExternalLink className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>Repos tocados por atividade pública (30d): <strong className="font-semibold text-slate-900 dark:text-white">{summary.reposTouched30d}</strong></span>
            </li>
          </ul>
        )}
      </div>

      {/* Repositórios em destaque */}
      <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 shadow-xs">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Repositórios em destaque</h3>

        {state.loading ? (
          <div className="py-8 flex justify-center items-center">
            <div className="w-7 h-7 rounded-full border-2 border-indigo-600 dark:border-indigo-400 border-t-transparent animate-spin" />
          </div>
        ) : state.error ? (
          <p className="mt-4 text-sm text-rose-500">
            {state.error}. Tente novamente em alguns instantes.
          </p>
        ) : (
          <ul className="mt-4 flex flex-col gap-3 list-none p-0 m-0">
            {topRepos.map((repo, index) => (
              <motion.li
                key={repo.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 p-4 flex flex-col gap-2 hover:border-indigo-400/50 transition-colors"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-fit"
                >
                  <span>{repo.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {repo.description ? (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {repo.description}
                  </p>
                ) : null}

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <span className="inline-flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{repo.forks_count}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5 text-pink-500" />
                    <span>{repo.language ?? 'N/A'}</span>
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
