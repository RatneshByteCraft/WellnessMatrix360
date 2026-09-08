import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Camera,
  CheckCircle2,
  FileText,
  Save,
  ShieldCheck,
  Upload,
  UserRound,
} from 'lucide-react'
import {
  Badge,
  Card,
  PageHeader,
  PrimaryButton,
  SecondaryButton,
} from '../../../shared/components/ui'

type ClientForm = {
  firstName: string
  middleName: string
  lastName: string
  dateOfBirth: string
  gender: string
  mobile: string
  alternateMobile: string
  email: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  postalCode: string
  country: string
  emergencyContactName: string
  emergencyContactRelationship: string
  emergencyContactMobile: string
  preferredLanguage: string
  nationality: string
  bloodGroup: string
  idType: string
  idNumber: string
  referralSource: string
  referralDetails: string
  communicationConsent: boolean
  privacyConsent: boolean
}

const initialForm: ClientForm = {
  firstName: '',
  middleName: '',
  lastName: '',
  dateOfBirth: '',
  gender: '',
  mobile: '',
  alternateMobile: '',
  email: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  postalCode: '',
  country: 'India',
  emergencyContactName: '',
  emergencyContactRelationship: '',
  emergencyContactMobile: '',
  preferredLanguage: 'English',
  nationality: 'Indian',
  bloodGroup: '',
  idType: 'Aadhaar',
  idNumber: '',
  referralSource: '',
  referralDetails: '',
  communicationConsent: false,
  privacyConsent: false,
}

export default function RegisterClient() {
  const navigate = useNavigate()
  const [form, setForm] = useState<ClientForm>(initialForm)
  const [identityDocumentName, setIdentityDocumentName] = useState('')
  const [duplicateChecked, setDuplicateChecked] = useState(false)
  const [saving, setSaving] = useState(false)

  const fullName = useMemo(
    () => [form.firstName, form.middleName, form.lastName].filter(Boolean).join(' '),
    [form.firstName, form.middleName, form.lastName],
  )

  function update<K extends keyof ClientForm>(field: K, value: ClientForm[K]) {
    setForm(prev => ({ ...prev, [field]: value }))
    if (['mobile', 'email', 'firstName', 'lastName', 'dateOfBirth'].includes(field)) {
      setDuplicateChecked(false)
    }
  }

  function validate() {
    const required = [
      form.firstName,
      form.lastName,
      form.dateOfBirth,
      form.gender,
      form.mobile,
      form.addressLine1,
      form.city,
      form.state,
      form.postalCode,
      form.emergencyContactName,
      form.emergencyContactMobile,
    ]

    if (required.some(value => !value.trim())) {
      window.alert('Please complete all mandatory fields.')
      return false
    }
    if (!form.privacyConsent) {
      window.alert('Privacy acknowledgement is required before client registration.')
      return false
    }
    if (!duplicateChecked) {
      window.alert('Please perform duplicate verification before creating the client.')
      return false
    }
    return true
  }

  function handleDuplicateCheck() {
    if (!form.mobile && !form.email) {
      window.alert('Enter at least a mobile number or email before duplicate verification.')
      return
    }
    setDuplicateChecked(true)
  }

  async function handleSave(startAdmission = false) {
    if (!validate()) return
    setSaving(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 400))
      const generatedClientId = 'CL-10083'
      if (startAdmission) {
        navigate(`/admission/new?clientId=${encodeURIComponent(generatedClientId)}`)
      } else {
        navigate(`/clients/${generatedClientId}`)
      }
    } finally {
      setSaving(false)
    }
  }

  return (
    <>
      <PageHeader
        title="Register Client"
        subtitle="Create the canonical client record once. Admission, clinical, billing and portal modules will reference this client."
        actions={
          <div className="page-actions">
            <SecondaryButton onClick={() => navigate('/clients')}>
              <ArrowLeft size={16} />
              Back
            </SecondaryButton>
            <PrimaryButton onClick={() => handleSave(false)}>
              <Save size={16} />
              {saving ? 'Saving...' : 'Save Client'}
            </PrimaryButton>
          </div>
        }
      />

      <div className="register-client-layout">
        <div className="register-client-main">
          <Card title="Personal Information">
            <div className="form-grid">
              <label>First Name *<input value={form.firstName} onChange={e => update('firstName', e.target.value)} placeholder="Enter first name" /></label>
              <label>Middle Name<input value={form.middleName} onChange={e => update('middleName', e.target.value)} placeholder="Enter middle name" /></label>
              <label>Last Name *<input value={form.lastName} onChange={e => update('lastName', e.target.value)} placeholder="Enter last name" /></label>
              <label>Date of Birth *<input type="date" value={form.dateOfBirth} onChange={e => update('dateOfBirth', e.target.value)} /></label>
              <label>Gender *<select value={form.gender} onChange={e => update('gender', e.target.value)}><option value="">Select gender</option><option>Male</option><option>Female</option><option>Other</option><option>Prefer not to say</option></select></label>
              <label>Preferred Language<select value={form.preferredLanguage} onChange={e => update('preferredLanguage', e.target.value)}><option>English</option><option>Hindi</option><option>Marathi</option><option>Bengali</option><option>Kannada</option><option>Other</option></select></label>
              <label>Nationality<input value={form.nationality} onChange={e => update('nationality', e.target.value)} /></label>
              <label>Blood Group<select value={form.bloodGroup} onChange={e => update('bloodGroup', e.target.value)}><option value="">Not known</option><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>AB+</option><option>AB-</option><option>O+</option><option>O-</option></select></label>
            </div>
          </Card>

          <Card title="Contact Information">
            <div className="form-grid">
              <label>Mobile Number *<input value={form.mobile} onChange={e => update('mobile', e.target.value)} placeholder="+91" inputMode="tel" /></label>
              <label>Alternate Mobile<input value={form.alternateMobile} onChange={e => update('alternateMobile', e.target.value)} placeholder="+91" inputMode="tel" /></label>
              <label>Email<input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="client@example.com" /></label>
              <div className="duplicate-check-box"><span>Duplicate Verification</span><button type="button" className="btn secondary" onClick={handleDuplicateCheck}><ShieldCheck size={16} />Check Existing Client</button>{duplicateChecked && <Badge tone="success">No probable duplicate found</Badge>}</div>
            </div>
          </Card>

          <Card title="Residential Address">
            <div className="form-grid">
              <label className="span-2">Address Line 1 *<input value={form.addressLine1} onChange={e => update('addressLine1', e.target.value)} placeholder="House / flat / building" /></label>
              <label className="span-2">Address Line 2<input value={form.addressLine2} onChange={e => update('addressLine2', e.target.value)} placeholder="Area / locality / landmark" /></label>
              <label>City *<input value={form.city} onChange={e => update('city', e.target.value)} /></label>
              <label>State *<input value={form.state} onChange={e => update('state', e.target.value)} /></label>
              <label>PIN / Postal Code *<input value={form.postalCode} onChange={e => update('postalCode', e.target.value)} /></label>
              <label>Country *<select value={form.country} onChange={e => update('country', e.target.value)}><option>India</option><option>United Kingdom</option><option>United States</option><option>United Arab Emirates</option><option>Other</option></select></label>
            </div>
          </Card>

          <Card title="Emergency Contact">
            <div className="form-grid">
              <label>Contact Name *<input value={form.emergencyContactName} onChange={e => update('emergencyContactName', e.target.value)} /></label>
              <label>Relationship<select value={form.emergencyContactRelationship} onChange={e => update('emergencyContactRelationship', e.target.value)}><option value="">Select relationship</option><option>Spouse</option><option>Parent</option><option>Sibling</option><option>Child</option><option>Guardian</option><option>Friend</option><option>Other</option></select></label>
              <label>Emergency Mobile *<input value={form.emergencyContactMobile} onChange={e => update('emergencyContactMobile', e.target.value)} inputMode="tel" /></label>
            </div>
          </Card>

          <Card title="Identity Information">
            <div className="form-grid">
              <label>ID Type<select value={form.idType} onChange={e => update('idType', e.target.value)}><option>Aadhaar</option><option>Passport</option><option>Driving Licence</option><option>Voter ID</option><option>National ID</option><option>Other</option></select></label>
              <label>ID Number<input value={form.idNumber} onChange={e => update('idNumber', e.target.value)} placeholder="Stored securely and masked in standard views" /></label>
            </div>
            <div className="identity-upload-grid">
              <div className="upload-tile"><FileText size={26} /><strong>Identity Document</strong><span>Upload Aadhaar, Passport or other approved ID.</span><label className="btn secondary file-button"><Upload size={16} />Upload Document<input type="file" hidden accept="image/*,.pdf" onChange={e => setIdentityDocumentName(e.target.files?.[0]?.name ?? '')} /></label>{identityDocumentName && <Badge tone="success">{identityDocumentName}</Badge>}</div>
              <div className="upload-tile"><Camera size={26} /><strong>Camera / Scanner</strong><span>Capture ID using a mobile camera or connected scanner.</span><button type="button" className="btn secondary" onClick={() => window.alert('Production implementation will open the device camera/scanner workflow.')}><Camera size={16} />Open Camera</button></div>
            </div>
          </Card>

          <Card title="Referral Information">
            <div className="form-grid">
              <label>Referral Source<select value={form.referralSource} onChange={e => update('referralSource', e.target.value)}><option value="">Select source</option><option>Self</option><option>Family</option><option>Doctor</option><option>Hospital</option><option>Psychologist / Therapist</option><option>Corporate</option><option>Online / Website</option><option>Existing Client</option><option>Other</option></select></label>
              <label>Referral Details<input value={form.referralDetails} onChange={e => update('referralDetails', e.target.value)} placeholder="Name / organization / reference" /></label>
            </div>
          </Card>

          <Card title="Privacy & Communication Preferences">
            <div className="consent-list">
              <label className="consent-row"><input type="checkbox" checked={form.privacyConsent} onChange={e => update('privacyConsent', e.target.checked)} /><div><strong>Privacy acknowledgement *</strong><span>Client has been informed about the collection and handling of personal information.</span></div></label>
              <label className="consent-row"><input type="checkbox" checked={form.communicationConsent} onChange={e => update('communicationConsent', e.target.checked)} /><div><strong>Communication consent</strong><span>Allow operational reminders through configured communication channels.</span></div></label>
            </div>
          </Card>

          <div className="register-client-actions">
            <SecondaryButton onClick={() => navigate('/clients')}>Cancel</SecondaryButton>
            <div><SecondaryButton onClick={() => handleSave(false)}><Save size={16} />Save Client</SecondaryButton><PrimaryButton onClick={() => handleSave(true)}><CheckCircle2 size={16} />Save & Start Admission</PrimaryButton></div>
          </div>
        </div>

        <aside className="register-client-side">
          <Card title="Client Preview"><div className="client-register-preview"><div className="avatar register-avatar">{form.firstName?.[0] || 'C'}{form.lastName?.[0] || ''}</div><h3>{fullName || 'New Client'}</h3><p>{form.mobile || 'Mobile number not entered'}</p>{form.email && <p>{form.email}</p>}{duplicateChecked ? <Badge tone="success">Duplicate verification completed</Badge> : <Badge tone="warning">Duplicate verification required</Badge>}</div></Card>
          <Card title="Registration Rules"><div className="registration-rules"><p><CheckCircle2 size={16} />One canonical client record.</p><p><CheckCircle2 size={16} />Admission history is maintained separately.</p><p><CheckCircle2 size={16} />Billing references the same Client ID.</p><p><CheckCircle2 size={16} />Portal account links to this client record.</p><p><CheckCircle2 size={16} />Identity numbers should be masked in normal views.</p></div></Card>
          <Card title="Next Step"><p className="muted">After registration you can either open Client 360 or immediately begin the Admission workflow.</p><div className="registration-flow"><div><UserRound size={18} />Client Master</div><span>↓</span><div><FileText size={18} />Admission</div><span>↓</span><div><ShieldCheck size={18} />Clinical / Billing / Portal</div></div></Card>
        </aside>
      </div>
    </>
  )
}
