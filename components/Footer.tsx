import FooterStyles from './styles/FooterStyles'

const Footer = () => (
  <FooterStyles>
    <div>
      <span>Built with</span>
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        TypeScript
      </a>
      &middot;
      <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
        Next.js
      </a>
      &middot;
      <a
        href="https://www.chartjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chart.js
      </a>
      &middot;
      <a
        href="https://github.com/IonicaBizau/node-gh-polyglot"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Polyglot
      </a>
      &middot;
      <a
        href="https://github.com/joshwcomeau/react-flip-move"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Flip Move
      </a>
      &middot;
      <a
        href="https://www.styled-components.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Styled Components
      </a>
    </div>
  </FooterStyles>
)

export default Footer
