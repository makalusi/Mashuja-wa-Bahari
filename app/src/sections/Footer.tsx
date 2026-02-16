<<<<<<< HEAD
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
=======
import { Tent, Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
>>>>>>> da0dd3e4979742688a8eb74898452fc6e16f7275

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#' },
      { name: 'Careers', href: '#' },
<<<<<<< HEAD
=======
      { name: 'Press', href: '#' },
>>>>>>> da0dd3e4979742688a8eb74898452fc6e16f7275
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
<<<<<<< HEAD
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
=======
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
>>>>>>> da0dd3e4979742688a8eb74898452fc6e16f7275
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-sage-dark text-cream/80 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-cream/10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
<<<<<<< HEAD
            <a href="#hero" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center">
                <img src="/logo.png" alt="Mashuja Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-bold text-xl text-cream font-logo">Mashuja wa bahari</span>
            </a>
            <p className="text-cream/70 mb-6 max-w-sm leading-relaxed">
              Conserving our oceans through art, education, and community-driven action. Join us in protecting the blue heart of our planet.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@mashujawabahari.com" className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@mashujawabahari.com</span>
              </a>
              <a href="tel:+18001234567" className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+254 00 000 000</span>
              </a>
              <div className="flex items-center gap-3 text-cream/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Nairobi, Kenya</span>
=======
            <a href="#hero" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center">
                <Tent className="w-5 h-5 text-sage-dark" />
              </div>
              <span className="font-bold text-xl text-cream">Nomad Gear</span>
            </a>
            <p className="text-cream/70 mb-6 max-w-sm leading-relaxed">
              Making outdoor adventures accessible to everyone. Rent premium camping gear and explore the world with confidence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@nomadgear.com" className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@nomadgear.com</span>
              </a>
              <a href="tel:+18001234567" className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">1-800-123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-cream/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Portland, Oregon, USA</span>
>>>>>>> da0dd3e4979742688a8eb74898452fc6e16f7275
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
<<<<<<< HEAD
            <h4 className="font-bold text-cream mb-6 uppercase tracking-wider text-sm font-primary">Company</h4>
=======
            <h4 className="font-semibold text-cream mb-6">Company</h4>
>>>>>>> da0dd3e4979742688a8eb74898452fc6e16f7275
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
<<<<<<< HEAD
            <h4 className="font-bold text-cream mb-6 uppercase tracking-wider text-sm font-primary">Support</h4>
=======
            <h4 className="font-semibold text-cream mb-6">Support</h4>
>>>>>>> da0dd3e4979742688a8eb74898452fc6e16f7275
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
<<<<<<< HEAD
            <h4 className="font-semibold text-cream mb-6 font-primary">Legal</h4>
=======
            <h4 className="font-semibold text-cream mb-6">Legal</h4>
>>>>>>> da0dd3e4979742688a8eb74898452fc6e16f7275
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-cream/60 text-center md:text-left">
<<<<<<< HEAD
            © {new Date().getFullYear()} Mashuja wa bahari. All rights reserved.
=======
            © {new Date().getFullYear()} Nomad Gear. All rights reserved.
>>>>>>> da0dd3e4979742688a8eb74898452fc6e16f7275
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream/70 hover:bg-cream hover:text-sage-dark transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
