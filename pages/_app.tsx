import type { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => ({
  pageProps: {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  },
})

export default MyApp
