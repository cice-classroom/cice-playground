import './styles.css'

const root = document.querySelector('#root')
let counter = 0
setInterval(() => {
  root.innerHTML = counter++
}, 1000)
