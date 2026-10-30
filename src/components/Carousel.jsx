import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

const Carousel = ({ images, dots = true, autoPlay = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    if (!autoPlay || lightboxOpen) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1 >= images.length ? 0 : prev + 1));
    }, 4000);
  }, [autoPlay, lightboxOpen, images.length]);

  useEffect(() => {
    if (lightboxOpen) {
      clearInterval(timerRef.current);
    } else {
      startTimer();
    }
    return () => clearInterval(timerRef.current);
  }, [lightboxOpen, startTimer]);

  const moveCarousel = useCallback((direction) => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + direction;
      if (nextIndex < 0) return images.length - 1;
      if (nextIndex >= images.length) return 0;
      return nextIndex;
    });
    startTimer(); // Reset auto-advance timer on manual interaction
  }, [images.length, startTimer]);

  const goToIndex = (i) => {
    setCurrentIndex(i);
    startTimer();
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      else if (e.key === 'ArrowLeft') moveCarousel(-1);
      else if (e.key === 'ArrowRight') moveCarousel(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, moveCarousel]);

  const offset = -currentIndex * 100;

  return (
    <>
      <div className="relative w-full aspect-video bg-surface-container overflow-hidden mb-6 md:mb-8 group/carousel rounded-lg md:rounded-none">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full cursor-zoom-in"
          style={{ transform: `translateX(${offset}%)` }}
          onClick={() => setLightboxOpen(true)}
          title="Click to view full image"
        >
          {images.map((img, i) => (
            <img
              key={i}
              alt={`Slide ${i + 1}`}
              className="w-full h-full flex-shrink-0 object-cover"
              src={img}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>

        {/* Subtle zoom hint badge on hover */}
        <button
          type="button"
          aria-label="Expand image"
          onClick={() => setLightboxOpen(true)}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-black/60"
        >
          <span className="material-symbols-outlined text-[16px]">open_in_full</span>
        </button>

        {dots ? (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              className="carousel-btn left-3 md:left-8 bg-white border border-outline-variant shadow-sm rounded-full md:rounded-none"
              onClick={() => moveCarousel(-1)}
            >
              <span className="material-symbols-outlined text-primary text-lg md:text-2xl">arrow_back</span>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="carousel-btn right-3 md:right-8 bg-white border border-outline-variant shadow-sm rounded-full md:rounded-none"
              onClick={() => moveCarousel(1)}
            >
              <span className="material-symbols-outlined text-primary text-lg md:text-2xl">arrow_forward</span>
            </button>
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 md:gap-3 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${i === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white'}`}
                  onClick={() => goToIndex(i)}
                ></button>
              ))}
            </div>
          </>
        ) : (
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex gap-2 z-20">
            <div className="flex bg-black/40 backdrop-blur-sm rounded-sm border border-white/10 overflow-hidden">
              <button
                type="button"
                aria-label="Previous slide"
                className="w-9 h-9 md:w-10 md:h-10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                onClick={() => moveCarousel(-1)}
              >
                <span className="material-symbols-outlined text-sm text-white">chevron_left</span>
              </button>
              <div className="w-[1px] h-4 bg-white/20 self-center"></div>
              <button
                type="button"
                aria-label="Next slide"
                className="w-9 h-9 md:w-10 md:h-10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                onClick={() => moveCarousel(1)}
              >
                <span className="material-symbols-outlined text-sm text-white">chevron_right</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Top Bar: Counter & Close Button */}
            <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase">
                {currentIndex + 1} / {images.length}
              </span>
              <button
                type="button"
                aria-label="Close preview"
                onClick={() => setLightboxOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-colors pointer-events-auto"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Previous Button */}
            {images.length > 1 && (
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  moveCarousel(-1);
                }}
                className="absolute left-3 md:left-8 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 text-white flex items-center justify-center transition-colors z-20"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            )}

            {/* Full Image */}
            <img
              src={images[currentIndex]}
              alt={`Full preview ${currentIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/15 transition-all duration-300"
            />

            {/* Next Button */}
            {images.length > 1 && (
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  moveCarousel(1);
                }}
                className="absolute right-3 md:right-8 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 text-white flex items-center justify-center transition-colors z-20"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            )}
          </div>,
          document.body
        )}
    </>
  );
};

export default Carousel;
