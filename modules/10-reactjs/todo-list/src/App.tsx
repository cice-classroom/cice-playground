import React from 'react'
import { Button } from './button/button'
import styles from './app.module.css'
import classNamesBind from 'classnames/bind'

const cx = classNamesBind.bind(styles)

function App() {
  return (
    <>
      <Button className={cx('different-button')} />
    </>
  )
}

export default App
