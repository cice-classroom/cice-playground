import { PersonalAssistant } from './personal-assistant'
import { Greeter } from './greeter'

describe('PersonalAssistant', () => {
  it('should get the morning routine without casting', () => {
    const mock = jest.fn()
    mock.mockReturnValue('Hello')
    const greeter: Greeter = {
      hello: mock,
    }
    const personalAssistant = new PersonalAssistant(greeter)

    const actual = personalAssistant.morningRoutine('Alberca')

    expect(actual).toBe('Hello Mr Alberca')
  })

  it('should get the morning routine', () => {
    const mock = jest.fn()
    mock.mockReturnValue('Hello')
    const greeter: Partial<Greeter> = {
      hello: mock,
    }
    const personalAssistant = new PersonalAssistant((greeter as unknown) as Greeter)

    const actual = personalAssistant.morningRoutine('Alberca')

    expect(actual).toBe('Hello Mr Alberca')
  })
})
