import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const servicesList = [
  { name: 'ePublishing & Digital Publishing', icon: '📚', id: 'epublishing-digital' },
  { name: 'eBook Conversion', icon: '📖', id: 'ebook-conversion' },
  { name: 'Editorial & Production Services', icon: '✍️', id: 'editorial-production' },
  { name: 'Web & Technology Services', icon: '💻', id: 'web-technology' },
  { name: 'Digital Marketing', icon: '📈', id: 'digital-marketing' },
  { name: 'Medical Content Services', icon: '🏥', id: 'medical-content' },
];

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <nav className="site-navbar">
      <div className="navbar-container">
        
        {/* Logo and Company Name together */}
        <div className="navbar-brand">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src="/logo.png" alt="Emesqube Logo" className="brand-logo" />
            <span className="brand-title">EMESQUBE TECHNOLOGIES</span>
          </Link>
        </div>

        {/* Desktop / Mobile Menu Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          
          {/* Home Link */}
          <li>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          </li>

          {/* About Us Link */}
          <li>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          </li>

          {/* Our Services Mega Menu Dropdown */}
          <li 
            className="dropdown-wrapper"
            onMouseEnter={() => window.innerWidth > 900 && setDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth > 900 && setDropdownOpen(false)}
          >
            <button 
              className="dropdown-toggle"
              onClick={() => {
                if (window.innerWidth <= 900) {
                  setDropdownOpen(!dropdownOpen);
                }
              }}
            >
              Our Services <span className={`arrow ${dropdownOpen ? 'rotate' : ''}`}>▼</span>
            </button>

            {dropdownOpen && (
              <div className="mega-menu">
                <div className="mega-menu-header">OUR SERVICES</div>
                <div className="mega-menu-grid">
                  {servicesList.map((service, index) => (
                    <Link 
                      key={index} 
                      to={`/service/${service.id}`} 
                      className="service-item"
                      onClick={() => {
                        setDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <span className="service-icon">{service.icon}</span>
                      <span className="service-name">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
          
          {/* Contact Us Link (Mobile Drawer la full width irukum) */}
          <li className="mobile-contact-li">
            <Link to="/contact" className="contact-btn" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </li>

          {/* Desktop Theme Toggle Button */}
          <li className="desktop-theme-li">
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </li>
        </ul>

        {/* Right side controls for Mobile (Theme Icon + Hamburger) */}
        <div className="mobile-nav-right">
          <button className="theme-toggle-btn mobile-icon-theme" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          </div>
        </div>

      </div>
    </nav>
  );
}