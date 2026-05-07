import React, { useEffect } from 'react';
import './App.css'; // Load the custom animations and styles
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import TickerTape from './components/TickerTape';
import Education from './components/Education';
import Experience from './components/Experience';
import Capabilities from './components/Capabilities';
import SelectedWorks from './components/SelectedWorks';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Observer for fade-up text animations (triggers as soon as they enter the screen)
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            } else {
                entry.target.classList.remove('is-visible');
                entry.target.style.transitionDelay = '0s';
            }
        });
    }, { threshold: 0.1 });

    const textElements = document.querySelectorAll('.reveal-text');
    textElements.forEach(el => textObserver.observe(el));

    // Title color effect: add is-visible once title reaches middle of screen,
    // keep it until the user scrolls back UP past the element (it goes below the top)
    const titleElements = document.querySelectorAll('.title-hover-effect');

    const handleScroll = () => {
      const viewportMid = window.innerHeight * 0.5;
      titleElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportMid) {
          el.classList.add('is-visible');
        } else {
          el.classList.remove('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on mount to catch initial state

    return () => {
      textElements.forEach(el => textObserver.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />
      <main className="pt-[80px]">
        <Hero />
        <Narrative />
        <TickerTape />
        <Experience />
        <Capabilities />
        <SelectedWorks />
        <Education />
        <Footer />
      </main>
    </div>
  );
}

export default App;
