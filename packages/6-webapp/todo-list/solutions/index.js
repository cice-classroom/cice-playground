import { createTodo } from './create-todo.js'

function init() {
  const button = document.querySelector('button')

  button.addEventListener('click', () => {
    createTodo()
  })
}

init()
