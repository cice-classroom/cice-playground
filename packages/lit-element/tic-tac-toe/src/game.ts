import { range } from './range'
import { Board } from './board'
import { Player } from './player'

export class Game {
  static MAXIMUM_CELLS = 9
  static INITIAL_PLAYER: Player = 'X'

  private currentPlayer = Game.INITIAL_PLAYER
  private boardChange = (_board: Board) => {}
  private won = (_player: Player) => {}

  board: Board = range(Game.MAXIMUM_CELLS).map(() => null)

  setBoard(board: Board) {
    this.board = board
  }

  onBoardChange(callback: (board: Board) => void) {
    this.boardChange = callback
  }

  play(index: number) {
    if (this.canPlay(index)) {
      this.board[index] = this.currentPlayer
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
      this.boardChange(this.board)
      this.hasAnyPlayerWon()
    }
  }

  hasAnyPlayerWon() {
    const columnStarts = [0, 3, 6]
    columnStarts.forEach(columnStart => {
      if (
        this.board[columnStart] !== null &&
        this.board[columnStart] === this.board[columnStart + 1] &&
        this.board[columnStart + 1] === this.board[columnStart + 2]
      ) {
        this.won(this.board[columnStart]!)
      }
    })

    const rowOffset = 3
    const rowStarts = [0, 1, 2]
    rowStarts.forEach(rowStart => {
      if (
        this.board[rowStart] !== null &&
        this.board[rowStart] === this.board[rowStart + rowOffset] &&
        this.board[rowStart + rowOffset] === this.board[rowStart + rowOffset * 2]
      ) {
        this.won(this.board[rowStart]!)
      }
    })
  }

  onWon(callback: (player: Player) => void) {
    this.won = callback
  }

  private canPlay(index: number) {
    return this.board[index] === null
  }
}
