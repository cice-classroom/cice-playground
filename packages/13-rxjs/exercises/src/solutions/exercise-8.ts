import { fromEvent } from 'rxjs'
import { map, switchMap, throttleTime } from 'rxjs/operators'

export const scrollClick = () =>
  fromEvent(document, 'click').pipe(
    switchMap(() => fromEvent(window, 'scroll')),
    throttleTime(1_000),
    map(() => window.scrollY)
  )
