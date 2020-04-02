import React, { useEffect, useState } from 'react'
import styles from './yes-no-displayer.module.css'
import { bind } from './bind'
import { container } from '../container'
import { YES_NO_REPOSITORY_TYPE } from '../types'
import { YesNoRepository } from '../domain/yes-no-repository'

const cx = bind(styles)

export const YesNoDisplayer: React.FC = () => {
  const [image, setImage] = useState('')
  const [counter, setCounter] = useState(0)

  const fetchImage = async () => {}

  useEffect(() => {
    fetchImage()
  }, [counter])

  return (
    <div className="App">
      <img className={cx('image')} src={image} onClick={() => setCounter(counter + 1)} />
    </div>
  )
}
