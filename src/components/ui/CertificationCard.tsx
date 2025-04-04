
import React from 'react';

interface CertificationCardProps {
  title: string;
  icon?: React.ReactNode;
}

const CertificationCard = ({ title, icon }: CertificationCardProps) => {
  return (
    <div className="cyber-card flex items-center bg-black/30 backdrop-blur-sm border-cyber-primary/20 hover:border-cyber-primary/50 transition-all duration-300 rounded-xl shadow-glow-sm">
      {icon && <div className="mr-3 text-cyber-primary">{icon}</div>}
      <h3 className="font-medium">{title}</h3>
    </div>
  );
};

export default CertificationCard;
