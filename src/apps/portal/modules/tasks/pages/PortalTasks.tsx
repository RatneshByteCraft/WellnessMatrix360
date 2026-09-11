import { PageHeader, DataTable, Badge } from '../../../../../shared/components/ui'
export default function PortalTasks(){return <><PageHeader title="Pending Tasks" subtitle="Forms, questionnaires and action items"/>
<DataTable columns={['Task','Due','Type','Status','Action']} rows={[['Complete GAD-7 questionnaire','Today 18:00','Assessment',<Badge tone="warning">Pending</Badge>,'Start'],['Confirm family session','09 Sep 2026','Confirmation',<Badge tone="warning">Pending</Badge>,'Review'],['Upload insurance document','10 Sep 2026','Document',<Badge tone="info">Open</Badge>,'Upload']]}/></>}
