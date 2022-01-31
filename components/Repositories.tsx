import { useState, useEffect } from 'react'
import {
  RepoIcon,
  RepoForkedIcon,
  StarIcon,
  TriangleDownIcon,
} from '@primer/octicons-react'
import FlipMove from 'react-flip-move'
import { languageColors } from '../utils'
import { RepoDataType, selectReposFrom, RelevantMetrics } from '../utils/shared'
import { Container } from '../styles'
import RepoStyles from './styles/RepoStyles'
import DropdownStyles from './styles/DropdownStyles'
import { useCallback } from 'react'
import { useMemo } from 'react'

type RepoProps = { repoData: RepoDataType[] }
type SortProperty = 'stars' | 'forks' | 'size'

const Repositories = ({ repoData }: RepoProps) => {
  const [topRepos, setTopRepos] = useState<RepoDataType[]>([])
  const [sortType, setSortType] = useState<SortProperty>('stars')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const map = useMemo<Record<SortProperty, RelevantMetrics>>(
    () => ({
      stars: 'stargazers_count',
      forks: 'forks_count',
      size: 'size',
    }),
    []
  )

  const metrics = Object.keys(map) as Array<keyof typeof map>

  const getTopRepos = useCallback(
    (type: SortProperty) => {
      const limit = 8
      const sortProperty = map[type]
      const sorted = selectReposFrom({ repoData, sortProperty, limit })
      setTopRepos(sorted)
    },
    [map, repoData]
  )

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const changeRepoSort = (type: SortProperty) => {
    setSortType(type)
    toggleDropdown()
  }

  useEffect(() => getTopRepos(sortType), [getTopRepos, sortType])

  return (
    <Container>
      <RepoStyles>
        <header>
          <h2>Top Repositories</h2>
          <div>
            <span className="label">by</span>
            <DropdownStyles className="dropdown" active={dropdownOpen}>
              <button
                className="dropdown__button"
                onClick={() => toggleDropdown()}
              >
                <span>{sortType}</span>
                <TriangleDownIcon />
              </button>
              <ul className="dropdown__list">
                {metrics.map((metric) => (
                  <li key={metric} className="dropdown__item">
                    <button onClick={() => changeRepoSort(metric)}>
                      {metric}
                    </button>
                  </li>
                ))}
              </ul>
            </DropdownStyles>
          </div>
        </header>
        <div>
          {topRepos.length ? (
            <FlipMove typeName="ul" className="repositories">
              {topRepos.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    className="repo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="repo__name">
                      <div>
                        <RepoIcon />
                        <h3>{repo.name}</h3>
                      </div>
                      <p>{repo.description}</p>
                    </div>
                    <div className="repo__stats">
                      <div>
                        <span>
                          <span
                            style={{
                              backgroundColor: languageColors[repo.language],
                            }}
                          />
                          {repo.language}
                        </span>
                        <span>
                          <StarIcon />
                          {repo.stargazers_count.toLocaleString()}
                        </span>
                        <span>
                          <RepoForkedIcon />
                          {repo.forks_count.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span>{repo.size.toLocaleString()} KB</span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </FlipMove>
          ) : (
            <p>No available repositories!</p>
          )}
        </div>
      </RepoStyles>
    </Container>
  )
}

export default Repositories
