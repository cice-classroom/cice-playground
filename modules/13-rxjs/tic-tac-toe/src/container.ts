import 'reflect-metadata'
import { Container } from 'inversify'
import { TYPES } from './types'
import { BoardStore } from './features/game/application/board-store'
import { GetBoardQry } from './features/game/application/get-board-qry'
import { PlayCmd } from './features/game/application/play-cmd'

const container = new Container({ skipBaseClassChecks: true })

container.bind(TYPES.BOARD_STORE).to(BoardStore)
container.bind(TYPES.GET_BOARD_QRY).to(GetBoardQry)
container.bind(TYPES.PLAY_CMD).to(PlayCmd)

export { container }
