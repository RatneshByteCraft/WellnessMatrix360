import { Link } from 'react-router-dom'
export default function ForgotPassword(){return <div className="auth-card"><h2>Reset password</h2><p>Enter your registered email or mobile number.</p><label>Email or mobile<input/></label><button className="btn primary full">Send verification code</button><Link to="/login">← Back to sign in</Link></div>}
