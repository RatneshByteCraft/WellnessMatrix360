import { PageHeader, PrimaryButton, DataTable, Badge } from '../../../../../shared/components/ui'
export default function Consumption(){return <><PageHeader title="Stock Issue & Consumption" subtitle="Record accountable consumption against centre, client or operational use" actions={<PrimaryButton>Record Consumption</PrimaryButton>}/><DataTable columns={['Reference','Item','Qty','Issued To / For','Location','Date','Status']} rows={[
['CON-908','Disposable Gloves','12','Residential Care','Mumbai','08 Sep 2026',<Badge tone="success">Posted</Badge>],
['CON-907','Sertraline 50mg','30','Client CL-10082','Mumbai','08 Sep 2026',<Badge tone="success">Posted</Badge>]
]}/></>}
