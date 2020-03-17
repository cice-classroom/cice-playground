import { Permission } from './permission'

export class PermissionManager {
  permissions: Permission[] = []

  can(permissions: Permission[]): boolean {
    return permissions.every(x => this.permissions.includes(x))
  }
}
