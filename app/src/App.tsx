import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import MarineConservation from './sections/MarineConservation';
import Destinations from './sections/Destinations';
import GetInvolved from './sections/GetInvolved';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import Gallery from './sections/Gallery';

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
    </div>
  );
}

export default App;
