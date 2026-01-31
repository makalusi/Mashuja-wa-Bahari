import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Impact', href: '#impact' },
    { name: 'Gallery', href: '#categories' },
    { name: 'News and Stories', href: '#news' },
  ];

  const isScrolled = scrollY > 50;

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 custom-expo ${isScrolled
        ? 'w-[95%] max-w-6xl nav-glass shadow-card rounded-full py-2 px-6'
        : 'w-full max-w-7xl py-4 px-6 bg-transparent'
        }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img
              src="/logo.png"
              alt="Mashuja Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-sage-dark' : 'text-white'
            }`}>
            Mashujaa wa Bahari
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-all duration-300 hover:opacity-70 relative group ${isScrolled ? 'text-sage-dark' : 'text-white'
                }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#get-involved"
            className={`hidden md:block px-6 py-2.5 bg-sage text-cream text-sm font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 ${isScrolled ? 'bg-sage-dark' : 'bg-sage'
              }`}
          >
            Get Involved
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-full transition-all duration-300 hover:bg-white/10 ${isScrolled ? 'text-sage-dark' : 'text-white'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 mt-2 nav-glass rounded-2xl overflow-hidden transition-all duration-300 custom-expo ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="py-6 px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-sage-dark text-lg font-semibold hover:text-sage transition-colors border-b border-sage/5"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#get-involved"
            className="block w-full py-4 bg-sage text-cream text-center font-bold rounded-xl mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Involved
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
