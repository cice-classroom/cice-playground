import { bind } from '../../../utils/bind'
import styles from './button.module.css'
import { FC, HTMLProps } from 'react'

const cx = bind(styles)

interface Props extends HTMLProps<HTMLButtonElement> {
  theme?: 'primary' | 'secondary'
  submit?: boolean
  isDisabled?: boolean
}

export const Button: FC<Props> = ({ children, className, theme, submit, isDisabled, ...rest }) => {
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
