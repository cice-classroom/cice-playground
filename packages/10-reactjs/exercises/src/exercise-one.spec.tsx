import React from 'react'
import { ExerciseOne } from './exercise-one'
import { render } from '@testing-library/react'

describe('ExerciseOne', () => {
  it('should render 50 items', () => {
    const { getAllByRole } = render(<ExerciseOne />)

    const listItems = getAllByRole('listitem')

    expect(listItems).toHaveLength(50)
  })
})
