
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="cyber-card h-full flex flex-col bg-white/5 border-cyber-primary/20 hover:border-cyber-primary transition-colors duration-300">
      <div className="bg-cyber-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-cyber-primary">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-cyber-primary">{title}</h3>
      <p className="text-cyber-light/80">{description}</p>
    </div>
  );
};

export default ServiceCard;
