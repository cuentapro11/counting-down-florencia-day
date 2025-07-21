
import { Gift } from 'lucide-react';

const GiftsSection = () => {
  const handleRegalos = () => {
    window.open('https://www.amazon.com/s?k=amazon+store+online+shopping&adgrpid=162589741147&hvadid=692698040855&hvdev=c&hvlocphy=9197589&hvnetw=g&hvqmt=b&hvrand=11537015452765969198&hvtargid=kwd-356214378203&hydadcr=10161_13660114&mcid=811d77039f2130e995d530083b1d9e27&tag=hydglogoo-20&ref=pd_sl_60qomh58v7_b', '_blank');
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
              onClick={handleRegalos}
              className="coral-button w-full"
            >
              Regalos
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
