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
    if (
      this.board[0] !== null &&
      this.board[0] === this.board[1] &&
      this.board[1] === this.board[2]
    ) {
      this.won(this.board[0])
    }

    if (
      this.board[3] !== null &&
      this.board[3] === this.board[4] &&
      this.board[4] === this.board[5]
    ) {
      this.won(this.board[3])
    }

    if (
      this.board[6] !== null &&
      this.board[6] === this.board[7] &&
      this.board[7] === this.board[8]
    ) {
      this.won(this.board[6])
    }
  }

  onWon(callback: (player: Player) => void) {
    this.won = callback
  }

  private canPlay(index: number) {
    return this.board[index] === null
  }
}
