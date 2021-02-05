import { GetTodosUseCase } from './get-todos-use-case'
import { TodoRepository } from '../domain/todo-repository'
import { instance, mock, when } from 'ts-mockito'

describe('GetTodosUseCase', () => {
  it('should get the todos', async () => {
    const { todoRepository, getTodosUseCase } = setup()
    when(todoRepository.findAll()).thenResolve([{ id: 1, text: 'foo', completed: false }])

    const actual = await getTodosUseCase.execute()

    expect(actual).toEqual([{ id: 1, text: 'foo', completed: false }])
  })
})

function setup() {
  const todoRepository = mock<TodoRepository>()

  return {
    todoRepository,
    getTodosUseCase: new GetTodosUseCase(instance(todoRepository))
  }
}
