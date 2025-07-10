
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-15T10:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4 ornament-border">
          Falta
        </h2>
        
        <div className="flex justify-center items-center gap-8 max-w-2xl mx-auto">
          <div className="text-center animate-slide-in">
            <div className="text-5xl font-bold text-primary mb-2">
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <div className="text-gray-600 text-sm">días</div>
          </div>
          
          <div className="text-center animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-5xl font-bold text-primary mb-2">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-gray-600 text-sm">hs</div>
          </div>
          
          <div className="text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl font-bold text-primary mb-2">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-gray-600 text-sm">min</div>
          </div>
          
          <div className="text-center animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-5xl font-bold text-primary mb-2">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-gray-600 text-sm">seg</div>
          </div>
        </div>
        
        <Heart className="w-8 h-8 text-primary mx-auto mt-8 animate-bounce-soft" />
      </div>
    </section>
  );
};

export default CountdownSection;
