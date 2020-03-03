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
  type: unusedType,
  ...rest
}) => {
  return (
    <button
      className={cx('button', theme, className)}
      type={submit ? 'submit' : 'button'}
      {...rest}
    >
      {children}
    </button>
  )
}
