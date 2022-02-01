export type ErrorObject = {
  active: boolean
  type: number
}

export type DataObject = {
  [key: string]: string | boolean | number
}

export type UserDataType = {
  name: string | null
  avatar_url: string
  html_url: string
  login: string
  company: string | null
  location: string | null
  created_at: string
  public_repos: number
  followers: number
  following: number
  [otherKeys: string]: string | boolean | number | null
}

export type LanguageDataType = {
  label: string
  value: number
  color: string
}

export type RepoDataType = {
  id: number
  name: string
  description: string
  language: string
  html_url: string
  stargazers_count: number
  forks_count: number
  size: number
  [otherKeys: string]:
    | number
    | string
    | string[]
    | boolean
    | null
    | null[]
    | DataObject
}

export type RelevantMetrics = 'stargazers_count' | 'forks_count' | 'size'

export type SortingArguments = {
  repoData: RepoDataType[]
  sortProperty: RelevantMetrics
  limit: number
}

export const selectReposFrom = ({
  repoData,
  sortProperty,
  limit,
}: SortingArguments): RepoDataType[] =>
  repoData
    .filter((item) => !item.fork)
    .sort((a, b) => b[sortProperty] - a[sortProperty])
    .slice(0, limit)
