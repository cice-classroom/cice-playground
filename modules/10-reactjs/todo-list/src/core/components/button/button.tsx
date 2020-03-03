import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './button.module.css'

const cx = bind(styles)

interface Props extends React.HTMLProps<HTMLButtonElement> {
  theme?: 'primary' | 'secondary'
  submit?: boolean
}

export const Button: React.FunctionComponent<Props> = ({
  children,
  className,
  theme,
  submit,
  ...rest
}) => {
  return (
    <button
      className={cx('button', theme, className)}
      {...rest}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  )
}
