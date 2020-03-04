import React, { useState } from 'react'
import styles from './password-input.module.css'
import { bind } from '../../../../utils/bind'
import { BaseInput } from '../base-input/base-input'
import { Input } from '../input'
import { Icon } from '../../icon/icon'

const cx = bind(styles)

export const PasswordInput: React.FunctionComponent<Input<string>> = ({
  label,
  value,
  onChange,
  required
}) => {
  const [isShowing, setIsShowing] = useState(false)
  return (
    <BaseInput
      label={label}
      value={value}
      required={required}
      onChange={onChange}
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
