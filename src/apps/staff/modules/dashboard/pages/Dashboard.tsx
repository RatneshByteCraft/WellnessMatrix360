import { Card, PageHeader, Stat, Badge } from '../../../../../shared/components/ui'
import { CalendarDays, ClipboardList, PackageCheck, IndianRupee } from 'lucide-react'
export default function Dashboard(){
 const schedule=[['09:30','Psychiatric Review','Dr. Sharma'],['11:00','CBT Session','Riya Kapoor'],['14:00','Nutrition Review','Anita Rao']]
 return <><PageHeader title="Operations Dashboard" subtitle="Consolidated operational view for Mumbai Centre"/>
 <div className="stats-grid"><Stat label="Active Clients" value="8" helper="2 admissions this week"/><Stat label="Today's Sessions" value="14" helper="11 completed / scheduled"/><Stat label="Pending Tasks" value="9" helper="3 high priority"/><Stat label="Outstanding" value="₹4.86L" helper="Across active admissions"/></div>
 <div className="two-col">
 <Card title="Today at a glance"><div className="timeline">{schedule.map(x=><div className="timeline-row" key={x[0]}><span>{x[0]}</span><div><strong>{x[1]}</strong><small>{x[2]}</small></div><Badge tone="info">Scheduled</Badge></div>)}</div></Card>
 <Card title="Operational alerts"><div className="alert-list"><div><PackageCheck/><span><strong>4 inventory items</strong><small>Below reorder threshold</small></span></div><div><ClipboardList/><span><strong>3 admission documents</strong><small>Awaiting signature</small></span></div><div><IndianRupee/><span><strong>2 invoices overdue</strong><small>Follow-up required</small></span></div><div><CalendarDays/><span><strong>1 appointment conflict</strong><small>Requires rescheduling</small></span></div></div></Card>
 </div></>
}
