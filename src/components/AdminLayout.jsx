import { Link, NavLink, useNavigate } from 'react-router-dom'

function AdminLayout({ children, title, subtitle }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('admin-auth')
    navigate('/', { replace: true })
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div>
          <div className="logo">
            <span className="logo-mark" aria-hidden="true" />
            Eltronic Admin
          </div>
          <p className="admin-sidebar-copy"></p>
        </div>

        <nav className="admin-nav">
          <NavLink to="/admin/products" className={({ isActive }) => (isActive ? 'active' : '')}>
            Products
          </NavLink>
          <NavLink to="/admin/orders" className={({ isActive }) => (isActive ? 'active' : '')}>
            Orders
          </NavLink>
        </nav>

        <button type="button" className="ghost admin-logout" onClick={handleLogout}>
          Logout to Home
        </button>

        <Link to="/" className="admin-home-link">
          Back to home
        </Link>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <div className="eyebrow">Admin dashboard</div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <button type="button" className="primary" onClick={handleLogout}>
            Logout
          </button>
        </header>

        {children}
      </main>
    </div>
  )
}

export default AdminLayout
