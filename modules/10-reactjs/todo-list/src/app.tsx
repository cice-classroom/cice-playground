import React, { useState } from 'react'
import { CreateTodo } from './create-todo/create-todo'
import { TodoList } from './todo-list/todo-list'
import { Todo } from './todo'

export function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  function createTodo(todoText: string) {
    const newTodo = { id: Math.random() * 1000, text: todoText, completed: false }
    setTodos([...todos, newTodo])
  }

  function completeTodo(id: number) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo
      })
    )
  }

  return (
    <>
      <TodoList todos={todos} completeTodo={completeTodo} />
      <CreateTodo
        onCreate={todoText => {
          createTodo(todoText)
        }}
      />
    </>
  )
}
