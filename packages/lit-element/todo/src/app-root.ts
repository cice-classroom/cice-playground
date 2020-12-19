import { css, customElement, html, LitElement, property } from 'lit-element'
import type { Todo } from './todo'

@customElement('app-root')
export class AppRoot extends LitElement {
  @property({ type: Array })
  todos: Todo[] = [
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

  private onTodoCreated(event: CustomEvent<Todo>) {
    this.todos = [...this.todos, event.detail]
  }

  render() {
    return html`<main>
      <app-todo-create @on-todo-created="${this.onTodoCreated}"></app-todo-create>
      <app-todo-list .todos="${this.todos}"></app-todo-list>
    </main>`
  }
}
