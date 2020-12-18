import { css, customElement, html, LitElement } from 'lit-element'
import { general } from './general'

@customElement('app-root')
export class AppRoot extends LitElement {
  static get styles() {
    return [
      general,
      css`
        h1 {
          color: darkblue;
        }
      `,
    ]
  }
  render() {
    return html`<h1>Hello world</h1>`
  }
}
