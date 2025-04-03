
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  rating: number;
  quote: string;
  author: string;
}

const TestimonialCard = ({ rating, quote, author }: TestimonialCardProps) => {
  return (
    <div className="cyber-card h-full flex flex-col">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
          />
        ))}
      </div>
      
      <p className="text-cyber-light/90 italic mb-4 flex-grow">"{quote}"</p>
      
      <div className="text-cyber-secondary font-medium mt-auto">
        – {author}
      </div>
    </div>
  );
};

export default TestimonialCard;
