
const Languages = () => {
  const languages = [
    {
      name: "English",
      level: "Fluent",
      flag: "🇺🇸",
      proficiency: 100
    },
    {
      name: "Spanish",
      level: "Fluent",
      flag: "🇪🇸",
      proficiency: 100
    },
    {
      name: "French",
      level: "Fluent",
      flag: "🇫🇷",
      proficiency: 100
    },
    {
      name: "Haitian Creole",
      level: "Fluent",
      flag: "🇭🇹",
      proficiency: 100
    },
    {
      name: "Portuguese",
      level: "Professional Working",
      flag: "🇧🇷",
      proficiency: 80
    }
  ];

  return (
    <section id="languages" className="bg-cyber-dark relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Languages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {languages.map((language, index) => (
            <div 
              key={index} 
              className="cyber-card animate-fade-in opacity-0" 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-4">{language.flag}</span>
                <div>
                  <h3 className="font-bold text-xl">{language.name}</h3>
                  <p className="text-cyber-light/70">{language.level}</p>
                </div>
              </div>
              <div className="w-full bg-cyber-dark/50 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-gradient-to-r from-cyber-primary to-cyber-secondary h-2.5 rounded-full" 
                  style={{ width: `${language.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
