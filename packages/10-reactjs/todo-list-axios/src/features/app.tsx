import React, { useEffect, useState } from 'react'
import { TodoList } from './todo-list/todo-list'
import { Todo } from './todo'
import { TodoCreate } from './todo-create/todo-create'
import { Page } from '../core/components/page/page'
import { TodoRepository } from './todo-repository'

export function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    const todoRepository = new TodoRepository()
    const todos = await todoRepository.findAll()
    setTodos(todos)
  }

  async function createTodo(todoText: string) {
    const todoRepository = new TodoRepository()
    const newTodo: Todo = { id: Math.floor(Math.random() * 1000), text: todoText, completed: false }
    await todoRepository.create(newTodo)
    setTodos([...todos, newTodo])
    fetchTodos()
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
    <Page>
      <TodoList todos={todos} onCompleteTodo={completeTodo}></TodoList>
      <TodoCreate onCreate={createTodo} todos={todos} />
    </Page>
  )
}
