import { concatMapTo, tap } from 'rxjs/operators'
import { TestScheduler } from 'rxjs/testing'
import { Observable } from 'rxjs'
import { Store } from './store'

export function testStore<T>({
  store,
  source,
  sourceValues,
  result,
  resultValues,
  observable
}: {
  store: Store<T>
  source: string
  result: string
  observable: Observable<unknown>
  sourceValues: { [marble: string]: T }
  resultValues: unknown
}) {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected)
  })
  testScheduler.run(({ cold, expectObservable }) => {
    const storeObservable = cold(source, sourceValues).pipe(
      tap(
        x => store.set(x),
        err => store.error(err),
        () => store.complete()
      ),
      concatMapTo(store.getState())
    )
    const actualObservable = storeObservable.pipe(concatMapTo(observable))
    expectObservable(actualObservable).toBe(result, resultValues)
  })
}
