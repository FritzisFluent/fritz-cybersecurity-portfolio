
import { Shield, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-terminal py-12 border-t border-cyber-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-5 h-5 text-cyber-primary" />
              <span className="text-xl font-bold">Fritz Gerald Alexandre</span>
            </div>
            <p className="text-cyber-light/70">Multilingual Technology Consultant</p>
            <p className="text-cyber-light/70 mt-2">© {year} Fritz Gerald Alexandre</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="mailto:fritzgeraldalexandre7@gmail.com" 
                className="text-cyber-light hover:text-cyber-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/fgalexandre" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyber-light hover:text-cyber-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-cyber-light hover:text-cyber-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="flex space-x-4 text-sm text-cyber-light/70">
              <a href="#" className="hover:text-cyber-primary transition-colors">Resume PDF</a>
              <span>|</span>
              <a href="#contact" className="hover:text-cyber-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
