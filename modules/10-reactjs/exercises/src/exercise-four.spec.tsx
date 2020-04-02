import { ExerciseFour } from './exercise-four'
import { render, fireEvent } from '@testing-library/react'
import React from 'react'

describe('ExerciseFour', () => {
  it('should change the title', () => {
    const { getByRole } = render(<ExerciseFour />)
    const button = getByRole('button')

    fireEvent.click(button)

    expect(document.title).toBe('')
  })
})
