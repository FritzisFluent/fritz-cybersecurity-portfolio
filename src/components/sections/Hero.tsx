
import { ArrowDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background grid design - visible in both light and dark modes with appropriate opacity */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5 dark:opacity-5">
        {Array(12 * 12).fill(0).map((_, i) => (
          <div key={i} className="border border-slate-400 dark:border-cyber-primary"></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image section */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            <img 
              src="/lovable-uploads/809f1b81-416f-4aca-a0a6-fd08ea24847b.png" 
              alt="Cybersecurity professional with laptop" 
              className="rounded-lg shadow-2xl max-w-full lg:max-w-md light:border light:border-slate-200"
            />
          </div>
          
          {/* Text content */}
          <div className="w-full lg:w-7/12 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="terminal-text text-lg mb-2">&gt; Hello, my name is</div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-slate-900 dark:text-white">
              Fritz Gerald Alexandre
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-600 dark:text-cyber-primary">
              Cybersecurity Analyst & Technology Consultant
            </h2>
            <p className="text-xl mb-8 max-w-2xl text-slate-700 dark:text-cyber-light/90">
              New York-based professional with over 4 years of experience in IT support, incident response, 
              and securing enterprise environments. CompTIA Security+ and CySA+ certified.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-0">
              <a 
                href="#projects" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md font-medium transition-colors duration-300 dark:bg-cyber-primary dark:hover:bg-cyber-primary/90"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="border border-slate-300 text-slate-800 py-3 px-8 rounded-md font-medium hover:bg-slate-100 transition-colors duration-300 dark:border-cyber-primary/50 dark:text-cyber-primary dark:hover:bg-cyber-primary/10"
              >
                Contact Me
              </a>
              
              {/* Mobile Arrow (only visible on mobile) */}
              {isMobile && (
                <div className="flex justify-center mt-8 animate-bounce">
                  <a href="#about" aria-label="Scroll down">
                    <ArrowDown className="h-6 w-6 text-blue-600 dark:text-cyber-primary" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop Scroll down indicator (hidden on mobile) */}
      {!isMobile && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-blue-600 dark:text-cyber-primary" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Hero;
