import Link from 'next/link'
import { SearchIcon } from '@primer/octicons-react'
import styled from 'styled-components'
import { mixins, theme } from '../styles'

const CornerStyles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2.25rem 2rem;
  color: ${theme.colors.offWhite};

  .search {
    ${mixins.flexCenter};
    flex-direction: column;
    color: inherit;

    svg {
      margin-bottom: 0.5rem;
      fill: ${theme.colors.lightGrey};
    }

    span {
      margin: 0;
      font-size: 10px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: ${theme.colors.lightGrey};
    }

    &:hover * {
      color: ${theme.colors.offWhite};
      fill: ${theme.colors.offWhite};
    }
  }
`

const Corner = () => (
  <CornerStyles>
    <Link href="/" passHref>
      <a className="search">
        <SearchIcon size={30} />
        <span>Search</span>
      </a>
    </Link>
  </CornerStyles>
)

export default Corner
