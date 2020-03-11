import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import { bind } from './bind'
import { YesNoHttpRepository } from '../infrastructure/yes-no-http-repository'

const cx = bind(styles)

export function App() {
  const [image, setImage] = useState('')
  const [counter, setCounter] = useState(0)

  const fetchImage = async () => {
    const yesNoHttpRepository = new YesNoHttpRepository()
    const yesNo = await yesNoHttpRepository.find()
    setImage(yesNo.image)
  }

  useEffect(() => {
    fetchImage()
  }, [counter])

  return (
    <div className="App">
      <img className={cx('image')} src={image} onClick={() => setCounter(counter + 1)} />
    </div>
  )
}
