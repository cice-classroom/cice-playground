import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import { bind } from './bind'

const cx = bind(styles)

function useGeoposition() {
  const [coordinates, setCoordinates] = useState({ longitude: 0, latitude: 0 })
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const id = navigator.geolocation.watchPosition(
      ({ coords }) => {
        const { longitude, latitude } = coords
        setCoordinates({ longitude, latitude })
        setIsLoading(false)
        setHasError(false)
      },
      () => {
        setHasError(true)
      }
    )

    return () => navigator.geolocation.clearWatch(id)
  }, [])

  return { coordinates, isLoading, hasError }
}

export function App() {
  const { coordinates, isLoading, hasError } = useGeoposition()

  const getMessage = () => {
    if (isLoading) {
      return <span>Cargando...</span>
    }

    if (hasError) {
      return <span>Error al obtener la localización</span>
    }

    return (
      <div>
        {coordinates.longitude} - {coordinates.latitude}
      </div>
    )
  }

  // Early return || Guard Clause

  return <div className={cx('app')}>{getMessage()}</div>
}
