
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-cyber-terminal relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cyber-card">
            <h3 className="text-2xl font-bold mb-6 text-cyber-primary">Let's Connect</h3>
            <p className="mb-8">
              I'm currently open to cybersecurity analyst roles, consulting contracts, and opportunities 
              in the U.S. Space Force or Air Force Cybersecurity division.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-cyber-secondary mr-3" />
                <span>Brooklyn, NY</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-cyber-secondary mr-3" />
                <a href="mailto:fritzgeraldalexandre7@gmail.com" className="hover:text-cyber-primary transition-colors">
                  fritzgeraldalexandre7@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-cyber-secondary mr-3" />
                <a href="tel:+19295714570" className="hover:text-cyber-primary transition-colors">
                  (929) 571-4570
                </a>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 text-cyber-secondary mr-3" />
                <a 
                  href="https://linkedin.com/in/fgalexandre" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyber-primary transition-colors"
                >
                  linkedin.com/in/fgalexandre
                </a>
              </div>
            </div>
          </div>
          
          <div className="cyber-card">
            <h3 className="text-2xl font-bold mb-6 text-cyber-primary">Services Offered</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-cyber-secondary mr-2">▹</span>
                <span>Remote IT & SaaS Troubleshooting</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-secondary mr-2">▹</span>
                <span>Web Security & SEO Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-secondary mr-2">▹</span>
                <span>Small Business IT Consulting</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-secondary mr-2">▹</span>
                <span>Cybersecurity Assessment & Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-secondary mr-2">▹</span>
                <span>IAM Integration with Okta & Azure AD</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
