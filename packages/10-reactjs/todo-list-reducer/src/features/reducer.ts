import { Todo } from './todo'
import { Action } from './action'

export const reducer = (todos: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case 'CREATE_TODO':
      const todo: Todo = {
        completed: false,
        id: action.payload.id,
        text: action.payload.text,
      }
      return [...todos, todo]
    case 'COMPLETE_TODO':
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }

        return todo
      })
  }
}
