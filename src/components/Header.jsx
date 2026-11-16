import { Link } from 'react-router-dom'

const navLinks = ['Bundle Deals', 'Choice', 'SuperDeals', 'Business', 'Robotics', 'Appliances']

function Header() {
  return (
    <header className="site-header">
      <div className="header">
        <div className="logo">
          <span className="logo-mark" aria-hidden="true" />
          Eltronic
        </div>
        <div className="search">
          <input type="text" placeholder="Search for components, boards, and tools..." />
          <button type="button" className="primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Search</span>
          </button>
        </div>
        <div className="header-actions">
          <button type="button" className="ghost">
            EN / LKR
          </button>
          <Link to="/admin" className="ghost ghost-link">
            Sign In
          </Link>
          <button type="button" className="cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span>Cart</span>
            <span className="badge">3</span>
          </button>
        </div>
      </div>

      <nav className="nav-row">
        <button type="button" className="nav-link nav-pill">
          All Categories
        </button>
        {navLinks.map((link) => (
          <button key={link} type="button" className="nav-link">
            {link}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header