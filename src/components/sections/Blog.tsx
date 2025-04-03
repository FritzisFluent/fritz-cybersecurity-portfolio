
import React from 'react';
import BlogCard from '../ui/BlogCard';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building a Honeypot in the Cloud: How I Used Cowrie to Analyze SSH Attacks",
      excerpt: "I break down how I deployed a cloud-hosted honeypot using Cowrie on AWS to monitor and log real-world SSH attack attempts. This helped me understand attacker behavior in a safe, simulated environment.",
      image: "/lovable-uploads/90496f67-11f4-4dcc-a241-9e45cad7f558.png"
    },
    {
      title: "SIEM Meets AI: How I Integrated ChatGPT with Microsoft Sentinel",
      excerpt: "I integrated Microsoft Sentinel with ChatGPT to generate natural-language incident reports, reducing alert fatigue and improving clarity in threat response.",
      image: "/lovable-uploads/d04ecc68-4898-482a-9667-21f414675522.png"
    },
    {
      title: "From Fiverr to the Frontlines: My Journey in Freelance IT Consulting",
      excerpt: "Over the past 2 years, I've resolved 100+ tech issues for clients worldwide. Freelance consulting sharpened my communication and problem-solving skills in high-pressure environments.",
      image: "/lovable-uploads/809f1b81-416f-4aca-a0a6-fd08ea24847b.png"
    }
  ];
  
  return (
    <section id="blog" className="bg-cyber-dark relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-10">Insights & Intel</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="animate-fade-in opacity-0 h-full"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <BlogCard 
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
