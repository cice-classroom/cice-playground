import { css, customElement, html, LitElement, property } from 'lit-element'

@customElement('app-todo-list')
export class TodoList extends LitElement {
  @property({ type: Array })
  todos: { text: string }[] = [
    {
      text: 'foo',
    },
    {
      text: 'bar',
    },
  ]

  connectedCallback() {
    super.connectedCallback()

    setTimeout(() => {
      this.todos = [...this.todos, { text: 'qux' }]
    }, 1000)
  }

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
