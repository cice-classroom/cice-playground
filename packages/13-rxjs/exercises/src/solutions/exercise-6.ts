import { from } from 'rxjs'
import { filter, map } from 'rxjs/operators'

export const tripleEven = (value: number[]) =>
  from(value).pipe(
    map(x => x * 3),
    filter(x => x % 2 === 0)
  )
