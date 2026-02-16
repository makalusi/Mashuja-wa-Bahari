import { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import MarineConservation from './sections/MarineConservation';
import Destinations from './sections/Destinations';
import GetInvolved from './sections/GetInvolved';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import Gallery from './sections/Gallery';
=======
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import ImpactSection from './sections/ImpactSection';
import About from './sections/About';
import Destinations from './sections/Destinations';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
>>>>>>> da0dd3e4979742688a8eb74898452fc6e16f7275

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
<<<<<<< HEAD
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MarineConservation />
              <Destinations />
              <CTA />
              <Footer />
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
=======
      <Hero />
      <ImpactSection />
      <About />
      <Destinations />
      <CTA />
      <Footer />
>>>>>>> da0dd3e4979742688a8eb74898452fc6e16f7275
    </div>
  );
}

export default App;
