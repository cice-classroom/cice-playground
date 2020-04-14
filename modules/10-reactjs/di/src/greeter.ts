import { injectable } from 'inversify'

@injectable()
export class Greeter {
  hello() {
    return 'Hello'
  }
}
