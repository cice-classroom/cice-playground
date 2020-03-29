import React, { useEffect, useReducer, useState } from 'react'
import styles from './app.module.css'
import { bind } from './bind'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const cx = bind(styles)

interface Coordinates {
  longitude: number
  latitude: number
}

const throttle = <T extends (...args: unknown[]) => unknown>(cb: T, limit: number) => {
  let inThrottle = false
  return function(this: T, ...args: unknown[]) {
    if (!inThrottle) {
      cb.apply(this, args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

function useHeight() {
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', throttle(handleResize, 1000))

    return () => window.removeEventListener('resize', throttle(handleResize, 1000))
  }, [])

  return { height, heightInPx: height + 'px' }
}

type Status = 'rejected' | 'idle' | 'resolved' | 'pending'
type Action =
  | { type: 'started' }
  | { type: 'success'; coordinates: Coordinates }
  | { type: 'error'; error: Error }

interface State {
  status: Status
  error: Error | null
  coordinates: Coordinates
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'started':
      return {
        ...state,
        status: 'pending'
      }
    case 'error':
      return {
        ...state,
        status: 'rejected',
        error: action.error
      }
    case 'success':
      return {
        ...state,
        status: 'resolved',
        coordinates: action.coordinates
      }
  }
}

function useGeoposition() {
  const initialState: State = {
    status: 'idle',
    error: null,
    coordinates: {
      longitude: 0,
      latitude: 0
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (navigator.geolocation === undefined) {
      dispatch({
        type: 'error',
        error: new Error('Geolocation is not supported')
      })
    }
    dispatch({
      type: 'started'
    })
    const id = navigator.geolocation.watchPosition(
      ({ coords }) => {
        const { longitude, latitude } = coords

        dispatch({
          type: 'success',
          coordinates: { longitude, latitude }
        })
      },
      () => {
        dispatch({ type: 'error', error: new Error("Can't retrieve the location") })
      }
    )

    return () => navigator.geolocation.clearWatch(id)
  }, [])

  return state
}

export function App() {
  const { coordinates, status } = useGeoposition()
  const [cityCoordinates, setCityCoordinates] = useState<Coordinates | null>(null)

  const getMap = () => {
    if (status === 'idle') {
      return <span>Cargando...</span>
    }

    if (status === 'rejected') {
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

  const { height } = useHeight()
  return (
    <div
      className={cx('app')}
      style={{ '--map-height': height - 100 + 'px' } as React.CSSProperties}
    >
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
