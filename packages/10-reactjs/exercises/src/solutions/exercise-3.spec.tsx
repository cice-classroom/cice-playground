import { Exercise3 } from './exercise-3'
import { render, fireEvent } from '@testing-library/react'

describe('ExerciseThree', () => {
  it('should not include a vowel when typing in the input', () => {
    const { getByLabelText } = render(<Exercise3 />)

    const input = getByLabelText('Input')

    fireEvent.change(input, { target: { value: 'a' } })

    expect(input).toHaveValue('')
  })

  it('should include a consontants when typing in the input', () => {
    const { getByLabelText } = render(<Exercise3 />)

    const input = getByLabelText('Input')

    fireEvent.change(input, { target: { value: 'f' } })

    expect(input).toHaveValue('f')
  })

  it('should filter out vowels from word when typing', () => {
    const { getByLabelText } = render(<Exercise3 />)

    const input = getByLabelText('Input')

    fireEvent.change(input, { target: { value: 'hola' } })

    expect(input).toHaveValue('hl')
  })
})
