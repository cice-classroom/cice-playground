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
import { counter, play, watch } from './exercise-12'

const render = (tag: string) =>
  tap(x => {
    const output = document.querySelector(tag)!
    output.innerHTML += `Value ${JSON.stringify(x, null, 2)} emitted<br/>`
  })

double([1, 2, 3, 4, 5]).pipe(render('#exercise-1')).subscribe()
even([1, 2, 3, 4, 5]).pipe(render('#exercise-2')).subscribe()
onClickCount().pipe(render('#exercise-3')).subscribe()
onClick().pipe(render('#exercise-4')).subscribe()
onScroll().pipe(render('#exercise-5')).subscribe()
tripleEven([1, 2, 3, 4, 5]).pipe(render('#exercise-6')).subscribe()
onTime().pipe(render('#exercise-7')).subscribe()
scrollClick().pipe(render('#exercise-8')).subscribe()
yesNo().pipe(render('#exercise-9')).subscribe()
counter().pipe(render('#exercise-12')).subscribe()
watch().subscribe()
play().subscribe()
