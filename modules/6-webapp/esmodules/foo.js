import bar, { sayHello } from './bar.js'
import './side-effect.js'

document.querySelector('#root').innerHTML = sayHello() + ' ' + bar
