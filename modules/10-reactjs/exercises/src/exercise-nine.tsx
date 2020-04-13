import React, { useEffect, useState } from 'react'

const useDimensions = () => {
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  return {
    height,
    width
  }
}

export const ExerciseNine: React.FC = () => {
  const { height, width } = useDimensions()
  return (
    <h1>
      {height} - {width}
    </h1>
  )
}
