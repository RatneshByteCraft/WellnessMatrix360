import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Building2,
  Check,
  CheckCircle2,
  Mail,
  MapPin,
  ShieldCheck,
  UserPlus,
  UsersRound,
} from 'lucide-react'
import {
  Badge,
  Card,
  PageHeader,
  PrimaryButton,
  SecondaryButton,
} from '../../../shared/components/ui'

type RoleOption = {
  id: string
  name: string
  description: string
}

type LocationOption = {
  id: string
  name: string
}

type InviteUserForm = {
  firstName: string
  lastName: string
  email: string
  mobile: string
  selectedRoleIds: string[]
  selectedLocationIds: string[]
  requireMfa: boolean
  confidentialityConfirmed: boolean
}

/*
  IMPORTANT:

  These arrays are MOCK DATA ONLY so the screen can run.

  Production implementation must load:
  GET /api/admin/roles
  GET /api/admin/locations

  Roles and locations must NOT be hardcoded.
*/

const roleOptions: RoleOption[] = [
  {
    id: 'role-psychiatrist',
    name: 'Psychiatrist',
    description:
      'Diagnosis, medication management, treatment planning and client communication.',
  },
  {
    id: 'role-psychologist',
    name: 'Psychologist',
    description:
      'Psychological assessment, therapy administration and progress tracking.',
  },
  {
    id: 'role-physician',
    name: 'Physician',
    description:
      'Medical evaluation, health monitoring and comorbidity management.',
  },
  {
    id: 'role-nutritionist',
    name: 'Nutritionist',
    description:
      'Dietary planning and meal compliance tracking.',
  },
  {
    id: 'role-yoga-instructor',
    name: 'Yoga Instructor',
    description:
      'Yoga session planning and documentation.',
  },
  {
    id: 'role-sound-healer',
    name: 'Sound Healer',
    description:
      'Sound therapy session management.',
  },
  {
    id: 'role-art-therapist',
    name: 'Art Therapist',
    description:
      'Art therapy program management.',
  },
  {
    id: 'role-residential-care',
    name: 'Residential Care Staff',
    description:
      'Daily care, behavioral monitoring and medication observation.',
  },
  {
    id: 'role-administrative',
    name: 'Administrative Staff',
    description:
      'Billing, scheduling and documentation.',
  },
  {
    id: 'role-center-manager',
    name: 'Center Manager',
    description:
      'Location-level administration and reporting.',
  },
  {
    id: 'role-regional-admin',
    name: 'Regional Administrator',
    description:
      'Multi-location oversight.',
  },
  {
    id: 'role-clinical-director',
    name: 'Clinical Director',
    description:
      'Organization-wide clinical oversight.',
  },
  {
    id: 'role-family',
    name: 'Family Member',
    description:
      'Consent-based view-only access to relevant information.',
  },
  {
    id: 'role-client',
    name: 'Client / Patient',
    description:
      'Personal portal, schedule, reports, messaging and requests.',
  },
  {
    id: 'role-super-admin',
    name: 'Super Admin',
    description:
      'System configuration and maintenance.',
  },
]

const locationOptions: LocationOption[] = [
  {
    id: 'location-mumbai',
    name: 'Mumbai Centre',
  },
  {
    id: 'location-new-delhi',
    name: 'New Delhi Centre',
  },
  {
    id: 'location-bengaluru',
    name: 'Bengaluru Centre',
  },
  {
    id: 'location-gangtok',
    name: 'Gangtok Centre',
  },
]

const initialForm: InviteUserForm = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  selectedRoleIds: [],
  selectedLocationIds: [],
  requireMfa: true,
  confidentialityConfirmed: false,
}

export default function InviteUser() {
  const navigate = useNavigate()

  const [form, setForm] =
    useState<InviteUserForm>(initialForm)

  const [saving, setSaving] = useState(false)

  const selectedRoles = useMemo(
    () =>
      roleOptions.filter(role =>
        form.selectedRoleIds.includes(role.id),
      ),
    [form.selectedRoleIds],
  )

  const selectedLocations = useMemo(
    () =>
      locationOptions.filter(location =>
        form.selectedLocationIds.includes(
          location.id,
        ),
      ),
    [form.selectedLocationIds],
  )

  function updateField<
    K extends keyof InviteUserForm,
  >(
    field: K,
    value: InviteUserForm[K],
  ) {
    setForm(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  function toggleRole(roleId: string) {
    setForm(prev => ({
      ...prev,
      selectedRoleIds:
        prev.selectedRoleIds.includes(roleId)
          ? prev.selectedRoleIds.filter(
              id => id !== roleId,
            )
          : [...prev.selectedRoleIds, roleId],
    }))
  }

  function toggleLocation(locationId: string) {
    setForm(prev => ({
      ...prev,
      selectedLocationIds:
        prev.selectedLocationIds.includes(
          locationId,
        )
          ? prev.selectedLocationIds.filter(
              id => id !== locationId,
            )
          : [
              ...prev.selectedLocationIds,
              locationId,
            ],
    }))
  }

  function validate() {
    if (!form.firstName.trim()) {
      window.alert(
        'Please enter the first name.',
      )
      return false
    }

    if (!form.lastName.trim()) {
      window.alert(
        'Please enter the last name.',
      )
      return false
    }

    if (!form.email.trim()) {
      window.alert(
        'Please enter the email address.',
      )
      return false
    }

    if (form.selectedRoleIds.length === 0) {
      window.alert(
        'Please assign at least one role.',
      )
      return false
    }

    if (
      form.selectedLocationIds.length === 0
    ) {
      window.alert(
        'Please assign at least one location.',
      )
      return false
    }

    if (!form.confidentialityConfirmed) {
      window.alert(
        'Please confirm confidentiality and privacy acknowledgement.',
      )
      return false
    }

    return true
  }

  async function handleInvite() {
    if (!validate()) return

    setSaving(true)

    try {
      const payload = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        roleIds: form.selectedRoleIds,
        locationIds:
          form.selectedLocationIds,
        requireMfa: form.requireMfa,
        confidentialityConfirmed:
          form.confidentialityConfirmed,
      }

      console.log(
        'Invite user payload:',
        payload,
      )

      /*
        Production integration:

        POST /api/admin/users/invitations

        {
          firstName,
          lastName,
          email,
          mobile,
          roleIds,
          locationIds,
          requireMfa
        }

        IMPORTANT:

        1. Backend validates TenantId.
        2. Backend validates current user's permission
           to invite users.
        3. Role IDs must belong to the tenant.
        4. Location IDs must belong to the tenant.
        5. Role permissions are NOT copied to the user.
           Access must always be derived from role assignment.
        6. Invitation creation must create an audit entry.
        7. Sensitive access must remain subject to consent
           and privacy controls.
      */

      await new Promise(resolve =>
        setTimeout(resolve, 500),
      )

      navigate('/admin/users')
    } finally {
      setSaving(false)
    }
  }

  return (
    <>
      <PageHeader
        title="Invite User"
        subtitle="Invite a user and assign configured roles and location access."
        actions={
          <SecondaryButton
            onClick={() =>
              navigate('/admin/users')
            }
          >
            <ArrowLeft size={16} />
            Back to Users
          </SecondaryButton>
        }
      />

      <div className="invite-user-layout">
        <main className="invite-user-main">
          {/* BASIC USER DETAILS */}

          <Card title="User Information">
            <div className="form-grid">
              <label>
                First Name *
                <input
                  value={form.firstName}
                  onChange={e =>
                    updateField(
                      'firstName',
                      e.target.value,
                    )
                  }
                  placeholder="Enter first name"
                />
              </label>

              <label>
                Last Name *
                <input
                  value={form.lastName}
                  onChange={e =>
                    updateField(
                      'lastName',
                      e.target.value,
                    )
                  }
                  placeholder="Enter last name"
                />
              </label>

              <label>
                Email Address *
                <input
                  type="email"
                  value={form.email}
                  onChange={e =>
                    updateField(
                      'email',
                      e.target.value,
                    )
                  }
                  placeholder="name@veda.example"
                />
              </label>

              <label>
                Mobile Number
                <input
                  value={form.mobile}
                  onChange={e =>
                    updateField(
                      'mobile',
                      e.target.value,
                    )
                  }
                  placeholder="+91"
                  inputMode="tel"
                />
              </label>
            </div>
          </Card>

          {/* ROLES */}

          <Card title="Role Assignment">
            <div className="section-intro">
              <div>
                <strong>
                  Select one or more configured
                  roles
                </strong>

                <p>
                  Permissions are inherited from
                  the selected roles. Permissions
                  should not be assigned directly
                  on this screen.
                </p>
              </div>

              {form.selectedRoleIds.length >
                0 && (
                <Badge tone="success">
                  {
                    form.selectedRoleIds
                      .length
                  }{' '}
                  role
                  {form.selectedRoleIds
                    .length > 1
                    ? 's'
                    : ''}{' '}
                  selected
                </Badge>
              )}
            </div>

            <div className="invite-role-grid">
              {roleOptions.map(role => {
                const selected =
                  form.selectedRoleIds.includes(
                    role.id,
                  )

                return (
                  <button
                    type="button"
                    key={role.id}
                    className={`invite-role-card ${
                      selected
                        ? 'selected'
                        : ''
                    }`}
                    onClick={() =>
                      toggleRole(role.id)
                    }
                  >
                    <div className="invite-role-check">
                      {selected ? (
                        <Check
                          size={15}
                        />
                      ) : null}
                    </div>

                    <div>
                      <strong>
                        {role.name}
                      </strong>

                      <span>
                        {role.description}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </Card>

          {/* LOCATION */}

          <Card title="Location Access">
            <div className="section-intro">
              <div>
                <strong>
                  Select location scope
                </strong>

                <p>
                  The user will only have
                  operational access within
                  authorized locations, subject
                  to the permissions inherited
                  through their roles.
                </p>
              </div>

              <Badge tone="info">
                Multi-location
              </Badge>
            </div>

            <div className="invite-location-grid">
              {locationOptions.map(
                location => {
                  const selected =
                    form.selectedLocationIds.includes(
                      location.id,
                    )

                  return (
                    <button
                      type="button"
                      key={location.id}
                      className={`invite-location-card ${
                        selected
                          ? 'selected'
                          : ''
                      }`}
                      onClick={() =>
                        toggleLocation(
                          location.id,
                        )
                      }
                    >
                      <div className="location-icon">
                        <Building2
                          size={20}
                        />
                      </div>

                      <div>
                        <strong>
                          {
                            location.name
                          }
                        </strong>

                        <span>
                          Centre access
                        </span>
                      </div>

                      <div className="invite-role-check">
                        {selected && (
                          <Check
                            size={15}
                          />
                        )}
                      </div>
                    </button>
                  )
                },
              )}
            </div>
          </Card>

          {/* SECURITY */}

          <Card title="Security & Confidentiality">
            <div className="security-options">
              <label className="security-option">
                <input
                  type="checkbox"
                  checked={
                    form.requireMfa
                  }
                  onChange={e =>
                    updateField(
                      'requireMfa',
                      e.target.checked,
                    )
                  }
                />

                <div>
                  <strong>
                    Require Multi-Factor
                    Authentication
                  </strong>

                  <span>
                    Require additional
                    authentication during
                    account access.
                  </span>
                </div>

                <ShieldCheck
                  size={22}
                />
              </label>

              <label className="security-option">
                <input
                  type="checkbox"
                  checked={
                    form.confidentialityConfirmed
                  }
                  onChange={e =>
                    updateField(
                      'confidentialityConfirmed',
                      e.target.checked,
                    )
                  }
                />

                <div>
                  <strong>
                    Confidentiality & Privacy
                    Acknowledgement *
                  </strong>

                  <span>
                    Confirm that the user is
                    subject to Veda's
                    confidentiality and privacy
                    requirements.
                  </span>
                </div>

                <ShieldCheck
                  size={22}
                />
              </label>
            </div>
          </Card>

          {/* ACTIONS */}

          <div className="invite-user-actions">
            <SecondaryButton
              onClick={() =>
                navigate('/admin/users')
              }
            >
              Cancel
            </SecondaryButton>

            <PrimaryButton
              onClick={handleInvite}
            >
              <UserPlus size={17} />

              {saving
                ? 'Sending Invitation...'
                : 'Send Invitation'}
            </PrimaryButton>
          </div>
        </main>

        {/* RIGHT SIDE SUMMARY */}

        <aside className="invite-user-side">
          <Card title="Invitation Summary">
            <div className="invite-summary-user">
              <div className="avatar invite-avatar">
                {form.firstName?.[0] ||
                  'U'}
                {form.lastName?.[0] ||
                  ''}
              </div>

              <h3>
                {form.firstName ||
                form.lastName
                  ? `${form.firstName} ${form.lastName}`.trim()
                  : 'New User'}
              </h3>

              <p>
                {form.email ||
                  'Email not entered'}
              </p>
            </div>

            <div className="invite-summary-section">
              <div className="summary-title">
                <UsersRound size={16} />
                Assigned Roles
              </div>

              {selectedRoles.length ===
              0 ? (
                <p className="muted">
                  No roles selected.
                </p>
              ) : (
                <div className="summary-badges">
                  {selectedRoles.map(
                    role => (
                      <Badge
                        key={role.id}
                        tone="info"
                      >
                        {role.name}
                      </Badge>
                    ),
                  )}
                </div>
              )}
            </div>

            <div className="invite-summary-section">
              <div className="summary-title">
                <MapPin size={16} />
                Location Scope
              </div>

              {selectedLocations.length ===
              0 ? (
                <p className="muted">
                  No locations selected.
                </p>
              ) : (
                <div className="summary-badges">
                  {selectedLocations.map(
                    location => (
                      <Badge
                        key={
                          location.id
                        }
                      >
                        {
                          location.name
                        }
                      </Badge>
                    ),
                  )}
                </div>
              )}
            </div>
          </Card>

          <Card title="Access Model">
            <div className="access-flow">
              <div>
                <Mail size={17} />

                <span>
                  User accepts invitation
                </span>
              </div>

              <span className="flow-arrow">
                ↓
              </span>

              <div>
                <UsersRound size={17} />

                <span>
                  Assigned role(s)
                </span>
              </div>

              <span className="flow-arrow">
                ↓
              </span>

              <div>
                <ShieldCheck size={17} />

                <span>
                  Role permissions
                </span>
              </div>

              <span className="flow-arrow">
                ↓
              </span>

              <div>
                <Building2 size={17} />

                <span>
                  Authorized location(s)
                </span>
              </div>
            </div>
          </Card>

          <Card title="Security">
            <div className="security-summary">
              <p>
                <CheckCircle2
                  size={16}
                />
                Permissions inherited
                from roles
              </p>

              <p>
                <CheckCircle2
                  size={16}
                />
                Location-scoped access
              </p>

              <p>
                <CheckCircle2
                  size={16}
                />
                MFA supported
              </p>

              <p>
                <CheckCircle2
                  size={16}
                />
                Access changes should be
                audit logged
              </p>
            </div>
          </Card>
        </aside>
      </div>
    </>
  )
}