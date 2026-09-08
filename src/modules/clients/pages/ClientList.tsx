import { Link } from 'react-router-dom'
import { PageHeader, DataTable, Badge } from '../../../shared/components/ui'
export default function ClientList(){return <><PageHeader title="Client Records" subtitle="Canonical client registry — one record per client across all modules" actions={<Link className="btn primary" to="/clients/register">+ Register Client</Link>}/>
<div className="filters"><input placeholder="Search name, mobile, client ID"/><select><option>All statuses</option><option>Admitted</option><option>Discharged</option></select><select><option>Mumbai Centre</option><option>New Delhi</option></select></div>
<DataTable columns={['Client ID','Client','Program','Care Team','Admission','Status','Action']} rows={[
['CL-10082','Kabir Mehra','30-Day Residential','Dr Sharma + 5','18 Aug 2026',<Badge tone="success">Admitted</Badge>,<Link to="/clients/CL-10082">Open 360</Link>],
['CL-10081','Ayesha Khan','15-Day Detox','Dr Iyer + 4','27 Aug 2026',<Badge tone="success">Admitted</Badge>,<Link to="/clients/CL-10081">Open 360</Link>],
['CL-10079','Neil Dsouza','10-Day Detox','Dr Sharma + 3','10 Aug 2026',<Badge>Discharged</Badge>,<Link to="/clients/CL-10079">Open 360</Link>]
]}/></>}
