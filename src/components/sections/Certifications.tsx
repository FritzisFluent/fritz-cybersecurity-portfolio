
import CertificationCard from '../ui/CertificationCard';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "CompTIA Security+"
    },
    {
      title: "CompTIA CySA+"
    },
    {
      title: "CompTIA Network+ | A+"
    },
    {
      title: "Cisco Cybersecurity, Linux & Networking Essentials"
    },
    {
      title: "IAM Fundamentals with Okta"
    },
    {
      title: "Mastercard Cybersecurity Job Simulation"
    },
    {
      title: "NDG Linux Unhatched"
    }
  ];
  
  return (
    <section id="certifications" className="bg-cyber-terminal relative pt-4 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `${0.1 * index}s` }}>
              <CertificationCard 
                title={cert.title}
                icon={<Award className="h-5 w-5 text-cyber-secondary" />}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
