
import { Music, Shirt, Lightbulb } from 'lucide-react';

const PartySection = () => {
  const handleSuggestSong = () => {
    window.open('https://wa.me/1234567890?text=Hola! Quiero sugerir una canción para la fiesta de Florencia', '_blank');
  };

  const handleDressCode = () => {
    alert('Dress Code: Elegante sport. Colores sugeridos: tonos pasteles y colores vibrantes.');
  };

  const handleTips = () => {
    alert('Tips: La fiesta iniciará a las 17hs con la ceremonia, seguido de cocktail y cena. ¡No olvides traer tu mejor sonrisa!');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4"></div>
          <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4 ornament-border">
            Fiesta
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-primary/20 text-center transform hover:scale-105 transition-all duration-300">
            <Music className="w-16 h-16 text-primary mx-auto mb-6 animate-bounce-soft" />
            <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-4">Música</h3>
            <p className="text-gray-600 mb-6 text-sm">
              ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
            </p>
            <button 
              onClick={handleSuggestSong}
              className="coral-button w-full"
            >
              Sugerir canción
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-primary/20 text-center transform hover:scale-105 transition-all duration-300">
            <Shirt className="w-16 h-16 text-primary mx-auto mb-6 animate-bounce-soft" />
            <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-4">Dress Code</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Una orientación para tu vestuario
            </p>
            <button 
              onClick={handleDressCode}
              className="coral-button w-full"
            >
              Ver más
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-primary/20 text-center transform hover:scale-105 transition-all duration-300">
            <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6 animate-bounce-soft" />
            <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-4">Tips y Notas</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Información adicional para tener en cuenta
            </p>
            <button 
              onClick={handleTips}
              className="coral-button w-full"
            >
              + Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartySection;
