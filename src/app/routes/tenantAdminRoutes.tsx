import { Route } from 'react-router-dom'
import { AppShell } from '../../shared/layouts/AppShell'
import RolesSecurity from '../../apps/tenant-admin/modules/roles/pages/RolesSecurity'
import Users from '../../apps/tenant-admin/modules/users/pages/Users'
import InviteUser from '../../apps/tenant-admin/modules/users/pages/InviteUser'
import Locations from '../../apps/tenant-admin/modules/locations/pages/Locations'
import Configuration from '../../apps/tenant-admin/modules/configuration/pages/Configuration'

export function TenantAdminRoutes() {
  return <Route element={<AppShell />}>
    <Route path="/admin/roles" element={<RolesSecurity />} />
    <Route path="/admin/users" element={<Users />} />
    <Route path="/admin/invite-user" element={<InviteUser />} />
    <Route path="/admin/locations" element={<Locations />} />
    <Route path="/admin/configuration" element={<Configuration />} />
  </Route>
}
