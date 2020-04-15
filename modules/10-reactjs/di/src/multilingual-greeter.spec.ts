import { MultilingualGreeter } from './multilingual-greeter'
import { SpanishGreeter } from './spanish-greeter'
import { EnglishGreeter } from './english-greeter'
import { instance, mock, when } from 'ts-mockito'

describe('MultilingualGreeter', () => {
  it('should say greeting in different languages', () => {
    const spanishGreeter: SpanishGreeter = mock(SpanishGreeter)
    const englishGreeter: EnglishGreeter = mock(EnglishGreeter)
    when(spanishGreeter.hello()).thenReturn('Hola')
    when(englishGreeter.hello()).thenReturn('Hello')
    const multilingualGreeter = new MultilingualGreeter(
      instance(spanishGreeter),
      instance(englishGreeter)
    )

    const actual = multilingualGreeter.hello()

    expect(actual).toBe('Hola - Hello')
  })
})
