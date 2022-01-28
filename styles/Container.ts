import styled, { css } from 'styled-components'
import { theme, media } from '../styles'

type CustomProps = { dark?: boolean }

const Container = styled.section<CustomProps>`
  padding: 3rem 5rem;

  ${media.desktop`
    padding: 2rem;
  `};

  ${media.mobile`
    padding: 1rem;
  `};

  ${(props) =>
    props.dark &&
    css`
      background-color: ${theme.colors.black};
      color: ${theme.colors.lightBlue};
      padding-bottom: 10rem;

      ${media.desktop`
      padding-top: 2rem;
      padding-bottom: 10rem;
    `};
    `};

  header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    h2 {
      display: inline-block;
      margin: 0;
      font-size: 1.75rem;
      background-image: linear-gradient(
        90deg,
        #d1d5da 50%,
        hsla(0, 0%, 100%, 0) 0
      );
      background-position: bottom;
      background-repeat: repeat-x;
      background-size: 10px 2px;
      padding-bottom: 6px;

      ${media.tablet`
        font-size: 1.5rem;
      `};
    }
  }

  & > div :not(.container) {
    max-width: 1350px;
    margin: 0 auto;
  }
`

export default Container
