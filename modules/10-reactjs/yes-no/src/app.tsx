import React from 'react'
import styles from './app.module.css'
import { bind } from './bind'

const cx = bind(styles)

interface ResponseDto {
  answer: string
  forced: boolean
  image: string
}

export function App() {
  return (
    <div className="App">
      <img className={cx('image')} />
    </div>
  )
}
