
import { Link } from 'react-router-dom';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page-wrapper">
      <div className="about-page-container">
        
        {/* Back Button */}
        <div className="back-home-wrapper">
          <Link to="/" className="back-home-btn">← Back to Home</Link>
        </div>

        {/* 1. Who We Are Section */}
        <section className="about-section-block">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-badge">WHO WE ARE</span>
              <h2>Innovating Content & Digital Publishing Since 2009</h2>
              <p className="about-lead">
                M S Infotech offers a gamut of professional publishing solutions to clients around the globe. Our strength lies in an innovative business approach, execution skills, and quick adaptability to emerging technologies.
              </p>
              <p className="about-text">
                We design and manage content solutions for global publishers, enabling them to transform the way they publish. From traditional print to emerging digital media, we deliver engaging ways to broadcast content to audiences worldwide.
              </p>
              <div className="about-features-grid">
                <div className="feature-pill">🌍 Global Standards</div>
                <div className="feature-pill">⚡ Emerging Tech</div>
                <div className="feature-pill">📊 Data-Driven</div>
              </div>
            </div>

            <div className="about-visual">
              <div className="animated-card-glass">
                <div className="pulsing-orb"></div>
                <div className="visual-icon-box">
                  <span className="floating-icon">🚀</span>
                </div>
                <h3>Digital Transformation</h3>
                <p>Empowering global publishers with seamless workflows and next-gen content solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Our Vision Section */}
        <section className="vision-section-block">
          <div className="vision-split-container">
            <div className="vision-left-col">
              <span className="section-badge">🎯 OUR VISION</span>
              <h2>Making Data & Content Accessible & Actionable</h2>
              <p className="vision-lead">
                Deploying advanced technology solutions that make data adaptable, easily found, and ready for fast decision-making.
              </p>
            </div>
            <div className="vision-right-col">
              <div className="vision-glass-box">
                <div className="vision-glow"></div>
                <p>
                  M S Infotech’s vision is to make content accessible and adaptable to the various devices in common usage. We deliver the insights that organizations need for effective, real-time business operations across traditional and emerging media.
                </p>
                <div className="vision-tags">
                  <span>⚡ Real-Time Insights</span>
                  <span>📱 Multi-Device Ready</span>
                  <span>🚀 Fast Decisions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Team Section */}
        <section className="team-section-block">
          <div className="team-split-container">
            <div className="team-intro-col">
              <span className="section-badge">👥 EXPERT LEADERSHIP & CREW</span>
              <h2>Led by Skilled Professionals & Rigorous Standards</h2>
              <p className="team-desc">
                Our production managers, supervisors, and operators bring strong technical skills and deep understanding of data accuracy and speed. We recruit candidates with a minimum of 2 years of experience.
              </p>
              <div className="team-highlight-box">
                <div className="highlight-number">100%</div>
                <div className="highlight-text">Certified & Trained Professionals handling live global publishing projects.</div>
              </div>
            </div>

            <div className="team-steps-col">
              <div className="step-card-modern">
                <span className="step-num">01</span>
                <div>
                  <h3>Rigorous Screening</h3>
                  <p>Stringent personal and technical interviews to evaluate core domain capabilities.</p>
                </div>
              </div>
              <div className="step-card-modern">
                <span className="step-num">02</span>
                <div>
                  <h3>Specialized Training</h3>
                  <p>Recruits undergo rigorous training programs conducted directly by our expert leadership.</p>
                </div>
              </div>
              <div className="step-card-modern">
                <span className="step-num">03</span>
                <div>
                  <h3>Live Certification</h3>
                  <p>Upon successful certification, personnel are assigned to high-precision tasks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Promise Section */}
        <section className="promise-section-block">
          <div className="promise-header">
            <span className="section-badge">✨ OUR CORE PROMISE</span>
            <h2>Building Excellence, Sustaining Growth</h2>
            <p className="promise-intro">
              We promise consistent application of the best principles to achieve excellence in client service, enriching lives and driving future innovation.
            </p>
          </div>
          <div className="promise-grid">
            <div className="promise-glass-card">
              <div className="card-top-glow"></div>
              <div className="card-icon-box">🎯</div>
              <h3>Customer-Centric Mission</h3>
              <p>MSI constantly moves up the value-chain with learning as a way of life, placing customers at the hub of its mission and ultimate accomplishment.</p>
            </div>
            <div className="promise-glass-card">
              <div className="card-top-glow"></div>
              <div className="card-icon-box">📚</div>
              <h3>Publishing Industry Mastery</h3>
              <p>Delivering high-quality, full-spectrum services to the global publishing industry with scalable and affordable next-gen solutions.</p>
            </div>
            <div className="promise-glass-card">
              <div className="card-top-glow"></div>
              <div className="card-icon-box">⚡</div>
              <h3>Business Transformation</h3>
              <p>Empowering organizations with best-in-class technology solutions designed for fast, effective, and modern decision-making.</p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="about-cta-footer">
          <Link to="/contact" className="about-page-btn">Get In Touch With Us 🚀</Link>
        </div>

      </div>
    </div>
  );
}