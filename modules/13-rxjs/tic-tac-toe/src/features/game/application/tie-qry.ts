import { Query } from '../../../core/query'
import { combineLatest, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../types'
import { GetBoardQry } from './get-board-qry'
import { WinnerQry } from './winner-qry'

@injectable()
export class TieQry implements Query<boolean> {
  constructor(
    @inject(TYPES.GET_BOARD_QRY) private readonly getBoardQry: GetBoardQry,
    @inject(TYPES.WINNER_QRY) private readonly winnerQry: WinnerQry
  ) {}

  execute(): Observable<boolean> {
    return combineLatest([this.getBoardQry.execute(), this.winnerQry.execute()]).pipe(
      map(([board, winner]) => {
        return board.every((cell) => cell !== null) && winner === null
      })
    )
  }
}
