import { Route } from 'react-router-dom'
import { ClientPortalShell } from '../../shared/layouts/ClientPortalShell'
import ClientPortalHome from '../../apps/portal/modules/dashboard/pages/ClientPortalHome'
import PortalSchedule from '../../apps/portal/modules/schedule/pages/PortalSchedule'
import PortalReports from '../../apps/portal/modules/reports/pages/PortalReports'
import PortalPrescriptions from '../../apps/portal/modules/medications/pages/PortalPrescriptions'
import PortalTasks from '../../apps/portal/modules/tasks/pages/PortalTasks'
import PortalBilling from '../../apps/portal/modules/billing/pages/PortalBilling'
import PortalMessages from '../../apps/portal/modules/messages/pages/PortalMessages'

export function PortalRoutes() {
  return <Route element={<ClientPortalShell />}>
    <Route path="/client-portal" element={<ClientPortalHome />} />
    <Route path="/client-portal/schedule" element={<PortalSchedule />} />
    <Route path="/client-portal/reports" element={<PortalReports />} />
    <Route path="/client-portal/prescriptions" element={<PortalPrescriptions />} />
    <Route path="/client-portal/tasks" element={<PortalTasks />} />
    <Route path="/client-portal/billing" element={<PortalBilling />} />
    <Route path="/client-portal/messages" element={<PortalMessages />} />
  </Route>
}
