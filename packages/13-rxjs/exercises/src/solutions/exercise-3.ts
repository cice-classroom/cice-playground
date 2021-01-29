import { fromEvent } from 'rxjs'
import { scan } from 'rxjs/operators'

export const onClickCount = () => fromEvent(document, 'click').pipe(scan(value => value + 1, 0))
