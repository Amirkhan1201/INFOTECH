
import './StatsSection.css';

const statsData = [
  { number: '17+', label: 'Years of Excellence', icon: '🏆', desc: 'Established since 2009 delivering global solutions' },
  { number: '100%', label: 'Quality Standards', icon: '⭐', desc: 'Processes on a par with international benchmarks' },
  { number: '24/7', label: 'Client Support', icon: '🌐', desc: 'Seamless communication across global time zones' },
  { number: '500+', label: 'Projects Handled', icon: '🚀', desc: 'Innovative content and publishing workflows' }
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        
        <div className="stats-header">
          <span className="section-badge">OUR IMPACT IN NUMBERS</span>
          <h2>Driven By Excellence & Technology</h2>
          <p>Empowering global publishers with speed, accuracy, and unmatched digital workflows.</p>
        </div>

        <div className="stats-grid">
          {statsData.map((item, index) => (
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