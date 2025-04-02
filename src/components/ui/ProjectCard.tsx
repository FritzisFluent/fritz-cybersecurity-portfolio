
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  tools: string;
  description: string;
  image: string;
}

const ProjectCard = ({ title, tools, description, image }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="cyber-card group relative overflow-hidden flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
      
      <div className="mb-4 overflow-hidden rounded">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-cyber-primary">{title}</h3>
      <p className="text-sm text-cyber-secondary mb-4 terminal-text">&gt; {tools}</p>
      <p className="text-cyber-light/80 flex-grow">{description}</p>
      <div className={`mt-4 flex justify-end transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-cyber-secondary text-sm">_</span>
      </div>
    </div>
  );
};

export default ProjectCard;
