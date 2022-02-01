import styled from 'styled-components'
import { mixins, theme } from '../../styles'

const AlertStyles = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${theme.colors.black};
  background-image: linear-gradient(
    ${theme.colors.black} 0%,
    ${theme.colors.darkGrey} 100%
  );
  color: ${theme.colors.offWhite};
  height: 100vh;
  padding-bottom: 20vh;
  font-size: 1.5rem;

  svg {
    colors: ${theme.colors.blue};
    margin-bottom: 3rem;
  }

  p {
    font-size: 1rem;
  }

  a {
    color: ${theme.colors.lightBlue};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

export default AlertStyles
