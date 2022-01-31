import styled from 'styled-components'
import { mixins, media, theme } from '../../styles'

const RepoStyles = styled.div`
  header > div {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: ${theme.colors.grey};

    .label {
      margin: 0 1rem;
    }
  }

  .repositories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }

  .repo {
    ${mixins.flexBetween};
    flex-direction: column;
    padding: 2rem;
    height: 100%;
    color: ${theme.colors.grey};
    background-color: ${theme.colors.white};
    border-radius: 0.25rem;
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.2);
    transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0s;

    ${media.tablet`
      padding: 1.5rem;
    `};

    &:hover,
    &:focus {
      box-shadow: 0 8px 20px -15px rgba(0, 0, 0, 0.2);
    }

    h3 {
      ${mixins.ellipsis};
      color: ${theme.colors.darkGrey};
      margin-bottom: 0;
      font-size: 20px;
      font-family: ${theme.fonts.mono};
      font-weight: 700;
      letter-spacing: -0.5px;
    }

    p {
      font-size: 14px;
      margin-bottom: 2rem;
    }

    &__name div {
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.5rem;
        min-width: 16px;
      }
    }

    &__stats {
      ${mixins.flexBetween};
      font-size: 13px;
      color: ${theme.colors.grey};

      div:first-child {
        flex-grow: 1;
        display: flex;

        & > span {
          display: flex;
          align-items: center;
          margin-right: 0.75rem;

          svg {
            margin-right: 0.25rem;
          }

          span {
            border-radius: 100%;
            width: 10px;
            height: 10px;
            background-color: blue;
            margin-right: 0.25rem;
          }
        }
      }
    }
  }
`

export default RepoStyles
