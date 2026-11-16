import App from '../App'
import AuthOverlay from '../components/AuthOverlay'

function CreateAccountPage() {
  return (
    <div className="auth-site">
      <App />
      <AuthOverlay mode="create-account" />
    </div>
  )
}

export default CreateAccountPage
