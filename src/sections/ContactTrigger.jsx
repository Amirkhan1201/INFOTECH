
import { Link } from 'react-router-dom';
import './ContactTrigger.css';

export default function ContactTrigger() {
  return (
    <section className="home-contact-trigger-section" id="contact">
      <div className="home-trigger-container">
        <span className="section-badge">📬 GET IN TOUCH</span>
        <h2>Ready to Transform Your Workflow?</h2>
        <p>Click below to open our complete contact form and address details.</p>
        <Link to="/contact" className="open-contact-page-btn">
          Get In Touch 🚀
        </Link>
      </div>
    </section>
  );
}