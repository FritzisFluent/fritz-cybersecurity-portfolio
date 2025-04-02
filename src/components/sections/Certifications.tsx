
import CertificationCard from '../ui/CertificationCard';

const Certifications = () => {
  const certifications = [
    {
      title: "CompTIA Security+",
      date: "March 2024"
    },
    {
      title: "CompTIA CySA+",
      date: "September 2024"
    },
    {
      title: "CompTIA Network+ | A+",
      date: ""
    },
    {
      title: "Cisco Cybersecurity, Linux & Networking Essentials",
      date: ""
    },
    {
      title: "IAM Fundamentals with Okta",
      date: ""
    },
    {
      title: "Mastercard Cybersecurity Job Simulation",
      date: ""
    },
    {
      title: "NDG Linux Unhatched",
      date: ""
    }
  ];
  
  return (
    <section id="certifications" className="bg-cyber-terminal relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `${0.1 * index}s` }}>
              <CertificationCard 
                title={cert.title}
                date={cert.date}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
