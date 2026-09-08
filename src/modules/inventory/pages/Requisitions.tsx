import { PageHeader, PrimaryButton, DataTable, Badge } from '../../../shared/components/ui'
export default function Requisitions(){return <><PageHeader title="Purchase Requisitions" subtitle="Internal demand request before procurement" actions={<PrimaryButton>New Requisition</PrimaryButton>}/><DataTable columns={['Requisition','Location','Items','Needed By','Requester','Status']} rows={[
['REQ-441','Mumbai','5','12 Sep 2026','Residential Care',<Badge tone="warning">Pending Approval</Badge>],
['REQ-440','Bengaluru','3','10 Sep 2026','Store',<Badge tone="success">Approved</Badge>]
]}/></>}
