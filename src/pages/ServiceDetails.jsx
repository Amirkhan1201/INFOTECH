
import { useParams, Link } from 'react-router-dom';
import './ServiceDetails.css';

const servicesContent = {
  'app-dev': {
    title: "App Development",
    subtitle: "Transforming your ideas into sleek, scalable, and user-friendly iOS & Android apps.",
    category: "MOBILE SOLUTIONS",
    description: "We build high-performance mobile applications tailored for your business success with modern UI/UX, push notifications, and robust backend integrations.",
    features: ["iOS & Android Cross-Platform Apps", "Sleek & Intuitive UI/UX Design", "Secure API Integrations", "App Store Optimization Support"]
  },
  'web-dev': {
    title: "Web Development",
    subtitle: "Modern, lightning-fast, and responsive websites built using the latest React ecosystem.",
    category: "WEB DEVELOPMENT",
    description: "Leveraging React, Vite, and modern CSS frameworks, we craft responsive websites with advanced animations, glassmorphism, and high-speed performance.",
    features: ["React & Vite Ecosystem", "Fully Responsive Layouts", "SEO Optimized Architecture", "Clean & Scalable Codebase"]
  },
  'digital-marketing': {
    title: "Digital Marketing",
    subtitle: "Scale your brand reach, maximize conversions, and dominate search engine rankings.",
    category: "MARKETING & GROWTH",
    description: "Drive targeted traffic and increase your ROI with data-driven digital marketing strategies, SEO, social media branding, and performance campaigns.",
    features: ["Search Engine Optimization (SEO)", "Social Media Branding & Strategy", "Conversion Rate Optimization", "Targeted Growth Campaigns"]
  },
  'epublishing': {
    title: "ePublishing",
    subtitle: "Seamless digital publishing and formatting solutions tailored for global publishers.",
    category: "PUBLISHING SOLUTIONS",
    description: "Delivering a gamut of professional ePublishing solutions including XML/ePub conversions, layout formatting, and multi-format content distribution.",
    features: ["ePub2 / ePub3 & XML Conversion", "Rigorous Quality Assurance", "Global Publishing Standards", "Fast Execution & Turnaround"]
  },
  'digital-pub': {
    title: "Digital Publishing",
    subtitle: "Innovative and engaging ways to design and broadcast content across media.",
    category: "DIGITAL MEDIA",
    description: "Empowering global publishers to transform the way they publish content across traditional and emerging digital channels.",
    features: ["Multi-Device Content Adaptation", "Interactive Digital Publications", "Engaging Broadcast Workflows", "Next-Gen Tech Integration"]
  },
  'typesetting': {
    title: "Type Setting",
    subtitle: "Professional typesetting and layout design adhering to international standards.",
    category: "PUBLISHING SERVICES",
    description: "Precise typesetting and composition services for books, journals, and magazines, maintaining strict typographic accuracy and visual appeal.",
    features: ["Book & Journal Composition", "Strict Typographic Standards", "Multi-lingual Support", "High-Precision Proofing"]
  },
  'translation': {
    title: "Translation & Localisation",
    subtitle: "Accurate translation and localisation services to connect with global audiences.",
    category: "GLOBAL SERVICES",
    description: "Breaking language barriers with precise translation and localisation services tailored to regional nuances, ensuring clear and engaging communication.",
    features: ["Multi-language Translation", "Cultural Localisation", "Contextual Accuracy", "Fast Turnaround Times"]
  },
  'medical': {
    title: "Medical Coding & Transcription",
    subtitle: "Accurate medical coding, transcription, and healthcare documentation services.",
    category: "HEALTHCARE SOLUTIONS",
    description: "Providing precision-driven medical coding and transcription services with strict confidentiality, accuracy, and compliance with industry regulations.",
    features: ["Accurate Medical Coding", "Reliable Transcription Services", "Strict Data Confidentiality", "Compliance & Quality Checks"]
  }
};

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const service = servicesContent[serviceId] || {
    title: "Professional Services",
    subtitle: "Explore our wide gamut of technology and publishing solutions.",
    category: "M S INFOTECH",
    description: "We deliver world-class digital and publishing solutions tailored to your business needs with maximum efficiency.",
    features: ["Global Quality Standards", "Experienced Professionals", "24/7 Support", "Cost-Effective Pricing"]
  };

  return (
    <div className="service-page-wrapper">
      <div className="service-page-container">
        
        <div className="back-home-wrapper">
          <Link to="/" className="back-home-btn">← Back to Home</Link>
        </div>

        <div className="service-header-box">
          <span className="section-badge">{service.category}</span>
          <h1>{service.title}</h1>
          <p className="service-subtitle-text">{service.subtitle}</p>
        </div>

        <div className="service-detail-grid">
          <div className="service-main-desc">
            <h3>Overview & Execution</h3>
            <p>{service.description}</p>
            <div className="service-cta-box">
              <Link to="/contact" className="service-get-in-touch-btn">Get In Touch With Us 🚀</Link>
            </div>
          </div>

          <div className="service-features-card">
            <h3>Key Highlights & Features</h3>
            <ul>
              {service.features.map((feat, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span> {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}