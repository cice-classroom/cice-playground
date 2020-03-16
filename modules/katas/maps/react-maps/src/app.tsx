import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import { bind } from './bind'

const cx = bind(styles)

export function App() {
  const [coordinates, setCoordinates] = useState({ longitude: 0, latitude: 0 })

  useEffect(() => {
    const id = navigator.geolocation.watchPosition(({ coords }) => {
      const { longitude, latitude } = coords
      setCoordinates({ longitude, latitude })
    })

    return () => navigator.geolocation.clearWatch(id)
  }, [])

  return (
    <div className={cx('app')}>
      {coordinates.longitude} - {coordinates.latitude}
    </div>
  )
}
