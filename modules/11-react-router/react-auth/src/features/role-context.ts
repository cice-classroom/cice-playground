import { createContext } from 'react'
import { Role } from './permissions/role'

export const RoleContext = createContext<{ role: Role; setRole: (role: Role) => void }>({
  role: 'user',
  setRole: () => {}
})
