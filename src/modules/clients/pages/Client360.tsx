import { Card, PageHeader, Badge, DataTable } from '../../../shared/components/ui'
export default function Client360(){return <><PageHeader title="Kabir Mehra" subtitle="CL-10082 • Mumbai Centre • 30-Day Residential"/>
<div className="client-banner"><div className="avatar large">KM</div><div><h2>Kabir Mehra</h2><p>Male • 34 years • +91 98XXXXXX10</p></div><Badge tone="success">Admitted</Badge></div>
<div className="tabs"><button className="active">Overview</button><button>Clinical</button><button>Care Team</button><button>Sessions</button><button>Medications</button><button>Documents</button><button>Billing</button><button>Timeline</button></div>
<div className="two-col">
<Card title="Admission summary"><dl className="detail-grid"><div><dt>Admitted</dt><dd>18 Aug 2026, 10:30</dd></div><div><dt>Room</dt><dd>Suite M-204</dd></div><div><dt>Program</dt><dd>30-Day Residential</dd></div><div><dt>Primary clinician</dt><dd>Dr. N. Sharma</dd></div></dl></Card>
<Card title="Safety & consent"><div className="stack"><Badge tone="warning">Allergy: Penicillin</Badge><Badge tone="success">Family access consent active</Badge><Badge tone="success">Telehealth consent signed</Badge></div></Card>
</div>
<Card title="Upcoming care"><DataTable columns={['Date / Time','Activity','Provider','Status']} rows={[
['09 Sep, 10:00','Psychiatric Review','Dr N. Sharma',<Badge tone="info">Scheduled</Badge>],
['09 Sep, 14:00','CBT Session','Riya Kapoor',<Badge tone="info">Scheduled</Badge>]
]}/></Card></>}
