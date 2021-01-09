import { FC } from 'react'
import styles from './styling.module.css'
import './styling.css'
import classNames from 'classnames/bind'
import { bind } from './bind'

const cx = classNames.bind(styles)
const cx2 = bind(styles)

export const Styling: FC = () => {
  return (
    <>
      <p className="hello">Hello</p>
      <p className={styles.world}>World</p>
      <p className={cx('hola-mundo')}>Hola</p>
      <p className={cx2('pepito menganito', { foo: true })}>Mundo</p>
    </>
  )
}
