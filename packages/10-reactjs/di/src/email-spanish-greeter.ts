import { Greeter } from './greeter'
import { SpanishGreeter } from './spanish-greeter'

export class Emailer {
  sendEmail(_body: { body: string }) {}
  getEmail(id: string) {
    return Math.random()
  }
}

export class EmailSpanishGreeter implements Greeter {
  constructor(private readonly spanishGreeter: SpanishGreeter, private readonly emailer: Emailer) {}

  hello(): string {
    const greeting = this.spanishGreeter.hello()
    this.emailer.sendEmail({ body: greeting })
    return greeting
  }

  bye() {
    const value = this.emailer.getEmail(this.spanishGreeter.hello())
    return value
  }
}
