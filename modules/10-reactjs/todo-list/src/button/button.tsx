import React, { useState } from 'react'
import styles from './button.module.css'
import classNamesBind from 'classnames/bind'

const cx = classNamesBind.bind(styles)

export function Button(props: { className?: string }) {
  const [count, setCount] = useState(1)

  const onClick = () => setCount(count + 1)

  return (
    <button
      onClick={onClick}
      className={cx('button', props.className, count % 2 === 0 ? 'even-class' : 'odd-class')}
    >
      {count}
    </button>
  )
}
