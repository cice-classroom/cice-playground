import 'reflect-metadata'
import { Container } from 'inversify'
import { TYPES } from './types'
import { Greeter } from './greeter'
import { PersonalAssistant } from './personal-assistant'

const container = new Container()
container.bind(TYPES.GREETER).to(Greeter)
container.bind(TYPES.PERSONAL_ASSISTANT).to(PersonalAssistant)

export { container }
