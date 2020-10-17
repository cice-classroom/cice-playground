import { TestScheduler } from 'rxjs/testing'
import { mergeMapTo } from 'rxjs/operators'
import { double } from './exercise-1'

describe('exercise1', () => {
  it('should double a given array', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })
    testScheduler.run(({ expectObservable, cold }) => {
      const values = {
        x: 2,
        y: 4,
        z: 6
      }
      const source = '   (a|)'
      const result = '(x-y-z|)'

      const actual = cold(source).pipe(mergeMapTo(double([1, 2, 3])))

      expectObservable(actual).toBe(result, values)
    })
  })
})
