import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey(prev => prev + 1);
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

  return (
    <section 
      ref={heroRef}
      className="flex flex-col justify-center items-center px-container-padding relative border-b border-outline-variant min-h-[calc(100vh-80px)] overflow-hidden"
    >
      <h1 
        key={animationKey}
        className="font-black leading-none tracking-tighter text-primary text-center typewriter-effect uppercase whitespace-nowrap" 
        style={{ animation: 'typewriter 2s steps(17, end) forwards', fontSize: 'clamp(2.5rem, 6.5vw, 8rem)' }}
      >
        FAHIMSYACH LOKANTA
      </h1>
      <p className="font-headline-md text-headline-md text-on-surface-variant mt-unit text-center">
        Computer Science Student & Developer
      </p>
      <a className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group transition-opacity hover:opacity-70 animate-bounce" href="#the-narrative">
        <span className="font-label-caps text-on-surface-variant group-hover:text-primary transition-colors">SCROLL</span>
        <span className="material-symbols-outlined text-primary">keyboard_arrow_down</span>
      </a>
    </section>
  );
};

export default Hero;
