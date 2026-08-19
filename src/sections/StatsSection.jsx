import './StatsSection.css';

const visionMissionData = [
  {
    number: '01',
    label: 'Our Vision',
    icon: '🔭',
    desc: 'To become a trusted global partner for digital publishing and technology-enabled content solutions by continuously improving quality, productivity and innovation.'
  },
  {
    number: '02',
    label: 'Our Mission',
    icon: '🎯',
    desc: 'To deliver reliable, accurate and cost-effective services that help publishers and businesses transform content into accessible digital formats while building long-term client relationships.'
  },
  {
    number: '03',
    label: 'Our Promise',
    icon: '🤝',
    desc: 'We are committed to customer satisfaction, consistent quality, timely delivery and continuous learning. Every project is handled with attention to requirements, workflow and output quality.'
  }
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        
        <div className="stats-header">
          <span className="section-badge">VISION & MISSION</span>
          <h2>Driven By Purpose & Core Values</h2>
          <p>Empowering global publishers with speed, accuracy, and unmatched digital workflows.</p>
        </div>

        <div className="stats-grid vm-grid">
          {visionMissionData.map((item, index) => (
            <div key={index} className="stat-card">
              <div className="stat-glow"></div>
              <div className="stat-icon-wrapper">
                <span className="stat-icon">{item.icon}</span>
              </div>
              <h3>{item.number}</h3>
              <h4>{item.label}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}