import React, { useState } from 'react'
import styles from './password-input.module.css'
import { bind } from '../../../../utils/bind'
import { BaseInput } from '../base-input/base-input'
import { Icon } from '../../icon/icon'
import { Input } from '../input'

const cx = bind(styles)

export const PasswordInput: React.FunctionComponent<Input<string>> = props => {
  const [isShowing, setIsShowing] = useState(false)
  return (
    <BaseInput
      {...props}
      type={isShowing ? 'text' : 'password'}
      endSlot={
        <Icon
          onClick={() => setIsShowing(!isShowing)}
          name={isShowing ? 'openEye' : 'closedEye'}
        ></Icon>
      }
    />
  )
}
