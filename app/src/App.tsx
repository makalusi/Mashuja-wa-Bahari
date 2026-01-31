import { useState, useEffect } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import ImpactSection from './sections/ImpactSection';
import About from './sections/About';
import Destinations from './sections/Destinations';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navigation scrollY={scrollY} />
      <Hero />
      <ImpactSection />
      <About />
      <Destinations />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
