
import './PromiseAndCost.css';

export default function PromiseAndCost() {
  return (
    <div className="promise-cost-wrapper">
      
      {/* 1. Our Promise Section */}
      <section className="promise-section" id="promise">
        <div className="promise-container">
          
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

        </div>
      </section>

      {/* 2. Cost Competitive Section */}
      <section className="cost-section" id="cost-competitive">
        <div className="cost-container">
          <div className="cost-hero-banner">
            <div className="cost-banner-glow"></div>
            <div className="cost-content">
              <span className="section-badge-alt">💎 VALUE & PRICING</span>
              <h2>Unmatched Quality at Cost-Competitive Rates</h2>
              <p className="cost-lead">
                Backed by an extremely large pool of highly skilled personnel, we deliver world-class execution significantly more cost-effectively than competing services.
              </p>
              <p className="cost-desc">
                If you enjoy innovation, creative challenges, and working with global publishers & industry leaders, then you are at the right place.
              </p>
              <div className="cost-btn-group">
                <a href="#contact" className="btn-woo-primary">Join Our Journey</a>
                <a href="#services" className="btn-woo-secondary">Explore Expertise</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}