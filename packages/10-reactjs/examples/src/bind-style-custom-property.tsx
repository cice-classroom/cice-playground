import React, { CSSProperties, useState } from 'react'
import styles from './bind-style-custom-property.module.css'

export const BindStyleCustomProperty: React.FC = () => {
  const [value, setValue] = useState('')
  return (
    <div className={styles.wrapper} style={{ '--background-color': value } as CSSProperties}>
      <input onChange={event => setValue(event.target.value)} type="color" value={value} />
    </div>
  )
}
