import { CSSProperties, FC } from 'react'
import styles from './exercise-8.module.css'

interface Props {
  percentage: number
}

export const Exercise8: FC<Props> = ({ percentage }) => {
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
