import { useMemo, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import App from '../App'
import { adminCredentials } from '../data/adminSeed'

function AdminLoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isAuthenticated = useMemo(
    () => localStorage.getItem('admin-auth') === 'true',
    []
  )

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const isValid =
      email.trim().toLowerCase() === adminCredentials.email &&
      password === adminCredentials.password

    if (!isValid) {
      setError('Invalid admin email or password.')
      return
    }

    localStorage.setItem('admin-auth', 'true')
    navigate('/admin/products', { replace: true })
  }

  return (
    <div className="auth-site">
      <App />
      <div className="auth-overlay" role="dialog" aria-modal="true" aria-label="Admin sign in">
        <div className="auth-overlay-panel auth-overlay-panel--admin">
          <Link to="/" className="auth-overlay-close" aria-label="Close dialog">
            ×
          </Link>

          <div className="auth-overlay-copy">
            <div className="eyebrow">Admin access</div>
            <h1>Admin Sign in</h1>
            <div className="auth-overlay-subtitle">
              <span className="auth-protect-dot" aria-hidden="true" />
              <span>Use your admin email and password</span>
            </div>
          </div>

          <form className="auth-overlay-form" onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                placeholder="Admin email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
              />
            </label>

            <label>
              Password
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
              />
            </label>

            {error && <div className="auth-overlay-error">{error}</div>}

            <button type="submit" className="primary auth-overlay-submit">
              Continue
            </button>

            <div className="auth-overlay-links">
              <span>Admin only access</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLoginPage
