export interface User {
  name: string
  surname: string
  birth: Date
  id: string
  payments: string[]
}

export class UserMother {
  static susan(): User {
    return {
      name: 'Susan',
      birth: new Date(1990, 1, 14),
      id: '42235145L',
      surname: 'Fowler',
      payments: ['ada2132121', 'addsa2134'],
    }
  }

  /**
   * Martin representa un usuario nuevo en el sistema
   */
  static martin(): User {
    return {
      name: 'Martin',
      birth: new Date(1989, 1, 14),
      id: '42235145L',
      surname: 'Fowler',
      payments: [],
    }
  }
}
