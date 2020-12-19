import { css, customElement, html, LitElement } from 'lit-element'
import { general } from './general'

@customElement('app-todo')
export class AppTodo extends LitElement {
  static get styles() {
    return [general, css``]
  }

  render() {
    return html`<li><slot></slot></li>`
  }
}
