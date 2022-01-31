import styled from 'styled-components'
import { theme } from '../../styles'

const LimitStyles = styled.aside`
  .rate {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;

    &__limit {
      color: ${theme.colors.lightGrey};
      font-size: 20px;
      margin-bottom: 0.5rem;
    }

    &__info {
      margin: 0;
      font-size: 10px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: ${theme.colors.lightGrey};
    }
  }
`

export default LimitStyles
