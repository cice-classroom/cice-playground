export function createTodo() {
  const todoInputText = document.querySelector('input')
  const todoText = todoInputText.value
  const todoContainer = document.querySelector('.todos')
  const li = document.createElement('li')
  const span = document.createElement('span')
  span.innerText = '❌'
  li.innerText = todoText
  li.appendChild(span)
  todoContainer.appendChild(li)
  todoInputText.value = ''

  const onComplete = () => {
    li.classList.toggle('completed')
  }

  li.addEventListener('click', onComplete)

  span.addEventListener('click', () => {
    li.removeEventListener('click', onComplete)
    li.remove()
  })
}
