
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
    <div className="cyber-card flex items-start transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer">
      <div className="mr-4 mt-1 text-blue-600 dark:text-cyber-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:text-blue-700 dark:group-hover:text-cyber-accent">
        {renderIcon()}
      </div>
      <div className="transition-all duration-300 group-hover:translate-x-1">
        <h3 className="font-bold text-lg group-hover:text-blue-700 dark:group-hover:text-cyber-accent transition-colors duration-300">{title}</h3>
        {issuer && <p className="text-slate-600 dark:text-cyber-secondary text-sm mt-1 group-hover:text-slate-700 dark:group-hover:text-cyber-light transition-colors duration-300">{issuer}</p>}
      </div>
    </div>
  );
};

export default CertificationCard;
