
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Sidebar from "@/components/Layout/Sidebar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import Testimonials from "@/components/sections/Testimonials";
import Certifications from "@/components/sections/Certifications";
import Languages from "@/components/sections/Languages";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Layout/Footer";

const Index = () => {
  const { setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [prevSection, setPrevSection] = useState("");
  const [animating, setAnimating] = useState(false);
  
  // Set dark mode as default when page loads
  useEffect(() => {
    setTheme("dark");
  }, []);

  // Handle section change with animation
  const handleSectionChange = (sectionId: string) => {
    if (sectionId === activeSection) return;
    
    setPrevSection(activeSection);
    setAnimating(true);
    
    // After a small delay, change the section
    setTimeout(() => {
      setActiveSection(sectionId);
      
      // Reset animation state after transition
      setTimeout(() => {
        setAnimating(false);
      }, 300);
    }, 300);
  };

  // Map section IDs to their components
  const renderActiveSection = () => {
    switch (activeSection) {
      case "hero":
        return <Hero />;
      case "about":
        return <About />;
      case "skills":
        return (
          <>
            <Skills />
            <Certifications />
            <Languages />
          </>
        );
      case "projects":
        return <Projects />;
      case "blog":
        return <Blog />;
      case "testimonials":
        return <Testimonials />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-cyber-dark">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <main 
        className={`
          flex-grow pl-0 md:pl-64 
          transition-all duration-300 ease-in-out
          relative
        `}
      >
        <div className={`
          min-h-screen w-full
          transition-opacity duration-300
          ${animating ? "opacity-0" : "opacity-100"}
        `}>
          {renderActiveSection()}
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
