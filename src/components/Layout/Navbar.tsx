
import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

interface NavbarProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

const Navbar = ({ onSectionChange, activeSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Services', href: 'services' },
    { name: 'Blog', href: 'blog' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/70 shadow-lg backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center space-x-2 nav-link"
        >
          <Shield className="w-6 h-6 text-cyber-primary" />
          <span className="font-bold text-xl">Fritz Alexandre</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`nav-link relative px-3 py-2 ${
                activeSection === link.href
                  ? 'text-cyber-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyber-primary'
                  : ''
              }`}
            >
              {link.name}
            </button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Theme Toggle (without hamburger menu) */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
