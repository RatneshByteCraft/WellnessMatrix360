import { useNavigate } from 'react-router-dom'
import {
  Badge,
  DataTable,
  PageHeader,
  PrimaryButton,
} from '../../../../../shared/components/ui'

export default function Users() {
  const navigate = useNavigate()

  return (
    <>
      <PageHeader
        title="Users"
        subtitle="Tenant users, role assignments and location scope"
        actions={
          <PrimaryButton
            onClick={() =>
              navigate('/admin/invite-user')
            }
          >
            + Invite User
          </PrimaryButton>
        }
      />

      <DataTable
        columns={[
          'User',
          'Role(s)',
          'Location Scope',
          'MFA',
          'Status',
        ]}
        rows={[
          [
            'Aarav Mehta',
            'Center Manager',
            'Mumbai',
            <Badge tone="success">
              Enabled
            </Badge>,
            <Badge tone="success">
              Active
            </Badge>,
          ],
          [
            'Dr N. Sharma',
            'Psychiatrist',
            'Mumbai + New Delhi',
            <Badge tone="success">
              Enabled
            </Badge>,
            <Badge tone="success">
              Active
            </Badge>,
          ],
          [
            'Riya Kapoor',
            'Psychologist',
            'Mumbai',
            <Badge tone="success">
              Enabled
            </Badge>,
            <Badge tone="success">
              Active
            </Badge>,
          ],
        ]}
      />
    </>
  )
}