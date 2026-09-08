import { PageHeader, Stat, DataTable, Badge } from '../../../shared/components/ui'
export default function PortalBilling(){return <><PageHeader title="Billing & Documents" subtitle="Treatment costs, invoices, receipts and insurance status"/>
<div className="stats-grid"><Stat label="Total package" value="₹3,60,000"/><Stat label="Paid" value="₹2,00,000"/><Stat label="Outstanding" value="₹1,60,000"/><Stat label="Insurance" value="Self Pay"/></div>
<DataTable columns={['Document','Date','Amount','Status','Action']} rows={[['INV-2026-0098','08 Sep 2026','₹1,85,000',<Badge tone="warning">Part Paid</Badge>,'Download'],['RCT-4811','02 Sep 2026','₹1,00,000',<Badge tone="success">Receipt</Badge>,'Download']]}/></>}
