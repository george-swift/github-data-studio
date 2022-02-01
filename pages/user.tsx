import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import {
  Head,
  RateLimit,
  UserInfo,
  Charts,
  Repositories,
  Footer,
  Alert,
  Corner,
} from '../components'
import GhPolyglot from 'gh-polyglot'
import { ErrorObject } from '../utils/shared'
import axios from 'axios'
import { useCallback } from 'react'

const User = () => {
  const router = useRouter()
  const { id } = router.query
  const username = Array.isArray(id) ? id[0] : id
  const [userData, setUserData] = useState(null)
  const [langData, setLangData] = useState(null)
  const [repoData, setRepoData] = useState(null)
  const [rateLimit, setRateLimit] = useState(null)
  const [error, setError] = useState<ErrorObject>({ active: false, type: 200 })

  const baseURL = 'https://api.github.com'

  const getUserData = useCallback(async () => {
    const { data, status } = await axios.get(`${baseURL}/users/${username}`)
    if (status === 404 || status === 403)
      return setError({ active: true, type: status })
    setUserData(data)
  }, [username])

  const getLangData = useCallback(() => {
    const user = new GhPolyglot(username)
    user.userStats((error: any, stats: any) => {
      if (error) {
        setError({ active: true, type: 400 })
        console.error('Error:', error)
      }
      setLangData(stats)
    })
  }, [username])

  const getRepoData = useCallback(async () => {
    const { data, status } = await axios.get(
      `${baseURL}/users/${username}/repos?per_page=100`
    )
    if (status === 404 || status === 403)
      return setError({ active: true, type: status })
    setRepoData(data)
  }, [username])

  const watchRateLimit = async () => {
    const {
      data: {
        resources: { core },
      },
    } = await axios.get(`${baseURL}/rate_limit`)
    setRateLimit(core)
    if (core.remaining < 1) setError({ active: true, type: 403 })
  }

  const catchErrors = (fn: () => Promise<void>) =>
    fn().catch((err) => {
      setError({ active: true, type: 400 })
      console.error('Error:', err)
    })

  useEffect(() => {
    watchRateLimit()
    getUserData()
    getLangData()
    getRepoData()

    catchErrors(getUserData)
    catchErrors(getRepoData)
  }, [getLangData, getRepoData, getUserData])

  return (
    <div>
      {rateLimit && <RateLimit rateLimit={rateLimit} />}
      {error && error.active ? (
        <Alert error={error} />
      ) : (
        <>
          <Head
            title={`${
              username ? `GitHub Portfolio | ${username}` : 'GitHub Portfolio'
            }`}
          />
          <Corner />
          {userData && <UserInfo userData={userData} />}
          {langData && repoData && (
            <Charts langData={langData} repoData={repoData} />
          )}
          {repoData && <Repositories repoData={repoData} />}
          <Footer />
        </>
      )}
    </div>
  )
}

export default User
