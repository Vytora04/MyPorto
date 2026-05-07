import React, { useState } from 'react';

const Carousel = ({ images, dots = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveCarousel = (direction) => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + direction;
      if (nextIndex < 0) return images.length - 1;
      if (nextIndex >= images.length) return 0;
      return nextIndex;
    });
  };

  const offset = -currentIndex * 100;

  return (
    <div className="relative w-full aspect-video bg-surface-container overflow-hidden mb-8 group/carousel">
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(${offset}%)` }}
      >
        {images.map((img, i) => (
          <img key={i} alt={`Slide ${i}`} className="w-full h-full flex-shrink-0 object-cover" src={img} />
        ))}
      </div>
      
      {dots ? (
        <>
          <button className="carousel-btn left-8 bg-white border border-outline-variant shadow-sm" onClick={() => moveCarousel(-1)}>
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <button className="carousel-btn right-8 bg-white border border-outline-variant shadow-sm" onClick={() => moveCarousel(1)}>
            <span className="material-symbols-outlined text-primary">arrow_forward</span>
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {images.map((_, i) => (
              <button 
                key={i} 
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${i === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white'}`}
                onClick={() => setCurrentIndex(i)}
              ></button>
            ))}
          </div>
        </>
      ) : (
        <div className="absolute bottom-4 right-4 flex gap-2 z-20">
          <div className="flex bg-black/40 backdrop-blur-sm rounded-sm border border-white/10 overflow-hidden">
            <button className="w-10 h-10 hover:bg-white/20 flex items-center justify-center transition-all duration-300" onClick={() => moveCarousel(-1)}>
              <span className="material-symbols-outlined text-sm text-white">chevron_left</span>
            </button>
            <div className="w-[1px] h-4 bg-white/20 self-center"></div>
            <button className="w-10 h-10 hover:bg-white/20 flex items-center justify-center transition-all duration-300" onClick={() => moveCarousel(1)}>
              <span className="material-symbols-outlined text-sm text-white">chevron_right</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
