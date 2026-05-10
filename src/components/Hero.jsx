import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const Hero = () => {
  const heroRef = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [showTicker, setShowTicker] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey(prev => prev + 1);
          setTypingDone(false);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Timer to wait for typewriter animation (2s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingDone(true);
    }, 2000); // Matches typewriter 2s animation
    return () => clearTimeout(timer);
  }, [animationKey]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="flex flex-col justify-center items-center px-container-padding relative min-h-[calc(100vh-80px)] overflow-hidden"
    >
      <div className="flex flex-col items-center gap-12 w-full">
        <h1 
          key={animationKey}
          className="font-black leading-none tracking-tighter text-primary text-center typewriter-effect uppercase whitespace-nowrap" 
          style={{ animation: 'typewriter 2s steps(17, end) forwards', fontSize: 'clamp(2.5rem, 6.5vw, 8rem)' }}
        >
          FAHIMSYACH LOKANTA
        </h1>

        {/* Integrated Ticker Tape - Only shows when typing is done */}
        <div className={`w-screen overflow-hidden border-y border-ghibli-green/10 bg-academic-sage py-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${typingDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="ticker font-black text-4xl md:text-5xl text-ghibli-dark uppercase tracking-widest flex gap-16 whitespace-nowrap">
            <span>GAMER | MUSIC ENTHUSIAST | DEVELOPER | </span>
            <span>GAMER | MUSIC ENTHUSIAST | DEVELOPER | </span>
            <span>GAMER | MUSIC ENTHUSIAST | DEVELOPER | </span>
            <span>GAMER | MUSIC ENTHUSIAST | DEVELOPER | </span>
          </div>
        </div>
      </div>

      <a 
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group transition-all duration-500 animate-bounce ${isAtTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`} 
        href="#the-narrative"
      >
        <span className="font-label-caps text-on-surface-variant group-hover:text-primary transition-colors">SCROLL</span>
        <span className="material-symbols-outlined text-primary">keyboard_arrow_down</span>
      </a>
    </section>
  );
};

export default Hero;
