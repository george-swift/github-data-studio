import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, FormEvent, ChangeEventHandler } from 'react'
import { MarkGithubIcon } from '@primer/octicons-react'
import styled from 'styled-components'
import { theme, mixins } from '../styles'
import Head from '../components/Head'

const Container = styled.div`
  ${mixins.flexCenter};
  background-color: ${theme.colors.black};
  background-image: linear-gradient(
    ${theme.colors.black} 0%,
    ${theme.colors.darkGrey} 100%
  );
  color: ${theme.colors.offWhite};
  height: 100vh;

  form {
    background-color: transparent;
    border-radius: 5px;
    padding: 2rem;
    margin-bottom: 20vh;
    max-width: 600px;
    text-align: center;

    svg {
      color: ${theme.colors.blue};
    }

    label {
      display: block;
      font-size: 2.5rem;
      font-weight: 500;
      margin: 2rem;
      color: ${theme.colors.offWhite};
    }

    input {
      background-color: #26303c;
      outline: 0;
      border: 0;
      border-radius: 0.25rem;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding: 1rem;
      color: ${theme.colors.lightBlue};
      font-family: ${theme.fonts.mono};
      font-size: 2rem;
      font-weight: 400;
      text-align: center;
    }
  }
`

const Home: NextPage = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setUsername(e.currentTarget.value)

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!username) return
    router.push({
      pathname: '/user',
      query: {
        id: username,
      },
    })
  }

  return (
    <>
      <Head title="Github Data Studio" />
      <Container>
        <form onSubmit={submit}>
          <MarkGithubIcon size="large" />
          <label htmlFor="username">Search GitHub User</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
        </form>
      </Container>
    </>
  )
}

export default Home
