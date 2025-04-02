
import SkillCard from "../ui/SkillCard";
import { Shield, Cloud, Wrench, Globe } from "lucide-react";

const Skills = () => {
  const skillsData = [
    {
      title: "Cybersecurity",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        "Vulnerability Scanning (Nessus, OpenVAS)",
        "Microsoft Sentinel SIEM, Splunk, Wireshark",
        "Endpoint Security & Hardening",
        "Incident Response",
        "MITRE ATT&CK, Cyber Kill Chain"
      ]
    },
    {
      title: "Cloud & SaaS",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        "Microsoft 365 | Azure AD | Okta IAM",
        "Google Workspace, Zoom, Notion",
        "ImmyBot, ConnectWise, ServiceNow"
      ]
    },
    {
      title: "IT Support",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        "Windows OS, macOS, Linux",
        "Network Configuration: TCP/IP, DNS, DHCP, VPN",
        "Ticketing Systems (ServiceNow, ConnectWise, Zendesk)",
        "Apple Hardware & macOS Support"
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        "HTML5, CSS3, JavaScript",
        "Git, GitHub, Figma",
        "SEO Optimization"
      ]
    }
  ];

  return (
    <section id="skills" className="bg-cyber-terminal relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard 
              key={index}
              title={skill.title}
              icon={skill.icon}
              skills={skill.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
