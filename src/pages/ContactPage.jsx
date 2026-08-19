import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        
        {/* Back to Home Button */}
        <div className="back-home-wrapper">
          <Link to="/" className="back-home-btn"><span>←</span> Back to Home</Link>
        </div>

        {/* Header Section */}
        <div className="contact-header">
          <span className="section-badge">📬 LET'S WORK TOGETHER</span>
          <h2>Connect With Emesqube Technologies</h2>
          <p>
            Looking for a reliable partner for ePublishing, XML, ePub, content conversion, copy editing, typesetting, digital marketing or technology solutions? We are ready to support your next project.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Side: Contact Information */}
          <div className="contact-info-card">
            <h3>EMESQUBE TECHNOLOGIES</h3>
            <p className="company-subtitle">Turning Content into Digital Possibilities</p>
            
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>
                  No.243 V.N.P. Nagar, Kollidam Main Road,<br />
                  (T.K), Mayiladuthurai (D.T), Kollidam (P.O),<br />
                  Tamil Nadu, India – 609101.
                </p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h4>E-mail</h4>
                <p><a href="mailto:emesqube@gmail.com">emesqube@gmail.com</a></p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h4>Mobile</h4>
                <p><a href="tel:+919566500888">+91-9566500888</a></p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="success-message">
                <span className="success-icon">🎉</span>
                <h3>Thank You!</h3>
                <p>We have received your message and will get back to you shortly.</p>
                <button className="reset-btn" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Send Us a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your project requirements..." 
                    required 
                  ></textarea>
                </div>

                <button type="submit" className="submit-id-btn">Send Message 🚀</button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}