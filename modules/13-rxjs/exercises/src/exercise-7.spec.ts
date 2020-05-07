import { TestScheduler } from 'rxjs/testing'
import { mergeMapTo } from 'rxjs/operators'
import { onTime } from './exercise-7'

describe('exercise7', () => {
  it('should emit every 3 seconds', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })
    testScheduler.run(({ expectObservable, cold }) => {
      const resultValues = {
        x: 3,
        y: 6,
        z: 9
      }
      const given = '1s-1s-1s-1s-1s-1s-1s-1s-1s|'
      const expected = '(x-y-z|)'

      const actual = cold(given).pipe(mergeMapTo(onTime()))

      expectObservable(actual).toBe(expected, resultValues)
    })
  })
})
