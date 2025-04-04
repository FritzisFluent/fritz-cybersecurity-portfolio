
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  rating: number;
  quote: string;
  author: string;
  source?: string;
}

const TestimonialCard = ({ rating, quote, author, source }: TestimonialCardProps) => {
  return (
    <div className="cyber-card h-full flex flex-col border border-cyber-primary/20 hover:border-cyber-primary/40 transition-all duration-300 bg-black/40 backdrop-blur-md rounded-2xl shadow-glow-sm">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
          />
        ))}
      </div>
      
      <p className="text-cyber-light/90 italic mb-4 flex-grow">"{quote}"</p>
      
      <div className="mt-auto">
        <div className="text-cyber-primary font-medium">
          – {author}
        </div>
        {source && (
          <div className="text-cyber-light/60 text-sm">
            {source}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
