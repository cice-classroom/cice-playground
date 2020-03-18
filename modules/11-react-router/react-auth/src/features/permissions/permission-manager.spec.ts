import { Permission } from './permission'
import { PermissionManager } from './permission-manager'

describe('PermissionManager', () => {
  it('should check if a single permission is matched', () => {
    const permissionManager = new PermissionManager()
    permissionManager.permissions = [Permission.CAN_EDIT_USER]

    const actual = permissionManager.can([Permission.CAN_EDIT_USER])

    expect(actual).toBe(true)
  })

  it('should check if one of several permissions are matched', () => {
    const permissionManager = new PermissionManager()
    permissionManager.permissions = [Permission.CAN_EDIT_USER, Permission.CAN_SUBSCRIBE]

    const actual = permissionManager.can([Permission.CAN_EDIT_USER])

    expect(actual).toBe(true)
  })

  it('should check if all of several permissions are matched', () => {
    const permissionManager = new PermissionManager()
    permissionManager.permissions = [Permission.CAN_EDIT_USER, Permission.CAN_SUBSCRIBE]

    const actual = permissionManager.can([Permission.CAN_SUBSCRIBE, Permission.CAN_EDIT_USER])

    expect(actual).toBe(true)
  })

  it('should check if one of the permissions is not matched', () => {
    const permissionManager = new PermissionManager()
    permissionManager.permissions = [Permission.CAN_EDIT_USER]

    const actual = permissionManager.can([Permission.CAN_SUBSCRIBE])

    expect(actual).toBe(false)
  })

  it('should check if one of the permissions of several permissions is not matched', () => {
    const permissionManager = new PermissionManager()
    permissionManager.permissions = [Permission.CAN_EDIT_USER]

    const actual = permissionManager.can([Permission.CAN_SUBSCRIBE])

    expect(actual).toBe(false)
  })
})
