import { Permission } from './permission'
import { useEffect, useState } from 'react'
import { Role } from './role'
import { PermissionManager } from './permission-manager'

export function useCan() {
  const [role, setRole] = useState<Role>('user')
  const [permissions, setPermissions] = useState<Permission[]>([])

  const permissionsManager = new PermissionManager()

  useEffect(() => {
    const roles: Record<Role, Permission[]> = {
      get user() {
        return [Permission.CAN_SUBSCRIBE]
      },
      get admin() {
        return [...this.user, Permission.CAN_EDIT_USER]
      },
      get superadmin() {
        return [...this.admin, Permission.DELETE_ENTITIES]
      }
    }
    permissionsManager.permissions = roles[role]
  }, [role])

  return {
    can: (allowedPermissions: Permission[]) => {
      setPermissions(allowedPermissions)
      return permissionsManager.can(permissions)
    },
    setRole: (role: Role) => setRole(role)
  }
}
