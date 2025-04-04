
import { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Languages', href: '#languages' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-cyber-dark/95 shadow-lg backdrop-blur-sm py-2' 
          : 'bg-transparent py-4'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 nav-link">
          <Shield className="w-6 h-6 text-blue-600 dark:text-cyber-primary" />
          <span className="font-bold text-xl">Fritz Alexandre</span>
        </a>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center space-x-8 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-70 hover:opacity-100'
        }`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Button - Now just a close button when menu is open */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          {isMenuOpen && (
            <button onClick={toggleMenu} className="text-slate-800 dark:text-cyber-light focus:outline-none">
              <X className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-cyber-terminal/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link py-2 px-4 hover:bg-slate-100 dark:hover:bg-cyber-primary/10 rounded" 
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
