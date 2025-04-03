
import React from 'react';

interface CertificationCardProps {
  title: string;
  icon?: React.ReactNode;
}

const CertificationCard = ({ title, icon }: CertificationCardProps) => {
  return (
    <div className="cyber-card flex items-center">
      {icon && <div className="mr-3">{icon}</div>}
      <h3 className="font-medium">{title}</h3>
    </div>
  );
};

export default CertificationCard;
