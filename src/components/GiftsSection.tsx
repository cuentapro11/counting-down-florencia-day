
import { Gift } from 'lucide-react';

const GiftsSection = () => {
  const handleBankDetails = () => {
    alert('Datos bancarios: \nCBU: 0000003100010000000001\nAlias: FLORENCIA.QUINCE\nTitular: Maria Florencia Rodriguez');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4"></div>
          <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4 ornament-border">
            Regalos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Si deseas regalarme algo más que tu hermosa presencia...
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-primary/20 text-center">
            <Gift className="w-16 h-16 text-primary mx-auto mb-6 animate-bounce-soft" />
            <button 
              onClick={handleBankDetails}
              className="coral-button w-full"
            >
              Datos bancarios
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-4">Florencia</h3>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span>Desarrollado con ❤️ por</span>
            <span className="text-primary font-medium">fixdate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftsSection;
