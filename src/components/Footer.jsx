import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Top Section: Brand & Bio */}
        <div className="footer-top-grid">
          
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-link">
              <img src="/logo.png" alt="Emesqube Technologies" className="footer-logo-img" />
              <span className="footer-brand-title">EMESQUBE TECHNOLOGIES</span>
            </Link>
            <p className="footer-bio">
              EMESQUBE TECHNOLOGIES is a professional publishing and technology services company focused on digital content, ePublishing and document transformation solutions.
            </p>
            <div className="footer-contact-info">
              <p>📍 No.243 V.N.P. Nagar, Kollidam Main Road, Kollidam, Tamil Nadu, India – 609101.</p>
              <p>✉️ <a href="mailto:emesqube@gmail.com">emesqube@gmail.com</a></p>
              <p>📞 <a href="tel:+919566500888">+91-9566500888</a></p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="footer-links-col">
            <h3>Core Services</h3>
            <ul>
              <li><Link to="/service/epublishing-digital">ePublishing & Digital</Link></li>
              <li><Link to="/service/ebook-conversion">eBook Conversion</Link></li>
              <li><Link to="/service/editorial-production">Editorial & Production</Link></li>
            </ul>
          </div>

          {/* Specialized Solutions */}
          <div className="footer-links-col">
            <h3>Specialized Solutions</h3>
            <ul>
              <li><Link to="/service/web-technology">Web & Technology</Link></li>
              <li><Link to="/service/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/service/medical-content">Medical Content</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} Emesqube Technologies. All rights reserved.</p>
          <div className="footer-policy-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}