
import './TeamQualityPage.css';

export default function TeamQualityPage() {
  return (
    <div className="team-quality-page">
      <div className="team-quality-container">
        
        {/* Page Header */}
        <div className="page-header">
          <span className="section-badge">👥 TEAM & QUALITY</span>
          <h1>Excellence Through Expert Leadership & Rigorous Standards</h1>
          <p className="page-lead">
            Our team structure includes production management, supervision, and skilled operators. We follow a strict training and certification approach before assigning employees to live activities, supporting consistent quality.
          </p>
        </div>

        {/* Content Grid */}
        <div className="tq-content-grid">
          
          {/* Quality Focus Card */}
          <div className="tq-card">
            <div className="tq-card-icon">⭐</div>
            <h2>Quality Focus</h2>
            <ul className="tq-bullet-list">
              <li>
                <span className="check-icon">✓</span> Requirement-based processing
              </li>
              <li>
                <span className="check-icon">✓</span> Internal review and quality checks
              </li>
              <li>
                <span className="check-icon">✓</span> Trained production personnel
              </li>
              <li>
                <span className="check-icon">✓</span> Guideline compliance
              </li>
              <li>
                <span className="check-icon">✓</span> Timely project delivery
              </li>
              <li>
                <span className="check-icon">✓</span> Continuous process improvement
              </li>
            </ul>
          </div>

          {/* Scalable Production Card */}
          <div className="tq-card">
            <div className="tq-card-icon">🚀</div>
            <h2>Scalable Production</h2>
            <p className="tq-desc">
              Our workflow can support different levels of conversion complexity, from simple document conversions to complex documents involving tables, charts, images, mathematical equations and advanced formatting.
            </p>
            <div className="tq-highlight-box">
              <div className="highlight-number">100%</div>
              <div className="highlight-text">Certified & Trained personnel handling structured global publishing workflows.</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}