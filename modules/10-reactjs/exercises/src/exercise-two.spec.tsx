import { ExerciseTwo } from './exercise-two'
import { render, fireEvent } from '@testing-library/react'
import React from 'react'


describe('ExerciseTwo', () => {
  it('should increase the counter when clicking on it', () => {
    const { getByRole } = render(<ExerciseTwo/>)
    const button = getByRole('button')

    fireEvent.click(button)

    expect(button).toHaveTextContent('1')
  })

  it('should increase more than once and set the correct value', () => {
    const { getByRole } = render(<ExerciseTwo/>)
    const button = getByRole('button')

    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)

    expect(button).toHaveTextContent('3')
  })
})
