
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
    <div className="min-h-screen flex items-center relative overflow-hidden px-4 md:px-8 lg:px-12">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark to-black z-0"></div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5 z-0">
        {Array(12 * 12).fill(0).map((_, i) => (
          <div key={i} className="border border-cyber-primary"></div>
        ))}
      </div>
      
      {/* Animated particles or matrix effect (optional) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <div className="cyber-grid"></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10 mt-16 md:mt-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-1 animate-fade-in opacity-0 text-center md:text-left" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 font-display">
              Fritz Gerald Alexandre
            </h1>
            
            <div className="h-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyber-primary inline-block font-display">
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
                className="bg-cyber-primary hover:bg-cyber-primary/90 text-white py-3 px-8 rounded-xl font-medium transition-all duration-300 shadow-glow-sm"
                download
              >
                Download Resume
              </a>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView()}
                className="border border-cyber-primary/50 text-cyber-primary py-3 px-8 rounded-xl font-medium hover:bg-cyber-primary/10 transition-all duration-300"
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
                className="border border-cyber-primary/50 text-cyber-primary py-3 px-8 rounded-xl font-medium hover:bg-cyber-primary/10 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          {/* Professional Photo/Avatar - Updated with new image */}
          <div className="md:w-2/5 mt-8 md:mt-0 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-cyber-primary/30 shadow-glow-lg">
                <img 
                  src="/lovable-uploads/6db220ca-fe70-4632-ba82-721f2efdd415.png"
                  alt="Fritz Gerald Alexandre"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-30"></div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-cyber-primary/10 rounded-full border border-cyber-primary/30 backdrop-blur-sm"></div>
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-cyber-secondary/10 rounded-full border border-cyber-secondary/30 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
