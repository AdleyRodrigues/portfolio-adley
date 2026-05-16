import { useEffect, useMemo, useState } from 'react'
import { Box, CircularProgress, Paper, Stack, Typography } from '@mui/material'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import ForkRightRoundedIcon from '@mui/icons-material/ForkRightRounded'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import BoltRoundedIcon from '@mui/icons-material/BoltRounded'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded'
import { motion } from 'framer-motion'
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

  const topRepos = useMemo(
    () =>
      state.repos
        .filter((repo) => !repo.fork && !repo.archived)
        .slice()
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4),
    [state.repos],
  )

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
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <Paper variant="outlined" sx={{ flex: 1, p: 2.2, borderRadius: 2.6 }}>
          <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.14em', fontWeight: 700 }}>
            Repositórios públicos
          </Typography>
          <Typography variant="h4" sx={{ mt: 0.6 }}>
            {state.loading ? '--' : state.reposCount}
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ flex: 1, p: 2.2, borderRadius: 2.6 }}>
          <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.14em', fontWeight: 700 }}>
            Seguidores
          </Typography>
          <Typography variant="h4" sx={{ mt: 0.6 }}>
            {state.loading ? '--' : state.followers}
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ flex: 1, p: 2.2, borderRadius: 2.6 }}>
          <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.14em', fontWeight: 700 }}>
            Gists públicos
          </Typography>
          <Typography variant="h4" sx={{ mt: 0.6 }}>
            {state.loading ? '--' : state.publicGists}
          </Typography>
        </Paper>
      </Stack>

      <Paper variant="outlined" sx={{ p: 2.4, borderRadius: 2.6 }}>
        <Typography variant="h6">Snapshot técnico</Typography>
        {state.loading ? (
          <Stack sx={{ py: 3, alignItems: 'center' }}>
            <CircularProgress size={26} />
          </Stack>
        ) : state.error ? (
          <Typography color="error" sx={{ mt: 1.8 }}>
            {state.error}. Tente novamente em alguns instantes.
          </Typography>
        ) : (
          <Stack
            component="ul"
            spacing={1}
            sx={{
              mt: 1.6,
              p: 0,
              m: 0,
              listStyle: 'none',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
            }}
          >
            <Paper component="li" variant="outlined" sx={{ p: 1.4, borderRadius: 2 }}>
              <Stack direction="row" spacing={0.7} sx={{ alignItems: 'center' }}>
                <StarRoundedIcon sx={{ fontSize: 17 }} />
                <Typography variant="body2">Stars totais: {summary.totalStars}</Typography>
              </Stack>
            </Paper>
            <Paper component="li" variant="outlined" sx={{ p: 1.4, borderRadius: 2 }}>
              <Stack direction="row" spacing={0.7} sx={{ alignItems: 'center' }}>
                <ForkRightRoundedIcon sx={{ fontSize: 17 }} />
                <Typography variant="body2">Forks totais: {summary.totalForks}</Typography>
              </Stack>
            </Paper>
            <Paper component="li" variant="outlined" sx={{ p: 1.4, borderRadius: 2 }}>
              <Stack direction="row" spacing={0.7} sx={{ alignItems: 'center' }}>
                <CalendarMonthRoundedIcon sx={{ fontSize: 17 }} />
                <Typography variant="body2">Conta ativa há: {summary.accountAgeYears} anos</Typography>
              </Stack>
            </Paper>
            <Paper component="li" variant="outlined" sx={{ p: 1.4, borderRadius: 2 }}>
              <Stack direction="row" spacing={0.7} sx={{ alignItems: 'center' }}>
                <BoltRoundedIcon sx={{ fontSize: 17 }} />
                <Typography variant="body2">Push events (30d): {summary.pushEvents30d}</Typography>
              </Stack>
            </Paper>
            <Paper component="li" variant="outlined" sx={{ p: 1.4, borderRadius: 2 }}>
              <Stack direction="row" spacing={0.7} sx={{ alignItems: 'center' }}>
                <AccountTreeRoundedIcon sx={{ fontSize: 17 }} />
                <Typography variant="body2">Repos atualizados (90d): {summary.activeRepos}</Typography>
              </Stack>
            </Paper>
            <Paper component="li" variant="outlined" sx={{ p: 1.4, borderRadius: 2 }}>
              <Stack direction="row" spacing={0.7} sx={{ alignItems: 'center' }}>
                <CodeRoundedIcon sx={{ fontSize: 17 }} />
                <Typography variant="body2">
                  Linguagens top: {summary.topLanguages.length ? summary.topLanguages.join(' • ') : 'N/A'}
                </Typography>
              </Stack>
            </Paper>
            <Paper component="li" variant="outlined" sx={{ p: 1.4, borderRadius: 2, gridColumn: { md: '1 / -1' } }}>
              <Stack direction="row" spacing={0.7} sx={{ alignItems: 'center' }}>
                <OpenInNewRoundedIcon sx={{ fontSize: 17 }} />
                <Typography variant="body2">Repos tocados por atividade pública (30d): {summary.reposTouched30d}</Typography>
              </Stack>
            </Paper>
          </Stack>
        )}
      </Paper>

      <Paper variant="outlined" sx={{ p: 2.4, borderRadius: 2.6 }}>
        <Typography variant="h6">Repositórios em destaque</Typography>

        {state.loading ? (
          <Stack sx={{ py: 4, alignItems: 'center' }}>
            <CircularProgress size={28} />
          </Stack>
        ) : state.error ? (
          <Typography color="error" sx={{ mt: 1.8 }}>
            {state.error}. Tente novamente em alguns instantes.
          </Typography>
        ) : (
          <Stack component="ul" spacing={1.2} sx={{ mt: 2, p: 0, m: 0, listStyle: 'none' }}>
            {topRepos.map((repo, index) => (
              <Box
                key={repo.id}
                component={motion.li}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    p: 1.6,
                    borderRadius: 2.2,
                    display: 'grid',
                    gap: 0.5,
                  }}
                >
                  <Box
                    component="a"
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.7,
                      width: 'fit-content',
                      color: 'text.primary',
                      fontWeight: 700,
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline', textUnderlineOffset: '4px' },
                    }}
                  >
                    {repo.name}
                    <OpenInNewRoundedIcon sx={{ fontSize: 16 }} />
                  </Box>

                  {repo.description ? (
                    <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                      {repo.description}
                    </Typography>
                  ) : null}

                  <Stack direction="row" spacing={1.4} sx={{ mt: 0.4 }}>
                    <Stack direction="row" spacing={0.4} sx={{ alignItems: 'center' }}>
                      <StarRoundedIcon sx={{ fontSize: 16 }} />
                      <Typography variant="caption">{repo.stargazers_count}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.4} sx={{ alignItems: 'center' }}>
                      <ForkRightRoundedIcon sx={{ fontSize: 16 }} />
                      <Typography variant="caption">{repo.forks_count}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.4} sx={{ alignItems: 'center' }}>
                      <CodeRoundedIcon sx={{ fontSize: 16 }} />
                      <Typography variant="caption">{repo.language ?? 'N/A'}</Typography>
                    </Stack>
                  </Stack>
                </Paper>
              </Box>
            ))}
          </Stack>
        )}
      </Paper>
    </Stack>
  )
}
