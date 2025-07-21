
const PhotoCarousel = () => {
  const photos = [
    'https://images.unsplash.com/photo-1494790108755-2616c045b1c5?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1527736947477-2790e28f3443?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=300&fit=crop'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4"></div>
          <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4 ornament-border">
            Un recorrido de estos 15 años
          </h2>
          <p className="text-gray-600">Junto a personas que son muy importantes en mi vida</p>
          <div className="w-16 h-16 mx-auto mt-6 mb-8">
            <svg viewBox="0 0 24 24" className="w-full h-full text-primary">
              <path fill="currentColor" d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"/>
            </svg>
          </div>
        </div>

        <div className="carousel-container max-w-6xl mx-auto">
          <div className="carousel-track gap-6">
            {[...photos, ...photos].map((photo, index) => (
              <div key={index} className="flex-shrink-0 w-80 h-60">
                <img 
                  src={photo} 
                  alt={`Memoria ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {[0, 1, 2, 3].map((dot) => (
              <div 
                key={dot} 
                className="w-3 h-3 rounded-full bg-primary/30 animate-pulse"
                style={{ animationDelay: `${dot * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
