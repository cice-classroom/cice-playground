import { MultilingualGreeter } from './multilingual-greeter'
import { SpanishGreeter } from './spanish-greeter'
import { EnglishGreeter } from './english-greeter'

describe('MultilingualGreeter', () => {
  it('should say greeting in different languages', () => {
    const spanishGreeter: SpanishGreeter = {
      hello: jest.fn().mockReturnValue('Hola'),
    }
    const englishGreeter: EnglishGreeter = {
      hello: jest.fn().mockReturnValue('Hello'),
    }
    const multilingualGreeter = new MultilingualGreeter(spanishGreeter, englishGreeter)

    const actual = multilingualGreeter.hello()

    expect(actual).toBe('Hola - Hello')
  })
})
