import { TestScheduler } from 'rxjs/testing'
import { mergeMapTo } from 'rxjs/operators'
import { double } from './exercise-1'

describe('exercise1', () => {
  it('should double a given array', async () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })
    testScheduler.run(({ expectObservable, cold }) => {
      const values = {
        a: 1,
        x: 2,
        y: 4,
        z: 6
      }
      const given = '   a|'
      const expected = '(x-y-z|)'

      const actual = cold(given, values).pipe(mergeMapTo(double([1, 2, 3])))

      expectObservable(actual).toBe(expected, values)
    })
  })
})
