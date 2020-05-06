import { BehaviorSubject, EMPTY, fromEvent, interval } from 'rxjs'
import { map, scan, switchMap, takeUntil, tap } from 'rxjs/operators'

const state = new BehaviorSubject({ counter: 0, isStarted: false })

export const counter = () =>
  state.asObservable().pipe(
    switchMap(x => (x.isStarted ? interval(1_000).pipe(map(() => x.counter)) : EMPTY)),
    tap(() => state.next({ ...state.value, counter: state.value.counter + 1 }))
  )

const toggle = new BehaviorSubject(false)

export const counterV2 = () =>
  interval(1_000).pipe(
    scan((x, y) => x + y),
    takeUntil(toggle)
  )

export const play = () =>
  fromEvent(document.querySelector('#exercise-12-play')!, 'click').pipe(
    tap(() => state.next({ ...state.value, isStarted: true })),
    tap(() => toggle.next(true))
  )

export const pause = () =>
  fromEvent(document.querySelector('#exercise-12-pause')!, 'click').pipe(
    tap(() => state.next({ ...state.value, isStarted: false })),
    tap(() => toggle.next(false))
  )

export const reset = () =>
  fromEvent(document.querySelector('#exercise-12-reset')!, 'click').pipe(
    tap(() => state.next({ counter: 0, isStarted: false })),
    tap(() => toggle.complete())
  )
