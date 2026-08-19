import { Link } from 'react-router-dom';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page-wrapper">
      <div className="about-page-container">
        
        {/* Back Button */}
        <div className="back-home-wrapper">
          <Link to="/" className="back-home-btn"><span>←</span> Back to Home</Link>
        </div>

        {/* Hero Section */}
        <header className="about-hero-section">
          <div className="hero-top-badge">ESTABLISHED IN 2026</div>
          <h1 className="company-title">EMESQUBE TECHNOLOGIES</h1>
          <p className="company-tagline">ePublishing &bull; Digital Content &bull; Technology Solutions</p>
          
          <div className="company-traits">
            <span>Professional</span>
            <span className="dot">&bull;</span>
            <span>Reliable</span>
            <span className="dot">&bull;</span>
            <span>Quality-Driven</span>
          </div>

          <p className="hero-lead">
            We are a professional publishing and technology services company focused on digital content, ePublishing and document transformation solutions. Supporting book and journal publishing workflows with quality-focused production and technology-driven processes.
          </p>
        </header>

        {/* Approach Section - Clean Editorial Style */}
        <section className="about-editorial-section">
          <div className="editorial-content">
            <span className="section-category">OUR APPROACH</span>
            <h2>Bridging Traditional Publishing with Next-Gen Technology</h2>
            <p>
              We combine skilled professionals, structured production workflows, and technology to deliver accurate, scalable, and cost-effective content solutions. We focus on understanding client requirements, following project guidelines, and maintaining consistent quality throughout the production cycle.
            </p>
          </div>
          <div className="editorial-highlight">
            <div className="highlight-pill-item">
              <span className="h-icon">📚</span>
              <div>
                <h4>Publishing Workflows</h4>
                <p>Deep industry experience supporting complex book and journal pipelines.</p>
              </div>
            </div>
            <div className="highlight-pill-item">
              <span className="h-icon">⚡</span>
              <div>
                <h4>Digital Transformation</h4>
                <p>Seamless document transformation from legacy formats to modern digital structures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Pipeline - Sleek Horizontal Flow */}
        <section className="pipeline-section">
          <div className="section-header-centered">
            <span className="section-category">PROCESS PIPELINE</span>
            <h2>Our Structured Workflow</h2>
            <p>A systematic 5-step lifecycle ensuring precision and consistency.</p>
          </div>

          <div className="pipeline-flow-container">
            <div className="flow-step">
              <span className="flow-num">01</span>
              <h4>Requirement Analysis</h4>
              <p>Understanding scope, specifications, file formats, and delivery guidelines.</p>
            </div>
            <div className="flow-step">
              <span className="flow-num">02</span>
              <h4>Production & Conversion</h4>
              <p>Processing content using appropriate publishing and conversion workflows.</p>
            </div>
            <div className="flow-step">
              <span className="flow-num">03</span>
              <h4>Quality Control</h4>
              <p>Rigorous reviews against project requirements before delivery.</p>
            </div>
            <div className="flow-step">
              <span className="flow-num">04</span>
              <h4>Final Delivery</h4>
              <p>Organized output delivered in agreed formats and pipeline structures.</p>
            </div>
            <div className="flow-step">
              <span className="flow-num">05</span>
              <h4>Feedback & Improvement</h4>
              <p>Continuous enhancement integrated into ongoing operations.</p>
            </div>
          </div>
        </section>

        {/* Core Strengths - Minimalist Grid */}
        <section className="strengths-minimal-section">
          <div className="section-header-centered">
            <span className="section-category">CORE STRENGTHS</span>
            <h2>Why Emesqube Technologies?</h2>
          </div>

          <div className="strengths-minimal-grid">
            <div className="minimal-card">
              <span className="m-icon">👥</span>
              <h4>Experienced</h4>
              <p>Established publishing expertise with focus on digital content workflows.</p>
            </div>
            <div className="minimal-card">
              <span className="m-icon">🎯</span>
              <h4>Quality Driven</h4>
              <p>Disciplined, multi-layered approach to production and review.</p>
            </div>
            <div className="minimal-card">
              <span className="m-icon">⚡</span>
              <h4>Cost Effective</h4>
              <p>Flexible solutions providing competitive, practical project support.</p>
            </div>
            <div className="minimal-card">
              <span className="m-icon">🌐</span>
              <h4>Technology Enabled</h4>
              <p>Leveraging state-of-the-art conversion pipelines and tools.</p>
            </div>
            <div className="minimal-card">
              <span className="m-icon">🤝</span>
              <h4>Client Focused</h4>
              <p>Long-term relationships rooted in clear communication.</p>
            </div>
          </div>
        </section>

        {/* Footer CTA Banner */}
        <div className="editorial-cta">
          <h2>Ready to scale your publishing workflows?</h2>
          <p>Partner with a team dedicated to accuracy, speed, and quality execution.</p>
          <Link to="/contact" className="editorial-btn">Get In Touch 🚀</Link>
        </div>

      </div>
    </div>
  );
}