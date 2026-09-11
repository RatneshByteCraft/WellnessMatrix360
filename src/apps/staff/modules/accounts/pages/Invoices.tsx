import { PageHeader, PrimaryButton, DataTable, Badge } from '../../../../../shared/components/ui'
export default function Invoices(){return <><PageHeader title="Invoices" subtitle="GST compliant invoices and billing statements" actions={<PrimaryButton>+ New Invoice</PrimaryButton>}/>
<DataTable columns={['Invoice','Client','Date','Amount','Status','Actions']} rows={[
['INV-2026-0098','Kabir Mehra','08 Sep 2026','₹1,85,000',<Badge tone="warning">Part Paid</Badge>,'View'],
['INV-2026-0097','Ayesha Khan','07 Sep 2026','₹92,500',<Badge tone="success">Paid</Badge>,'View'],
['INV-2026-0096','Neil Dsouza','05 Sep 2026','₹1,40,000',<Badge tone="danger">Overdue</Badge>,'View'],
]}/></>}
