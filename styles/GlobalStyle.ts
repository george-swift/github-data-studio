import { createGlobalStyle, ThemeProps } from 'styled-components'
import theme from './theme'

type MainThemeProps = ThemeProps<typeof theme>

export const GlobalStyle = createGlobalStyle<MainThemeProps>`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    src: url('/fonts/inter/Inter-Thin-BETA.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: 200;
    font-weight: normal;
    src: url('/fonts/inter/Inter-ExtraLight-BETA.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/inter/Inter-Light-BETA.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/inter/Inter-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/inter/Inter-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/inter/Inter-SemiBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: bold;
    src: url('/fonts/inter/Inter-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/inter/Inter-ExtraBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter Black';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/inter/Inter-Black.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 100;
    src: url('/fonts/inter/Inter-ThinItalic-BETA.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 200;
    src: url('/fonts/inter/Inter-ExtraLightItalic-BETA.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 300;
    src: url('/fonts/inter/Inter-LightItalic-BETA.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: normal;
    src: url('/fonts/inter/Inter-Italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 500;
    src: url('/fonts/inter/Inter-MediumItalic.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 600;
    src: url('/fonts/inter/Inter-SemiBoldItalic.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: bold;
    src: url('/fonts/inter/Inter-BoldItalic.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 800;
    src: url('/fonts/inter/Inter-ExtraBoldItalic.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 900;
    src: url('/fonts/inter/Inter-BlackItalic.woff') format('woff');
  }

  @font-face {
    font-family: 'SF Mono';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/mono/SFMonoRegular.woff') format('woff');
  }
    
  @font-face {
    font-family: 'SF Mono';
    font-style: italic;
    font-weight: normal;
    src: url('/fonts/mono/SFMonoRegularItalic.woff') format('woff');
  }

  @font-face {
    font-family: 'SF Mono';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/mono/SFMonoMedium.woff') format('woff');
  }

  @font-face {
    font-family: 'SF Mono';
    font-style: italic;
    font-weight: 500;
    src: url('/fonts/mono/SFMonoMediumItalic.woff') format('woff');
  }

  @font-face {
    font-family: 'SF Mono';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/mono/SFMonoSemibold.woff') format('woff');
  }

  @font-face {
    font-family: 'SF Mono';
    font-style: italic;
    font-weight: 600;
    src: url('/fonts/mono/SFMonoSemiboldItalic.woff') format('woff');
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${theme.fonts.inter};
    color: ${theme.colors.darkGrey};
    background-color: ${theme.colors.offWhite};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    line-height: 1.5;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    transition: ${theme.transition};
    color: ${theme.colors.blue};
    display: inline-block;
  }

  button {
    border: 0;
    border-radius: 0;
    cursor: pointer;
    transition: ${theme.transition};
    

    &:focus,
    &:active {
      outline: 0;
    }
  }

  input {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }

    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.65;
      }
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    fill: currentColor;
  }
`

export default GlobalStyle
