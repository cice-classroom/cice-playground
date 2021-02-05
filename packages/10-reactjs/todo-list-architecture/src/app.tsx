import { FC, useEffect, useState } from 'react'
import { TodoList } from './features/todo/ui/todo-list/todo-list'
import { Todo } from './features/todo/domain/todo'
import { TodoCreate } from './features/todo/ui/todo-create/todo-create'
import { TodoRepositoryFactory } from './features/todo/infrastructure/todo-repository-factory'
import { GetTodosUseCase } from './features/todo/application/get-todos-use-case'

export const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  async function fetchTodos() {
    const todoRepository = TodoRepositoryFactory.build()
    const getTodosUseCase = new GetTodosUseCase(todoRepository)
    const todos = await getTodosUseCase.execute()
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
