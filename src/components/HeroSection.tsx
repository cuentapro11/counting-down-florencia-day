
import { Calendar, Music, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hola! Confirmo mi asistencia a los XV de Florencia', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center text-white z-10 px-4">
        <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto">
          <Calendar className="w-8 h-8 text-primary mx-auto mb-4 animate-bounce-soft" />
          <p className="text-lg mb-2 font-light">15.08.2025</p>
          <h1 className="text-6xl font-playfair font-bold text-primary mb-2">XV</h1>
          <h2 className="text-5xl font-playfair font-bold mb-4">Florencia</h2>
          <p className="text-xl text-primary font-medium mb-6">MIS 15 AÑOS</p>
          <div className="mt-6 mb-6">
            <div className="w-16 h-0.5 bg-primary mx-auto mb-2"></div>
            <Music className="w-6 h-6 text-primary mx-auto" />
            <div className="w-16 h-0.5 bg-primary mx-auto mt-2"></div>
          </div>
          <p className="mt-6 text-sm leading-relaxed">
            Te espero para compartir la alegría de esa noche que será para mí mágica, inolvidable y única.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
