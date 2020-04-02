import React from 'react'
import { ExerciseThree } from './exercise-three'
import { fireEvent, render } from '@testing-library/react'

describe('ExerciseThree', () => {
  it('should not allow to write vowels', () => {
    const { getByLabelText } = render(<ExerciseThree />)
    const input = getByLabelText('Input')

    fireEvent.change(input, { target: { value: 'a' } })
    fireEvent.change(input, { target: { value: 'b' } })
    fireEvent.change(input, { target: { value: 'e' } })
    fireEvent.change(input, { target: { value: 'c' } })

    expect(input).toHaveValue('c')
  })
})
