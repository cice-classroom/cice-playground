import React from 'react'
import styles from './base-input.module.css'
import { bind } from '../../../../utils/bind'
import { Input } from '../input'

const cx = bind(styles)

interface Props extends Input<string | number> {
  type: 'password' | 'text'
  endSlot?: React.ReactNode
}

export const BaseInput: React.FunctionComponent<Props> = ({
  label,
  value,
  onChange,
  type,
  required,
  endSlot
}) => {
  return (
    <label className={cx('label')}>
      {label}
      {required ? '*' : ''}
      <input
        className={cx('input')}
        onChange={event => onChange(event.target.value)}
        type={type}
        value={value}
      />
      {endSlot}
    </label>
  )
}
