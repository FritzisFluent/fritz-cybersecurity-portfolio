
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from '../ui/TestimonialCard';

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
    <section id="testimonials" className="bg-cyber-terminal relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-10">What Clients Are Saying</h2>
        
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="animate-fade-in opacity-0 h-full"
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
        
        {/* Carousel for mobile view */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
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
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 mx-2" />
              <CarouselNext className="relative inset-0 translate-y-0 mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
