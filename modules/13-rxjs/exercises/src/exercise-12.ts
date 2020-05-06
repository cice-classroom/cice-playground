import { BehaviorSubject, fromEvent, interval } from 'rxjs'
import { filter, map, tap } from 'rxjs/operators'

const state = new BehaviorSubject({ counter: 0, isStarted: false })

export const counter = () => state.asObservable().pipe(map(x => x.counter))
export const watch = () =>
  interval(1_000).pipe(
    filter(() => state.value.isStarted),
    tap(() => state.next({ ...state.value, counter: state.value.counter + 1 }))
  )

export const play = () =>
  fromEvent(document.querySelector('#exercise-12-play')!, 'click').pipe(
    tap(() => state.next({ ...state.value, isStarted: true }))
  )
