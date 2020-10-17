import { Emailer, EmailSpanishGreeter } from './email-spanish-greeter'
import { SpanishGreeter } from './spanish-greeter'
import { anything, capture, deepEqual, instance, mock, verify, when } from 'ts-mockito'

describe('EmailSpanishGreeter', () => {
  it('should say greeting', () => {
    const spanishGreeter = mock(SpanishGreeter)
    const emailer = mock(Emailer)
    when(spanishGreeter.hello()).thenReturn('Hola')
    const emailSpanishGreeter = new EmailSpanishGreeter(instance(spanishGreeter), instance(emailer))

    const actual = emailSpanishGreeter.hello()

    expect(actual).toBe('Hola')
  })

  it('should send greeting email', () => {
    const spanishGreeter = mock(SpanishGreeter)
    const emailer = mock(Emailer)
    when(spanishGreeter.hello()).thenReturn('Hola')
    const emailSpanishGreeter = new EmailSpanishGreeter(instance(spanishGreeter), instance(emailer))

    emailSpanishGreeter.hello()

    verify(emailer.sendEmail(deepEqual({ body: 'Hola' }))).once()
  })
})
