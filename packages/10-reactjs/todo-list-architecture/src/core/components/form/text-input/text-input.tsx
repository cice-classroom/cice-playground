import { BaseInput } from '../base-input/base-input'
import { Input } from '../input'
import { FC } from 'react'

export const TextInput: FC<Input<string>> = props => {
  return <BaseInput {...props} type={'text'} />
}
