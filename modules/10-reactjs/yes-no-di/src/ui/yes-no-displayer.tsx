import React, { useEffect, useState } from 'react'
import styles from './yes-no-displayer.module.css'
import { bind } from './bind'
import { useInject } from './use-inject'

const cx = bind(styles)

export const YesNoDisplayer: React.FC = () => {
  const [image, setImage] = useState('')
  const [counter, setCounter] = useState(0)
  const yesNoRepository = useInject('yesNoRepository')

  const fetchImage = async () => {
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
