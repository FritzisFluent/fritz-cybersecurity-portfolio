
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Languages from "@/components/sections/Languages";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cyber-dark text-cyber-light">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
