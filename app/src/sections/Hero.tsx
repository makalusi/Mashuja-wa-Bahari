import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_IMAGES = [
  { src: '/hero/main.jpg', alt: 'Mashujaa wa Bahari – Main' },
  { src: '/hero/image-1.jpg', alt: 'Ocean conservation art 1' },
  { src: '/hero/image-2.jpg', alt: 'Ocean conservation art 2' },
  { src: '/hero/image-3.jpg', alt: 'Ocean conservation art 3' },
  { src: '/hero/image-4.jpg', alt: 'Ocean conservation art 4' },
];

const HERO_TEXTS = [
  'Celebrating the Art of Marine Conservation: Honoring the guardians who keep our blue world alive.',
  "Mastering the Art of the Sea. We recognize the skill, bravery, and dedication of Kenya's maritime heroes.",
  'The Art of Protection. Join us as we shine a light on the legendary figures safeguarding our coastal heritage.',
  'Defining the Art of the Blue Economy through sustainable innovation and tireless maritime service.',
  'Every wave tells a story of the Art of Bravery. Nominate a hero who has mastered the depths.',
];

const CYCLE_MS = 5000;
const TRANSITION_MS = 1200; // shared duration for both image & text

/** Render text with "Art" highlighted in a premium blue badge */
const renderHighlightedText = (text: string) => {
  const parts = text.split(/(Art)/g);
  return parts.map((part, i) =>
    part === 'Art' ? (
      <span key={i} className="relative inline-block mx-1">
        <span
          className="relative z-10 px-3 py-0.5 text-white font-extrabold"
          style={{ letterSpacing: '0.04em' }}
        >
          Art
        </span>
        <span
          className="absolute inset-0 rounded-md bg-[#02457a] shadow-lg shadow-[#02457a]/40"
          style={{ transform: 'skewX(-3deg)' }}
        />
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      if (heroRef.current && heroRef.current.getBoundingClientRect().bottom > 0) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
      setAnimKey((k) => k + 1);
    }, CYCLE_MS);
    return () => clearInterval(timer);
  }, []);

  const opacityFade = Math.max(0, 1 - scrollY / 600);

  const handleDotClick = (i: number) => {
    setActiveIndex(i);
    setAnimKey((k) => k + 1);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden grain-overlay"
    >
      {/* ── Full-screen Image Carousel ── */}
      {HERO_IMAGES.map((img, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={img.src}
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'scale(1.02)' : 'scale(1.08)',
              transition: `opacity ${TRANSITION_MS}ms ease-in-out, transform ${CYCLE_MS}ms ease-out`,
              zIndex: isActive ? 2 : 1,
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}

      {/* Gradient overlay — heavier on left for text readability */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.40) 45%, rgba(0,0,0,0.08) 75%, rgba(0,0,0,0.25) 100%)',
        }}
      />

      {/* ── Unified left content container (text + CTA) — vertically centered ── */}
      <div
        className="relative z-10 flex items-center min-h-screen px-6 md:px-12 lg:px-20"
        style={{ opacity: opacityFade }}
      >
        <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col gap-8 md:gap-10">
          {/* Dynamic headline text */}
          <div
            key={animKey}
            className="hero-text-enter"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-5xl font-bold text-white leading-snug md:leading-snug lg:leading-tight tracking-tight drop-shadow-lg">
              {renderHighlightedText(HERO_TEXTS[activeIndex])}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-1000 custom-expo ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <a
              href="#about"
              className="group relative px-8 py-4 bg-sage text-cream font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-sage-dark transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </a>
            <Link
              to="/gallery"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              View Gallery
            </Link>
          </div>

          {/* Indicator dots — aligned with content */}
          <div className="flex gap-2">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                aria-label={`Show image ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full border border-white/60 transition-all duration-500 ${i === activeIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
