import { Query } from '../../../core/query'
import { Board } from '../domain/board'
import { Observable } from 'rxjs'
import { BoardStore } from './board-store'
import { map } from 'rxjs/operators'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../types'

@injectable()
export class GetBoardQry implements Query<Board> {
  constructor(@inject(TYPES.BOARD_STORE) private readonly boardStore: BoardStore) {}

  execute(): Observable<Board> {
    return this.boardStore.get().pipe(map((x) => x.board))
  }
}
