import { useEffect, useMemo, useState } from 'react'
import './App.css'
import heroOne from './assets/hero-board.svg'
import heroTwo from './assets/hero-led.svg'
import productBoard from './assets/product-board.svg'
import productSensor from './assets/product-sensor.svg'
import productLed from './assets/product-led.svg'
import productMotor from './assets/product-motor.svg'
import productDisplay from './assets/product-display.svg'
import productPower from './assets/product-power.svg'

function App() {
  const quickLinks = ['Help Center', 'Sell on Store', 'Track Order']

  const categories = [
    {
      title: 'All Categories',
      subs: ['Best sellers', 'New arrivals', 'Top rated']
    },
    {
      title: 'Arduino Boards',
      subs: ['Uno', 'Nano', 'Mega', 'Starter kits']
    },
    {
      title: 'ESP Modules',
      subs: ['ESP8266', 'ESP32', 'ESP32-S3', 'Dev kits']
    },
    {
      title: 'Sensors',
      subs: ['Temperature', 'Gas', 'Motion', 'Light']
    },
    {
      title: 'LED & Lighting',
      subs: ['RGB strips', 'Matrices', 'NeoPixels', 'Controllers']
    },
    {
      title: 'Displays',
      subs: ['OLED', 'TFT', 'LCD', 'Drivers']
    },
    {
      title: 'Motors & Drivers',
      subs: ['DC motors', 'Steppers', 'H-bridges', 'ESC']
    },
    {
      title: 'Power & Charging',
      subs: ['LiPo', 'Buck converters', 'USB-C', 'Adapters']
    },
    {
      title: 'Prototyping',
      subs: ['Breadboards', 'Jumpers', 'Headers', 'Enclosures']
    },
    {
      title: 'Tools & Testers',
      subs: ['Soldering', 'Multimeters', 'Crimpers', 'Hand tools']
    }
  ]

  const navLinks = ['Bundle Deals', 'Choice', 'SuperDeals', 'Business', 'Robotics', 'Appliances']

  const products = [
    {
      name: 'DC Motor FF-180SH 2.4-4.5V',
      price: 'LKR 1,407.48',
      priceValue: 1407.48,
      old: 'LKR 1,587.46',
      off: '-11%',
      rating: '4.7',
      sold: '1,184 sold',
      badge: 'Welcome deal',
      category: 'Motors & Drivers',
      image: productMotor
    },
    {
      name: 'RGB LED Strip Lights 5m 10m 20m',
      price: 'LKR 356.37',
      priceValue: 356.37,
      old: 'LKR 1,072.71',
      off: '-66%',
      rating: '4.5',
      sold: '100k+ sold',
      badge: 'Welcome deal',
      category: 'LED & Lighting',
      image: productLed
    },
    {
      name: 'USB Electric Soldering Iron Kit',
      price: 'LKR 766.74',
      priceValue: 766.74,
      old: 'LKR 946.72',
      off: '-19%',
      rating: '4.7',
      sold: '800+ sold',
      badge: 'Welcome deal',
      category: 'Tools & Testers',
      image: productPower
    },
    {
      name: 'RC Boat Motor Control Kit',
      price: 'LKR 27,178.63',
      priceValue: 27178.63,
      old: 'LKR 29,624.65',
      off: '-7%',
      rating: '4.2',
      sold: '6 sold',
      badge: 'Choice',
      category: 'Motors & Drivers',
      image: productMotor
    },
    {
      name: 'Metal USB Flash Drive 128GB',
      price: 'LKR 481.53',
      priceValue: 481.53,
      old: 'LKR 1,293.02',
      off: '-63%',
      rating: '4.7',
      sold: '2,000+ sold',
      badge: 'Welcome deal',
      category: 'Power & Charging',
      image: productPower
    },
    {
      name: 'Mini DC Motor 2.4V 3.2V',
      price: 'LKR 356.37',
      priceValue: 356.37,
      old: 'LKR 506.98',
      off: '-29%',
      rating: '4.1',
      sold: '104 sold',
      badge: 'Welcome deal',
      category: 'Motors & Drivers',
      image: productMotor
    },
    {
      name: 'Brushless Propeller Set',
      price: 'LKR 2,258.09',
      priceValue: 2258.09,
      old: 'LKR 4,876.14',
      off: '-53%',
      rating: '4.6',
      sold: '52 sold',
      badge: 'Welcome deal',
      category: 'Motors & Drivers',
      image: productMotor
    },
    {
      name: 'OLED Display 0.96" I2C',
      price: 'LKR 799.59',
      priceValue: 799.59,
      old: 'LKR 977.99',
      off: '-18%',
      rating: '4.7',
      sold: '100k+ sold',
      badge: 'Welcome deal',
      category: 'Displays',
      image: productDisplay
    },
    {
      name: 'Arduino Uno R4 WiFi',
      price: 'LKR 9,499.00',
      priceValue: 9499,
      old: 'LKR 11,299.00',
      off: '-16%',
      rating: '4.9',
      sold: '3,042 sold',
      badge: 'Best seller',
      category: 'Arduino Boards',
      image: productBoard
    },
    {
      name: 'ESP32-S3 Dev Board USB-C',
      price: 'LKR 1,799.00',
      priceValue: 1799,
      old: 'LKR 2,399.00',
      off: '-25%',
      rating: '4.8',
      sold: '1,120 sold',
      badge: 'SuperDeal',
      category: 'ESP Modules',
      image: productBoard
    },
    {
      name: 'DHT22 Temperature Sensor',
      price: 'LKR 420.00',
      priceValue: 420,
      old: 'LKR 560.00',
      off: '-25%',
      rating: '4.6',
      sold: '5,700 sold',
      badge: 'Choice',
      category: 'Sensors',
      image: productSensor
    },
    {
      name: 'LiPo Battery 3.7V 1000mAh',
      price: 'LKR 980.00',
      priceValue: 980,
      old: 'LKR 1,350.00',
      off: '-27%',
      rating: '4.5',
      sold: '2,010 sold',
      badge: 'Welcome deal',
      category: 'Power & Charging',
      image: productPower
    }
  ]

  const heroSlides = [
    {
      eyebrow: 'Welcome Deals',
      title: 'Shop IoT essentials with marketplace pricing.',
      body: 'Arduino, ESP, sensors, modules, LED, and power kits in one place.',
      cta: 'Shop now',
      image: heroOne
    },
    {
      eyebrow: 'Bundle Offers',
      title: 'Starter kits that ship with wiring guides.',
      body: 'Build faster with curated IoT packs and verified components.',
      cta: 'View bundles',
      image: heroTwo
    }
  ]

  const maxAvailablePrice = useMemo(
    () => Math.max(...products.map((product) => product.priceValue)),
    [products]
  )
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [priceRange, setPriceRange] = useState([0, maxAvailablePrice])
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  useEffect(() => {
    setPriceRange([0, maxAvailablePrice])
  }, [maxAvailablePrice])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All Categories' || product.category === selectedCategory
      const matchesPrice =
        product.priceValue >= priceRange[0] && product.priceValue <= priceRange[1]
      return matchesCategory && matchesPrice
    })
  }, [priceRange, products, selectedCategory])

  return (
    <div className="site">
      <header className="topbar">
        <div className="topbar-left">Modern IoT Marketplace | Mobile: 0754558689</div>
        <div className="topbar-right">
          {quickLinks.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </header>

      <div className="header">
        <div className="logo">
          <span className="logo-mark" aria-hidden="true" />
          Circuit Collective
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
          <button type="button" className="ghost">
            Sign In
          </button>
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
        <div className="nav-pill">All Categories</div>
        {navLinks.map((link) => (
          <span key={link}>{link}</span>
        ))}
      </nav>

      <main className="hero">
        <aside className="category-rail">
          <ul>
            {categories.map((cat) => (
              <li
                key={cat.title}
                className={selectedCategory === cat.title ? 'active' : ''}
                onClick={() => setSelectedCategory(cat.title)}
              >
                <span>{cat.title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <div className="submenu">
                  {cat.subs.map((sub) => (
                    <span key={sub}>{sub}</span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <div className="hero-center">
          <div className="hero-banner">
            {heroSlides.map((slide, index) => (
              <div key={index} className={`hero-slide ${activeSlide === index ? 'active' : ''}`}>
                <div className="hero-copy">
                  <div className="eyebrow">{slide.eyebrow}</div>
                  <h1>{slide.title}</h1>
                  <p className="subhead">{slide.body}</p>
                  <div className="cta-row">
                    <button type="button" className="primary">
                      {slide.cta}
                    </button>
                    <button type="button" className="ghost">
                      Learn more
                    </button>
                  </div>
                </div>
                <div className="hero-image">
                  <img src={slide.image} alt="" />
                </div>
              </div>
            ))}
            <div className="carousel-controls">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${activeSlide === index ? 'active' : ''}`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <aside className="hero-right">
          <div className="side-card">
            <div className="side-label">Your Account</div>
            <h3>Sign in for the best experience</h3>
            <button type="button" className="primary">
              Sign In Securely
            </button>
            <button type="button" className="ghost small">
              Create an Account
            </button>
          </div>
          <div className="side-card dark">
            <div className="side-label">Become a Seller</div>
            <h3>Join our marketplace</h3>
            <p>Reach thousands of builders and hobbyists.</p>
            <button type="button" className="ghost">
              Apply Now
            </button>
          </div>
        </aside>
      </main>

      <section className="section">
        <div className="section-head">
          <h2>Flash Deals</h2>
          <p>Grab these offers before they are gone!</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              <div className="product-thumb">
                <img src={product.image} alt={product.name} />
              </div>
              {product.badge && <div className="product-badge">{product.badge}</div>}
              <div className="product-name">{product.name}</div>
              <div className="price-row">
                <div className="price">{product.price}</div>
                <div className="old">{product.old}</div>
                <div className="off">{product.off}</div>
              </div>
              <div className="meta-row">
                <div className="rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#f59e0b"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>{product.rating}</span>
                </div>
                <div className="sold">{product.sold}</div>
              </div>
              <button type="button" className="cart-action">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-mark" aria-hidden="true" />
            Circuit Collective
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
      </footer>
    </div>
  )
}

export default App
