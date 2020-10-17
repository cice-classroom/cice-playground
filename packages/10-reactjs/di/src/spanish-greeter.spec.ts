import { SpanishGreeter } from './spanish-greeter'

describe('SpanishGreeter', () => {
  it('should return the greeting in spanish', () => {
    const spanishGreeter = new SpanishGreeter()

    const actual = spanishGreeter.hello()

    expect(actual).toBe('Hola')
  })
})
