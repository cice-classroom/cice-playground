import 'reflect-metadata'
import { Container } from 'inversify'
import { TYPES } from './types'
import { Greeter } from './greeter'
import { PersonalAssistant } from './personal-assistant'
import { SpanishGreeter } from './spanish-greeter'
import { EnglishGreeter } from './english-greeter'
import { MultilingualGreeter } from './multilingual-greeter'

const container = new Container()

const random = Math.random()
if (random >= 0.3 && random < 0.7) {
  container.bind<Greeter>(TYPES.GREETER).to(SpanishGreeter)
} else if (random > 0.3) {
  container.bind<Greeter>(TYPES.GREETER).to(EnglishGreeter)
} else {
  container.bind<Greeter>(TYPES.GREETER).to(MultilingualGreeter)
}

container.bind<PersonalAssistant>(TYPES.PERSONAL_ASSISTANT).to(PersonalAssistant)
container.bind<EnglishGreeter>(TYPES.ENGLISH_GREETER).to(EnglishGreeter)
container.bind<SpanishGreeter>(TYPES.SPANISH_GREETER).to(SpanishGreeter).inSingletonScope()

export { container }
