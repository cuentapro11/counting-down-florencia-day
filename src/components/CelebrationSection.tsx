
import { Calendar, MapPin, MessageSquare } from 'lucide-react';

const CelebrationSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hola! Confirmo mi asistencia a los XV de Florencia', '_blank');
  };

  const handleSchedule = () => {
    const eventDetails = {
      title: 'XV Años Florencia',
      start: '20250815T170000Z',
      end: '20250816T040000Z',
      details: 'Celebración de los XV años de Florencia',
      location: 'Salon Avril'
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.start}/${eventDetails.end}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}`;
    window.open(googleCalendarUrl, '_blank');
  };

  const handleDirections = () => {
    window.open('https://maps.google.com?q=Av. Los Reartes 12 - Santo Domingo', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-xl border border-primary/20">
          <div className="text-center mb-8">
            <div className="w-16 h-0.5 bg-primary mx-auto mb-4"></div>
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce-soft" />
            <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-2">Celebración</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-playfair text-primary mb-2">Día</h3>
              <p className="text-gray-600 mb-4">Sábado 15 de agosto - 17hs</p>
              <button 
                onClick={handleSchedule}
                className="coral-button w-full"
              >
                Agendar
              </button>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-playfair text-primary mb-2">Lugar</h3>
              <p className="text-gray-600 mb-4">Salon Avril</p>
              <button 
                onClick={handleWhatsApp}
                className="coral-button w-full mb-3"
              >
                Confirmar asistencia
              </button>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-playfair text-primary mb-2">Dirección</h3>
              <p className="text-gray-600 mb-4">Av. Los Reartes 12 - Santo Domingo</p>
              <button 
                onClick={handleDirections}
                className="coral-button w-full"
              >
                ¿Cómo llegar?
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrationSection;
