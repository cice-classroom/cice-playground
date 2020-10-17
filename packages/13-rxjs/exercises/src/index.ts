import { double } from './exercise-1'
import { tap } from 'rxjs/operators'
import { even } from './exercise-2'
import { onClickCount } from './exercise-3'
import { onClick } from './exercise-4'
import { onScroll } from './exercise-5'
import { onTime } from './exercise-7'
import { tripleEven } from './exercise-6'
import { scrollClick } from './exercise-8'
import { yesNo } from './exercise-9'
import { counter, pause, play, reset } from './exercise-12'
import { yesNoDebounce } from './exercise-10'
import { yesNoSwitch } from './exercise-11'

const render = (tag: string) =>
  tap(x => {
    const output = document.querySelector(tag)!
    output.innerHTML += `Value ${JSON.stringify(x, null, 2)} emitted<br/>`
  })

const staticRender = (tag: string) =>
  tap(x => {
    const output = document.querySelector(tag)!
    output.innerHTML = `Value ${JSON.stringify(x, null, 2)} emitted<br/>`
  })

double([1, 2, 3, 4, 5]).pipe(render('#exercise-1')).subscribe()
even([1, 2, 3, 4, 5]).pipe(render('#exercise-2')).subscribe()
onClickCount().pipe(render('#exercise-3')).subscribe()
onClick().pipe(render('#exercise-4')).subscribe()
onScroll().pipe(staticRender('#exercise-5')).subscribe()
tripleEven([1, 2, 3, 4, 5]).pipe(render('#exercise-6')).subscribe()
onTime().pipe(staticRender('#exercise-7')).subscribe()
scrollClick().pipe(staticRender('#exercise-8')).subscribe()
yesNo().pipe(staticRender('#exercise-9')).subscribe()
yesNoDebounce().pipe(staticRender('#exercise-10')).subscribe()
yesNoSwitch().pipe(staticRender('#exercise-11')).subscribe()
counter().subscribe()
play().subscribe()
pause().subscribe()
reset().subscribe()
