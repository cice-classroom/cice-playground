import { injectable } from 'inversify'
import { Greeter } from './greeter'

@injectable()
export class EnglishGreeter implements Greeter {
  hello(): string {
    return 'Hello'
  }
}
