import React, { useEffect, useState } from 'react'
import styles from './yes-no-displayer.module.css'
import { bind } from './bind'
import { YesNoRepository } from '../domain/yes-no-repository'
import { TYPES } from '../types'
import { useInject } from '../use-inject'

const cx = bind(styles)

export const YesNoDisplayer: React.FC = () => {
  const [image, setImage] = useState('')
  const [counter, setCounter] = useState(0)
  const yesNoRepository = useInject<YesNoRepository>(TYPES.YES_NO_REPOSITORY)

  useEffect(() => {
    const fetchImage = async () => {
      const { image } = await yesNoRepository.find()
      setImage(image)
    }

    fetchImage()
  }, [counter, yesNoRepository])

  return (
    <div className="App">
      <img className={cx('image')} src={image} onClick={() => setCounter(counter + 1)} />
    </div>
  )
}
