import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import { bind } from './bind'

const cx = bind(styles)

export function App() {
  const [coordinates, setCoordinates] = useState({ longitude: 0, latitude: 0 })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const id = navigator.geolocation.watchPosition(({ coords }) => {
      const { longitude, latitude } = coords
      setCoordinates({ longitude, latitude })
      setIsLoading(false)
    })

    return () => navigator.geolocation.clearWatch(id)
  }, [])

  return (
    <div className={cx('app')}>
      {isLoading && <span>Cargando...</span>}
      {!isLoading && (
        <div>
          {coordinates.longitude} - {coordinates.latitude}
        </div>
      )}
    </div>
  )
}
