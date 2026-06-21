import React, { useState, useEffect } from 'react';

const WeatherBadge = () => {
  const [weather, setWeather] = useState({ temp: '--', icon: 'ph-cloud-sun', description: 'FETCHING...' });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Try wttr.in first for real-time human-readable description
        const res = await fetch('https://wttr.in/Kuala+Lumpur?format=j1');
        const data = await res.json();
        const current = data.current_condition[0];
        const temp = Math.round(parseFloat(current.temp_C));
        const descText = current.weatherDesc[0].value.toUpperCase().trim();
        
        let icon = 'ph-sun';
        let desc = descText;
        
        if (descText.includes('SUNNY') || descText.includes('CLEAR')) {
          icon = 'ph-sun';
        } else if (descText.includes('CLOUDY') || descText.includes('OVERCAST')) {
          icon = 'ph-cloud-sun';
        } else if (descText.includes('RAIN') || descText.includes('DRIZZLE') || descText.includes('SHOWER')) {
          icon = 'ph-cloud-rain';
        } else if (descText.includes('FOG') || descText.includes('MIST')) {
          icon = 'ph-cloud-fog';
        } else if (descText.includes('SNOW')) {
          icon = 'ph-cloud-snow';
        } else if (descText.includes('THUNDER') || descText.includes('STORM')) {
          icon = 'ph-cloud-lightning';
        }
        
        setWeather({
          temp: temp,
          icon: icon,
          description: desc
        });
      } catch (err) {
        console.warn("wttr.in failed, falling back to open-meteo:", err);
        // Fallback to open-meteo
        try {
          const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=3.1390&longitude=101.6869&current=temperature_2m,weather_code');
          const data = await res.json();
          const code = data.current.weather_code;
          let icon = 'ph-sun';
          let desc = 'CLEAR';

          if (code === 0) { icon = 'ph-sun'; desc = 'SUNNY'; }
          else if (code >= 1 && code <= 3) { icon = 'ph-cloud-sun'; desc = 'CLOUDY'; }
          else if (code >= 45 && code <= 48) { icon = 'ph-cloud-fog'; desc = 'FOGGY'; }
          else if (code >= 51 && code <= 55) { icon = 'ph-cloud-rain'; desc = 'DRIZZLE'; }
          else if (code >= 56 && code <= 67) { icon = 'ph-cloud-rain'; desc = 'RAIN'; }
          else if (code >= 71 && code <= 86) { icon = 'ph-cloud-snow'; desc = 'SNOW'; }
          else if (code >= 95) { icon = 'ph-cloud-lightning'; desc = 'STORM'; }

          setWeather({
            temp: Math.round(data.current.temperature_2m),
            icon: icon,
            description: desc
          });
        } catch (fallbackErr) {
          console.error("All weather fetches failed", fallbackErr);
        }
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 600000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/60 shadow-sm min-w-[240px] group/weather hover:border-ghibli-blue/30 transition-all h-fit self-center">
      <div className="w-12 h-12 bg-ghibli-blue/10 rounded-xl flex items-center justify-center group-hover/weather:bg-ghibli-blue/20 transition-colors shrink-0">
        <i className={`ph-fill ${weather.icon} text-ghibli-blue text-2xl animate-pulse`}></i>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between w-full mb-1.5">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">
              Weather
          </span>
          <span className="text-[9px] text-ghibli-blue font-black uppercase tracking-tighter bg-ghibli-blue/10 px-2.5 py-1 rounded whitespace-nowrap">
              {weather.description}
          </span>
        </div>
        <span className="text-lg font-black tracking-tight text-ghibli-dark leading-none">
            {weather.temp}°C 
        </span>
      </div>
    </div>
  );
};

const Narrative = () => {
  return (
    <section className="pt-16 pb-20 px-container-padding bg-surface relative overflow-hidden scroll-mt-20" id="the-narrative">
      {/* Decorative background element */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-ghibli-green/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left: Image with interactive flip on hover */}
          <div className="w-full md:w-[40%] reveal reveal-left flex-shrink-0">
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-ghibli-green/20 rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform -z-10"></div>
              
              {/* Flip Card Container */}
              <div className="relative transition-all duration-700 preserve-3d group-hover:[transform:rotateY(180deg)]">
                {/* Front Image */}
                <div className="w-full aspect-[4/5] [backface-visibility:hidden]">
                  <img 
                    alt="Fahimsyach Lokanta - Primary" 
                    className="w-full h-full object-cover rounded-[2rem] border-2 border-white shadow-xl" 
                    src="/images/introduction.jpg" 
                  />
                </div>
                
                {/* Back Image */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <img 
                    alt="Fahimsyach Lokanta - Secondary" 
                    className="w-full h-full object-cover rounded-[2rem] border-2 border-white shadow-xl" 
                    src="/images/introduction2.jpeg" 
                  />
                </div>
              </div>

              {/* Status Badge - Dynamic Text on Hover */}
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 z-20">
                <span className="w-2 h-2 bg-ghibli-green rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest min-w-[140px] text-center">
                  <span className="group-hover:hidden">Available for Internship</span>
                  <span className="hidden group-hover:inline">Whoa! Surprise!</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: Narrative Content */}
          <div className="flex-1 reveal reveal-right">
            <div className="space-y-6">
              <div className="w-full px-6 py-4 bg-ghibli-blue/5 border-l-4 border-ghibli-blue text-ghibli-blue rounded-r-xl text-xl md:text-2xl font-black uppercase tracking-[0.3em] mb-10">
                The Story
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl font-black text-ghibli-dark leading-tight">
                Hi! My name is <span className="text-ghibli-green italic">Fahimsyach Lokanta</span>
              </h2>
              
              <div className="glass-card p-8 md:p-10 border-l-4 border-l-ghibli-green relative">
                <i className="ph-fill ph-quotes text-4xl text-ghibli-green/20 absolute top-4 right-6"></i>
                
                {/* Text content with deeper padding */}
                <div className="px-2 md:px-4">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    I am a <span className="text-ghibli-dark font-bold underline decoration-ghibli-yellow/40 decoration-4 underline-offset-2">Computer Science</span> student at BINUS University.
                  </p>
                  <p className="text-gray-600 mt-6 leading-relaxed">
                    I thrive on solving technical puzzles and collaborating in dynamic teams. My journey is driven by a proactive spirit and a deep-seated eagerness to apply my skills within innovative environments that push the boundaries of technology.
                  </p>
                </div>

                {/* Info Badges Row - stays at normal card alignment */}
                <div className="mt-10 flex items-center gap-3 flex-nowrap">
                  {/* Cool Location Status */}
                  <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-3 rounded-2xl border border-white/60 shadow-sm w-fit group/loc hover:border-ghibli-green/30 transition-all">
                    <div className="relative">
                      <div className="w-10 h-10 bg-ghibli-green/10 rounded-xl flex items-center justify-center group-hover/loc:bg-ghibli-green/20 transition-colors">
                        <i className="ph-fill ph-map-pin-line text-ghibli-green text-xl animate-bounce"></i>
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="w-1 h-1 bg-white rounded-full animate-ping"></span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">
                          Coordinates
                      </span>
                      <span className="text-sm font-black tracking-tight text-ghibli-dark location-shine">
                          KUALA LUMPUR, MALAYSIA
                      </span>
                    </div>
                  </div>

                  {/* Weather Badge */}
                  <WeatherBadge />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Narrative;
