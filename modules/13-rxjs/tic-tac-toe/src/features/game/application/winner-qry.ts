import { Query } from '../../../core/query'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../types'
import { Player } from '../domain/player'
import { GetBoardQry } from './get-board-qry'

@injectable()
export class WinnerQry implements Query<Player | null> {
  constructor(@inject(TYPES.GET_BOARD_QRY) private readonly getBoardQry: GetBoardQry) {}

  execute(): Observable<Player | null> {
    return this.getBoardQry.execute().pipe(
      map((board) => {
        if (board[0] !== null && board[0] === board[1] && board[1] === board[2]) {
          return board[0]
        }

        return null
      })
    )
  }
}
