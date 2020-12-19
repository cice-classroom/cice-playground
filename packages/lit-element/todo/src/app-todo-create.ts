import { css, customElement, html, LitElement } from 'lit-element'
import { general } from './general'
import type { Todo } from './todo'

@customElement('app-todo-create')
export class AppTodoCreate extends LitElement {
  static get styles() {
    return [general, css``]
  }

  private onClick() {
    const customEvent = new CustomEvent<Todo>('on-todo-created', {
      bubbles: true,
      composed: true,
      detail: {
        text: 'qux',
      },
    })
    this.dispatchEvent(customEvent)
  }

  render() {
    return html`<header>
      <app-input></app-input>
      <app-button @click="${this.onClick}"></app-button>
    </header>`
  }
}
