
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const projects = [
    // Cybersecurity Projects
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
    },
    // Web Development Projects
    {
      title: "Fine Dining Restaurant Website",
      tools: "Tools: HTML5, CSS3, JavaScript, Figma",
      description: "Designed and developed a modern, responsive website for an upscale restaurant featuring online reservations, menu showcase, and multilingual support for international clientele.",
      image: "/lovable-uploads/2804f03b-4232-463a-83b1-18e8e46fef19.png"
    },
    {
      title: "FVS Automotive Repair Shop",
      tools: "Tools: React, SEO, Google Maps API",
      description: "Built a professional website for an automotive repair shop with service booking, customer reviews, diagnostics information, and mobile-responsive design for on-the-go access.",
      image: "/lovable-uploads/fcb23440-b60d-4a1b-a76f-e7d8a0300f7a.png"
    },
    {
      title: "Local Cafe & Bakery Site",
      tools: "Tools: WordPress, WooCommerce, CSS",
      description: "Created an e-commerce enabled website for a local bakery with online ordering, delivery tracking, and integrated payment processing supporting multiple languages.",
      image: "/lovable-uploads/90496f67-11f4-4dcc-a241-9e45cad7f558.png"
    },
    {
      title: "Medical Practice Portal",
      tools: "Tools: React, Node.js, MySQL",
      description: "Developed a secure patient portal with appointment scheduling, medical records access, and HIPAA-compliant data encryption for a multilingual medical practice.",
      image: "/lovable-uploads/d3d1227f-6555-4f70-a373-4187b8e58f38.png"
    },
    {
      title: "Real Estate Agency Website",
      tools: "Tools: Next.js, Tailwind CSS, Supabase",
      description: "Built a dynamic property listing platform with advanced search filters, virtual tours, and multilingual support for international buyers and sellers.",
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
