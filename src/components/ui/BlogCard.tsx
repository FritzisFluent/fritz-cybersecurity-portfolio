
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image?: string;
}

const BlogCard = ({ title, excerpt, image }: BlogCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="cyber-card group relative overflow-hidden flex flex-col h-full shadow-lg border border-cyber-primary/20 hover:border-cyber-primary/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
      
      {image && (
        <div className="mb-4 overflow-hidden rounded">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-3 text-cyber-primary line-clamp-2">{title}</h3>
      <p className="text-cyber-light/80 flex-grow mb-4 line-clamp-3">{excerpt}</p>
      
      <div className="mt-auto">
        <button 
          className="flex items-center text-cyber-secondary hover:text-cyber-primary transition-colors"
        >
          <span className="mr-1">Read More</span>
          <ArrowRight 
            className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
          />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
