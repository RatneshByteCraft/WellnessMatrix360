import { PageHeader, PrimaryButton, DataTable, Badge } from '../../../shared/components/ui'
export default function StockTransfers(){return <><PageHeader title="Inter-location Transfers" subtitle="Request, approve, dispatch and receive stock" actions={<PrimaryButton>New Transfer</PrimaryButton>}/>
<DataTable columns={['Transfer','From','To','Items','Requested','Status']} rows={[
['TRF-108','Mumbai','New Delhi','3','08 Sep 2026',<Badge tone="warning">Awaiting Approval</Badge>],
['TRF-107','Bengaluru','Gangtok','2','06 Sep 2026',<Badge tone="info">In Transit</Badge>]
]}/></>}
