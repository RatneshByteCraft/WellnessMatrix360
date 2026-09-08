import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '../../shared/layouts/AppShell'
import { ClientPortalShell } from '../../shared/layouts/ClientPortalShell'
import { AuthLayout } from '../../shared/layouts/AuthLayout'
import Dashboard from '../../modules/dashboard/pages/Dashboard'
import Login from '../../modules/auth/pages/Login'
import ForgotPassword from '../../modules/auth/pages/ForgotPassword'
import AccountsDashboard from '../../modules/accounts/pages/AccountsDashboard'
import Invoices from '../../modules/accounts/pages/Invoices'
import Payments from '../../modules/accounts/pages/Payments'
import Packages from '../../modules/accounts/pages/Packages'
import Insurance from '../../modules/accounts/pages/Insurance'
import ClientLedger from '../../modules/accounts/pages/ClientLedger'
import InventoryDashboard from '../../modules/inventory/pages/InventoryDashboard'
import StockItems from '../../modules/inventory/pages/StockItems'
import StockTransfers from '../../modules/inventory/pages/StockTransfers'
import Vendors from '../../modules/inventory/pages/Vendors'
import Consumption from '../../modules/inventory/pages/Consumption'
import Adjustments from '../../modules/inventory/pages/Adjustments'
import Requisitions from '../../modules/inventory/pages/Requisitions'
import GoodsReceipt from '../../modules/inventory/pages/GoodsReceipt'
import CreateGoodsReceipt from '../../modules/inventory/pages/CreateGoodsReceipt'
import ClientList from '../../modules/clients/pages/ClientList'
import Client360 from '../../modules/clients/pages/Client360'
import RegisterClient from '../../modules/clients/pages/RegisterClient'
import AdmissionList from '../../modules/admission/pages/AdmissionList'
import AdmissionWizard from '../../modules/admission/pages/AdmissionWizard'
import ClientPortalHome from '../../modules/clientPortal/pages/ClientPortalHome'
import PortalSchedule from '../../modules/clientPortal/pages/PortalSchedule'
import PortalReports from '../../modules/clientPortal/pages/PortalReports'
import PortalPrescriptions from '../../modules/clientPortal/pages/PortalPrescriptions'
import PortalTasks from '../../modules/clientPortal/pages/PortalTasks'
import PortalBilling from '../../modules/clientPortal/pages/PortalBilling'
import PortalMessages from '../../modules/clientPortal/pages/PortalMessages'
import RolesSecurity from '../../modules/admin/pages/RolesSecurity'
import Users from '../../modules/admin/pages/Users'
import Locations from '../../modules/admin/pages/Locations'
import Configuration from '../../modules/admin/pages/Configuration'
import Placeholder from '../../modules/common/pages/Placeholder'
import InviteUser from '../../modules/admin/pages/InviteUser'
export function AppRoutes(){
 return <Routes>
   <Route path="/" element={<Navigate to="/login" replace/>}/>
   <Route element={<AuthLayout/>}>
     <Route path="/login" element={<Login/>}/>
     <Route path="/forgot-password" element={<ForgotPassword/>}/>
   </Route>
   <Route element={<AppShell/>}>
     <Route path="/dashboard" element={<Dashboard/>}/>
     <Route path="/accounts" element={<AccountsDashboard/>}/>
     <Route path="/accounts/invoices" element={<Invoices/>}/>
     <Route path="/accounts/payments" element={<Payments/>}/>
     <Route path="/accounts/packages" element={<Packages/>}/>
     <Route path="/accounts/insurance" element={<Insurance/>}/>
     <Route path="/accounts/ledger" element={<ClientLedger/>}/>
     <Route path="/inventory" element={<InventoryDashboard/>}/>
     <Route path="/inventory/items" element={<StockItems/>}/>
     <Route path="/inventory/transfers" element={<StockTransfers/>}/>
     <Route path="/inventory/vendors" element={<Vendors/>}/>
     <Route path="/inventory/consumption" element={<Consumption/>}/>
     <Route path="/inventory/adjustments" element={<Adjustments/>}/>
     <Route path="/inventory/requisitions" element={<Requisitions/>}/>
     <Route path="/inventory/goods-receipt" element={<GoodsReceipt/>}/>
    <Route path="/inventory/goods-receipt/new" element={<CreateGoodsReceipt/>}/>
     <Route path="/clients" element={<ClientList/>}/>
    <Route path="/clients/register" element={<RegisterClient/>}/>
     <Route path="/clients/:id" element={<Client360/>}/>
     <Route path="/admission" element={<AdmissionList/>}/>
     <Route path="/admission/new" element={<AdmissionWizard/>}/>
     <Route path="/admin/roles" element={<RolesSecurity/>}/>
     <Route path="/admin/users" element={<Users/>}/>
     <Route path="/admin/locations" element={<Locations/>}/>
     <Route path="/admin/configuration" element={<Configuration/>}/>
    <Route path="/admin/invite-user" element={<InviteUser/>}/>
   </Route>
   <Route element={<ClientPortalShell/>}>
     <Route path="/client-portal" element={<ClientPortalHome/>}/>
     <Route path="/client-portal/schedule" element={<PortalSchedule/>}/>
     <Route path="/client-portal/reports" element={<PortalReports/>}/>
     <Route path="/client-portal/prescriptions" element={<PortalPrescriptions/>}/>
     <Route path="/client-portal/tasks" element={<PortalTasks/>}/>
     <Route path="/client-portal/billing" element={<PortalBilling/>}/>
     <Route path="/client-portal/messages" element={<PortalMessages/>}/>
   </Route>
   <Route path="*" element={<Placeholder/>}/>
 </Routes>
}
