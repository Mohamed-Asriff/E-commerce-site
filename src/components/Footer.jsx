const quickLinks = ['Help Center', 'Sell on Store', 'Track Order']

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-topbar">
        <div className="footer-topbar-left">Modern IoT Marketplace | Mobile: 0754558689</div>
        <div className="footer-topbar-right">
          {quickLinks.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-mark" aria-hidden="true" />
            Eltronic
          </div>
          <p>Your one-stop shop for electronics and IoT.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Customer Service</h4>
            <span>Help Center</span>
            <span>How to Buy</span>
            <span>Track Your Order</span>
          </div>
          <div>
            <h4>About Us</h4>
            <span>About Circuit Collective</span>
            <span>Careers</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer