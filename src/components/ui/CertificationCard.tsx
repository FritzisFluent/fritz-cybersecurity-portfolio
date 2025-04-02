
import { Shield } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  date: string;
  issuer?: string;
}

const CertificationCard = ({ title, date, issuer }: CertificationCardProps) => {
  return (
    <div className="cyber-card flex items-start">
      <div className="mr-4 mt-1">
        <Shield className="h-5 w-5 text-cyber-primary" />
      </div>
      <div>
        <h3 className="font-bold text-lg text-cyber-light">{title}</h3>
        <p className="text-cyber-secondary text-sm">{date}</p>
        {issuer && <p className="text-cyber-light/70 text-sm mt-1">{issuer}</p>}
      </div>
    </div>
  );
};

export default CertificationCard;
