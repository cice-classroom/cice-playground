import { Command } from '../../../core/command'
import { defer, Observable, of } from 'rxjs'
import { BoardStore } from './board-store'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../types'

@injectable()
export class ReplayCmd implements Command {
  constructor(@inject(TYPES.BOARD_STORE) private readonly boardStore: BoardStore) {}

  execute(): Observable<void> {
    return defer(() => {
      this.boardStore.patch({ board: BoardStore.INITIAL_BOARD })
    })
  }
}
