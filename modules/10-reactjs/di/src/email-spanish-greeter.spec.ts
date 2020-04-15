import { Emailer, EmailSpanishGreeter } from './email-spanish-greeter'
import { SpanishGreeter } from './spanish-greeter'
import {anyNumber, anyString, anything, capture, deepEqual, instance, mock, verify, when} from 'ts-mockito'

describe('EmailSpanishGreeter', () => {
  it('should get the greeting', () => {
    const spanishGreeter = mock(SpanishGreeter)
    const emailer = mock(Emailer)
    when(spanishGreeter.hello()).thenReturn('Hola')
    const emailSpanishGreeter = new EmailSpanishGreeter(instance(spanishGreeter), instance(emailer))

    const actual = emailSpanishGreeter.hello()

    expect(actual).toBe('Hola')
  })

  it('should send email with the greeting', () => {
    const spanishGreeter = mock(SpanishGreeter)
    when(spanishGreeter.hello()).thenReturn('Hola')
    const emailer = mock(Emailer)
    const emailSpanishGreeter = new EmailSpanishGreeter(instance(spanishGreeter), instance(emailer))

    emailSpanishGreeter.hello()

    const [actual] = capture(emailer.sendEmail).last()
    expect(actual).toBe('Hla')
  })

  it('should say bye', () => {
    const spanishGreeter = mock(SpanishGreeter)
    when(spanishGreeter.hello()).thenReturn('bar')
    const emailer = mock(Emailer)
    when(emailer.getEmail(anything())).thenReturn(1)
    const emailSpanishGreeter = new EmailSpanishGreeter(instance(spanishGreeter), instance(emailer))

    const actual = emailSpanishGreeter.bye()

    expect(actual).toBe(1)
  })

  it('should have deep equality', () => {
    class Foo {
      bar(obj: { baz: number }) {}
    }

    class Qux {
      constructor(private readonly foo: Foo) {}

      test() {
        this.foo.bar({ baz: 1 })
      }
    }

    const foo = mock(Foo)
    const qux = new Qux(instance(foo))

    qux.test()

    verify(foo.bar(deepEqual({ baz: 1 }))).once()
  })
})
