import { fromEvent } from 'rxjs'
import { map, throttleTime } from 'rxjs/operators'

export const onScroll = () =>
         fromEvent(window, 'scroll').pipe(
           throttleTime(1_000),
           map(() => ({
             x: window.scrollX,
             y: window.scrollY
           }))
         )
