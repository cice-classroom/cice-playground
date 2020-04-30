import { range } from './range'
import { Board } from './board'
import { Player } from './player'

export class Game {
  static MAXIMUM_CELLS = 9
  static INITIAL_PLAYER: Player = 'X'

  private currentPlayer = Game.INITIAL_PLAYER

  board: Board = range(Game.MAXIMUM_CELLS).map(() => null)

  setBoard(board: Board) {
    this.board = board
  }

  play(index: number) {
    if (this.canPlay(index)) {
      this.board[index] = this.currentPlayer
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
    }
  }

  onWinning(callback: (player: Player) => void) {
    callback('X')
  }

  private canPlay(index: number) {
    return this.board[index] === null
  }
}
