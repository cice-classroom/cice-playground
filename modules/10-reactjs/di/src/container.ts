import 'reflect-metadata'
import { Container } from 'inversify'
import { TYPES } from './types'
import { Greeter } from './greeter'
import { PersonalAssistant } from './personal-assistant'
import { SpanishGreeter } from './spanish-greeter'
import { EnglishGreeter } from './english-greeter'

const container = new Container()
if (Math.random() > 0.5) {
  container.bind<Greeter>(TYPES.GREETER).to(SpanishGreeter)
} else {
  container.bind<Greeter>(TYPES.GREETER).to(EnglishGreeter)
}
container.bind(TYPES.PERSONAL_ASSISTANT).to(PersonalAssistant)

export { container }
