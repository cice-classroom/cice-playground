import { Player } from './player'
import { range } from './range'

export class Game {
  static MAXIMUM_CELLS = 9

  private board: (Player | null)[] = range(Game.MAXIMUM_CELLS).map(() => null)

  setBoard(board: (Player | null)[]) {
    this.board = board
  }

  canPlay(index: number) {
    return this.board[index] === null
  }
}
