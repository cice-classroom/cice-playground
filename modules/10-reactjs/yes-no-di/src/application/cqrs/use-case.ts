export interface UseCase<Result = void, Param = void> {
  execute(param: Param): Promise<Result>
}
