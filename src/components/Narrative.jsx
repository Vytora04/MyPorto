import React from 'react';

const Narrative = () => {
  return (
    <section className="py-section-gap px-container-padding grid grid-cols-1 md:grid-cols-12 items-center border-b border-outline-variant gap-12" id="the-narrative">
      <div className="col-span-full flex justify-center mb-12">
        <h2 className="font-black leading-none text-center uppercase tracking-tighter fade-up title-hover-effect cursor-default text-[6vw]">THE NARRATIVE</h2>
      </div>
      <div className="md:col-span-3 md:col-start-2">
        <img alt="Introduction" className="w-full aspect-[3/4] object-cover rounded-md reveal-text opacity-0 translate-y-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] hover:shadow-lg" src="/images/introduction.jpg" />
      </div>
      <div className="md:col-span-6 md:col-start-6 flex flex-col justify-center">
        <h3 className="font-black text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-tighter uppercase mb-gutter reveal-text opacity-0 translate-y-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
          HELLO, I AM <span className="text-academic-sage italic font-bold">FAHIMSYACH LOKANTA</span>
        </h3>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 reveal-text opacity-0 translate-y-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
          I am a 6th-semester student at BINUS University based in Tangerang City. Proactive and capable to collaborate in a team, communicate effectively, and solve technical problems. Eager to learn and apply skills in an innovative environment.
        </p>
      </div>
    </section>
  );
};

export default Narrative;
