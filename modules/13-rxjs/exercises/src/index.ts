import { double } from './exercise-1'
import { tap } from 'rxjs/operators'

double([1, 2, 3, 4, 5]).pipe(
  tap(x => {
    const output = document.querySelector('#exercise-1')!
    output.innerHTML += `Value ${x} emitted<br/>`
  })
).subscribe()
