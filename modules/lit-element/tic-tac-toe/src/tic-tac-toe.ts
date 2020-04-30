import { customElement, LitElement } from 'lit-element'
import { html } from 'lit-html'

@customElement('tic-tac-toe')
export class TicTacToe extends LitElement {
  render() {
    return html`<h1><app-button @click="${() => alert('hi')}">Start game</app-button></h1>`
  }
}
