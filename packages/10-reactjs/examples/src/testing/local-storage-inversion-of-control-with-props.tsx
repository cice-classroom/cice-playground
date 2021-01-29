import React, { FC, useEffect, useState } from 'react'

interface Props {
  storage: Storage
}

export const LocalStorageInversionOfControlWithProps: FC<Props> = ({ storage }) => {
  const [value, setValue] = useState(storage.getItem('input') ?? '')

  useEffect(() => {
    storage.setItem('input', value)
  }, [storage, value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <>
      <input aria-label="Input" onChange={handleChange} value={value} />
    </>
  )
}
