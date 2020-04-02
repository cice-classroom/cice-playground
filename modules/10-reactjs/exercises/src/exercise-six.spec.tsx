import { ExerciseSix } from './exercise-six'
import { render, fireEvent } from '@testing-library/react'
import React from 'react'

describe('ExerciseSix', () => {
  it('should load from local storage', () => {
    Storage.prototype.getItem = jest.fn(() => 'foo')
    const { getByLabelText } = render(<ExerciseSix />)
    const input = getByLabelText('Input')

    expect(input).toHaveValue('foo')
  })

  it('should save to local storage when writing on the input', () => {
    Storage.prototype.setItem = jest.fn()
    const { getByLabelText } = render(<ExerciseSix />)
    const input = getByLabelText('Input')

    fireEvent.change(input, { target: { value: 'foo' } })

    expect(Storage.prototype.setItem).toHaveBeenCalledWith('input', 'foo')
  })
})
