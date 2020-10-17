import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { LocalStorageHardcoded } from './local-storage-hardcoded'

describe('LocalStorageHardcoded', () => {
  it('should have a default value', () => {
    const { getByLabelText } = render(<LocalStorageHardcoded />)

    const input = getByLabelText('Input')

    expect(input).toHaveValue('')
  })

  it('should have an initial value', () => {
    const realGetItem = Storage.prototype.getItem
    const mock = jest.fn().mockReturnValue('foo')
    Storage.prototype.getItem = mock
    const { getByLabelText } = render(<LocalStorageHardcoded />)

    const input = getByLabelText('Input')

    expect(input).toHaveValue('foo')
    Storage.prototype.getItem = realGetItem
  })

  it('should store value when writing', () => {
    const mock = jest.fn()
    const realSetItem = Storage.prototype.setItem
    Storage.prototype.setItem = mock
    const { getByLabelText } = render(<LocalStorageHardcoded />)
    const input = getByLabelText('Input')

    fireEvent.change(input, { target: { value: 'foo' } })

    expect(mock).toHaveBeenCalledWith('input', 'foo')
    Storage.prototype.setItem = realSetItem
  })
})
