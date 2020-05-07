import { Store } from '../../../core/store'
import { Board } from '../domain/board'
import { injectable } from 'inversify'
import { Player } from '../domain/player'

@injectable()
export class BoardStore extends Store<{ board: Board; currentPlayer: Player }> {
  constructor() {
    super({ board: [null, null, null, null, null, null, null, null, null], currentPlayer: 'X' })
  }
}
