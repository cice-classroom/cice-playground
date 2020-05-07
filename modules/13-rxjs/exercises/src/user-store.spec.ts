import { UserStore } from './user-store'
import { TestScheduler } from 'rxjs/testing'
import { concatMapTo, tap } from 'rxjs/operators'
import { testStore } from './test-store'

describe('UserStore', () => {
  it('should have a valid password', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })
    testScheduler.run(({ cold, expectObservable }) => {
      const values = {
        a: { username: '', password: '123' },
        b: { username: 'admin', password: '1234567' },
        c: { username: '', password: '12345678' }
      }
      const resultValues = {
        x: false,
        y: false,
        z: true
      }
      const store = new UserStore()
      const source = 'a-b-c|'
      const result = 'x-y-z|'
      const storeObservable = cold(source, values).pipe(
        tap(
          x => store.set(x),
          err => store.error(err),
          () => store.complete()
        ),
        concatMapTo(store.getState())
      )
      const actualObservable = storeObservable.pipe(concatMapTo(store.isPasswordValid()))
      expectObservable(actualObservable).toBe(result, resultValues)
    })
  })

  it('should have a valid password using test store utils', () => {
    const sourceValues = {
      a: { username: '', password: '123' },
      b: { username: 'admin', password: '1234567' },
      c: { username: '', password: '12345678' }
    }
    const resultValues = {
      x: false,
      y: false,
      z: true
    }
    const store = new UserStore()
    const source = 'a-b-c|'
    const result = 'x-y-z|'

    const observable = store.isPasswordValid()

    testStore({
      store,
      resultValues,
      sourceValues,
      observable,
      result,
      source
    })
  })
})
