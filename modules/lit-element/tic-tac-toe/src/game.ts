import { range } from './range'
import { Board } from './board'

export class Game {
  static MAXIMUM_CELLS = 9

  private board: Board = range(Game.MAXIMUM_CELLS).map(() => null)

  setBoard(board: Board) {
    this.board = board
  }

  canPlay(index: number) {
    return this.board[index] === null
  }
}
