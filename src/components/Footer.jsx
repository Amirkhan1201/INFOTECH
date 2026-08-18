
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Top Section: Brand & Bio */}
        <div className="footer-top-grid">
          
          <div className="footer-brand-col">
            <Link to="/">
    <img src="/logo.png" alt="MS Infotech" className="footer-logo-img" />
  </Link>
            <p className="footer-bio">
              Delivering a gamut of professional publishing and next-gen technology solutions to clients worldwide with international quality standards.
            </p>
            <div className="footer-contact-info">
              <p>📍 No.23, VNP Nagar, Kollidam, Tamil Nadu, India.</p>
              <p>✉️ <a href="mailto:msinfotech222@gmail.com">msinfotech222@gmail.com</a></p>
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

          {/* Services Links */}
          <div className="footer-links-col">
            <h3>Core Services</h3>
            <ul>
              <li><Link to="/service/app-dev">App Development</Link></li>
              <li><Link to="/service/web-dev">Web Development</Link></li>
              <li><Link to="/service/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/service/epublishing">ePublishing</Link></li>
              <li><Link to="/service/typesetting">Type Setting</Link></li>
            </ul>
          </div>

          {/* More Services */}
          <div className="footer-links-col">
            <h3>Specialized Solutions</h3>
            <ul>
              <li><Link to="/service/digital-pub">Digital Publishing</Link></li>
              <li><Link to="/service/translation">Translation & Localisation</Link></li>
              <li><Link to="/service/medical">Medical Coding & Transcription</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} M S Infotech. All rights reserved.</p>
          <div className="footer-policy-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}