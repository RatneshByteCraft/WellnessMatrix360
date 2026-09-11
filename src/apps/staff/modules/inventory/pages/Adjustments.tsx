import { PageHeader, PrimaryButton, DataTable, Badge } from '../../../../../shared/components/ui'
export default function Adjustments(){return <><PageHeader title="Stock Adjustments" subtitle="Controlled corrections for expiry, damage, count variance or approved write-off" actions={<PrimaryButton>New Adjustment</PrimaryButton>}/><DataTable columns={['Adjustment','Reason','Items','Location','Created By','Status']} rows={[
['ADJ-118','Physical count variance','2','Mumbai','Aarav Mehta',<Badge tone="warning">Awaiting Approval</Badge>],
['ADJ-117','Expired stock','1','New Delhi','Store User',<Badge tone="success">Posted</Badge>]
]}/></>}
