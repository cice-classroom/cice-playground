import { Greeter } from './greeter'
import { inject, injectable } from 'inversify'
import { SpanishGreeter } from './spanish-greeter'
import { TYPES } from './types'
import { EnglishGreeter } from './english-greeter'

@injectable()
export class MultilingualGreeter implements Greeter {
  constructor(
    @inject(TYPES.SPANISH_GREETER) private readonly spanishGreeter: SpanishGreeter,
    @inject(TYPES.ENGLISH_GREETER) private readonly englishGreeter: EnglishGreeter,
  ) {}

  hello(): string {
    return `${this.spanishGreeter.hello()} - ${this.englishGreeter.hello()}`
  }
}
