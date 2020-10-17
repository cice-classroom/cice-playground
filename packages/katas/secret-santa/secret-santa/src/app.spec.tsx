import React from 'react'
import { App } from './app'
import { render, fireEvent } from '@testing-library/react'

describe('App', () => {
  it('should add a name', () => {
    const { getByText, getByLabelText, getByRole } = render(<App />)
    const input = getByLabelText('Nombre')
    const button = getByText('Crear')

    fireEvent.change(input, { target: { value: 'Foo' } })
    fireEvent.click(button)

    expect(getByRole('list')).toHaveTextContent('Foo')
  })
})
