import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import TickerTape from './TickerTape';

const Hero = () => {
  const heroRef = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const el = heroRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey(prev => prev + 1);
          setTypingDone(false);
        }
      },
      { threshold: 0.1 }
    );

    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
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
      className="flex flex-col justify-center items-center px-container-padding relative min-h-[calc(100svh-80px)] overflow-hidden"
    >
      <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-full">
        <h1
          key={animationKey}
          className="font-black leading-none tracking-tighter text-primary text-center typewriter-effect uppercase whitespace-nowrap max-w-full"
          style={{ animation: 'typewriter 2s steps(17, end) forwards', fontSize: 'clamp(1.5rem, 6.5vw, 8rem)' }}
        >
          FAHIMSYACH LOKANTA
        </h1>

        <TickerTape typingDone={typingDone} />
      </div>

      <button
        className={`absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group transition-all duration-500 animate-bounce ${isAtTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('the-narrative')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="font-label-caps text-on-surface-variant group-hover:text-primary transition-colors">SCROLL</span>
        <span className="material-symbols-outlined text-primary">keyboard_arrow_down</span>
      </button>
    </section>
  );
};

export default Hero;
