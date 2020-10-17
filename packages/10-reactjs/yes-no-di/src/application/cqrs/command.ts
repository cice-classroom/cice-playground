import { UseCase } from './use-case'

export interface Command<Param> extends UseCase<void, Param> {}
