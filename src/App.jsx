
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Navbar from './components/Navbar';
import HeroCarousel from './sections/HeroCarousel';
import StatsSection from './sections/StatsSection';
import PromiseAndCost from './sections/PromiseAndCost';
import ContactTrigger from './sections/ContactTrigger';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import ServiceDetails from './pages/ServiceDetails';
import AboutPage from './pages/AboutPage'; // <--- Import here
import './App.css';

function HomePage() {
  return (
    <>
      <HeroCarousel />
      <StatsSection />
      <PromiseAndCost />
      <ContactTrigger />
    </>
  );
}

export default function App() {
  return (
    <>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} /> {/* <--- Route added */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service/:serviceId" element={<ServiceDetails />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}