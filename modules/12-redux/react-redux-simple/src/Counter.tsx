import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Counter.module.css'
import { decrement, increment } from './action-creators'
import { AppDispatch, RootState } from './store'

const countSelector = (state: RootState) => state.incrementReducer.count

export function Counter() {
  const count = useSelector(countSelector)
  const dispatch: AppDispatch = useDispatch()

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  )
}
