
import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { Wrench, Shield, Globe, Cloud, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Remote IT Support & Troubleshooting",
      description: "Fast, effective technical assistance for businesses of all sizes.",
      icon: <Wrench className="h-6 w-6" />
    },
    {
      title: "Cybersecurity Assessment & Hardening",
      description: "Identify vulnerabilities and implement robust security measures.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Website Development & SEO Optimization",
      description: "Custom websites built for performance and search visibility.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "SaaS Integrations & IAM Configuration",
      description: "Seamlessly connect and secure your cloud applications.",
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: "Multilingual Technical Support",
      description: "Technical assistance in multiple languages for global teams.",
      icon: <MessageSquare className="h-6 w-6" />
    }
  ];
  
  return (
    <section id="services" className="bg-gradient-to-b from-cyber-dark to-cyber-terminal relative py-16 md:py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="section-heading mb-10">Services Offered</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
