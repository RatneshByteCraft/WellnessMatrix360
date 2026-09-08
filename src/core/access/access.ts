export type Permission =
  | 'dashboard.view'
  | 'accounts.view' | 'accounts.manage'
  | 'inventory.view' | 'inventory.manage'
  | 'clients.view' | 'clients.manage'
  | 'admission.view' | 'admission.manage'
  | 'portal.view'
  | 'admin.view' | 'admin.manage'

export type CurrentUser = {
  id: string
  name: string
  role: string
  location: string
  permissions: Permission[]
}

export const currentUser: CurrentUser = {
  id: 'u-001',
  name: 'Aarav Mehta',
  role: 'Center Manager',
  location: 'Mumbai Centre',
  permissions: [
    'dashboard.view','accounts.view','accounts.manage','inventory.view','inventory.manage',
    'clients.view','clients.manage','admission.view','admission.manage','portal.view','admin.view'
  ]
}

export const can = (permission: Permission) => currentUser.permissions.includes(permission)
