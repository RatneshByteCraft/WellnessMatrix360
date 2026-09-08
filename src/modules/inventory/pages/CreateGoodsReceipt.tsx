import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Plus, Save, Trash2, Truck } from 'lucide-react'
import { Badge, Card, PageHeader, PrimaryButton, SecondaryButton } from '../../../shared/components/ui'

type ReceiptItem = {
  id: string
  itemCode: string
  itemName: string
  orderedQty: number
  receivedQty: number
  acceptedQty: number
  rejectedQty: number
  unit: string
  batchNo: string
  manufacturingDate: string
  expiryDate: string
  unitCost: number
}

type GoodsReceiptForm = {
  vendorId: string
  purchaseOrderRef: string
  invoiceNo: string
  invoiceDate: string
  receivedDate: string
  locationId: string
  receivedBy: string
  transporter: string
  deliveryChallanNo: string
  remarks: string
}

const initialForm: GoodsReceiptForm = {
  vendorId: '', purchaseOrderRef: '', invoiceNo: '', invoiceDate: '',
  receivedDate: new Date().toISOString().slice(0, 10), locationId: 'mumbai-centre',
  receivedBy: 'Aarav Mehta', transporter: '', deliveryChallanNo: '', remarks: '',
}

const itemCatalog: Record<string, string> = {
  'MED-SER-050': 'Sertraline 50mg',
  'SUP-GLV-001': 'Disposable Gloves',
  'THER-YM-001': 'Yoga Mat',
}

function createItem(overrides: Partial<ReceiptItem> = {}): ReceiptItem {
  return {
    id: crypto.randomUUID(), itemCode: '', itemName: '', orderedQty: 0, receivedQty: 0,
    acceptedQty: 0, rejectedQty: 0, unit: 'Unit', batchNo: '', manufacturingDate: '',
    expiryDate: '', unitCost: 0, ...overrides,
  }
}

export default function CreateGoodsReceipt() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [items, setItems] = useState([createItem({ itemCode: 'MED-SER-050', itemName: 'Sertraline 50mg', orderedQty: 100, receivedQty: 100, acceptedQty: 100, unit: 'Tablet', unitCost: 8.5 })])
  const [saving, setSaving] = useState(false)

  const totals = useMemo(() => items.reduce((acc, item) => ({
    ordered: acc.ordered + Number(item.orderedQty || 0),
    received: acc.received + Number(item.receivedQty || 0),
    accepted: acc.accepted + Number(item.acceptedQty || 0),
    rejected: acc.rejected + Number(item.rejectedQty || 0),
    value: acc.value + Number(item.acceptedQty || 0) * Number(item.unitCost || 0),
  }), { ordered: 0, received: 0, accepted: 0, rejected: 0, value: 0 }), [items])

  function updateForm<K extends keyof GoodsReceiptForm>(field: K, value: GoodsReceiptForm[K]) {
    setForm(previous => ({ ...previous, [field]: value }))
  }

  function updateItem(id: string, field: keyof ReceiptItem, value: string | number) {
    setItems(previous => previous.map(item => item.id === id ? { ...item, [field]: value } : item))
  }

  function validate() {
    if (!form.vendorId) return window.alert('Please select a vendor.'), false
    if (!form.receivedDate) return window.alert('Please enter the received date.'), false
    if (!form.locationId) return window.alert('Please select the receiving location.'), false
    if (!items.length) return window.alert('At least one received item is required.'), false
    for (const item of items) {
      if (!item.itemName.trim()) return window.alert('Every GRN line must contain an inventory item.'), false
      if (Number(item.receivedQty) <= 0) return window.alert(`Received quantity must be greater than zero for ${item.itemName}.`), false
      if (Number(item.acceptedQty) + Number(item.rejectedQty) !== Number(item.receivedQty)) return window.alert(`Accepted + rejected quantity must equal received quantity for ${item.itemName}.`), false
      if (item.expiryDate && item.manufacturingDate && new Date(item.expiryDate) <= new Date(item.manufacturingDate)) return window.alert(`Expiry date must be after manufacturing date for ${item.itemName}.`), false
    }
    return true
  }

  async function handleSave(postImmediately = false) {
    if (!validate()) return
    setSaving(true)
    try {
      console.log('Goods Receipt payload:', { ...form, items, postImmediately })
      await new Promise(resolve => setTimeout(resolve, 500))
      navigate('/inventory/goods-receipt')
    } finally {
      setSaving(false)
    }
  }

  const back = () => navigate('/inventory/goods-receipt')
  const changeReceived = (item: ReceiptItem, receivedQty: number) => {
    updateItem(item.id, 'receivedQty', receivedQty)
    updateItem(item.id, 'acceptedQty', receivedQty)
    updateItem(item.id, 'rejectedQty', 0)
  }
  const changeAccepted = (item: ReceiptItem, acceptedQty: number) => {
    updateItem(item.id, 'acceptedQty', acceptedQty)
    updateItem(item.id, 'rejectedQty', Math.max(0, Number(item.receivedQty) - acceptedQty))
  }

  return <>
    <PageHeader title="Receive Goods" subtitle="Create a Goods Receipt Note for inventory physically received from a vendor." actions={<div className="page-actions"><SecondaryButton onClick={back}><ArrowLeft size={16} />Back</SecondaryButton><SecondaryButton onClick={() => handleSave(false)}><Save size={16} />Save Draft</SecondaryButton><PrimaryButton onClick={() => handleSave(true)}><CheckCircle2 size={16} />{saving ? 'Posting...' : 'Post GRN'}</PrimaryButton></div>} />
    <div className="grn-summary-strip"><div><span>Receipt Type</span><strong>Vendor Receipt</strong></div><div><span>Receiving Centre</span><strong>Mumbai Centre</strong></div><div><span>Status</span><Badge tone="warning">Draft</Badge></div><div><span>GRN Number</span><strong>Generated on Posting</strong></div></div>

    <Card title="Vendor & Receipt Information"><div className="form-grid">
      <label>Vendor *<select value={form.vendorId} onChange={event => updateForm('vendorId', event.target.value)}><option value="">Select vendor</option><option value="vendor-medline">Medline Healthcare</option><option value="vendor-wellness">Wellness Studio Supply</option></select></label>
      <label>Purchase Order / Reference<input value={form.purchaseOrderRef} onChange={event => updateForm('purchaseOrderRef', event.target.value)} placeholder="PO-5012" /></label>
      <label>Vendor Invoice Number<input value={form.invoiceNo} onChange={event => updateForm('invoiceNo', event.target.value)} placeholder="Supplier invoice number" /></label>
      <label>Vendor Invoice Date<input type="date" value={form.invoiceDate} onChange={event => updateForm('invoiceDate', event.target.value)} /></label>
      <label>Goods Received Date *<input type="date" value={form.receivedDate} onChange={event => updateForm('receivedDate', event.target.value)} /></label>
      <label>Receiving Location *<select value={form.locationId} onChange={event => updateForm('locationId', event.target.value)}><option value="mumbai-centre">Mumbai Centre</option><option value="new-delhi-centre">New Delhi Centre</option><option value="bengaluru-centre">Bengaluru Centre</option><option value="gangtok-centre">Gangtok Centre</option></select></label>
      <label>Received By<input value={form.receivedBy} readOnly /></label>
      <label>Delivery Challan Number<input value={form.deliveryChallanNo} onChange={event => updateForm('deliveryChallanNo', event.target.value)} /></label>
      <label>Transporter / Courier<input value={form.transporter} onChange={event => updateForm('transporter', event.target.value)} /></label>
    </div></Card>

    <Card title="Received Items" actions={<PrimaryButton onClick={() => setItems(previous => [...previous, createItem()])}><Plus size={16} />Add Item</PrimaryButton>}><div className="grn-items-table"><table><thead><tr><th>Item</th><th>Ordered</th><th>Received *</th><th>Accepted *</th><th>Rejected</th><th>Unit</th><th>Batch No.</th><th>Mfg Date</th><th>Expiry Date</th><th>Unit Cost</th><th /></tr></thead><tbody>{items.map(item => <tr key={item.id}>
      <td><select value={item.itemCode} onChange={event => { const code = event.target.value; updateItem(item.id, 'itemCode', code); updateItem(item.id, 'itemName', itemCatalog[code] ?? '') }}><option value="">Select item</option>{Object.entries(itemCatalog).map(([code, name]) => <option key={code} value={code}>{name}</option>)}</select>{item.itemName && <small className="table-helper">{item.itemCode}</small>}</td>
      <td><input type="number" min="0" value={item.orderedQty} onChange={event => updateItem(item.id, 'orderedQty', Number(event.target.value))} /></td>
      <td><input type="number" min="0" value={item.receivedQty} onChange={event => changeReceived(item, Number(event.target.value))} /></td>
      <td><input type="number" min="0" value={item.acceptedQty} onChange={event => changeAccepted(item, Number(event.target.value))} /></td>
      <td><input type="number" min="0" value={item.rejectedQty} onChange={event => updateItem(item.id, 'rejectedQty', Number(event.target.value))} /></td>
      <td><select value={item.unit} onChange={event => updateItem(item.id, 'unit', event.target.value)}><option>Tablet</option><option>Strip</option><option>Box</option><option>Bottle</option><option>Piece</option><option>Unit</option></select></td>
      <td><input value={item.batchNo} onChange={event => updateItem(item.id, 'batchNo', event.target.value)} placeholder="Batch" /></td><td><input type="date" value={item.manufacturingDate} onChange={event => updateItem(item.id, 'manufacturingDate', event.target.value)} /></td><td><input type="date" value={item.expiryDate} onChange={event => updateItem(item.id, 'expiryDate', event.target.value)} /></td><td><input type="number" min="0" step="0.01" value={item.unitCost} onChange={event => updateItem(item.id, 'unitCost', Number(event.target.value))} /></td>
      <td><button type="button" className="icon-btn danger-icon" onClick={() => setItems(previous => previous.filter(current => current.id !== item.id))} aria-label="Remove item"><Trash2 size={17} /></button></td>
    </tr>)}</tbody></table></div></Card>

    <div className="two-col"><Card title="Receipt Remarks"><label className="full-field">Remarks<textarea rows={6} value={form.remarks} onChange={event => updateForm('remarks', event.target.value)} placeholder="Packaging condition, shortage, damage, quality observations or other receipt notes." /></label></Card><Card title="Receipt Summary"><div className="grn-total-list"><div><span>Ordered Quantity</span><strong>{totals.ordered}</strong></div><div><span>Received Quantity</span><strong>{totals.received}</strong></div><div><span>Accepted Quantity</span><strong>{totals.accepted}</strong></div><div><span>Rejected Quantity</span><strong>{totals.rejected}</strong></div><div className="total-value"><span>Accepted Stock Value</span><strong>₹{totals.value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></div></div></Card></div>
    <Card title="Posting Effect"><div className="posting-rule"><Truck size={22} /><div><strong>Posting this GRN creates inventory stock receipt transactions.</strong><p>Only the accepted quantity should become available inventory. Rejected quantity must remain outside usable stock and should retain its rejection/audit record.</p></div></div></Card>
    <div className="grn-footer-actions"><SecondaryButton onClick={back}>Cancel</SecondaryButton><div><SecondaryButton onClick={() => handleSave(false)}><Save size={16} />Save Draft</SecondaryButton><PrimaryButton onClick={() => handleSave(true)}><CheckCircle2 size={16} />Post GRN</PrimaryButton></div></div>
  </>
}
