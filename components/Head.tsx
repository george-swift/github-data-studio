import NextHead from 'next/head'

type HeadProps = {
  title: string
  desc?: string
  url?: string
  image?: string
}

const defaultDescription = 'Look up account metrics on GitHub'
const defaultUrl = 'https://github-portfolio-nine.vercel.app/'
const defaultImage = '/gh.png'

const Head = ({ title, desc, url, image }: HeadProps) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#0374F9" />
    <meta name="description" content={desc || defaultDescription} />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff"></meta>
    <meta property="og:url" content={url || defaultUrl} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc || defaultDescription} />
    <meta property="og:image" content={image || defaultImage} />
    <title>{title}</title>
  </NextHead>
)

export default Head
