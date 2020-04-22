import React, { useState } from 'react'
import { TodoList } from './todo-list/todo-list'
import { Todo } from './todo'
import { TodoCreate } from './todo-create/todo-create'

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  function createTodo(todoText: string) {
    const newTodo: Todo = { id: Math.floor(Math.random() * 1000), text: todoText, completed: false }
    setTodos([...todos, newTodo])
  }

  function completeTodo(id: number) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }

        return todo
      })
    )
  }

  return (
    <main>
      <TodoList todos={todos} onCompleteTodo={completeTodo}></TodoList>
      <TodoCreate onCreate={createTodo} todos={todos} />
    </main>
  )
}
