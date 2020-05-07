import { Command } from '../../../core/command'
import { NEVER, Observable } from 'rxjs'
import { BoardStore } from './board-store'
import { switchMapTo, take, tap } from 'rxjs/operators'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../types'

type IndexPosition = number

@injectable()
export class PlayCmd implements Command<IndexPosition> {
  constructor(@inject(TYPES.BOARD_STORE) private readonly boardStore: BoardStore) {}

  execute(indexPosition: IndexPosition): Observable<void> {
    return this.boardStore.get().pipe(
      take(1),
      tap((x) => {
        const copyBoard = x.board.slice()
        copyBoard[indexPosition] = 'X'
        this.boardStore.patch({ board: copyBoard })
      }),
      switchMapTo(NEVER)
    )
  }
}
