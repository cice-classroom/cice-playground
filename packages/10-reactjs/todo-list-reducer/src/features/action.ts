export type Action =
  | { type: 'CREATE_TODO'; payload: { id: number; text: string } }
  | { type: 'COMPLETE_TODO'; payload: { id: number } }
