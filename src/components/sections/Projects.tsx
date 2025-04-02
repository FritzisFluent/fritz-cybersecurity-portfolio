
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Vulnerability Scanner Deployment",
      tools: "Tools: Nessus, Kali Linux",
      description: "Deployed and configured a vulnerability scanner in a virtual lab, scanned network assets, and generated compliance reports.",
      image: "/lovable-uploads/2804f03b-4232-463a-83b1-18e8e46fef19.png"
    },
    {
      title: "Password Manager Hosted in Cloud",
      tools: "Tools: Bitwarden, Docker, Azure",
      description: "Deployed Bitwarden in the cloud with encrypted user vaults and secure access control for small business clients.",
      image: "/lovable-uploads/fcb23440-b60d-4a1b-a76f-e7d8a0300f7a.png"
    },
    {
      title: "Honeypot Hosted in Cloud",
      tools: "Tools: Cowrie, AWS EC2",
      description: "Configured a cloud-hosted honeypot to monitor SSH attacks and log intrusion attempts for analysis.",
      image: "/lovable-uploads/90496f67-11f4-4dcc-a241-9e45cad7f558.png"
    },
    {
      title: "Microsoft Sentinel SIEM",
      tools: "Tools: Azure Sentinel, KQL",
      description: "Built dashboards, configured data connectors, and ran threat detections using KQL queries in Microsoft Sentinel.",
      image: "/lovable-uploads/d3d1227f-6555-4f70-a373-4187b8e58f38.png"
    },
    {
      title: "SIEM Integration with ChatGPT AI",
      tools: "Tools: Microsoft Sentinel, OpenAI API",
      description: "Integrated AI-powered analytics into SIEM for automated threat analysis and enhanced detection accuracy.",
      image: "/lovable-uploads/d04ecc68-4898-482a-9667-21f414675522.png"
    }
  ];
  
  return (
    <section id="projects" className="bg-cyber-dark relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-10">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-in opacity-0 h-full"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <ProjectCard 
                title={project.title}
                tools={project.tools}
                description={project.description}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
