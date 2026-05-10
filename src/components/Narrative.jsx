import React from 'react';

const Narrative = () => {
  return (
    <section className="py-24 px-container-padding bg-surface relative overflow-hidden scroll-mt-24" id="the-narrative">
      {/* Decorative background element */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-ghibli-green/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left: Image with organic frame */}
          <div className="w-full md:w-[40%] reveal reveal-left flex-shrink-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-ghibli-green/20 rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform -z-10"></div>
              <img 
                alt="Fahimsyach Lokanta" 
                className="w-full aspect-[4/5] object-cover rounded-[2rem] border-2 border-white shadow-xl transition-all duration-700 hover:-translate-y-2 hover:-rotate-1" 
                src="/images/introduction.jpg" 
              />
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2">
                <span className="w-2 h-2 bg-ghibli-green rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Available for Internship</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative Content */}
          <div className="flex-1 reveal reveal-right">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-ghibli-blue/10 text-ghibli-blue rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                The Narrative
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl font-black text-ghibli-dark leading-tight">
                Hello, I am <span className="text-ghibli-green italic">Fahimsyach Lokanta</span>
              </h2>
              
              <div className="glass-card p-8 border-l-4 border-l-ghibli-green relative">
                <i className="ph-fill ph-quotes text-4xl text-ghibli-green/20 absolute top-4 right-6"></i>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  I am a <span className="text-ghibli-dark font-bold underline decoration-ghibli-yellow/40 decoration-4 underline-offset-2">Computer Science</span> student at BINUS University, based in the vibrant city of Tangerang. 
                </p>
                <p className="text-gray-600 mt-6 leading-relaxed">
                  I thrive on solving technical puzzles and collaborating in dynamic teams. My journey is driven by a proactive spirit and a deep-seated eagerness to apply my skills within innovative environments that push the boundaries of technology.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Narrative;
