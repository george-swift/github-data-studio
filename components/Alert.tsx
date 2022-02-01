import { MarkGithubIcon } from '@primer/octicons-react'
import { Head } from '../components'
import { ErrorObject } from '../utils/shared'
import AlertStyles from './styles/AlertStyles'

interface AlertProps {
  error: ErrorObject
}

const Alert = ({ error }: AlertProps) => (
  <AlertStyles>
    <Head title="Github Portfolio" />
    <MarkGithubIcon size="large" />
    <h1>Github Porfolio</h1>
    {error && (
      <div>
        {error.type === 403 ? (
          <p>
            Oops! You have exceeded the{' '}
            <a
              href="https://developer.github.com/v3/rate_limit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              rate limit
            </a>
            ! Try again later
          </p>
        ) : error.type === 404 ? (
          <p>User not found!</p>
        ) : (
          <p>Something went wrong. Try again later!</p>
        )}
      </div>
    )}
  </AlertStyles>
)

export default Alert
