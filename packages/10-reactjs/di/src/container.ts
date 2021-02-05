import { container } from 'tsyringe'
import { TYPES } from './types'
import { Greeter } from './greeter'
import { SpanishGreeter } from './spanish-greeter'
import { EnglishGreeter } from './english-greeter'
import { MultilingualGreeter } from './multilingual-greeter'

const random = Math.random()
if (random >= 0.3 && random < 0.7) {
  container.registerSingleton<Greeter>(TYPES.GREETER, SpanishGreeter)
} else if (random > 0.3) {
  container.registerSingleton<Greeter>(TYPES.GREETER, EnglishGreeter)
} else {
  container.registerSingleton<Greeter>(TYPES.GREETER, MultilingualGreeter)
}

export { container }
