import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import { bind } from './bind'
import { Map, TileLayer } from 'react-leaflet'

const cx = bind(styles)

export function App() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  useEffect(() => {
    navigator.geolocation.watchPosition(({ coords }) => {
      const { latitude, longitude } = coords
      setPosition({ latitude, longitude })
    })
  })
  return (
    <div className={cx('app')}>
      <Map center={[position.latitude, position.longitude]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </div>
  )
}
