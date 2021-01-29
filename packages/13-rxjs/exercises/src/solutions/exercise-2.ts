import { from } from 'rxjs'
import { filter } from 'rxjs/operators'

export const even = (array: number[]) => from(array).pipe(filter(x => x % 2 === 0))
