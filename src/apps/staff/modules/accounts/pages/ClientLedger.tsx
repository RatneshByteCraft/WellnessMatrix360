import { PageHeader, DataTable } from '../../../../../shared/components/ui'
export default function ClientLedger(){return <><PageHeader title="Client Ledger" subtitle="Read-only accounting view of charges, invoices, receipts and adjustments by client"/><DataTable columns={['Date','Reference','Type','Description','Debit','Credit','Balance']} rows={[
['08 Sep 2026','INV-2026-0098','Invoice','Residential package installment','₹1,85,000','—','₹1,85,000'],
['08 Sep 2026','RCT-4811','Receipt','Bank transfer','—','₹1,00,000','₹85,000']
]}/></>}
