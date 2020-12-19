import { css, customElement, html, LitElement, property } from 'lit-element'
import type { Todo } from './todo'

@customElement('app-todo-list')
export class AppTodoList extends LitElement {
  @property({ type: Array })
  todos: Todo[] = []

  static get styles() {
    return [css``]
  }

  render() {
    return html`
      <ul>
        ${this.todos.map(todo => html`<app-todo>${todo.text}</app-todo>`)}
      </ul>
    `
  }
}
