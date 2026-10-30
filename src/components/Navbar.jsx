import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'ABOUT', href: '#the-narrative' },
  { label: 'EXPERIENCE', href: '#featured-experience' },
  { label: 'COMPETENCIES', href: '#competencies' },
  { label: 'WORKS', href: '#selected-works' },
  { label: 'EDUCATION', href: '#academic-history' },
  { label: 'CONTACT', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);

      if (scrollTop < 200) {
        setActiveSection('');
        return;
      }

      const checkPoint = scrollTop + window.innerHeight * 0.35;
      let current = '';
      for (const link of navLinks) {
        const el = document.getElementById(link.href.replace('#', ''));
        if (el && el.offsetTop <= checkPoint) {
          current = link.href;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className="h-4 md:h-6 w-full bg-background pointer-events-none"></div>
      
      <div className="flex flex-col items-center px-4 sm:px-6 pointer-events-none">
        <nav className="glass-card w-full max-w-5xl h-14 md:h-16 flex items-center justify-between px-6 md:px-8 rounded-full border border-white/50 shadow-2xl pointer-events-auto relative overflow-hidden">
          
          {/* Left: Logo */}
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setOpen(false);
            }}
            className="text-xl md:text-2xl font-serif font-black text-ghibli-dark tracking-tighter hover:text-ghibli-green transition-colors cursor-pointer"
          >
            FL.
          </button>

          {/* Right side: Hidden Hamburger Menu */}
          <div className="flex items-center gap-4">
            
            {/* Desktop/Tablet Sliding Menu (inside pill on md+) */}
            <div className={`hidden md:flex absolute inset-0 bg-white items-center justify-center md:gap-5 lg:gap-8 pr-14 pl-16 transition-all duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
               {navLinks.map((link, index) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="flex items-baseline gap-1.5 group/nav whitespace-nowrap relative py-1"
                  >
                    <span className={`text-[10px] font-bold transition-opacity ${isActive ? 'text-ghibli-green opacity-100' : 'text-ghibli-green opacity-60'}`}>
                      0{index + 1}
                    </span>
                    <span className={`text-xs font-black uppercase tracking-widest transition-colors ${isActive ? 'text-ghibli-green' : 'text-ghibli-dark group-hover/nav:text-ghibli-green'}`}>
                      {link.label}
                    </span>
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-ghibli-green rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Hamburger button */}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
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

          {/* Subtle Bottom Scroll Progress Bar */}
          <div
            className="absolute bottom-0 left-0 h-[2.5px] bg-academic-sage transition-all duration-150 pointer-events-none"
            style={{ width: `${scrollProgress}%` }}
          />
        </nav>

        {/* Mobile Dropdown Menu (< md) */}
        <div
          className={`md:hidden w-full max-w-5xl mt-2 glass-card rounded-2xl border border-white/60 shadow-2xl overflow-hidden transition-all duration-300 origin-top ${
            open
              ? 'opacity-100 scale-y-100 max-h-96 py-4 px-6 pointer-events-auto'
              : 'opacity-0 scale-y-95 max-h-0 py-0 px-6 pointer-events-none'
          }`}
        >
          <div className="grid grid-cols-2 gap-y-3 gap-x-4">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`flex items-baseline gap-2 py-2 px-2.5 rounded-lg transition-colors ${isActive ? 'bg-ghibli-green/15' : 'hover:bg-ghibli-green/10'}`}
                >
                  <span className="text-[10px] font-bold text-ghibli-green opacity-80">0{index + 1}</span>
                  <span className={`text-xs font-black uppercase tracking-widest ${isActive ? 'text-ghibli-green' : 'text-ghibli-dark'}`}>
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
