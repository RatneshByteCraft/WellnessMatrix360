import { Link } from 'react-router-dom'
import { PageHeader, DataTable, Badge } from '../../../shared/components/ui'
export default function AdmissionList(){return <><PageHeader title="Admissions" subtitle="Intake, identity verification, forms, consents and admission completion" actions={<Link className="btn primary" to="/admission/new">+ New Admission</Link>}/>
<DataTable columns={['Admission','Client','Centre','Started','Progress','Status','Action']} rows={[
['ADM-6081','Rohan Sen','Mumbai','08 Sep 2026','75%',<Badge tone="warning">Documents Pending</Badge>,<Link to="/admission/new">Continue</Link>],
['ADM-6080','Ayesha Khan','Mumbai','27 Aug 2026','100%',<Badge tone="success">Completed</Badge>,'View'],
]}/></>}
