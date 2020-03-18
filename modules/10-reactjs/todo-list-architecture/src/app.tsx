import React, { useEffect, useState } from 'react'
import { TodoList } from './features/todo/ui/todo-list/todo-list'
import { Todo } from './features/todo/domain/todo'
import { TodoCreate } from './features/todo/ui/todo-create/todo-create'
import { Page } from './core/components/page/page'
import { TodoRepositoryFactory } from './features/todo/infrastructure/todo-repository-factory'

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const todoRepository = TodoRepositoryFactory.build()

  async function fetchTodos() {
    const todos = await todoRepository.findAll()
    setTodos(todos)
  }

  async function createTodo(todoText: string) {
    const newTodo: Todo = { id: Math.random() * 1000, text: todoText, completed: false }
    await todoRepository.create(newTodo)
    setTodos([...todos, newTodo])
    fetchTodos()
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
    <main>
      <TodoList todos={todos} onCompleteTodo={completeTodo}></TodoList>
      <TodoCreate onCreate={createTodo} todos={todos} />
    </main>
  )
}
