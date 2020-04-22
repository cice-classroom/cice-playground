import React from 'react'
import styles from './text-input.module.css'
import { bind } from '../../../../utils/bind'
import { BaseInput } from '../base-input/base-input'
import { Input } from '../input'

const cx = bind(styles)

export const TextInput: React.FunctionComponent<Input<string>> = (props) => {
  return <BaseInput {...props} type={'text'} />
}
