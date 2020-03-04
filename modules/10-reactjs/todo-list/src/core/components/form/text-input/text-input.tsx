import React from 'react'
import styles from './text-input.module.css'
import { bind } from '../../../../utils/bind'
import { BaseInput } from '../base-input/base-input'
import { Input } from '../input'

const cx = bind(styles)

export const TextInput: React.FunctionComponent<Input<string>> = ({ label, value, onChange }) => {
  return <BaseInput label={label} value={value} onChange={onChange} type={'text'} />
}
