import { css, customElement, html, LitElement } from 'lit-element'

@customElement('app-root')
export class AppRoot extends LitElement {
  static get styles() {
    return css``
  }
  render() {
    return html`<main><app-todo-list></app-todo-list></main>`
  }
}
