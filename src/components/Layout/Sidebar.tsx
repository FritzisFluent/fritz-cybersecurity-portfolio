
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  Home, 
  User, 
  Wrench, 
  FolderOpen, 
  BookOpen, 
  Star, 
  PhoneCall, 
  Sun, 
  Moon,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Shield
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const { theme, setTheme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Check if we should collapse by default on desktop
  useEffect(() => {
    const checkWidth = () => {
      setIsCollapsed(window.innerWidth >= 1024 ? false : true);
    };
    
    // Set initial state
    checkWidth();
    
    // Add listener for window resize
    window.addEventListener('resize', checkWidth);
    
    // Clean up
    return () => window.removeEventListener('resize', checkWidth);
  }, []);
  
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  const navigationItems = [
    { id: 'hero', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'about', label: 'About Me', icon: <User className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills & Certifications', icon: <Wrench className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-5 h-5" /> },
    { id: 'services', label: 'Services', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'blog', label: 'Insights & Intel', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'testimonials', label: 'Testimonials', icon: <Star className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <PhoneCall className="w-5 h-5" /> }
  ];
  
  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
  };
  
  return (
    <>
      {/* Sidebar - Now opens/closes on hover */}
      <aside 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          fixed top-0 left-0 h-full z-40 transition-all duration-300 ease-in-out
          ${isCollapsed && !isHovering ? 'md:w-20' : 'md:w-64'} 
          w-20 md:w-64 
          bg-black/70 backdrop-blur-lg dark:bg-cyber-terminal/90 
          border-r border-cyber-primary/30 shadow-xl
        `}
      >
        {/* Logo/branding area */}
        <div className={`p-4 border-b border-cyber-primary/30 flex flex-col items-center ${isCollapsed && !isHovering ? 'md:py-6' : ''}`}>
          <div className="w-16 h-16 bg-cyber-primary/20 rounded-full flex items-center justify-center mb-2 ring-2 ring-cyber-primary/50 shadow-glow">
            <Shield className="w-8 h-8 text-cyber-primary" />
          </div>
          <div className={`transition-opacity duration-300 ${isCollapsed && !isHovering ? 'md:opacity-0 md:h-0 md:overflow-hidden' : 'opacity-100 h-auto'}`}>
            <h1 className="text-lg font-bold text-center">Fritz Gerald Alexandre</h1>
            <p className="text-sm text-cyber-light/70 text-center">Cybersecurity Analyst</p>
          </div>
        </div>
        
        {/* Navigation links */}
        <nav className="flex-grow py-4 overflow-y-auto">
          <ul className="space-y-1 px-3">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleSectionClick(item.id)}
                  className={`
                    w-full text-left px-4 py-3 rounded-xl flex items-center transition-all duration-300 
                    ${activeSection === item.id 
                      ? 'bg-cyber-primary/20 text-cyber-primary shadow-md border border-cyber-primary/30' 
                      : 'hover:bg-cyber-primary/10 text-cyber-light/80 hover:border hover:border-cyber-primary/20'
                    }
                    ${isCollapsed && !isHovering ? 'justify-center md:justify-start' : 'justify-start'}
                  `}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  <span className={`
                    ${activeSection === item.id ? 'text-cyber-primary' : 'text-cyber-light/60'} 
                    ${isCollapsed && !isHovering ? 'mr-0' : 'mr-3'} transition-all duration-200
                  `}>
                    {item.icon}
                  </span>
                  <span className={`transition-opacity duration-300 whitespace-nowrap ${isCollapsed && !isHovering ? 'md:opacity-0 md:w-0 md:hidden' : 'opacity-100 w-auto inline'}`}>
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <span className="absolute inset-y-0 left-0 w-1 bg-cyber-primary rounded-r-lg" aria-hidden="true"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Collapse toggle button */}
        <button
          onClick={toggleCollapse}
          className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 bg-cyber-terminal h-6 w-6 rounded-full border border-cyber-primary/40 items-center justify-center shadow-md z-50"
        >
          {isCollapsed && !isHovering ? 
            <ChevronRight className="h-4 w-4 text-cyber-primary" /> : 
            <ChevronLeft className="h-4 w-4 text-cyber-primary" />
          }
        </button>
        
        {/* Theme toggle and other controls */}
        <div className="p-4 border-t border-cyber-primary/30 flex justify-center md:justify-between">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-cyber-primary/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-cyber-primary" />
            ) : (
              <Moon className="w-5 h-5 text-cyber-primary" />
            )}
          </button>
          
          <a 
            href="#" 
            className={`
              hidden md:flex items-center justify-center px-4 py-2 bg-cyber-primary text-white rounded-lg hover:bg-cyber-primary/90 transition-colors
              shadow-md
              ${isCollapsed && !isHovering ? 'md:hidden' : 'md:flex'} 
            `}
            download
          >
            Resume
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
