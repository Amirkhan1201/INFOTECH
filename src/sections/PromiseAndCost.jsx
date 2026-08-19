import './PromiseAndCost.css';

export default function PromiseAndCost() {
  const qualityPoints = [
    {
      icon: '🎯',
      title: 'Requirement-Based Processing',
      description:
        'Projects are processed according to specific client requirements and defined production expectations.'
    },
    {
      icon: '✓',
      title: 'Internal Review & Quality Checks',
      description:
        'Structured internal reviews and quality checks help maintain accuracy and consistency throughout production.'
    },
    {
      icon: '👥',
      title: 'Trained Production Personnel',
      description:
        'Trained and certified production personnel handle projects to support reliable and consistent output.'
    },
    {
      icon: '📋',
      title: 'Guideline Compliance',
      description:
        'Production activities follow established guidelines and project-specific standards to ensure quality.'
    },
    {
      icon: '⏱️',
      title: 'Timely Project Delivery',
      description:
        'Efficient workflows and production management help us meet project timelines and delivery expectations.'
    },
    {
      icon: '📈',
      title: 'Continuous Process Improvement',
      description:
        'We continuously refine our processes to improve efficiency, quality and overall project outcomes.'
    }
  ];

  const reasons = [
    {
      icon: '🏆',
      title: 'Experienced',
      description:
        'Established publishing-services experience with a focus on digital content workflows.'
    },
    {
      icon: '✓',
      title: 'Quality Driven',
      description:
        'A structured approach to production, review and delivery.'
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description:
        'Flexible solutions designed to provide competitive and practical project support.'
    },
    {
      icon: '⚡',
      title: 'Technology Enabled',
      description:
        'Use of digital publishing and conversion workflows to transform content efficiently.'
    },
    {
      icon: '🤝',
      title: 'Client Focused',
      description:
        'We aim to build long-term relationships through communication, reliability and consistent service.'
    }
  ];

  return (
    <div className="promise-cost-wrapper">

      {/* ================================
          TEAM & QUALITY SECTION
      ================================= */}
      <section className="team-quality-section" id="team-quality">
        <div className="team-quality-container">

          <div className="team-quality-header">
            <span className="section-badge">
              ✨ TEAM & QUALITY
            </span>

            <h2>
              Skilled People. Structured Processes. Consistent Quality.
            </h2>

            <p className="team-quality-intro">
              Our team structure includes production management, supervision
              and skilled operators. Our training and certification approach
              ensures employees are prepared before being assigned to
              production activities, supporting consistent quality and
              reliable delivery.
            </p>
          </div>

          {/* Quality Focus */}
          <div className="quality-focus-wrapper">

            <div className="quality-section-heading">
              <span className="mini-label">OUR QUALITY APPROACH</span>
              <h3>Quality Focus</h3>
              <p>
                A structured production approach designed to maintain accuracy,
                consistency and timely delivery across every project.
              </p>
            </div>

            <div className="quality-grid">
              {qualityPoints.map((item, index) => (
                <div
                  className="quality-card"
                  key={index}
                >
                  <div className="quality-icon">
                    {item.icon}
                  </div>

                  <div className="quality-card-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Scalable Production */}
          <div className="scalable-production">

            <div className="scalable-content">

              <span className="section-badge">
                ⚡ SCALABLE PRODUCTION
              </span>

              <h3>
                From Simple Conversions to Complex Digital Content
              </h3>

              <p>
                Our workflow can support different levels of conversion
                complexity, from simple document conversions to complex
                documents involving tables, charts, images, mathematical
                equations and advanced formatting.
              </p>

              <div className="complexity-tags">
                <span>Document Conversion</span>
                <span>Tables & Charts</span>
                <span>Images</span>
                <span>Mathematical Equations</span>
                <span>Advanced Formatting</span>
              </div>

            </div>

            <div className="scalable-visual">
              <div className="visual-orbit orbit-one"></div>
              <div className="visual-orbit orbit-two"></div>

              <div className="visual-center">
                <span>⚙️</span>
                <strong>Scalable</strong>
                <small>Workflows</small>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================================
          WHY EMESQUBE SECTION
      ================================= */}
      <section
        className="why-emesqube-section"
        id="why-emesqube"
      >
        <div className="why-emesqube-container">

          <div className="why-header">

            <span className="section-badge-alt">
              💎 WHY EMESQUBE TECHNOLOGIES?
            </span>

            <h2>
              Why Choose EmeSqube Technologies?
            </h2>

            <p>
              Combining experience, quality, technology and client-focused
              service to deliver practical digital publishing solutions.
            </p>

          </div>

          <div className="reasons-grid">

            {reasons.map((item, index) => (
              <div
                className={`reason-card reason-card-${index + 1}`}
                key={index}
              >

                <div className="reason-number">
                  0{index + 1}
                </div>

                <div className="reason-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}