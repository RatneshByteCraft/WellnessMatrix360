import { PageHeader, PrimaryButton, DataTable, Badge } from '../../../../../shared/components/ui'
export default function Insurance(){return <><PageHeader title="Insurance & Pre-Authorization" subtitle="Coverage verification, authorization and claim tracking" actions={<PrimaryButton>New Pre-Auth</PrimaryButton>}/><DataTable columns={['Case','Client','Insurer','Coverage','Pre-Auth','Claim Status','Action']} rows={[
['INS-2108','Rohan Sen','Example Health','₹2,00,000',<Badge tone="warning">Pending</Badge>,<Badge>Not Filed</Badge>,'Open'],
['INS-2107','Mira Shah','Example Assurance','₹1,50,000',<Badge tone="success">Approved</Badge>,<Badge tone="info">In Review</Badge>,'Open']
]}/></>}
