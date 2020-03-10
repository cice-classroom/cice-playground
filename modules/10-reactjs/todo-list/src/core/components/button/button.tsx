import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './button.module.css'

const cx = bind(styles)

interface Props extends React.HTMLProps<HTMLButtonElement> {
  theme?: 'primary' | 'secondary'
  submit?: boolean
  isDisabled?: boolean
}

export const Button: React.FunctionComponent<Props> = ({
  children,
  className,
  theme,
  submit,
  isDisabled,
  ...rest
}) => {
  return (
    <button
      className={cx('button', theme, className)}
      {...rest}
      disabled={isDisabled}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  )
}
