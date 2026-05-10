import React, { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const [timeString, setTimeString] = useState('');
  const headingRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Jakarta',
        hour: '2-digit', 
        minute: '2-digit' 
      }) + ' WIB');
    };
    
    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
        } else {
          el.classList.remove('is-revealed');
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  // Words with their stagger delays
  const line1 = ["LET'S", 'WORK'];
  const line2 = ['TOGETHER'];

  return (
    <footer className="pb-8 px-container-padding bg-background min-h-[calc(100vh-80px)] flex flex-col scroll-mt-24" id="contact">
      <div className="max-w-screen-2xl mx-auto flex flex-col justify-between flex-grow w-full">
        <div className="flex-grow flex flex-col justify-center">
          <h2
            ref={headingRef}
            className="footer-heading font-black text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-tighter uppercase text-primary"
          >
            {/* Line 1 */}
            <span className="block">
              {line1.map((word, i) => (
                <span key={i} className="footer-word-wrap mr-[0.15em]">
                  <span
                    className="footer-word"
                    style={{ transitionDelay: `${i * 0.12}s` }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </span>
            {/* Line 2 */}
            <span className="block">
              {line2.map((word, i) => (
                <span key={i} className="footer-word-wrap mr-[0.15em]">
                  <span
                    className="footer-word"
                    style={{ transitionDelay: `${(line1.length + i) * 0.12}s` }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </span>
          </h2>
        </div>
        <div className="border-t border-outline-variant pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              <a className="font-label-caps text-primary hover:opacity-60 transition-opacity" href="https://www.instagram.com/lokantaahim/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
              <a className="font-label-caps text-primary hover:opacity-60 transition-opacity" href="https://www.linkedin.com/in/fahimsyach-lokanta/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              <a className="font-label-caps text-primary hover:opacity-60 transition-opacity" href="https://github.com/Vytora04" target="_blank" rel="noopener noreferrer">GITHUB</a>
              <a className="font-label-caps text-primary hover:opacity-60 transition-opacity" href="mailto:lokantafahimsyach@gmail.com">EMAIL</a>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
              <span className="font-label-caps">TANGERANG, INDONESIA</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-2">
            <p className="font-label-caps text-on-surface-variant">© 2026 FAHIM. ALL RIGHTS RESERVED.</p>
            <p className="font-label-caps text-on-surface-variant live-clock">{timeString}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
