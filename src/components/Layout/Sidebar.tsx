
import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  Home, 
  User, 
  Wrench, 
  FolderOpen, 
  BookOpen, 
  Star, 
  PhoneCall, 
  Menu, 
  X, 
  Sun, 
  Moon 
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => setIsOpen(!isOpen);
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  const navigationItems = [
    { id: 'hero', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'about', label: 'About Me', icon: <User className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills & Certifications', icon: <Wrench className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-5 h-5" /> },
    { id: 'blog', label: 'Insights & Intel', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'testimonials', label: 'Testimonials', icon: <Star className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <PhoneCall className="w-5 h-5" /> }
  ];
  
  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };
  
  return (
    <>
      {/* Mobile hamburger menu button */}
      <button 
        onClick={toggleSidebar}
        className="fixed md:hidden z-50 top-4 left-4 p-2 bg-cyber-terminal dark:bg-cyber-terminal border border-cyber-primary/20 rounded-md"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-6 h-6 text-cyber-primary" /> : <Menu className="w-6 h-6 text-cyber-primary" />}
      </button>
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-full z-40 transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          md:w-64 w-60 bg-white dark:bg-cyber-terminal border-r border-cyber-primary/20
          flex flex-col
        `}
      >
        {/* Logo/branding area */}
        <div className="p-4 border-b border-cyber-primary/20 flex flex-col items-center">
          <div className="w-16 h-16 bg-cyber-primary/10 rounded-full flex items-center justify-center mb-2">
            <span className="text-2xl font-bold text-cyber-primary">FA</span>
          </div>
          <h1 className="text-lg font-bold">Fritz Gerald Alexandre</h1>
          <p className="text-sm text-cyber-light/70 dark:text-cyber-light/70">Cybersecurity Analyst</p>
        </div>
        
        {/* Navigation links */}
        <nav className="flex-grow py-4 overflow-y-auto">
          <ul className="space-y-1 px-3">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleSectionClick(item.id)}
                  className={`
                    w-full text-left px-4 py-3 rounded-md flex items-center transition-colors
                    ${activeSection === item.id 
                      ? 'bg-cyber-primary/10 text-cyber-primary' 
                      : 'hover:bg-cyber-primary/5 text-slate-700 dark:text-cyber-light/80'
                    }
                  `}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Theme toggle and other controls */}
        <div className="p-4 border-t border-cyber-primary/20 flex justify-between">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-cyber-primary/10 transition-colors"
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
            className="flex items-center justify-center px-4 py-2 bg-cyber-primary text-white rounded-md hover:bg-cyber-primary/90 transition-colors"
            download
          >
            Resume
          </a>
        </div>
      </aside>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
