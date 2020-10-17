import { Permission } from './permission'

export class PermissionManager {
  permissions: Permission[] = []

  can(requiredPermissions: Permission[]): boolean {
    return requiredPermissions.every(x => this.permissions.includes(x))
  }
}
