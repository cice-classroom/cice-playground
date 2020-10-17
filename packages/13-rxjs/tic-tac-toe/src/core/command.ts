import { Observable } from 'rxjs'

export interface Command<Param = void> {
  execute(param: Param): Observable<void>
}
