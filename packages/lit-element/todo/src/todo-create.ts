import { css, customElement, html, LitElement } from 'lit-element'
import { general } from './general'

@customElement('app-todo-create')
export class TodoCreate extends LitElement {
  static get styles() {
    return [general, css``]
  }

  render() {
    return html`<header>
      <app-input></app-input>
      <app-button></app-button>
    </header>`
  }
}
