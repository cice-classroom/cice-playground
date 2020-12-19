import { css, customElement, html, LitElement, property } from 'lit-element'

@customElement('app-root')
export class AppRoot extends LitElement {
  @property({ type: Array })
  todos: { text: string }[] = [
    {
      text: 'foo',
    },
    {
      text: 'bar',
    },
  ]

  static get styles() {
    return css``
  }

  render() {
    return html`<main>
      <app-todo-create></app-todo-create>
      <app-todo-list .todos="${this.todos}"></app-todo-list>
    </main>`
  }
}
