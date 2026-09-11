import { useState } from 'react'
import { PageHeader, PrimaryButton, Card, Badge } from '../../../../../shared/components/ui'
const modules=['Dashboard','Admission','Client Records','Accounts','Inventory','Client Portal','Clinical Assessments','Therapy Sessions','Medication','Behavioral Tracker','Family Program','Aftercare','Analytics','Administration']
const initial=['Dashboard','Admission','Client Records','Accounts','Inventory','Administration']
export default function RolesSecurity(){
 const [selected,setSelected]=useState(initial)
 return <><PageHeader title="Roles & Security" subtitle="Dynamic RBAC — modules and permissions are configured, never hardcoded to role names" actions={<PrimaryButton>+ Create Role</PrimaryButton>}/>
 <div className="security-layout"><Card title="Roles"><div className="role-list">{['Center Manager','Psychiatrist','Psychologist','Residential Care Staff','Administrative Staff','Client','Family Member'].map((r,i)=><button className={i===0?'active':''} key={r}><span>{r}</span><Badge>{i===0?'8 users':'Configured'}</Badge></button>)}</div></Card>
 <Card title="Center Manager"><div className="permission-head"><div><strong>Module access</strong><p className="muted">Only tenant-subscribed modules can be assigned.</p></div><PrimaryButton>Save Role</PrimaryButton></div>
 <div className="permission-grid">{modules.map(m=><label key={m} className="permission-row"><input type="checkbox" checked={selected.includes(m)} onChange={e=>setSelected(e.target.checked?[...selected,m]:selected.filter(x=>x!==m))}/><div><strong>{m}</strong><small>View • Create • Edit • Approve • Delete as separately configurable actions</small></div></label>)}</div>
 </Card></div></>
}
