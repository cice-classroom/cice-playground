import React from 'react'
import styles from './app.module.css'
import { bind } from './bind'

const cx = bind(styles)

export function App() {
  return <div className={cx('app')}>Hello world</div>
}
