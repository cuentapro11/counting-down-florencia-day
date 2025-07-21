import { useState } from 'react';
import { Music, VolumeX, X } from 'lucide-react';

interface WelcomeModalProps {
  onEnterWithMusic: () => void;
  onEnterWithoutMusic: () => void;
}

const WelcomeModal = ({ onEnterWithMusic, onEnterWithoutMusic }: WelcomeModalProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleEnterWithMusic = () => {
    setIsVisible(false);
    onEnterWithMusic();
  };

  const handleEnterWithoutMusic = () => {
    setIsVisible(false);
    onEnterWithoutMusic();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-primary/20 relative">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-pink-medium rounded-full flex items-center justify-center">
            <Music className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-2">
            ¡Bienvenido!
          </h2>
          <h3 className="text-xl font-playfair font-semibold text-primary mb-6">
            Invitación de Florencia
          </h3>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            ¿Cómo te gustaría ingresar a esta celebración especial?
          </p>

          <div className="space-y-4">
            <button
              onClick={handleEnterWithMusic}
              className="w-full bg-gradient-to-r from-primary to-pink-medium hover:from-coral-dark hover:to-pink-dark text-white py-4 px-6 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Music className="w-5 h-5" />
              Entrar con música
            </button>
            
            <button
              onClick={handleEnterWithoutMusic}
              className="w-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white py-4 px-6 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <VolumeX className="w-5 h-5" />
              Entrar sin música
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;