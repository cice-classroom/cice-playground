import { Store } from './store'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export class UserStore extends Store<{ username: string; password: string }> {
  constructor() {
    super({ username: '', password: '' })
  }

  isPasswordValid(): Observable<boolean> {
    return this.get().pipe(
      map(x => x.password),
      map(x => x.length >= 8)
    )
  }
}
