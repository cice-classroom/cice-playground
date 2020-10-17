import { TestScheduler } from 'rxjs/testing'
import { mergeMapTo } from 'rxjs/operators'
import { even } from './exercise-2'

describe('exercise2', () => {
  it('should get even values', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })
    testScheduler.run(({ expectObservable, cold }) => {
      const resultValues = {
        x: 2,
        y: 4,
        z: 6
      }
      const given = '   (a|)'
      const expected = '(x-y-z|)'

      const actual = cold(given).pipe(mergeMapTo(even([1, 2, 4, 5, 6])))

      expectObservable(actual).toBe(expected, resultValues)
    })
  })
})
