import { Store } from '../../../core/store'
import { Board } from '../domain/board'
import { injectable } from 'inversify'

@injectable()
export class BoardStore extends Store<{ board: Board }> {
  constructor() {
    super({ board: [null, null, null, null, null, null, null, null, null] })
  }
}
