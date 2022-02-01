import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../pages'

describe('Home', () => {
  beforeEach(() => render(<Home />))

  it('renders a form', () => {
    const formLabel = screen.getByLabelText('Search GitHub User')
    const formInput = screen.getByPlaceholderText('Enter username')

    expect(formLabel).toBeInTheDocument()
    expect(formInput).toBeInTheDocument()
  })

  it('allows users to enter their github login', () => {
    const input = screen.getByPlaceholderText('Enter username')
    userEvent.type(input, 'Test user')
    expect(input).toHaveValue('Test user')
  })
})
