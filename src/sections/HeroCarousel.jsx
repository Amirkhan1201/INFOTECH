import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroCarousel.css';

const slidesData = [
  {
    id: 'web-mobile-apps',
    title: "Empower Your Digital Growth",
    subtitle: "We build high-performance Web and Mobile Applications tailored for your business success.",
    cta: "Explore Services",
    bgGradient: "linear-gradient(135deg, #2B7A78 0%, #17252A 100%)",
  },
  {
    id: 'app-development',
    title: "Innovative App Development",
    subtitle: "Transforming your ideas into sleek, scalable, and user-friendly iOS & Android apps.",
    cta: "Get Started",
    bgGradient: "linear-gradient(135deg, #3AAFA9 0%, #2B7A78 100%)",
  },
  {
    id: 'web-solutions',
    title: "Next-Gen Web Solutions",
    subtitle: "Modern, lightning-fast, and responsive websites built using the latest React ecosystem.",
    cta: "View Portfolio",
    bgGradient: "linear-gradient(135deg, #17252A 0%, #22343B 100%)",
  },
  {
    id: 'digital-marketing',
    title: "Digital Marketing & Growth",
    subtitle: "Scale your brand reach, maximize conversions, and dominate search engine rankings.",
    cta: "Boost Growth",
    bgGradient: "linear-gradient(135deg, #2B7A78 0%, #3AAFA9 100%)",
  },
  {
    id: 'epublishing',
    title: "Professional ePublishing Services",
    subtitle: "Seamless digital publishing, accurate typesetting, and formatting solutions for publishers.",
    cta: "Learn More",
    bgGradient: "linear-gradient(135deg, #22343B 0%, #17252A 100%)",
  },
  {
    id: 'medical-localization',
    title: "Medical Coding & Localization",
    subtitle: "Accurate translation, localization, and medical transcription services you can trust.",
    cta: "Contact Us",
    bgGradient: "linear-gradient(135deg, #3AAFA9 0%, #17252A 100%)",
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-container">
      {slidesData.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ background: slide.bgGradient }}
        >
          <div className="carousel-content">
            <span className="slide-badge">MS INFOTECH SOLUTIONS</span>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <div className="carousel-btns">
              <Link to={`/service/${slide.id}`} className="btn-primary">{slide.cta}</Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      ))}

      <button className="carousel-arrow prev" onClick={prevSlide}>❮</button>
      <button className="carousel-arrow next" onClick={nextSlide}>❯</button>

      <div className="carousel-dots">
        {slidesData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}