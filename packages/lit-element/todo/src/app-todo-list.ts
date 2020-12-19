import { css, customElement, html, LitElement, property } from 'lit-element'
import type { Todo } from './todo'

@customElement('app-todo-list')
export class AppTodoList extends LitElement {
  @property({ type: Array })
  todos: Todo[] = []

  static get styles() {
    return [css``]
  }

  completeTodo(todo: Todo) {
    const customEvent = new CustomEvent<Todo>('on-completed-todo', {
      bubbles: true,
      composed: true,
      detail: todo,
    })

    this.dispatchEvent(customEvent)
  }

  private get filteredTodos() {
    return this.todos.filter(todo => !todo.completed)
  }

  render() {
    return html`
      <ul>
        ${this.filteredTodos.map(
          todo =>
            html`<app-todo
                @click="${() => {
                  this.completeTodo(todo)
                }}"
                >${todo.text}</app-todo
              >
              <span>${todo.completed}</span>`,
        )}
      </ul>
    `
  }
}
