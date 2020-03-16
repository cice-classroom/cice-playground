import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import { bind } from './bind'

const cx = bind(styles)

type Status = 'error' | 'loading' | 'success'

function useGeoposition() {
  const [coordinates, setCoordinates] = useState({ longitude: 0, latitude: 0 })
  const [status, setStatus] = useState<Status>('loading')

  useEffect(() => {
    const id = navigator.geolocation.watchPosition(
      ({ coords }) => {
        const { longitude, latitude } = coords
        setCoordinates({ longitude, latitude })
        setStatus('success')
      },
      () => {
        setStatus('error')
      }
    )

    return () => navigator.geolocation.clearWatch(id)
  }, [])

  return { coordinates, status }
}

export function App() {
  const { coordinates, status } = useGeoposition()

  const getMessage = () => {
    if (status === 'loading') {
      return <span>Cargando...</span>
    }

    if (status === 'error') {
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
