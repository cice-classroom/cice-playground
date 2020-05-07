import React, { useEffect, useState } from 'react'
import { Board } from '../domain/board'
import { GetBoardQry } from '../application/get-board-qry'
import { BoardStore } from '../application/board-store'
import { tap } from 'rxjs/operators'
import styles from './game.module.css'

export const Game: React.FC = () => {
  const [board, setBoard] = useState<Board>([])
  useEffect(() => {
    const getBoardQry = new GetBoardQry(new BoardStore())
    const subscription = getBoardQry.execute().pipe(tap(setBoard)).subscribe()

    return () => subscription.unsubscribe()
  }, [])

  return (
    <main className={styles.wrapper}>
      <section className={styles.game}>
        {board.map((cell, index) =>  <div className={styles.cell} key={index}>{cell}</div>)}
      </section>
    </main>
  )
}
