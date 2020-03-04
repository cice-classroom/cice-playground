import React from 'react'
import styles from './base-input.module.css'
import { bind } from '../../../../utils/bind'

const cx = bind(styles)

interface Props {
  label: string
  value: string
  onChange(value: string): void
  type: 'password' | 'text'
}

export const BaseInput: React.FunctionComponent<Props> = ({ label, value, onChange, type }) => {
  return (
    <label className={cx('label')}>
      {label}
      <input
        className={cx('input')}
        onChange={event => onChange(event.target.value)}
        type={type}
        value={value}
      />
    </label>
  )
}
