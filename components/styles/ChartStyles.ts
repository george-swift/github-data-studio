import styled from 'styled-components'
import { media, theme } from '../../styles'

const ChartStyles = styled.div`
  max-width: 1200px;
  margin: -8rem auto 0;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;

  ${media.desktop`
    justify-items: center;
  `};

  .chart {
    max-width: 500px;
    padding: 2rem;
    background-color: ${theme.colors.white};
    border-radius: 0.25rem;
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);

    ${media.mobile`
      padding: 2rem 1rem;
    `};

    h2 {
      background-image: linear-gradient(
        90deg,
        #d1d5da 50%,
        hsla(0, 0%, 100%, 0) 0
      );
      background-position: bottom;
      background-repeat: repeat-x;
      background-size: 10px 2px;
      font-size: 1.5rem;
      padding-bottom: 6px;
    }

    p {
      color: ${theme.colors.grey};
    }
  }
`

export default ChartStyles
