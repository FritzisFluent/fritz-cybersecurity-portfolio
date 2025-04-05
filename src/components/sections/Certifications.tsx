
import CertificationCard from '../ui/CertificationCard';

const Certifications = () => {
  const certifications = [
    {
      title: "CompTIA Security+",
      iconType: "security" as const
    },
    {
      title: "CompTIA CySA+",
      iconType: "security" as const
    },
    {
      title: "CompTIA Network+ | A+",
      iconType: "network" as const
    },
    {
      title: "Cisco Cybersecurity, Linux & Networking Essentials",
      iconType: "network" as const
    },
    {
      title: "IAM Fundamentals with Okta",
      iconType: "iam" as const
    },
    {
      title: "Mastercard Cybersecurity Job Simulation",
      iconType: "cyber" as const
    },
    {
      title: "NDG Linux Unhatched",
      iconType: "linux" as const
    }
  ];
  
  return (
    <section id="certifications" className="bg-slate-50 dark:bg-cyber-terminal relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading pt-8">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `${0.1 * index}s` }}>
              <CertificationCard 
                title={cert.title}
                iconType={cert.iconType}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
