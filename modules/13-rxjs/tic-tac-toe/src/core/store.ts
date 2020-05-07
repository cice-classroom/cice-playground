import { BehaviorSubject, Observable } from 'rxjs'

export abstract class Store<T extends Object> {
  private readonly state: BehaviorSubject<T> = new BehaviorSubject((undefined as unknown) as T)

  protected constructor(private readonly initialState: T) {
    this.set(initialState)
  }

  get(): Observable<T> {
    return this.state.asObservable()
  }

  set(nextState: T) {
    return this.state.next(nextState)
  }

  value() {
    return this.state.getValue()
  }

  patch(params: Partial<T>) {
    this.set({ ...this.value(), ...params })
  }

  complete() {
    this.state.complete()
  }

  error(error: Error) {
    this.state.error(error)
  }

  getState() {
    return this.state
  }

  reset() {
    this.set(this.initialState)
  }
}
