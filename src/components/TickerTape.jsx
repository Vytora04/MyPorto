import React from 'react';

const TickerTape = ({ typingDone = true }) => {
  const items = [
    { label: "Gamer", icon: "ph-fill ph-game-controller", color: "text-indigo-400" },
    { label: "Developer", icon: "ph-fill ph-code", color: "text-sky-400" },
    { label: "Food Enthusiast", icon: "ph-fill ph-bowl-food", color: "text-orange-400" },
    { label: "Music Enthusiast", icon: "ph-fill ph-music-notes", color: "text-pink-400" }
  ];
  
  const renderContent = () => (
    <div className="ticker-content">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="flex items-center gap-4">
            <i className={`${item.icon} text-4xl ${item.color}`}></i>
            <span>{item.label}</span>
          </div>
          <span className="opacity-20">|</span>
        </React.Fragment>
      ))}
      {/* Duplicate for longer span */}
      {items.map((item, idx) => (
        <React.Fragment key={`dup-${idx}`}>
          <div className="flex items-center gap-4">
            <i className={`${item.icon} text-4xl ${item.color}`}></i>
            <span>{item.label}</span>
          </div>
          <span className="opacity-20">|</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className={`w-[90%] max-w-6xl mx-auto border border-ghibli-green/20 bg-academic-sage rounded-full overflow-hidden shadow-xl shadow-ghibli-green/10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${typingDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ticker-wrap`}>
      <div className="ticker font-black text-4xl md:text-5xl text-ghibli-dark uppercase tracking-widest">
        {renderContent()}
        {renderContent()}
      </div>
    </div>
  );
};

export default TickerTape;
