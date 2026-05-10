import React, { useEffect } from 'react';
import './App.css'; // Load the custom animations and styles
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Education from './components/Education';
import Experience from './components/Experience';
import Capabilities from './components/Capabilities';
import SelectedWorks from './components/SelectedWorks';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.add('is-visible');
                const index = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.2}s`;
            } else {
                entry.target.classList.remove('active');
                entry.target.classList.remove('is-visible');
                entry.target.style.transitionDelay = '0s';
            }
        });
    }, { threshold: 0.15 });

    const revealElements = document.querySelectorAll('.reveal, .reveal-text');
    revealElements.forEach(el => revealObserver.observe(el));

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
      revealElements.forEach(el => revealObserver.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />
      <main className="pt-[80px]">
        <Hero />
        <Narrative />
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
