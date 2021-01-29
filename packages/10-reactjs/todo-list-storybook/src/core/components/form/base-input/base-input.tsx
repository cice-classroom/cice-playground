import styles from './base-input.module.css'
import { bind } from '../../../../utils/bind'
import { FC } from 'react'

const cx = bind(styles)

interface Props {
  label: string
  value: string
  required?: boolean
  type: 'text' | 'password'
  endSlot?: React.ReactNode
  onChange(value: string): void
}

export const BaseInput: FC<Props> = ({ label, value, onChange, required, type, endSlot }) => {
  const isRequired = required && value === ''
  return (
    <label>
      {label}
      <input
        className={cx('input', { required: isRequired })}
        onChange={event => onChange(event.target.value)}
        value={value}
        type={type}
      />
      {isRequired && <span>Required field</span>}
      {/*{required && value === '' ? <span>Required field</span> : null}*/}
      <div>{endSlot}</div>
    </label>
  )
}
