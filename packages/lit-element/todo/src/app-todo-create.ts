import { css, customElement, html, LitElement, property } from 'lit-element'
import { general } from './general'
import type { Todo } from './todo'

@customElement('app-todo-create')
export class AppTodoCreate extends LitElement {
  static get styles() {
    return [general, css``]
  }

  @property()
  private todoText = ''

  private onChange(event: KeyboardEvent) {
    this.todoText = (event.target as HTMLInputElement).value
  }

  private dispatchCreateTodo(event: Event) {
    event.preventDefault()
    const customEvent = new CustomEvent<Todo>('on-todo-created', {
      bubbles: true,
      composed: true,
      detail: {
        id: Math.floor(Math.random() * 10_000),
        text: this.todoText,
        completed: false,
      },
    })
    this.dispatchEvent(customEvent)
    this.todoText = ''
  }

  render() {
    return html`<header>
      <form name="Create todo" @submit="${this.dispatchCreateTodo}">
        <label
          >Todo text<input .value="${this.todoText}" @keyup="${this.onChange}" autofocus
        /></label>
        <app-button submit="${true}">Create todo</app-button>
      </form>
    </header>`
  }
}
