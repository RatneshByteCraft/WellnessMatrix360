import { Route } from 'react-router-dom'
import { AuthLayout } from '../../shared/layouts/AuthLayout'
import Login from '../../modules/auth/pages/Login'
import ForgotPassword from '../../modules/auth/pages/ForgotPassword'

export function AuthRoutes() {
  return <Route element={<AuthLayout />}>
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
  </Route>
}
