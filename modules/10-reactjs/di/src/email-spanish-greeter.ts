import { Greeter } from './greeter'
import { SpanishGreeter } from './spanish-greeter'

export class EmailSpanishGreeter implements Greeter {
  constructor(
    private readonly spanishGreeter: SpanishGreeter,
    private readonly sendEmail: (message: string) => void
  ) {}

  hello(): string {
    const greeting = this.spanishGreeter.hello()
    this.sendEmail(greeting)
    return greeting
  }
}
