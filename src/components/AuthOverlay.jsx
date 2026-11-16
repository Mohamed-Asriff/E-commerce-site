import { Link } from 'react-router-dom'

function AuthOverlay({ mode }) {
  const isSignIn = mode === 'signin'

  return (
    <div className="auth-overlay" role="dialog" aria-modal="true" aria-label={isSignIn ? 'Sign in' : 'Create account'}>
      <div className="auth-overlay-panel">
        <Link to="/" className="auth-overlay-close" aria-label="Close dialog">
          ×
        </Link>

        <div className="auth-overlay-copy">
          <div className="eyebrow">{isSignIn ? 'Welcome back' : 'Join us'}</div>
          <h1>{isSignIn ? 'Sign in' : 'Create your account'}</h1>
          <div className="auth-overlay-subtitle">
            <span className="auth-protect-dot" aria-hidden="true" />
            <span>Your information is protected</span>
          </div>
        </div>

        <form className="auth-overlay-form">
          {!isSignIn && (
            <label>
              Full name
              <input type="text" placeholder="Your name" />
            </label>
          )}

          <label>
            Email
            <input type="email" placeholder="Email" />
          </label>

          <label>
            Password
            <input type="password" placeholder={isSignIn ? 'Password' : 'Create password'} />
          </label>

          {!isSignIn && (
            <label>
              Confirm password
              <input type="password" placeholder="Repeat password" />
            </label>
          )}

          <button type="submit" className="primary auth-overlay-submit">
            {isSignIn ? 'Continue' : 'Create Account'}
          </button>

          <div className="auth-overlay-links">
            {isSignIn ? (
              <>
                <span>New here?</span> <Link to="/create-account">Create account</Link>
              </>
            ) : (
              <>
                <span>Already have an account?</span> <Link to="/signin">Sign in</Link>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthOverlay