import { BehaviorSubject, fromEvent, interval, NEVER } from 'rxjs'
import { map, switchMap, tap } from 'rxjs/operators'

const state = new BehaviorSubject({ counter: 0, isStarted: false })

export const counter = () =>
  state.asObservable().pipe(
    switchMap(x => (x.isStarted ? interval(1_000).pipe(map(() => x.counter)) : NEVER)),
    tap(() => state.next({ ...state.value, counter: state.value.counter + 1 }))
  )

export const play = () =>
  fromEvent(document.querySelector('#exercise-12-play')!, 'click').pipe(
    tap(() => state.next({ ...state.value, isStarted: true }))
  )

export const pause = () =>
  fromEvent(document.querySelector('#exercise-12-pause')!, 'click').pipe(
    tap(() => state.next({ ...state.value, isStarted: false }))
  )

export const reset = () =>
  fromEvent(document.querySelector('#exercise-12-reset')!, 'click').pipe(
    tap(() => state.next({ counter: 0, isStarted: false }))
  )
