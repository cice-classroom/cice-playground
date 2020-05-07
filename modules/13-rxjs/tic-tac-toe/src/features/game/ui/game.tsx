import React from 'react'
import { GetBoardQry } from '../application/get-board-qry'
import styles from './game.module.css'
import { useInject } from '../../../core/use-inject'
import { TYPES } from '../../../types'
import { PlayCmd } from '../application/play-cmd'
import { WinnerQry } from '../application/winner-qry'
import { TieQry } from '../application/tie-qry'
import { ReplayCmd } from '../application/replay-cmd'
import { useSubscribe } from '../../../core/use-subscribe'

export const Game: React.FC = () => {
  const getBoardQry = useInject<GetBoardQry>(TYPES.GET_BOARD_QRY)
  const playCmd = useInject<PlayCmd>(TYPES.PLAY_CMD)
  const replayCmd = useInject<ReplayCmd>(TYPES.REPLAY_CMD)
  const winnerQry = useInject<WinnerQry>(TYPES.WINNER_QRY)
  const tieQry = useInject<TieQry>(TYPES.TIE_QRY)

  const board = useSubscribe(getBoardQry, [])
  const tie = useSubscribe(tieQry, false)
  const winner = useSubscribe(winnerQry, null)

  const isThereAWinner = winner !== null

  return (
    <main className={styles.wrapper}>
      {(isThereAWinner || tie) && (
        <button onClick={() => replayCmd.execute().toPromise()}>Replay</button>
      )}
      {isThereAWinner && <h1>Player {winner} won!</h1>}
      {tie && <h1>There has been a tie!</h1>}
      <section className={styles.game}>
        {board.map((cell, index) => (
          <div
            className={styles.cell}
            key={index}
            onClick={() => playCmd.execute(index).toPromise()}
          >
            {cell}
          </div>
        ))}
      </section>
    </main>
  )
}
