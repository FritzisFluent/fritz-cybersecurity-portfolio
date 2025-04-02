
import { Shield } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer?: string;
}

const CertificationCard = ({ title, issuer }: CertificationCardProps) => {
  return (
    <div className="cyber-card flex items-start">
      <div className="mr-4 mt-1 text-cyber-primary">
        <Shield className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        {issuer && <p className="text-cyber-secondary text-sm mt-1">{issuer}</p>}
      </div>
    </div>
  );
};

export default CertificationCard;
