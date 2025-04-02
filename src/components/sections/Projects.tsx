
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Vulnerability Scanner Deployment",
      tools: "Tools: Nessus, Kali Linux",
      description: "Deployed and configured a vulnerability scanner in a virtual lab, scanned network assets, and generated compliance reports."
    },
    {
      title: "Password Manager Hosted in Cloud",
      tools: "Tools: Bitwarden, Docker, Azure",
      description: "Deployed Bitwarden in the cloud with encrypted user vaults and secure access control for small business clients."
    },
    {
      title: "Honeypot Hosted in Cloud",
      tools: "Tools: Cowrie, AWS EC2",
      description: "Configured a cloud-hosted honeypot to monitor SSH attacks and log intrusion attempts for analysis."
    },
    {
      title: "Microsoft Sentinel SIEM",
      tools: "Tools: Azure Sentinel, KQL",
      description: "Built dashboards, configured data connectors, and ran threat detections using KQL queries in Microsoft Sentinel."
    },
    {
      title: "SIEM Integration with ChatGPT AI",
      tools: "Tools: Microsoft Sentinel, OpenAI API",
      description: "Integrated AI-powered analytics into SIEM for automated threat analysis and enhanced detection accuracy."
    }
  ];
  
  return (
    <section id="projects" className="bg-cyber-dark relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <ProjectCard 
                title={project.title}
                tools={project.tools}
                description={project.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
