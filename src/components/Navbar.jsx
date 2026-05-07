import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-surface border-b border-primary px-16 h-[80px] flex justify-between items-center">
      <div className="text-2xl font-black text-primary uppercase tracking-tighter">
        FAHIMSYACH LOKANTA
      </div>
      <div className="flex gap-8 items-center">
        <a className="font-label-caps text-primary px-3 py-2 hover:bg-primary hover:text-on-primary transition-none" href="#featured-experience">EXPERIENCE</a>
        <a className="font-label-caps text-primary px-3 py-2 hover:bg-primary hover:text-on-primary transition-none" href="#capabilities">CAPABILITIES</a>
        <a className="font-label-caps text-primary px-3 py-2 hover:bg-primary hover:text-on-primary transition-none" href="#selected-works">WORKS</a>
        <a className="font-label-caps text-primary px-3 py-2 hover:bg-primary hover:text-on-primary transition-none" href="#contact">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
