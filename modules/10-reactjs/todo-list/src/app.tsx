import React, { useState } from 'react'
import { TodoList } from './features/todo/ui/todo-list/todo-list'
import { Todo } from './features/todo/domain/todo'
import { TodoCreate } from './features/todo/ui/todo-create/todo-create'

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
      <TodoList todos={todos} onCompleteTodo={completeTodo}></TodoList>
      <TodoCreate onCreate={createTodo} />
    </>
  )
}
