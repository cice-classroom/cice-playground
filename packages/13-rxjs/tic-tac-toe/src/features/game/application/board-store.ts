import { Store } from '../../../core/store'
import { Board } from '../domain/board'
import { injectable } from 'inversify'
import { Player } from '../domain/player'

@injectable()
export class BoardStore extends Store<{ board: Board; currentPlayer: Player }> {
  static INITIAL_BOARD = [null, null, null, null, null, null, null, null, null]

  constructor() {
    super({ board: BoardStore.INITIAL_BOARD, currentPlayer: 'X' })
  }
}
