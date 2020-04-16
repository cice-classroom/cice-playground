import React, { useEffect, useState } from 'react'
import styles from './yes-no-displayer.module.css'
import { bind } from './bind'
import { TYPES } from '../../types'
import { useInject } from './use-inject'
import { GetImageUseCase } from '../../application/get-image-use-case'

const cx = bind(styles)

export const YesNoDisplayer: React.FC = () => {
  const [image, setImage] = useState('')
  const [counter, setCounter] = useState(0)
  const getImageUseCase = useInject<GetImageUseCase>(TYPES.GET_IMAGE_USE_CASE)

  useEffect(() => {
    const fetchImage = async () => {
      const { image } = await getImageUseCase.execute()
      setImage(image)
    }

    fetchImage()
  }, [counter, getImageUseCase])

  return (
    <div className="App">
      <img className={cx('image')} src={image} onClick={() => setCounter(counter + 1)} />
    </div>
  )
}
