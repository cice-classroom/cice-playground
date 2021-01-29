import { fromEvent } from 'rxjs'
import { debounceTime, distinctUntilChanged, map, switchMapTo } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

type Answer = 'yes' | 'no'

export const yesNoDebounce = () =>
  fromEvent(document.querySelector('#exercise-10-input')!, 'keydown').pipe(
    debounceTime(500),
    map(x => (x.target as HTMLInputElement).value),
    distinctUntilChanged(),
    switchMapTo(ajax.getJSON<{ answer: Answer }>('https://yesno.wtf/api')),
    map(({ answer }) => answer)
  )
