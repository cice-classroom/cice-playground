import { ExerciseSeven } from './exercise-seven'
import { render, waitFor } from '@testing-library/react'
import React from 'react'

describe('ExerciseSeven', () => {
  it('should make a request to the pokemon API', async () => {
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({ json: () => Promise.resolve({ results: [{ name: 'Pikachu' }] }) })
    )
    const { queryByRole } = render(<ExerciseSeven />)

    await waitFor(() => queryByRole('listitem'))

    expect(queryByRole('listitem')).toHaveTextContent('Pikachu')
  })
})
