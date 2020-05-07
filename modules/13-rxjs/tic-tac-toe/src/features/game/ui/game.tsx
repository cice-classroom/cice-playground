import React, { useEffect, useState } from 'react'
import { Board } from '../domain/board'
import { GetBoardQry } from '../application/get-board-qry'
import { tap } from 'rxjs/operators'
import styles from './game.module.css'
import { useInject } from '../../../core/use-inject'
import { TYPES } from '../../../types'
import { PlayCmd } from '../application/play-cmd'
import { WinnerQry } from '../application/winner-qry'
import { Player } from '../domain/player'
import { TieQry } from '../application/tie-qry'
import { ReplayCmd } from '../application/replay-cmd'

export const Game: React.FC = () => {
  const [board, setBoard] = useState<Board>([])
  const [winner, setWinner] = useState<Player | null>()
  const [tie, setTie] = useState<boolean>()

  const getBoardQry = useInject<GetBoardQry>(TYPES.GET_BOARD_QRY)
  const playCmd = useInject<PlayCmd>(TYPES.PLAY_CMD)
  const replayCmd = useInject<ReplayCmd>(TYPES.REPLAY_CMD)
  const winnerQry = useInject<WinnerQry>(TYPES.WINNER_QRY)
  const tieQry = useInject<TieQry>(TYPES.TIE_QRY)

  useEffect(() => {
    const subscription = getBoardQry.execute().pipe(tap(setBoard)).subscribe()

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const subscription = tieQry.execute().pipe(tap(setTie)).subscribe()

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const subscription = winnerQry.execute().pipe(tap(setWinner)).subscribe()

    return () => subscription.unsubscribe()
  }, [])

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
