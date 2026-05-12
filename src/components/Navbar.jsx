import React, { useState } from 'react';

const navLinks = [
  { label: 'ABOUT', href: '#the-narrative' },
  { label: 'EXPERIENCE', href: '#featured-experience' },
  { label: 'COMPETENCIES', href: '#competencies' },
  { label: 'WORKS', href: '#selected-works' },
  { label: 'CONTACT', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 100; // Account for floating navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[200] flex flex-col pointer-events-none">
      {/* Top safety gap filler - keeps content from peeking above the floating nav */}
      <div className="h-6 w-full bg-background pointer-events-none"></div>
      
      <div className="flex justify-center px-6 pointer-events-none">
        <nav className="glass-card w-full max-w-5xl h-16 flex items-center justify-between px-8 rounded-full border border-white/50 shadow-2xl pointer-events-auto relative overflow-hidden">
        
        {/* Left: Logo */}
        <div className="text-2xl font-serif font-black text-ghibli-dark tracking-tighter">
          FL.
        </div>

        {/* Right side: Hidden Hamburger Menu */}
        <div className="flex items-center gap-4">
          
          {/* Sliding Menu (Hidden by default) */}
          <div className={`absolute inset-0 bg-white flex items-center justify-center gap-10 transition-all duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
             {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="flex items-baseline gap-2 group/nav"
              >
                <span className="text-[10px] font-bold text-ghibli-green opacity-60">0{index + 1}</span>
                <span className="text-xs font-black text-ghibli-dark uppercase tracking-widest hover:text-ghibli-green transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(prev => !prev)}
            className="flex flex-col justify-center items-end gap-[4px] w-8 h-8 relative z-50 group"
          >
            <span className="block h-[2px] bg-ghibli-dark transition-all duration-500 group-hover:w-[26px]"
              style={{ width: open ? '22px' : '22px', transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
            <span className="block h-[2px] bg-ghibli-dark transition-all duration-300"
              style={{ width: '16px', opacity: open ? 0 : 1 }} />
            <span className="block h-[2px] bg-ghibli-dark transition-all duration-500 group-hover:w-[26px]"
              style={{ width: open ? '22px' : '20px', transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;
