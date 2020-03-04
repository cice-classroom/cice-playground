import React from 'react'
import styles from './text-input.module.css'
import { bind } from '../../../../utils/bind'

const cx = bind(styles)

interface Props {
  label: string
  value: string
  onChange(value: string): void
}

export const TextInput: React.FunctionComponent<Props> = ({ label, value, onChange }) => {
  return (
    <label>
      {label}
      <input
        className={cx('input')}
        onChange={event => onChange(event.target.value)}
        value={value}
      />
    </label>
  )
}
