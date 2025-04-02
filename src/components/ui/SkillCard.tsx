
import { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
}

const SkillCard = ({ title, icon, skills }: SkillCardProps) => {
  return (
    <div className="cyber-card h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="text-cyber-primary mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2 mt-2 flex-grow">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start">
            <span className="text-cyber-secondary mr-2">▹</span>
            <span className="text-cyber-light/80">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
