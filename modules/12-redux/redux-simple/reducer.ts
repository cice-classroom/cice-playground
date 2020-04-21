type Action = { type: 'INCREMENT' }

export function reducer(state: number = 0, action: Action): number {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
  }
}
