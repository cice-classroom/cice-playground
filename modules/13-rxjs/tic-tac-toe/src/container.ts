import 'reflect-metadata'
import { Container } from 'inversify'
import { TYPES } from './types'
import { BoardStore } from './features/game/application/board-store'
import { GetBoardQry } from './features/game/application/get-board-qry'
import { PlayCmd } from './features/game/application/play-cmd'
import { WinnerQry } from './features/game/application/winner-qry'
import { TieQry } from './features/game/application/tie-qry'

const container = new Container({ skipBaseClassChecks: true })

container.bind(TYPES.BOARD_STORE).to(BoardStore).inSingletonScope()
container.bind(TYPES.GET_BOARD_QRY).to(GetBoardQry).inSingletonScope()
container.bind(TYPES.PLAY_CMD).to(PlayCmd).inSingletonScope()
container.bind(TYPES.WINNER_QRY).to(WinnerQry).inSingletonScope()
container.bind(TYPES.TIE_QRY).to(TieQry).inSingletonScope()

export { container }
