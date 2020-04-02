import React from 'react'
import { ExerciseTwo } from './exercise-two'
import { render, fireEvent } from '@testing-library/react'

describe('ExerciseTwo', () => {
  it('should have an initial state', () => {
    const { getByRole } = render(<ExerciseTwo />)
    const button = getByRole('button')

    expect(button).toHaveTextContent('0')
  })

  it('should update the counter', () => {
    const { getByRole } = render(<ExerciseTwo />)
    const button = getByRole('button')

    fireEvent.click(button)

    expect(button).toHaveTextContent('1')
  })

  it('should update the counter when clicking more than once', () => {
    const { getByRole } = render(<ExerciseTwo />)
    const button = getByRole('button')

    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)

    expect(button).toHaveTextContent('3')
  })
})
