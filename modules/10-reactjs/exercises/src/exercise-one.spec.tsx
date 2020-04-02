import { ExerciseOne } from './exercise-one'
import { render } from '@testing-library/react'
import React from 'react'

describe('ExerciseOne', () => {
  it('should render 50 elements', () => {
    const { getAllByRole } = render(<ExerciseOne />)

    const actual = getAllByRole('listitem')

    expect(actual).toHaveLength(50)
  })
})
