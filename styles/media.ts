import {
  css,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components'

type Template<T> = Record<
  keyof T,
  (
    literals: TemplateStringsArray,
    ...args: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation
>

type Breakpoints = { [breakpoint: string]: number }

const breakpoints: Breakpoints = {
  desktop: 900,
  tablet: 600,
  mobile: 400,
}

const media = Object.keys(breakpoints).reduce((accumulator, width) => {
  const emSize = breakpoints[width] / 16

  accumulator[width] = (literals, ...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(literals, ...args)};
    }
  `

  return accumulator
}, {} as Template<Breakpoints>)

export default media
