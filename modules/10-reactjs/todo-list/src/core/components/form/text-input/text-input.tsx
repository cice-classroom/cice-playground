import React from 'react'
import styles from './text-input.module.css'
import { bind } from '../../../../utils/bind'
import { BaseInput } from '../base-input/base-input'

const cx = bind(styles)

interface Props {
  label: string
  value: string
  onChange(value: string): void
}

export const TextInput: React.FunctionComponent<Props> = ({ label, value, onChange }) => {
  return <BaseInput label={label} value={value} onChange={onChange} type={'text'} />
}
