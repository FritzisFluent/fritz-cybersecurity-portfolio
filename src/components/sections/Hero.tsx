
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = 'Multilingual Technology Consultant';
  const [typingComplete, setTypingComplete] = useState(false);
  
  // Typing animation effect
  useEffect(() => {
    if (typedText.length < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(textToType.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [typedText]);

  return (
    <div className="min-h-screen flex items-center relative bg-cyber-dark overflow-hidden px-4 md:px-8 lg:px-12">
      {/* Background grid design */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5">
        {Array(12 * 12).fill(0).map((_, i) => (
          <div key={i} className="border border-cyber-primary"></div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10 mt-16 md:mt-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Avatar section */}
          <div className="flex justify-center md:justify-start mb-8 md:mb-0 md:mr-12">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-tr from-cyber-primary to-cyber-secondary rounded-full overflow-hidden flex items-center justify-center border-4 border-cyber-primary/30">
                <span className="text-5xl md:text-6xl font-bold text-white">FA</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyber-primary/30 to-cyber-secondary/30 animate-pulse opacity-70"></div>
            </div>
          </div>
          
          {/* Text content */}
          <div className="flex-1 animate-fade-in opacity-0 text-center md:text-left" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Fritz Gerald Alexandre
            </h1>
            
            <div className="h-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyber-primary inline-block">
                {typedText}
                <span className={`border-r-2 border-cyber-secondary ml-1 ${typingComplete ? 'animate-blink' : ''}`}>&nbsp;</span>
              </h2>
            </div>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto md:mx-0 mt-4">
              Securing systems. Empowering people. Bridging tech with global communication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
              <a 
                href="#" 
                className="bg-cyber-primary hover:bg-cyber-primary/90 text-white py-3 px-8 rounded-md font-medium transition-colors duration-300"
                download
              >
                Download Resume
              </a>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView()}
                className="border border-cyber-primary/50 text-cyber-primary py-3 px-8 rounded-md font-medium hover:bg-cyber-primary/10 transition-colors duration-300"
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
                className="border border-cyber-primary/50 text-cyber-primary py-3 px-8 rounded-md font-medium hover:bg-cyber-primary/10 transition-colors duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
