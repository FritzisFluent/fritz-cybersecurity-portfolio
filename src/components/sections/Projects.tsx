import { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';

interface Project {
  title: string;
  category: string;
  tools: string;
  description: string;
  image: string;
  features?: string[];
  role?: string;
  outcomes?: string[];
  liveUrl?: string;
  codeUrl?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const cybersecurityProjects: Project[] = [
    {
      title: "Vulnerability Scanner Deployment",
      category: "Cybersecurity",
      tools: "Nessus, Kali Linux",
      description: "Deployed and configured a vulnerability scanner in a virtual lab, scanned network assets, and generated compliance reports.",
      image: "/lovable-uploads/2804f03b-4232-463a-83b1-18e8e46fef19.png",
      role: "Security Engineer",
      features: [
        "Automated vulnerability scanning and detection",
        "Custom scan policies for different asset types",
        "Compliance reporting (PCI-DSS, HIPAA)",
        "Integration with ticketing system for remediation tracking"
      ],
      outcomes: [
        "Identified and remediated 47 critical vulnerabilities",
        "Reduced scan time by 40% through optimized scheduling",
        "Achieved 100% compliance audit score"
      ]
    },
    {
      title: "Password Manager Hosted in Cloud",
      category: "Cybersecurity",
      tools: "Bitwarden, Docker, Azure",
      description: "Deployed Bitwarden in the cloud with encrypted user vaults and secure access control for small business clients.",
      image: "/lovable-uploads/fcb23440-b60d-4a1b-a76f-e7d8a0300f7a.png",
      role: "Cloud Security Specialist",
      features: [
        "End-to-end encrypted password storage",
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "Automated backup and disaster recovery",
        "Cross-platform support (web, mobile, desktop)"
      ],
      outcomes: [
        "Secured credentials for 150+ users",
        "Zero security incidents in 12 months",
        "Reduced password-related support tickets by 65%"
      ]
    },
    {
      title: "Honeypot Hosted in Cloud",
      category: "Cybersecurity",
      tools: "Cowrie, AWS EC2",
      description: "Configured a cloud-hosted honeypot to monitor SSH attacks and log intrusion attempts for analysis.",
      image: "/lovable-uploads/90496f67-11f4-4dcc-a241-9e45cad7f558.png",
      role: "Threat Intelligence Analyst",
      features: [
        "Real-time attack monitoring and logging",
        "Automated threat intelligence gathering",
        "IP reputation tracking and blacklisting",
        "Attack pattern analysis and visualization"
      ],
      outcomes: [
        "Captured over 10,000 attack attempts in 30 days",
        "Identified 3 zero-day exploit attempts",
        "Enhanced firewall rules based on attack patterns"
      ]
    },
    {
      title: "Microsoft Sentinel SIEM",
      category: "Cybersecurity",
      tools: "Azure Sentinel, KQL",
      description: "Built dashboards, configured data connectors, and ran threat detections using KQL queries in Microsoft Sentinel.",
      image: "/lovable-uploads/d3d1227f-6555-4f70-a373-4187b8e58f38.png",
      role: "SOC Analyst",
      features: [
        "Real-time security event monitoring",
        "Custom KQL queries for threat detection",
        "Automated incident response playbooks",
        "Integration with Azure AD and Office 365",
        "Compliance dashboards and reporting"
      ],
      outcomes: [
        "Reduced mean time to detect (MTTD) by 55%",
        "Automated 80% of common incident responses",
        "Detected and blocked 23 advanced persistent threats"
      ]
    },
    {
      title: "SIEM Integration with ChatGPT AI",
      category: "Cybersecurity",
      tools: "Microsoft Sentinel, OpenAI API",
      description: "Integrated AI-powered analytics into SIEM for automated threat analysis and enhanced detection accuracy.",
      image: "/lovable-uploads/d04ecc68-4898-482a-9667-21f414675522.png",
      role: "Security Automation Engineer",
      features: [
        "AI-powered threat classification and prioritization",
        "Natural language queries for security data",
        "Automated incident summary generation",
        "Predictive threat modeling",
        "Intelligent alert correlation"
      ],
      outcomes: [
        "Reduced false positives by 70%",
        "Improved analyst productivity by 3x",
        "Enabled 24/7 automated threat analysis"
      ]
    }
  ];

  const websiteProjects: Project[] = [
    {
      title: "Fine Dining Restaurant Website",
      category: "Website",
      tools: "HTML5, CSS3, JavaScript, Figma",
      description: "Designed and developed a modern, responsive website for an upscale restaurant featuring online reservations, menu showcase, and multilingual support for international clientele.",
      image: "/projects/restaurant-website.jpg",
      role: "Full Stack Developer & Designer",
      features: [
        "Interactive menu pages with dietary filters",
        "Real-time table reservation system",
        "Photo gallery with lightbox",
        "Google Maps integration for directions",
        "Instagram feed integration",
        "Multilingual support (EN, ES, FR)"
      ],
      outcomes: [
        "Increased online reservations by 150%",
        "Mobile traffic increased 200%",
        "Average session duration up 3.5 minutes"
      ],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Auto Repair Shop Website",
      category: "Website",
      tools: "React, SEO, Google Maps API",
      description: "Built a professional website for an automotive repair shop with service booking, customer reviews, diagnostics information, and mobile-responsive design for on-the-go access.",
      image: "/projects/car-repair-shop.jpg",
      role: "Frontend Developer",
      features: [
        "Service catalog with pricing",
        "Online appointment scheduler",
        "Contact and quote request forms",
        "Customer testimonials and reviews",
        "Live chat support integration",
        "Mobile-first responsive design"
      ],
      outcomes: [
        "Generated 85+ qualified leads per month",
        "Reduced phone inquiries by 40%",
        "Achieved 95+ PageSpeed score"
      ],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Personal Brand Portfolio",
      category: "Website",
      tools: "Next.js, Tailwind CSS, MDX",
      description: "Created a modern portfolio showcasing projects, case studies, and expertise with integrated blog, lead capture forms, and newsletter subscription.",
      image: "/projects/portfolio-site.jpg",
      role: "Full Stack Developer",
      features: [
        "Interactive project case studies",
        "MDX-powered blog with syntax highlighting",
        "Contact form with spam protection",
        "Newsletter integration (Mailchimp)",
        "SEO optimized with meta tags",
        "Dark mode support"
      ],
      outcomes: [
        "Attracted 5 high-value consulting clients",
        "Newsletter grew to 500+ subscribers",
        "Featured in 3 industry publications"
      ],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Boutique E-commerce Store",
      category: "Website",
      tools: "React, Stripe, Supabase",
      description: "Developed an elegant e-commerce platform for a fashion boutique with product catalog, shopping cart, and Stripe payment integration.",
      image: "/projects/ecommerce-boutique.jpg",
      role: "E-commerce Developer",
      features: [
        "Product grid with filtering and search",
        "Shopping cart with persistent storage",
        "Secure Stripe checkout integration",
        "Order management dashboard",
        "Inventory tracking",
        "Responsive image optimization"
      ],
      outcomes: [
        "Processed $50K+ in first 3 months",
        "Cart abandonment rate below 25%",
        "Average order value increased 45%"
      ],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Fitness Studio Booking Site",
      category: "Website",
      tools: "WordPress, WooCommerce, Custom CSS",
      description: "Built a dynamic website for a fitness studio with class schedules, online booking system, member testimonials, and FAQ section.",
      image: "/projects/fitness-studio.jpg",
      role: "WordPress Developer",
      features: [
        "Interactive class timetable",
        "Online class booking and payments",
        "Trainer profiles and bios",
        "Client testimonials with photos",
        "FAQ accordion section",
        "Social media integration"
      ],
      outcomes: [
        "Online bookings up 180%",
        "Reduced no-shows by 35%",
        "Membership sign-ups increased 60%"
      ],
      liveUrl: "#",
      codeUrl: "#"
    }
  ];
  
  return (
    <section id="projects" className="bg-cyber-dark relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Cybersecurity & IT Projects */}
        <div className="mb-20">
          <h2 className="section-heading mb-4">Cybersecurity & IT Projects</h2>
          <p className="text-cyber-light/60 mb-10 max-w-2xl">
            Security infrastructure, threat detection, and compliance solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cybersecurityProjects.map((project, index) => (
              <div 
                key={index} 
                className="animate-fade-in opacity-0 h-full"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <ProjectCard 
                  title={project.title}
                  category={project.category}
                  tools={project.tools}
                  description={project.description}
                  image={project.image}
                  onClick={() => handleProjectClick(project)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Website Development Projects */}
        <div>
          <h2 className="section-heading mb-4">Website Development Projects</h2>
          <p className="text-cyber-light/60 mb-10 max-w-2xl">
            Custom web solutions for businesses across multiple industries
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {websiteProjects.map((project, index) => (
              <div 
                key={index} 
                className="animate-fade-in opacity-0 h-full"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <ProjectCard 
                  title={project.title}
                  category={project.category}
                  tools={project.tools}
                  description={project.description}
                  image={project.image}
                  onClick={() => handleProjectClick(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setTimeout(() => setSelectedProject(null), 200);
          }}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
