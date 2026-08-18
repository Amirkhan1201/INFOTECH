import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const servicesList = [
  { name: 'App Development', icon: '📱', id: 'app-dev' },
  { name: 'Web Development', icon: '💻', id: 'web-dev' },
  { name: 'Digital Marketing', icon: '📈', id: 'digital-marketing' },
  { name: 'ePublishing', icon: '📚', id: 'epublishing' },
  { name: 'Digital Publishing', icon: '📰', id: 'digital-pub' },
  { name: 'Type Setting', icon: '✍️', id: 'typesetting' },
  { name: 'Translation & Localisation', icon: '🌍', id: 'translation' },
  { name: 'Medical Coding & Transcription', icon: '🏥', id: 'medical' },
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
        
        <div className="navbar-logo">
          <Link to="/">
    <img src="/logo.png" alt="M S Infotech" /> {/* CSS-la .navbar-logo img nu irukurathunala direct-ah work aagum */}
  </Link>
        </div>

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
          {/* Our Services Mega Menu Dropdown */}
          <li 
            className="dropdown-wrapper"
            onMouseEnter={() => window.innerWidth > 900 && setDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth > 900 && setDropdownOpen(false)}
          >
            <button 
              className="dropdown-toggle"
              onClick={() => {
                // Mobile view-la iruntha mattum click-ku toggle aagum
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
          
          {/* Contact Us Link */}
          <li>
            <Link to="/contact" className="contact-btn" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </li>

          {/* Theme Switcher Button */}
          <li>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
}