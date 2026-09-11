import { Route } from 'react-router-dom'
import { AppShell } from '../../shared/layouts/AppShell'
import Dashboard from '../../apps/staff/modules/dashboard/pages/Dashboard'
import AccountsDashboard from '../../apps/staff/modules/accounts/pages/AccountsDashboard'
import Invoices from '../../apps/staff/modules/accounts/pages/Invoices'
import Payments from '../../apps/staff/modules/accounts/pages/Payments'
import Packages from '../../apps/staff/modules/accounts/pages/Packages'
import Insurance from '../../apps/staff/modules/accounts/pages/Insurance'
import ClientLedger from '../../apps/staff/modules/accounts/pages/ClientLedger'
import InventoryDashboard from '../../apps/staff/modules/inventory/pages/InventoryDashboard'
import StockItems from '../../apps/staff/modules/inventory/pages/StockItems'
import StockTransfers from '../../apps/staff/modules/inventory/pages/StockTransfers'
import Vendors from '../../apps/staff/modules/inventory/pages/Vendors'
import Consumption from '../../apps/staff/modules/inventory/pages/Consumption'
import Adjustments from '../../apps/staff/modules/inventory/pages/Adjustments'
import Requisitions from '../../apps/staff/modules/inventory/pages/Requisitions'
import GoodsReceipt from '../../apps/staff/modules/inventory/pages/GoodsReceipt'
import CreateGoodsReceipt from '../../apps/staff/modules/inventory/pages/CreateGoodsReceipt'
import ClientList from '../../apps/staff/modules/clients/pages/ClientList'
import Client360 from '../../apps/staff/modules/clients/pages/Client360'
import RegisterClient from '../../apps/staff/modules/clients/pages/RegisterClient'
import AdmissionList from '../../apps/staff/modules/admission/pages/AdmissionList'
import AdmissionWizard from '../../apps/staff/modules/admission/pages/AdmissionWizard'

export function StaffRoutes() {
  return <Route element={<AppShell />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/accounts" element={<AccountsDashboard />} />
    <Route path="/accounts/invoices" element={<Invoices />} />
    <Route path="/accounts/payments" element={<Payments />} />
    <Route path="/accounts/packages" element={<Packages />} />
    <Route path="/accounts/insurance" element={<Insurance />} />
    <Route path="/accounts/ledger" element={<ClientLedger />} />
    <Route path="/inventory" element={<InventoryDashboard />} />
    <Route path="/inventory/items" element={<StockItems />} />
    <Route path="/inventory/transfers" element={<StockTransfers />} />
    <Route path="/inventory/vendors" element={<Vendors />} />
    <Route path="/inventory/consumption" element={<Consumption />} />
    <Route path="/inventory/adjustments" element={<Adjustments />} />
    <Route path="/inventory/requisitions" element={<Requisitions />} />
    <Route path="/inventory/goods-receipt" element={<GoodsReceipt />} />
    <Route path="/inventory/goods-receipt/new" element={<CreateGoodsReceipt />} />
    <Route path="/clients" element={<ClientList />} />
    <Route path="/clients/register" element={<RegisterClient />} />
    <Route path="/clients/:id" element={<Client360 />} />
    <Route path="/admission" element={<AdmissionList />} />
    <Route path="/admission/new" element={<AdmissionWizard />} />
  </Route>
}
