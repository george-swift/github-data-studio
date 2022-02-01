import styled from 'styled-components'
import { media, mixins, theme } from '../../styles'

const UserInfoStyles = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;

  ${media.tablet`
    padding-top: 4rem;
  `};

  .avatar {
    ${mixins.flexCenter};
    margin-bottom: 1.5rem;
    border: 0.5rem solid ${theme.colors.blue};
    border-radius: 100%;
    width: 150px;
    height: 150px;

    img {
      border-radius: 100%;
    }
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: ${theme.colors.offWhite};

    ${media.mobile`
      font-size: 2rem;
    `};
  }

  h2 {
    font-family: ${theme.fonts.mono};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;

    a {
      color: ${theme.colors.blue};
    }
  }

  a {
    color: ${theme.colors.blueSmoke};

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .info {
    ${mixins.flexCenter};

    ${media.tablet`
      display: block;
    `};

    &__item {
      ${mixins.flexCenter};
      margin: 0 1rem 0.5rem;
      white-space: nowrap;

      svg {
        margin-right: 10px;
      }
    }
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 150px));
    grid-gap: 0.5rem;
    justify-content: center;
    margin-top: 2rem;

    &__item {
      ${mixins.flexCenter};
      flex-direction: column;
      background-color: ${theme.colors.darkGrey};
      padding: 1rem;
      border-radius: 0.25rem;
      text-align: center;

      ${media.mobile`
        padding: 1rem 0.5rem;
      `};

      span {
        color: ${theme.colors.offWhite};
        font-size: 1.5rem;

        ${media.mobile`
          font-size: 1rem;
        `};
      }

      span + span {
        margin-top: 0.75rem;
        color: rgba(200, 225, 255, 0.7);
        font-size: 0.75rem;
        letter-spacing: 1px;
        text-transform: uppercase;

        ${media.mobile`
          font-size: 0.5rem;
        `};
      }
    }
  }
`

export default UserInfoStyles
