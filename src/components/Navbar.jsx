import React, { useState } from 'react';

const navLinks = [
  { label: 'EXPERIENCE', href: '#featured-experience' },
  { label: 'CAPABILITIES', href: '#capabilities' },
  { label: 'WORKS', href: '#selected-works' },
  { label: 'CONTACT', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[200] bg-surface border-b border-primary px-16 h-[80px] flex items-center justify-between">

      {/* Left: Name */}
      <div className="text-2xl font-black text-primary uppercase tracking-tighter">
        FAHIMSYACH LOKANTA
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">

        {/* Nav links — only rendered when open */}
        {open && (
          <div className="flex items-center gap-8 animate-nav-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-label-caps text-primary whitespace-nowrap px-3 py-2 hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Hamburger button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(prev => !prev)}
          className="flex flex-col justify-center items-end gap-[6px] w-10 h-10 flex-shrink-0 focus:outline-none"
        >
          <span className="block h-[2px] bg-primary transition-all duration-500"
            style={{ width: '28px', transform: open ? 'translateY(8px) rotate(45deg)' : 'none' }} />
          <span className="block h-[2px] bg-primary transition-all duration-300"
            style={{ width: '20px', opacity: open ? 0 : 1 }} />
          <span className="block h-[2px] bg-primary transition-all duration-500"
            style={{ width: open ? '28px' : '24px', transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none' }} />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
