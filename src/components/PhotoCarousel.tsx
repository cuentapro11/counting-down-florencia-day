
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
              <path fill="currentColor" d="M9,2V7.38L12,8.93L15,7.38V2H9M12,15.08L9,13.54V8.46L12,10L15,8.46V13.54L12,15.08M16,2V7.38L19.82,5.79C21.12,7.16 22,8.99 22,11C22,14.3 19.61,17 16.5,17H15V19L12,20.5L9,19V17H7.5C4.39,17 2,14.3 2,11C2,8.99 2.88,7.16 4.18,5.79L8,7.38V2H16Z" />
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
