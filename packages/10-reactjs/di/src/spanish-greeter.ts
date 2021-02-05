import { injectable } from 'tsyringe'
import { Greeter } from './greeter'

@injectable()
export class SpanishGreeter implements Greeter {
  hello(): string {
    return 'Hola'
  }
}
