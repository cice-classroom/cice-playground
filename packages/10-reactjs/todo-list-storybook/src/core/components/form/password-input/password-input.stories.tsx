import { FC, useState } from 'react'
import { PasswordInput } from './password-input'

export default {
  title: 'PasswordInput',
  component: PasswordInput
}

const WithState: FC<{ isRequired: boolean }> = ({ isRequired }) => {
  const [value, setValue] = useState('')
  return (
    <>
      <PasswordInput
        required={isRequired}
        value={value}
        label="My input"
        onChange={setValue}
      ></PasswordInput>
      State:{value}
    </>
  )
}

export const base = () => <WithState isRequired={false} />
export const required = () => <WithState isRequired={true} />
