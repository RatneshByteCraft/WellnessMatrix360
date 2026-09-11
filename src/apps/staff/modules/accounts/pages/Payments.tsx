import { PageHeader, PrimaryButton, DataTable, Badge } from '../../../../../shared/components/ui'
export default function Payments(){return <><PageHeader title="Payments & Receipts" subtitle="Collections, allocations and receipts" actions={<PrimaryButton>Record Payment</PrimaryButton>}/>
<DataTable columns={['Receipt','Client','Mode','Reference','Amount','Status']} rows={[
['RCT-4812','Ayesha Khan','UPI','TXN984104','₹92,500',<Badge tone="success">Posted</Badge>],
['RCT-4811','Kabir Mehra','Bank Transfer','UTR109448','₹1,00,000',<Badge tone="success">Posted</Badge>]
]}/></>}
