import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

export const onClick = () =>
         fromEvent(document, 'click').pipe(
           map((value: MouseEventInit) => ({
             x: value.screenX,
             y: value.screenY
           }))
         )
