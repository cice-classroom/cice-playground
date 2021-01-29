import { fromEvent } from 'rxjs'
import { map, switchMapTo } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

type Answer = 'yes' | 'no'

export const yesNoSwitch = () =>
  fromEvent(document.querySelector('#exercise-11-input')!, 'keydown').pipe(
    switchMapTo(ajax.getJSON<{ answer: Answer }>('https://yesno.wtf/api')),
    map(({ answer }) => answer)
  )
