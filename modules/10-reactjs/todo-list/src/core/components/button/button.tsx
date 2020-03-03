import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './button.module.css'

const cx = bind(styles)

interface Props {
  className?: string
  onClick?(): void
  theme?: 'primary' | 'secondary'
  submit?: boolean
}

export const Button: React.FunctionComponent<Props> = ({
  children,
  className,
  theme,
  submit,
  onClick
}) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      className={cx('button', theme, className)}
    >
      {children}
    </button>
  )
}
