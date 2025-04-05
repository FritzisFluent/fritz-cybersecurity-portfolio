
const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-cyber-dark relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading pt-8">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="space-y-4 text-slate-700 dark:text-cyber-light/80">
              <p>
                I'm a New York-based Cybersecurity Analyst and Technology Consultant with over 4 years 
                of experience in IT support, incident response, and securing enterprise environments. 
                I'm CompTIA Security+ and CySA+ certified, and I've worked across MSPs, SaaS platforms, 
                and small business networks, delivering measurable impact.
              </p>
              <p>
                Fluent in 5 languages—English, Spanish, French, Haitian Creole, and Portuguese—I support 
                a global client base with technical solutions that are secure, scalable, and user-friendly.
              </p>
              <p>
                Whether I'm building a web app, securing a cloud environment, or optimizing endpoint 
                configurations, I combine sharp technical skills with a calm, professional touch.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-cyber-primary">Current Focus</h3>
              <p className="text-slate-700 dark:text-cyber-light/80 mb-4">
                I'm currently open to cybersecurity analyst roles, consulting contracts, and opportunities 
                in the U.S. Space Force or Air Force Cybersecurity division.
              </p>
            </div>
          </div>
          
          <div className="cyber-card flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 dark:text-cyber-primary mb-3">4+</div>
              <p className="text-slate-600 dark:text-cyber-light/70 text-lg">Years of Experience</p>
              
              <div className="border-t border-slate-200 dark:border-cyber-primary/20 my-6"></div>
              
              <div className="text-6xl font-bold text-blue-600 dark:text-cyber-primary mb-3">5</div>
              <p className="text-slate-600 dark:text-cyber-light/70 text-lg">Languages</p>
              
              <div className="border-t border-slate-200 dark:border-cyber-primary/20 my-6"></div>
              
              <div className="text-blue-600 dark:text-cyber-primary font-mono">
                <div>$whoami</div>
                <div className="text-slate-700 dark:text-cyber-light mt-2">cybersecurity_professional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
