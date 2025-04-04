
import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

interface NavbarProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

const Navbar = ({ onSectionChange, activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    setIsMenuOpen(false);
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

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={toggleMenu} className="text-cyber-light focus:outline-none">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.href)}
                className={`nav-link py-2 px-4 text-left rounded-lg ${
                  activeSection === link.href
                    ? 'bg-cyber-primary/20 text-cyber-primary'
                    : 'hover:bg-cyber-primary/10'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
