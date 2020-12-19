import { css, customElement, html, LitElement, property } from 'lit-element'
import type { Todo } from './todo'

@customElement('app-root')
export class AppRoot extends LitElement {
  @property({ type: Array })
  todos: Todo[] = []

  static get styles() {
    return css``
  }

  private onTodoCreated(event: CustomEvent<Todo>) {
    this.todos = [...this.todos, event.detail]
  }

  private completeTodo(event: CustomEvent<Todo>) {
    this.todos = this.todos.map(todo => {
      if (todo.id === event.detail.id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }

      return todo
    })
  }

  render() {
    return html`<main>
      <app-todo-create @on-todo-created="${this.onTodoCreated}"></app-todo-create>
      <app-todo-list
        @on-completed-todo="${this.completeTodo}"
        .todos="${this.todos}"
      ></app-todo-list>
    </main>`
  }
}
