import styled from 'styled-components'
import { media, mixins, theme } from '../../styles'

const FooterStyles = styled.footer`
  ${mixins.flexCenter};
  padding: 2rem 5rem;
  color: ${theme.colors.grey};
  text-align: center;
  font-weight: 500;
  font-size: 14px;

  ${media.desktop`
    padding: 2rem;
  `};

  ${media.mobile`
    padding: 1rem;
  `};

  a {
    padding: 5px;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

export default FooterStyles
