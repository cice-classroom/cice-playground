import { fromEvent } from 'rxjs'
import { scan } from 'rxjs/operators'

fromEvent(document, 'click')
  .pipe(scan(count => count + 1, 0))
  .subscribe(count => {
    const output = document.querySelector('#exercise-1')!
    output.innerHTML = `Clicked ${count} times`
  })
