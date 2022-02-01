import { render, screen } from '@testing-library/react'
import NotFound from '../pages/404'

describe('404 page', () => {
  it('renders indicators that page is not found', () => {
    render(<NotFound />)

    const heading = screen.getByRole('heading', { name: /404/ })
    expect(heading).toBeInTheDocument()

    const message = screen.getByText('Oops! Page not found!')
    expect(message).toBeInTheDocument()

    const redirectLink = screen.getByRole('link')
    expect(redirectLink).toHaveTextContent('Homepage')
  })
})
