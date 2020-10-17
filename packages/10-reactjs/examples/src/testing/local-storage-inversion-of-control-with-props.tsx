import React, { useEffect, useState } from 'react'

interface Props {
  storage: Storage
}

export const LocalStorageInversionOfControlWithProps: React.FC<Props> = ({ storage }) => {
  const [value, setValue] = useState(storage.getItem('input') ?? '')

  useEffect(() => {
    storage.setItem('input', value)
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <>
      <input aria-label="Input" onChange={handleChange} value={value} />
    </>
  )
}
