import { useNavigate } from 'react-router-dom'
import {
  Badge,
  DataTable,
  PageHeader,
  PrimaryButton,
} from '../../../shared/components/ui'

export default function GoodsReceipt() {
  const navigate = useNavigate()

  return (
    <>
      <PageHeader
        title="Goods Receipt"
        subtitle="Receive vendor supplies with batch, expiry and quantity controls"
        actions={
          <PrimaryButton
            onClick={() =>
              navigate('/inventory/goods-receipt/new')
            }
          >
            + Receive Goods
          </PrimaryButton>
        }
      />

      <DataTable
        columns={[
          'GRN',
          'Vendor',
          'PO / Ref',
          'Items',
          'Location',
          'Received',
          'Status',
        ]}
        rows={[
          [
            'GRN-781',
            'Medline Healthcare',
            'PO-5012',
            '8',
            'Mumbai',
            '08 Sep 2026',
            <Badge tone="success">Posted</Badge>,
          ],
        ]}
      />
    </>
  )
}