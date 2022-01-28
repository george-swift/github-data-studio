import Link from 'next/link'
import { Container } from '../styles'

const NotFound = () => (
  <Container>
    <header>
      <h2>404</h2>
    </header>
    <p>Oops! Page not found!</p>
    <p>
      <Link href={'/'}>Homepage</Link>
    </p>
  </Container>
)

export default NotFound
