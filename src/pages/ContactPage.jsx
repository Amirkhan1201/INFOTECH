import  { useState } from 'react';
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
          <Link to="/" className="back-home-btn">← Back to Home</Link>
        </div>

        <div className="contact-header">
          <span className="section-badge">📬 GET IN TOUCH</span>
          <h2>Let's Connect With Us</h2>
          <p>Reach out to our team to discover how our professional publishing solutions can help you.</p>
        </div>

        <div className="contact-grid">
          
          {/* Left Side: Contact Information */}
          <div className="contact-info-card">
            <h3>M S INFOTECH</h3>
            <p className="company-subtitle">Professional Publishing & Tech Solutions</p>
            
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>No.23, VNP Nagar,<br />Kollidam, Tamil Nadu, India.</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h4>E-mail</h4>
                <p><a href="mailto:msinfotech222@gmail.com">msinfotech222@gmail.com</a></p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h4>Mobile</h4>
                <p><a href="tel:+919566500888">+91- 9566500888</a></p>
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
                <h3>Submit Let's Connect Form</h3>
                
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
                    placeholder="Type your message here..." 
                    required 
                  ></textarea>
                </div>

                <button type="submit" className="submit-id-btn">Send Message</button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}