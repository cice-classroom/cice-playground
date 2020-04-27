import { Todo } from '../../domain/todo'
import { AppDispatch, Thunk } from '../store/store'

type TodoPayload = Pick<Todo, 'id' | 'text'>

interface SaveTodoAction {
  type: 'SAVE_TODO'
  payload: Todo
}

interface CreateTodoAction {
  type: 'CREATE_TODO'
  payload: TodoPayload
}

interface EditTodoAction {
  type: 'EDIT_TODO'
  payload: TodoPayload
}

interface RemoveTodoAction {
  type: 'REMOVE_TODO'
  payload: {
    id: number
  }
}

export const createTodo = (payload: TodoPayload): TodoAction => {
  return {
    type: 'CREATE_TODO',
    payload
  }
}

export const editTodo = (payload: TodoPayload): TodoAction => {
  return {
    type: 'EDIT_TODO',
    payload
  }
}

export const removeTodo = (payload: { id: number }): TodoAction => {
  return {
    type: 'REMOVE_TODO',
    payload
  }
}

export const saveTodo = (payload: TodoPayload): Thunk => {
  return (dispatch: AppDispatch) => {
    setTimeout(() => {
      const todo: Todo = {
        ...payload,
        completed: false
      }
      localStorage.setItem('todo', JSON.stringify(todo))
      dispatch(createTodo(payload))
    }, 1_000)
  }
}

export type TodoAction = CreateTodoAction | EditTodoAction | RemoveTodoAction | SaveTodoAction
