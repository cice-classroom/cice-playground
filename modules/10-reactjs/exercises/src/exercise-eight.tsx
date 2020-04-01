import React, { CSSProperties } from 'react'
import styles from './exercise-eight.module.css'

interface Props {
  percentage: number
}

export const ExerciseEight: React.FC<Props> = ({ percentage }) => {
  const degrees = (360 * percentage) / 100
  return (
    <div
      style={{ '--graph-percentage': `${degrees}deg` } as CSSProperties}
      className={styles.graph}
    >
      <span className={styles.percentage}>{percentage}</span>
    </div>
  )
}
