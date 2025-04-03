
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submitted state after showing success message
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-cyber-terminal relative py-16 md:py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="section-heading">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cyber-card">
            <h3 className="text-2xl font-bold mb-6 text-cyber-primary">Send a Message</h3>
            
            {submitted ? (
              <div className="bg-green-500/10 border border-green-500/30 text-green-500 p-4 rounded-md mb-6">
                Thank you for your message! I'll get back to you soon.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border border-cyber-primary/20 bg-cyber-dark/30 focus:border-cyber-primary focus:outline-none focus:ring-1 focus:ring-cyber-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border border-cyber-primary/20 bg-cyber-dark/30 focus:border-cyber-primary focus:outline-none focus:ring-1 focus:ring-cyber-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 rounded-md border border-cyber-primary/20 bg-cyber-dark/30 focus:border-cyber-primary focus:outline-none focus:ring-1 focus:ring-cyber-primary"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center bg-cyber-primary hover:bg-cyber-primary/90 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="cyber-card">
            <h3 className="text-2xl font-bold mb-6 text-cyber-primary">Let's Connect</h3>
            <p className="mb-8">
              I'm currently open to cybersecurity analyst roles, consulting contracts, and opportunities 
              in the U.S. Space Force or Air Force Cybersecurity division.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-cyber-secondary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <span>Brooklyn, NY</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-cyber-secondary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:fritzgeraldalexandre7@gmail.com" className="hover:text-cyber-primary transition-colors">
                    fritzgeraldalexandre7@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-cyber-secondary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+19295714570" className="hover:text-cyber-primary transition-colors">
                    (929) 571-4570
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                  <Linkedin className="h-5 w-5 text-cyber-secondary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
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
            
            <div className="mt-8 pt-6 border-t border-cyber-primary/20">
              <h4 className="text-xl font-bold mb-4 text-cyber-primary">Services Offered</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="text-cyber-secondary mr-2">▹</span>
                  <span>Remote IT & SaaS Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-secondary mr-2">▹</span>
                  <span>Web Security Audits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-secondary mr-2">▹</span>
                  <span>Small Business IT Consulting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-secondary mr-2">▹</span>
                  <span>Cybersecurity Training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-secondary mr-2">▹</span>
                  <span>IAM Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
