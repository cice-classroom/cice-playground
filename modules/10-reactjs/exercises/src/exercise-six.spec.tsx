import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { ExerciseSix } from './exercise-six'

describe('ExerciseSix', () => {
  it('should have a default value', () => {
    const { getByLabelText } = setup()

    const input = getByLabelText('Input')

    expect(input).toHaveValue('')
  })

  it('should have an initial value', () => {
    const { getByLabelText } = setup({ getItemReturnValue: 'foo' })

    const input = getByLabelText('Input')

    expect(input).toHaveValue('foo')
  })

  it('should store value when writing', () => {
    const { getByLabelText, storageMock } = setup()
    const input = getByLabelText('Input')

    fireEvent.change(input, { target: { value: 'foo' } })

    expect(storageMock.setItem).toHaveBeenCalledWith('input', 'foo')
  })
})

export function setup({ getItemReturnValue }: { getItemReturnValue?: string } = {}) {
  const storageMock: Storage = {
    getItem: jest.fn().mockReturnValue(getItemReturnValue),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
    key: jest.fn(),
    length: 10
  }
  const component = render(<ExerciseSix storage={storageMock} />)

  return {
    ...component,
    storageMock
  }
}
