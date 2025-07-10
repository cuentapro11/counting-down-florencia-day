
import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import CountdownSection from '@/components/CountdownSection';
import CelebrationSection from '@/components/CelebrationSection';
import PartySection from '@/components/PartySection';
import PhotoCarousel from '@/components/PhotoCarousel';
import GiftsSection from '@/components/GiftsSection';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    countdown: false,
    celebration: false,
    photos: false,
    party: false,
    gifts: false
  });

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName) {
            setIsVisible(prev => ({ ...prev, [sectionName]: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('[data-section]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div className="hero-bg" />
      <div className="content-overlay">
        <HeroSection />
        
        <div 
          data-section="countdown"
          className={`transition-all duration-1000 ${isVisible.countdown ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <CountdownSection />
        </div>

        <div 
          data-section="celebration"
          className={`transition-all duration-1000 ${isVisible.celebration ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <CelebrationSection />
        </div>

        <div 
          data-section="photos"
          className={`transition-all duration-1000 ${isVisible.photos ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <PhotoCarousel />
        </div>

        <div 
          data-section="party"
          className={`transition-all duration-1000 ${isVisible.party ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <PartySection />
        </div>

        <div 
          data-section="gifts"
          className={`transition-all duration-1000 ${isVisible.gifts ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <GiftsSection />
        </div>
      </div>
      
      <MusicPlayer />
    </div>
  );
};

export default Index;
