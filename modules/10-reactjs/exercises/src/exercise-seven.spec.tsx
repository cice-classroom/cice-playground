import { ExerciseSeven } from './exercise-seven'
import { render } from '@testing-library/react'
import React from 'react'

describe('ExerciseSeven', () => {
  it('should make a request to the pokemon API', () => {
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({ json: Promise.resolve({ results: [] }) })
    )
    const { getAllByRole } = render(<ExerciseSeven />)

    const listItems = getAllByRole('listitems')

    expect(listItems).toHaveLength(10)
  })
})
