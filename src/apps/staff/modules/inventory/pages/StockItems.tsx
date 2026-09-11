import { PageHeader, PrimaryButton, DataTable, Badge } from '../../../../../shared/components/ui'
export default function StockItems(){return <><PageHeader title="Stock Items" subtitle="Master catalogue with location-level availability" actions={<PrimaryButton>+ Add Item</PrimaryButton>}/>
<DataTable columns={['Item','Category','Batch','Expiry','Available','Reorder Level','Status']} rows={[
['Sertraline 50mg','Medication','ST2308','Mar 2027','120','40',<Badge tone="success">Healthy</Badge>],
['Disposable Gloves','Medical Supply','DG441','Dec 2029','38','50',<Badge tone="warning">Low</Badge>],
['Yoga Mat','Therapy Prop','YM-01','—','18','5',<Badge tone="success">Healthy</Badge>]
]}/></>}
