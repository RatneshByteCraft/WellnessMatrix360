import { Outlet } from 'react-router-dom'
export function AuthLayout(){return <div className="auth-shell"><section className="auth-brand"><div><div className="brand-mark big">MP</div><h1>Medixpro360-Rehab</h1><p>Secure care operations for Veda Rehabilitation & Wellness.</p></div></section><section className="auth-panel"><Outlet/></section></div>}
