import React, { useState, useEffect, useRef } from 'react';

const SkillTag = ({ icon, label, colorClass, category }) => {
  let baseStyle = "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium hover:text-white hover:scale-105 transition-all cursor-default shadow-sm";
  let themeStyle = "";

  if (category === 'core') {
    themeStyle = "bg-white/60 border border-gray-200 hover:bg-ghibli-green";
  } else if (category === 'exploring') {
    themeStyle = "bg-white/40 border border-dashed border-gray-300 text-gray-600 hover:bg-ghibli-yellow hover:text-ghibli-dark";
  } else {
    themeStyle = "bg-white/50 border border-gray-200 text-gray-700 hover:bg-ghibli-blue";
  }

  return (
    <span className={`${baseStyle} ${themeStyle}`}>
      <i className={`${icon} ${colorClass}`}></i> {label}
    </span>
  );
};

const AchievementItem = ({ icon, title, subtitle, iconColor, bounce }) => (
  <li className="flex gap-3 hover:translate-x-2 transition-transform p-2 hover:bg-white/40 rounded-lg group">
    <i className={`${icon} ${iconColor} text-xl shrink-0 mt-0.5 ${bounce ? 'animate-bounce' : ''}`} 
       style={bounce ? { animationDuration: '3s' } : {}}></i>
    <div>
      <p className="text-sm font-bold text-gray-800">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  </li>
);

const LanguageBar = ({ name, level, levelText, colorClass, percentage }) => (
  <li className="pl-2 group">
    <div className="flex justify-between mb-1">
      <span className="font-bold text-ghibli-dark text-sm">{name} <span className="font-normal text-gray-500 text-xs">({levelText})</span></span>
      <span className="text-xs text-gray-500 font-bold">{level}/10</span>
    </div>
    <div className="progress-bar-container">
      <div className={`progress-fill ${colorClass}`} style={{ width: `${percentage}%` }}></div>
    </div>
  </li>
);

const DustBunny = () => {
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [isJumping, setIsJumping] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
    const dist = Math.min(4, Math.hypot(mouseX - centerX, mouseY - centerY) / 15);
    
    setPupilPos({
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist
    });
  };

  const handleClick = (e) => {
    if (isJumping) return;
    setIsJumping(true);
    
    // Add sparkles
    const newSparkles = Array.from({ length: 5 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 60,
      y: (Math.random() - 0.5) * 60,
    }));
    setSparkles(prev => [...prev, ...newSparkles]);

    // Reset jump and remove sparkles
    setTimeout(() => setIsJumping(false), 500);
    setTimeout(() => setSparkles(prev => prev.filter(s => !newSparkles.includes(s))), 800);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      className="mt-8 flex flex-col items-center justify-center p-6 bg-white/30 rounded-2xl border border-white/50 relative overflow-hidden group cursor-pointer shadow-inner select-none" 
      id="pet-container"
    >
      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 pointer-events-none">Pet the Dust Bunny</h4>
      
      <div className="relative">
        {/* Sparkles */}
        {sparkles.map(s => (
          <span 
            key={s.id}
            className="absolute text-ghibli-yellow animate-ping pointer-events-none z-20"
            style={{ left: `calc(50% + ${s.x}px)`, top: `calc(50% + ${s.y}px)`, fontSize: '12px' }}
          >
            ✨
          </span>
        ))}

        <div className={`soot-sprite w-16 h-16 bg-ghibli-dark rounded-full relative flex items-center justify-center z-10 transition-transform duration-300 ${isJumping ? '-translate-y-6 scale-110' : ''}`}>
          <div className="absolute w-10 flex justify-between top-3">
            <div className={`w-3.5 h-4.5 bg-white rounded-full relative overflow-hidden transition-all duration-100 ${isJumping ? 'h-0.5 mt-2' : ''}`}>
              <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-1.5 left-1 transition-transform duration-75" 
                   style={{ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }}></div>
            </div>
            <div className={`w-3.5 h-4.5 bg-white rounded-full relative overflow-hidden transition-all duration-100 ${isJumping ? 'h-0.5 mt-2' : ''}`}>
              <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-1.5 left-1 transition-transform duration-75" 
                   style={{ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }}></div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-gray-400 mt-6 font-bold tracking-widest transition-colors group-hover:text-ghibli-green pointer-events-none">
        {isJumping ? 'Happy! ✨' : 'He likes gentle clicks! ✨'}
      </p>
    </div>
  );
};

const Capabilities = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-section-gap px-container-padding bg-surface scroll-mt-24" id="competencies">
      <div className="col-span-full flex justify-center mb-24">
        <h2 className="font-black leading-none text-center uppercase tracking-tighter title-hover-effect cursor-default text-[5vw]">PROFESSIONAL COMPETENCIES</h2>
      </div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Technical Toolbox */}
        <div className="glass-card p-8 reveal reveal-left active flex flex-col h-full">
          <h3 className="font-serif text-3xl font-bold text-ghibli-dark mb-10 flex items-center gap-3 group">
            <i className="ph-fill ph-wrench text-ghibli-text group-hover:rotate-45 transition-transform"></i> Technical Toolbox
          </h3>
          
          <div className="space-y-10 flex-grow">
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Core Stack</h4>
              <div className="flex flex-wrap gap-2.5">
                <SkillTag category="core" icon="ph-fill ph-terminal-window" colorClass="text-gray-600" label="C/C++" />
                <SkillTag category="core" icon="ph-fill ph-file-code" colorClass="text-blue-500" label="Python" />
                <SkillTag category="core" icon="ph-fill ph-database" colorClass="text-orange-500" label="SQL" />
                <SkillTag category="core" icon="ph-fill ph-chart-line-up" colorClass="text-blue-400" label="R" />
                <SkillTag category="core" icon="ph-fill ph-browsers" colorClass="text-orange-400" label="HTML/CSS" />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Exploring</h4>
              <div className="flex flex-wrap gap-2.5">
                <SkillTag category="exploring" icon="ph-fill ph-file-js" colorClass="text-yellow-500" label="JavaScript" />
                <SkillTag category="exploring" icon="ph-fill ph-coffee" colorClass="text-orange-600" label="Java" />
                <SkillTag category="exploring" icon="ph-fill ph-device-mobile" colorClass="text-blue-400" label="Flutter" />
                <SkillTag category="exploring" icon="ph-fill ph-cube" colorClass="text-red-500" label="Laravel" />
                <SkillTag category="exploring" icon="ph-fill ph-file-code" colorClass="text-indigo-500" label="PHP" />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Infrastructure & Tools</h4>
              <div className="flex flex-wrap gap-2.5">
                <SkillTag category="tools" icon="ph-fill ph-code-block" colorClass="text-blue-600" label="VS Code" />
                <SkillTag category="tools" icon="ph-fill ph-google-logo" colorClass="text-yellow-500" label="Google Colab" />
                <SkillTag category="tools" icon="ph-fill ph-github-logo" colorClass="text-gray-800" label="GitHub" />
                <SkillTag category="tools" icon="ph-fill ph-figma-logo" colorClass="text-pink-500" label="Figma" />
                <SkillTag category="tools" icon="ph-fill ph-hard-drives" colorClass="text-orange-400" label="XAMPP" />
                <SkillTag category="tools" icon="ph-fill ph-planet" colorClass="text-orange-500" label="Jupyter" />
                <SkillTag category="tools" icon="ph-fill ph-database" colorClass="text-blue-500" label="MySQL Workbench" />
                <SkillTag category="tools" icon="ph-fill ph-broadcast" colorClass="text-blue-600" label="Cisco Packet Tracer" />
                <SkillTag category="tools" icon="ph-fill ph-chart-polar" colorClass="text-blue-400" label="RStudio" />
                <SkillTag category="tools" icon="ph-fill ph-hammer" colorClass="text-gray-500" label="RapidMiner" />
                <SkillTag category="tools" icon="ph-fill ph-triangle" colorClass="text-black" label="Vercel" />
                <SkillTag category="tools" icon="ph-fill ph-train" colorClass="text-gray-700" label="Railway" />
                <SkillTag category="tools" icon="ph-fill ph-database" colorClass="text-green-500" label="Supabase" />
              </div>
            </div>
          </div>

          <DustBunny />
        </div>

        {/* Right Column: Split Cards */}
        <div className="flex flex-col gap-8 h-full">
          {/* Achievements Card */}
          <div className="glass-card p-8 reveal reveal-right active">
            <h3 className="font-serif text-3xl font-bold text-ghibli-dark mb-8 flex items-center gap-3 group">
              <i className="ph-fill ph-star text-ghibli-yellow group-hover:scale-125 transition-transform"></i> Achievements & Certs
            </h3>
            <ul className="space-y-5">
              <AchievementItem 
                icon="ph-fill ph-trophy" iconColor="text-ghibli-yellow" bounce
                title="Finalist of SoCS Hackathon 2024" subtitle="BINUS & Microsoft" 
              />
              <AchievementItem 
                icon="ph-fill ph-medal" iconColor="text-ghibli-blue" 
                title="Participant of Hackathon 8.0 2024" subtitle="ICP Indonesia" 
              />
              <AchievementItem 
                icon="ph-fill ph-certificate" iconColor="text-ghibli-green" 
                title="Alibaba Cloud Certified Associate" subtitle={<>Cloud Engineer <span className="text-ghibli-green font-medium">(Valid until 2027)</span></>} 
              />
              <AchievementItem 
                icon="ph-fill ph-translate" iconColor="text-purple-400" 
                title="IELTS Academic" subtitle={<>Band 7.0 <span className="text-purple-500 font-medium">(Valid until 2027)</span></>} 
              />
            </ul>
          </div>

          {/* Traits & Languages Card */}
          <div className="glass-card p-8 reveal reveal-right active flex-grow">
            <h3 className="font-serif text-3xl font-bold text-ghibli-dark mb-6 flex items-center gap-3 group">
              <i className="ph-fill ph-users text-ghibli-blue group-hover:scale-125 transition-transform"></i> Traits & Languages
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {['Project Management', 'Event Management', 'Team Communication', 'Problem Solving', 'Adaptability', 'Documentation'].map(trait => (
                <span key={trait} className="px-3 py-1 bg-ghibli-light-green/20 text-ghibli-dark rounded-full text-xs font-semibold hover:bg-ghibli-green hover:text-white transition-colors cursor-default">
                  {trait}
                </span>
              ))}
            </div>
            
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Languages</h4>
            <ol className="space-y-6 list-decimal pl-4 text-sm text-gray-700 font-medium marker:text-ghibli-green marker:font-bold">
              <LanguageBar name="Indonesia" levelText="Native" level="10" percentage={100} colorClass="bg-ghibli-green" />
              <LanguageBar name="English" levelText="Upper Intermediate" level="8" percentage={80} colorClass="bg-ghibli-blue" />
              <LanguageBar name="Malay" levelText="Basic" level="4" percentage={40} colorClass="bg-ghibli-yellow" />
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
