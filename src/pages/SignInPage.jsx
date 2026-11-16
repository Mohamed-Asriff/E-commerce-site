import App from '../App'
import AuthOverlay from '../components/AuthOverlay'

function SignInPage() {
  return (
    <div className="auth-site">
      <App />
      <AuthOverlay mode="signin" />
    </div>
  )
}

export default SignInPage
