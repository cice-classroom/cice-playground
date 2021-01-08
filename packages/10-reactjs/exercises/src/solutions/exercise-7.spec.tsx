import { Exercise7 } from './exercise-7'
import { render, waitFor } from '@testing-library/react'
import React from 'react'

describe('ExerciseSeven', () => {
  it('should make a request to the pokemon API', async () => {
    jest
      .spyOn(window, 'fetch')
      .mockReturnValue(
        Promise.resolve({
          json: () => Promise.resolve({ results: [{ name: 'Pikachu' }] })
        }) as Promise<Response>
      )
    const { queryByRole } = render(<Exercise7 />)

    await waitFor(() => queryByRole('listitem'))

    expect(queryByRole('listitem')).toHaveTextContent('Pikachu')
  })
})
