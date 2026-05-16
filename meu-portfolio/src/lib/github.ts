export type GitHubUser = {
  login: string
  public_repos: number
  followers: number
  following: number
  public_gists: number
  created_at: string
}

export type GitHubRepo = {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
  archived: boolean
  fork: boolean
}

export type GitHubEvent = {
  type: string
  created_at: string
  repo: {
    name: string
  }
}

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const response = await fetch(`https://api.github.com/users/${username}`)
  if (!response.ok) {
    throw new Error('Falha ao carregar usuário do GitHub')
  }
  return response.json() as Promise<GitHubUser>
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=owner`,
  )
  if (!response.ok) {
    throw new Error('Falha ao carregar repositórios do GitHub')
  }
  return response.json() as Promise<GitHubRepo[]>
}

export async function fetchGitHubEvents(username: string): Promise<GitHubEvent[]> {
  const response = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`)
  if (!response.ok) {
    throw new Error('Falha ao carregar eventos do GitHub')
  }
  return response.json() as Promise<GitHubEvent[]>
}
