import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import { bind } from './bind'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const cx = bind(styles)

type Status = 'error' | 'loading' | 'success'
interface Coordinates {
  longitude: number
  latitude: number
}

const throttle = (func: any, limit: any) => {
  let inThrottle: any
  return function() {
    const args = arguments
    // @ts-ignore
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

function useHeight() {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', throttle(handleResize, 100))

    return () => window.removeEventListener('resize', throttle(handleResize, 100))
  }, [])

  return { height, heightInPx: height + 'px' }
}

function useGeoposition() {
  const [coordinates, setCoordinates] = useState<Coordinates>({ longitude: 0, latitude: 0 })
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
  const [cityCoordinates, setCityCoordinates] = useState<Coordinates | null>(null)

  const getMap = () => {
    if (status === 'loading') {
      return <span>Cargando...</span>
    }

    if (status === 'error') {
      return <span>Error al obtener la localización</span>
    }

    const { latitude, longitude } = cityCoordinates ?? coordinates
    return (
      <Map className={cx('map')} center={[latitude, longitude]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        <Marker position={[latitude, longitude]}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }

  const { heightInPx } = useHeight()
  return (
    <div className={cx('app')} style={{ '--map-height': heightInPx } as React.CSSProperties}>
      <main>{getMap()}</main>
      <footer>
        <button onClick={() => setCityCoordinates({ latitude: 51.507351, longitude: -0.127758 })}>
          Londres
        </button>
        <button
          onClick={() =>
            setCityCoordinates({
              longitude: -3.692763,
              latitude: 40.4640717
            })
          }
        >
          Madrid
        </button>
        <button onClick={() => setCityCoordinates({ latitude: 31, longitude: 121 })}>
          Shangai
        </button>
        <button onClick={() => setCityCoordinates(null)}>Default</button>
      </footer>
    </div>
  )
}
