import { useParams, Link } from 'react-router-dom';
import './ServiceDetails.css';

const servicesContent = {
  'epublishing-digital': {
    title: "ePublishing & Digital Publishing",
    subtitle: "Comprehensive digital content transformation and professional multi-format publishing solutions.",
    category: "PUBLISHING SOLUTIONS",
    description: "We deliver world-class ePublishing and digital publishing production services, transforming manuscript data into industry-standard digital formats with high precision and structural accuracy.",
    features: [
      "XML Conversion",
      "ePub Conversion",
      "PDF to XML & Word to XML",
      "PDF to ePub & Word to ePub",
      "InDesign to ePub"
    ]
  },
  'ebook-conversion': {
    title: "eBook Conversion",
    subtitle: "Advanced reflowable, fixed-layout, and interactive eBook creation for all digital readers.",
    category: "DIGITAL CONTENT",
    description: "Specialized eBook conversion services tailored for educational, children's, and trade publishers, featuring interactive components and responsive rendering across devices.",
    features: [
      "Reflowable eBook Conversion",
      "Fixed-layout eBook Conversion",
      "Interactive eBooks with Fill-in-the-Blanks",
      "Drag-and-Drop & Score Validation",
      "Checkboxes and Radio Buttons Integration"
    ]
  },
  'editorial-production': {
    title: "Editorial & Production Services",
    subtitle: "End-to-end editorial support, meticulous proofreading, and typesetting excellence.",
    category: "PRODUCTION WORKFLOWS",
    description: "Maintaining strict quality and typographic accuracy throughout your production lifecycle with experienced editors, proofreaders, and composition specialists.",
    features: [
      "Professional Proofreading",
      "In-depth Copy Editing",
      "Precise Typesetting",
      "Book & Journal Composition",
      "Digital Books & Content Solutions"
    ]
  },
  'web-technology': {
    title: "Web & Technology Services",
    subtitle: "Robust HTML conversion, legacy migration, and custom web development solutions.",
    category: "TECHNOLOGY SOLUTIONS",
    description: "Bridging the gap between legacy formats and modern web standards with advanced conversion technologies and responsive web architectures.",
    features: [
      "HTML Conversion",
      "Flash to HTML5 Conversion",
      "Word Conversion Workflows",
      "Universal PDF Conversion",
      "Custom Web Development"
    ]
  },
  'digital-marketing': {
    title: "Digital Marketing",
    subtitle: "Strategic growth campaigns designed to enhance online brand presence and discoverability.",
    category: "MARKETING & GROWTH",
    description: "Empowering businesses to scale their digital reach, optimize search engine placement, and amplify content visibility across digital channels.",
    features: [
      "Online Presence Optimization",
      "Content Visibility & SEO Support",
      "Customer Reach Strategies",
      "Targeted Growth Campaigns"
    ]
  },
  'medical-content': {
    title: "Medical Content Services",
    subtitle: "Accurate healthcare documentation, transcription, and precise medical coding support.",
    category: "HEALTHCARE SOLUTIONS",
    description: "Delivering secure, confidential, and compliant medical content services managed by skilled professionals trained in healthcare industry standards.",
    features: [
      "Accurate Medical Coding",
      "Reliable Medical Transcription",
      "Scribing-Related Content Services",
      "Strict Confidentiality & Compliance"
    ]
  }
};

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const service = servicesContent[serviceId] || {
    title: "Professional Services",
    subtitle: "Explore our wide gamut of technology and publishing solutions.",
    category: "EMESQUBE TECHNOLOGIES",
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