import { Observable } from 'rxjs'

export interface Query<Result, Param = void> {
  execute(param: Param): Observable<Result>
}
