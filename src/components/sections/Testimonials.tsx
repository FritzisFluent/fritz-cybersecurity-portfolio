
import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      quote: "Fritz helped us secure our SaaS workflow and explained everything clearly in both English and French. Highly recommended!",
      author: "Valérie M., Small Business Owner (via Upwork)"
    },
    {
      rating: 5,
      quote: "Professional, fast, and extremely knowledgeable. He resolved our endpoint issue remotely in under an hour!",
      author: "Mark G., Legal Tech Client (via MSP)"
    },
    {
      rating: 5,
      quote: "Multilingual support made all the difference. Fritz guided our team through onboarding and Office 365 setup with ease.",
      author: "Luis R., Retail Business Owner (via Fiverr)"
    }
  ];
  
  return (
    <section id="testimonials" className="bg-cyber-dark pt-20 pb-16 md:py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="section-heading mb-10">What Clients Are Saying</h2>
        
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <TestimonialCard
                rating={testimonial.rating}
                quote={testimonial.quote}
                author={testimonial.author}
              />
            </div>
          ))}
        </div>
        
        {/* Mobile carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <TestimonialCard
                      rating={testimonial.rating}
                      quote={testimonial.quote}
                      author={testimonial.author}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
