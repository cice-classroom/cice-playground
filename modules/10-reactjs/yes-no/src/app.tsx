import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import { bind } from "./bind";

// Data Transfer Object
interface YesNoDto {
  answer: 'yes' | 'no' | 'maybe'
  forced: boolean
  image: string
}

const cx = bind(styles)

export function App() {
  const [image, setImage] = useState('')

  const fetchImage = async () => {
    const response = await fetch('https://yesno.wtf/api')
    const result = (await response.json()) as YesNoDto
    setImage(result.image)
  }

  useEffect(() => {
    fetchImage()
  }, [])

  return (
    <div className="App">
      <img className={cx('image')} src={image} />
    </div>
  )
}
