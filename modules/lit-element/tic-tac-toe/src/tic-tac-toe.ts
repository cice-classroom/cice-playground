import { css, customElement, LitElement, property } from 'lit-element'
import { html } from 'lit-html'
import { general } from './general'
import { Player } from './player'
import { range } from './range'
import { Game } from './game'

@customElement('tic-tac-toe')
export class TicTacToe extends LitElement {
  @property({ type: Array })
  cells: Player[] = []

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

  render() {
    return html`<main class="game">
      <section class="board">
        ${range(Game.MAXIMUM_CELLS).map(
          cell => html`<div @click="${() => this.onCellClicked(cell)}" class="cell"></div>`
        )}
      </section>
    </main>`
  }
}
