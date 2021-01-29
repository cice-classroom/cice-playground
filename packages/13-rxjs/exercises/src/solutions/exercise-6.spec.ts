import { TestScheduler } from 'rxjs/testing'
import { mergeMapTo } from 'rxjs/operators'
import { tripleEven } from './exercise-6'

describe('exercise6', () => {
  it('should get triple even values', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })
    testScheduler.run(({ expectObservable, cold }) => {
      const resultValues = {
        y: 6,
        z: 12
      }
      const given = '   (a|)'
      const expected = '(y-z|)'

      const actual = cold(given).pipe(mergeMapTo(tripleEven([1, 2, 3, 4, 5])))

      expectObservable(actual).toBe(expected, resultValues)
    })
  })
})
