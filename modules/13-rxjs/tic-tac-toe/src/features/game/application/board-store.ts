import { Store } from '../../../core/store'
import { Board } from '../domain/board'

export class BoardStore extends Store<{ board: Board }> {
  constructor() {
    super({ board: [null, null, null, null, null, null, null, null, null] })
  }
}
