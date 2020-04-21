import { Actions } from './action-creators'

interface State {
  count: number
}

const initialState: State = {
  count: 0
}

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'INCREMENT_BY':
      return { count: state.count + action.by }
  }
}
