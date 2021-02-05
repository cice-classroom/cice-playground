import { Greeter } from './greeter'
import { injectable } from 'tsyringe'
import { SpanishGreeter } from './spanish-greeter'
import { EnglishGreeter } from './english-greeter'

@injectable()
export class MultilingualGreeter implements Greeter {
  constructor(
    private readonly spanishGreeter: SpanishGreeter,
    private readonly englishGreeter: EnglishGreeter
  ) {}

  hello(): string {
    return `${this.spanishGreeter.hello()} - ${this.englishGreeter.hello()}`
  }
}
