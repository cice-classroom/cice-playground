import { css, customElement, LitElement } from 'lit-element'
import { html } from 'lit-html'
import { general } from './general'

@customElement('tic-tac-toe')
export class TicTacToe extends LitElement {
  static get styles() {
    return [
      general,
      css`
        .game {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .board {
          display: grid;
          max-width: 600px;
          grid-template-columns: repeat(3, 200px);
          grid-template-rows: repeat(3, 200px);
          grid-gap: 20px;
        }

        .cell {
          background-color: rebeccapurple;
        }
      `
    ]
  }

  private onCellClicked(_index: number) {}

  private range(number: number) {
    return Array.from({ length: number }, (_key, value) => value)
  }

  render() {
    return html`<main class="game">
      <section class="board">
        ${this.range(9).map(
          cell => html`<div @click="${() => this.onCellClicked(cell)}" class="cell"></div>`
        )}
      </section>
    </main>`
  }
}
