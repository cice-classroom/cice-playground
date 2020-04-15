import { EmailSpanishGreeter } from './email-spanish-greeter'
import { SpanishGreeter } from './spanish-greeter'

describe('EmailSpanishGreeter', () => {
  it('should get the greeting', () => {
    const spanishGreeter: SpanishGreeter = {
      hello: jest.fn().mockReturnValue('Hola'),
    }
    const sendEmail = jest.fn()
    const emailSpanishGreeter = new EmailSpanishGreeter(spanishGreeter, sendEmail)

    const actual = emailSpanishGreeter.hello()

    expect(actual).toBe('Hola')
  })

  it('should send email with the greeting', () => {
    const spanishGreeter: SpanishGreeter = {
      hello: jest.fn().mockReturnValue('Hola'),
    }
    const sendEmail = jest.fn()
    const emailSpanishGreeter = new EmailSpanishGreeter(spanishGreeter, sendEmail)

    emailSpanishGreeter.hello()

    expect(sendEmail).toHaveBeenCalledWith('Hola')
  })
})
