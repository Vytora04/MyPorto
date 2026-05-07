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
                // Add staggered delay if multiple elements visible
                const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            } else {
                entry.target.classList.remove('is-visible');
                entry.target.style.transitionDelay = '0s'; // Reset delay so it disappears instantly
            }
        });
    }, { threshold: 0.1 });

    const textElements = document.querySelectorAll('.reveal-text');
    textElements.forEach(el => textObserver.observe(el));

    // Separate observer for titles to trigger EXACTLY when they reach the middle of the screen
    // It extends 1000% upwards so it stays active as long as you've scrolled past it.
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, { rootMargin: '1000% 0px -50% 0px' });

    const titleElements = document.querySelectorAll('.title-hover-effect');
    titleElements.forEach(el => titleObserver.observe(el));

    return () => {
      textElements.forEach(el => textObserver.unobserve(el));
      titleElements.forEach(el => titleObserver.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />
      <main className="pt-[80px]">
        <Hero />
        <Narrative />
        <TickerTape />
        <Education />
        <Experience />
        <Capabilities />
        <SelectedWorks />
        <Footer />
      </main>
    </div>
  );
}

export default App;
