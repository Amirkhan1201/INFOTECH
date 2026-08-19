import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroCarousel.css';

const slidesData = [
  {
    id: 'publishing-workflows',
    title: "Publishing Workflow Expertise",
    subtitle: "Supporting book and journal publishing workflows with quality-focused production and technology-driven processes.",
    cta: "Explore Approach",
    bgGradient: "linear-gradient(135deg, #1B3B6F 0%, #061A40 100%)",
  },
  {
    id: 'xml-ebook-conversion',
    title: "XML & eBook Conversion",
    subtitle: "Delivering accurate, scalable, and cost-effective digital content solutions tailored to modern publishing demands.",
    cta: "View Services",
    bgGradient: "linear-gradient(135deg, #218380 0%, #1B3B6F 100%)",
  },
  {
    id: 'document-transformation',
    title: "Digital & Document Transformation",
    subtitle: "Combining skilled professionals and structured workflows for seamless document and content transformation.",
    cta: "Learn More",
    bgGradient: "linear-gradient(135deg, #061A40 0%, #122230 100%)",
  },
  {
    id: 'quality-delivery',
    title: "Quality-Focused Production",
    subtitle: "Maintaining consistent quality throughout the production cycle with experienced production teams.",
    cta: "Our Strengths",
    bgGradient: "linear-gradient(135deg, #218380 0%, #48A9A6 100%)",
  },
  {
    id: 'scalable-support',
    title: "Flexible & Scalable Support",
    subtitle: "Technology-enabled content solutions designed to adapt to your project timelines and requirements.",
    cta: "Get Started",
    bgGradient: "linear-gradient(135deg, #122230 0%, #061A40 100%)",
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
            <span className="slide-badge">EMESQUBE TECHNOLOGIES</span>
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