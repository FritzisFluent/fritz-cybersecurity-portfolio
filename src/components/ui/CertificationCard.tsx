
import { Award, Shield, Terminal, Network, Laptop, CreditCard, DatabaseIcon } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer?: string;
  iconType?: 'security' | 'network' | 'linux' | 'iam' | 'cyber' | 'general';
}

const CertificationCard = ({ title, issuer, iconType = 'general' }: CertificationCardProps) => {
  // Choose icon based on certification type
  const renderIcon = () => {
    switch (iconType) {
      case 'security':
        return <Shield className="h-6 w-6" />;
      case 'network':
        return <Network className="h-6 w-6" />;
      case 'linux':
        return <Terminal className="h-6 w-6" />;
      case 'iam':
        return <CreditCard className="h-6 w-6" />;
      case 'cyber':
        return <Laptop className="h-6 w-6" />;
      default:
        return <Award className="h-6 w-6" />;
    }
  };

  return (
    <div className="cyber-card flex items-start transition-all duration-300">
      <div className="mr-4 mt-1 text-blue-600 dark:text-cyber-primary">
        {renderIcon()}
      </div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        {issuer && <p className="text-slate-600 dark:text-cyber-secondary text-sm mt-1">{issuer}</p>}
      </div>
    </div>
  );
};

export default CertificationCard;
