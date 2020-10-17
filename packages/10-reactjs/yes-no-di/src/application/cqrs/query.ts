import { UseCase } from './use-case'

export interface Query<Result, Param = void> extends UseCase<Result, Param> {}
