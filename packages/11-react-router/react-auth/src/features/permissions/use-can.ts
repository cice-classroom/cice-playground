import { Permission } from './permission'
import { useContext } from 'react'
import { Role } from './role'
import { PermissionManager } from './permission-manager'
import { RoleContext } from '../role-context'

export function useCan(requiredPermissions: Permission[]) {
  const { role } = useContext(RoleContext)

  const permissionsManager = new PermissionManager()
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

  return permissionsManager.can(requiredPermissions)
}
