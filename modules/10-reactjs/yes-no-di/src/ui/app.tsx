import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import { bind } from './bind'
import { YesNoRepositoryFactory } from '../infrastructure/yes-no-repository-factory'

const cx = bind(styles)

export function App() {
  const [image, setImage] = useState('')
  const [counter, setCounter] = useState(0)

  const fetchImage = async () => {
    const yesNoRepository = YesNoRepositoryFactory.get()
    const yesNo = await yesNoRepository.find()
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
