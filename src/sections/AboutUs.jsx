
import './AboutUs.css';

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Side: Content */}
        <div className="about-content">
          <span className="section-badge">WHO WE ARE</span>
          <h2>Innovating Content & Digital Publishing Since 200933</h2>
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

        {/* Right Side: Smooth Animation / Graphic Container */}
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
  );
}