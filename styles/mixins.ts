import { css } from 'styled-components'
import theme from './theme'

const mixins = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
  `,

  customButton: css`
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
    padding: 1rem 2rem;
    box-shadow: 0px 10px 30px -8px rgba(39, 88, 184, 0.5);
    filter: contrast(1.25);
    transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
    border-radius: 0.25rem;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;

    &:hover,
    &:focus {
      background-color: rgba(0, 118, 255, 0.9),
      box-shadow: 0px 6px 20px rgba(0, 118, 255, 0.23);
    }
  `,

  ellipsis: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
}

export default mixins
