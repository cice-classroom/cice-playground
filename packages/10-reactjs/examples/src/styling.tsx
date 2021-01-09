import { FC } from 'react'
import styles from './styling.module.css'
import './styling.css'
import classNames from 'classNames/bind'

const cx = classNames.bind(styles)

export const Styling: FC = () => {
  return (
    <>
      <p className="hello">Hello</p>
      <p className={styles.world}>World</p>
      <p className={cx('hola-mundo', { 'hola-mundo': true })}>Hola</p>
    </>
  )
}
