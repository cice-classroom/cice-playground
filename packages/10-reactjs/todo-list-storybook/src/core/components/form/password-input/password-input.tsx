import React, { useState } from 'react'
import { BaseInput } from '../base-input/base-input'
import { Icon } from '../../icon/icon'
import { Input } from '../input'

export const PasswordInput: React.FunctionComponent<Input<string>> = (props) => {
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
