import Image from 'next/image'
import {
  BriefcaseIcon,
  CalendarIcon,
  LocationIcon,
} from '@primer/octicons-react'
import { UserDataType } from '../utils/shared'
import { Container } from '../styles'
import UserInfoStyles from './styles/UserInfoStyles'

type UserInfoProps = {
  userData: UserDataType
}

const UserInfo = ({ userData }: UserInfoProps) => (
  <Container dark>
    {userData && (
      <UserInfoStyles>
        {userData.avatar_url && (
          <div className="avatar">
            <Image
              src={userData.avatar_url}
              alt="avatar"
              width={150}
              height={150}
            />
          </div>
        )}

        {userData.name && <h1>{userData.name}</h1>}

        {userData.login && (
          <h2>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{userData.login}
            </a>
          </h2>
        )}

        <div className="info">
          {userData.company && (
            <span className="info__item">
              <BriefcaseIcon size="small" />
              {userData.company}
            </span>
          )}

          {userData.location && (
            <span className="info__item">
              <LocationIcon size="small" />
              {userData.location}
            </span>
          )}

          {userData.created_at && (
            <span className="info__item">
              <CalendarIcon size="small" />
              Joined{' '}
              {new Date(userData.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          )}
        </div>

        <div className="stats">
          <div className="stats__item">
            <span>{userData.public_repos.toLocaleString()}</span>
            <span>Repositories</span>
          </div>
          <div className="stats__item">
            <span>{userData.followers.toLocaleString()}</span>
            <span>Followers</span>
          </div>
          <div className="stats__item">
            <span>{userData.following.toLocaleString()}</span>
            <span>Following</span>
          </div>
        </div>
      </UserInfoStyles>
    )}
  </Container>
)

export default UserInfo
