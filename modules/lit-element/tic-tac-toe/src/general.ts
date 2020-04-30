import { css } from 'lit-element'

export const general = css`
  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  :host {
    display: block;
  }
`
