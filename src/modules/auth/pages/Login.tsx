import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login(){
	const nav=useNavigate()
	const [showPassword,setShowPassword]=useState(false)

	return <div className="auth-card"><h2>Sign in</h2><p>Use your organization credentials.</p><label>Email or mobile<input defaultValue="manager@veda.example"/></label><label>Password<span className="auth-password-field"><input type={showPassword?'text':'password'} defaultValue="password"/><button type="button" className="auth-password-toggle" onClick={()=>setShowPassword(value=>!value)} aria-label={showPassword?'Hide password':'Show password'}>{showPassword?<EyeOff size={17}/>:<Eye size={17}/>}</button></span></label><div className="auth-row"><label className="check"><input type="checkbox"/> Remember me</label><Link to="/forgot-password">Forgot password?</Link></div><button className="btn primary full" onClick={()=>nav('/dashboard')}>Sign in securely</button><small className="muted">MFA challenge is applied when required by tenant policy.</small></div>
}
