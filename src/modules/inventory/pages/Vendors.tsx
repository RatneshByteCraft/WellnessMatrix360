import { PageHeader, PrimaryButton, DataTable } from '../../../shared/components/ui'
export default function Vendors(){return <><PageHeader title="Vendors" subtitle="Central supplier master" actions={<PrimaryButton>+ Add Vendor</PrimaryButton>}/>
<DataTable columns={['Vendor','Category','GSTIN','Contact','Status']} rows={[
['Medline Healthcare','Pharmacy & Supplies','27AAACM0001A1Z5','procurement@medline.example','Active'],
['Wellness Studio Supply','Therapy Props','29AAACW0002B1Z4','sales@wellness.example','Active']
]}/></>}
