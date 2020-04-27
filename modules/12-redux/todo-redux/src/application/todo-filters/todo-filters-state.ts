export const initialState: TodoFiltersState = {
  visibility: 'ALL'
}

export interface TodoFiltersState {
  visibility: 'ALL' | 'COMPLETED' | 'TODO'
}
