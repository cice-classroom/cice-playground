import React, { useEffect, useState } from 'react'
import styles from './button.module.css'
import classNamesBind from 'classnames/bind'

const cx = classNamesBind.bind(styles)

export function Button(props: { className?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [count])

  return (
    <button
      onClick={() => setCount(count + 1)}
      className={cx('button', props.className, count % 2 === 0 ? 'even-class' : 'odd-class')}
    >
      {count}
    </button>
  )
}
