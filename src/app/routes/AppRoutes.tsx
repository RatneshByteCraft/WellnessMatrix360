import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from './authRoutes'
import { PlatformRoutes } from './platformRoutes'
import { TenantAdminRoutes } from './tenantAdminRoutes'
import { StaffRoutes } from './staffRoutes'
import { PortalRoutes } from './portalRoutes'
import Placeholder from '../../modules/common/pages/Placeholder'

export function AppRoutes(){
   return <Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
   {AuthRoutes()}
   {PlatformRoutes()}
   {TenantAdminRoutes()}
   {StaffRoutes()}
   {PortalRoutes()}
    <Route path="*" element={<Placeholder />} />
   </Routes>
}
