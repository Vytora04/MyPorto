import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Carousel from './Carousel';

const Experience = () => {
  const [showArchives, setShowArchives] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (!previewImage) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setPreviewImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewImage]);

  return (
    <section className="pt-8 pb-section-gap px-container-padding scroll-mt-24" id="featured-experience">
      <div className="col-span-full flex justify-center mb-12 md:mb-24 w-full">
        <h2 className="font-black leading-none text-center uppercase tracking-tighter fade-up title-hover-effect cursor-default text-[clamp(2rem,6vw,5.5rem)]">FEATURED EXPERIENCE</h2>
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        {/* Highlighted Corporate Experience: Bumi Resources */}
        <div className="w-full bg-surface-container-lowest border-2 border-academic-sage/60 rounded-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 reveal reveal-up p-6 sm:p-8 mb-16 md:mb-20 flex flex-col lg:flex-row gap-6 md:gap-8 items-start justify-between">
          {/* Left: Framed Photo Preview */}
          <div
            className="w-full sm:w-48 lg:w-56 aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden border border-outline-variant/60 flex-shrink-0 relative group/internimg cursor-zoom-in self-center lg:self-start"
            onClick={() => setPreviewImage({ src: '/images/introduction2.jpeg', title: 'PT Bumi Resources Tbk. — Application System Developer Intern' })}
            title="Click to view full photo"
          >
            <img
              src="/images/introduction2.jpeg"
              alt="Bumi Resources Reception"
              className="w-full h-full object-cover group-hover/internimg:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/internimg:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined text-[15px]">open_in_full</span>
            </div>
            <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px] font-semibold text-white/90 text-center truncate">
              Bakrie Tower, Rasuna Epicentrum
            </div>
          </div>

          {/* Middle: Professional Details */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-academic-sage text-white text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[14px]">work</span> Professional Experience
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Active Role
              </span>
              <span className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider ml-auto">
                August 2026 – Present
              </span>
            </div>

            <div className="mb-4">
              <h3 className="font-serif text-2xl md:text-3xl font-black text-ghibli-dark tracking-tight leading-tight">
                PT Bumi Resources Tbk.
              </h3>
              <p className="text-base md:text-lg font-bold text-academic-sage tracking-tight mt-0.5">
                Application System Developer Intern
              </p>
            </div>

            <ul className="list-disc pl-5 text-base md:text-[17px] leading-relaxed text-on-surface-variant space-y-2 max-w-2xl">
              <li>
                Engineered enterprise workflows and business apps using <strong className="text-primary font-semibold">Microsoft Power Apps</strong> and <strong className="text-primary font-semibold">Power Automate</strong>.
              </li>
              <li>
                Architected and deployed a <strong className="text-primary font-semibold">RAG-based IT Operations Assistant</strong> to accelerate knowledge retrieval and resolve technical support queries.
              </li>
              <li>
                Integrated LLM capabilities and evaluated automation pipelines to streamline internal operational bottlenecks.
              </li>
            </ul>
          </div>

          {/* Right: Core Tech & Details */}
          <div className="w-full lg:w-[270px] flex flex-col gap-5 border-t lg:border-t-0 lg:border-l border-outline-variant pt-6 lg:pt-0 lg:pl-8 flex-shrink-0">
            <div>
              <span className="text-xs font-bold text-on-surface-variant/80 uppercase tracking-wider block mb-2.5">Core Tech & Scope</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 text-xs font-semibold uppercase rounded-full">RAG / LLMs</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold uppercase rounded-full">Power Apps</span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold uppercase rounded-full">Power Automate</span>
                <span className="px-3 py-1 bg-orange-50 text-orange-700 border border-orange-200 text-xs font-semibold uppercase rounded-full">System Integration</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold uppercase rounded-full">Enterprise IT</span>
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/60 flex flex-col gap-4">
              <div>
                <span className="text-xs font-bold text-on-surface-variant/80 uppercase tracking-wider block mb-1">Location</span>
                <p className="text-sm font-semibold text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-academic-sage">location_on</span>
                  Setiabudi, South Jakarta
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-on-surface-variant/80 uppercase tracking-wider block mb-1">Industry</span>
                <p className="text-sm font-semibold text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-academic-sage">corporate_fare</span>
                  Natural Resources & Energy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider: Organizational & Campus Leadership */}
        <div className="w-full mb-12 md:mb-16 border-b border-outline-variant pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2 reveal reveal-up">
          <div>
            <span className="text-xs md:text-sm font-bold text-on-surface-variant uppercase tracking-widest block mb-1.5">Extracurricular Leadership</span>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-bold text-primary tracking-tight leading-tight">Organizational & Campus Experience</h3>
          </div>
          <span className="px-3.5 py-1.5 bg-surface-container text-xs md:text-sm font-bold uppercase tracking-wider rounded-full text-on-surface-variant border border-outline-variant/60 w-fit">
            Academic Community
          </span>
        </div>

        {/* ICPC Block */}
        <div className="mb-16 md:mb-28 w-full flex flex-col md:flex-row gap-6 md:gap-10 items-start reveal reveal-tilt-up">
          {/* Left: Carousel */}
          <div className="w-full md:w-[38%] lg:w-[36%] flex-shrink-0">
            <Carousel autoPlay images={[
              '/images/experience/icpc1.jpg',
              '/images/experience/icpc2.jpg',
              '/images/experience/icpc3.jpg'
            ]} />
          </div>
          {/* Right: Text */}
          <div className="flex-1 flex flex-col justify-center w-full">
            <h3 className="font-black leading-[0.95] tracking-tighter uppercase text-primary mb-6 md:mb-8 pb-6 md:pb-8 border-b border-primary text-[clamp(1.5rem,2.85vw,2.85rem)]">
              International Collegiate<br className="hidden md:inline" /> Programming Contest <span className="inline-block whitespace-nowrap">(ICPC)</span>
            </h3>
            <h4 className="font-bold text-black text-2xl md:text-3xl uppercase tracking-tight mb-2">Registration Staff</h4>
            <p className="text-sm md:text-base font-semibold text-on-surface-variant mb-4 md:mb-6 uppercase tracking-wider">October 2024 - December 2024</p>
            <ul className="list-disc pl-5 text-base md:text-lg leading-relaxed text-on-surface-variant space-y-2.5">
              <li>Successfully facilitated the registration for 500+ student and faculty teams, ensuring a smooth registration process for the INC 2024 competition.</li>
              <li>Provided direct on-site operational support, ensuring positive experience for Asia Pacific participants.</li>
              <li>Coordinated with team for seamless operations for 100+ participants during ICPC competition.</li>
            </ul>
          </div>
        </div>

        {/* HIMTI BINUS Block */}
        <div className="mb-16 md:mb-24 w-full">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start mb-12 md:mb-16 reveal reveal-tilt-up">
            {/* Left: Carousel */}
            <div className="w-full md:w-[45%] flex-shrink-0">
              <Carousel autoPlay images={[
                '/images/experience/himti1.jpg',
                '/images/experience/himti2.jpg',
                '/images/experience/himti3.jpg',
                '/images/experience/himti4.jpg',
                '/images/experience/himti5.jpg',
                '/images/experience/himticertif1.jpg',
                '/images/experience/himticertif2.jpg'
              ]} />
            </div>
            {/* Right: Text */}
            <div className="flex-1 flex flex-col justify-center w-full">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-primary">
                <h3 className="font-black leading-[0.95] tracking-tighter uppercase text-primary text-[clamp(1.6rem,3vw,2.75rem)]">HIMTI BINUS</h3>
                <span className="px-3.5 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase rounded-full mt-1 md:mt-2">Computer Science Student Association</span>
              </div>
              <h4 className="font-bold text-black text-2xl md:text-3xl uppercase tracking-tight mb-2">Education Activist (Academic Event Subdivision)</h4>
              <p className="text-sm md:text-base font-semibold text-on-surface-variant mb-4 md:mb-6 uppercase tracking-wider">March 2024 - January 2026</p>
              <ul className="list-disc pl-5 text-base md:text-lg leading-relaxed text-on-surface-variant space-y-2.5">
                <li>Competitively selected through a rigorous multi-stage recruitment process to serve as an Education Activist in BINUS University's official Computer Science student organization.</li>
                <li>Enhancing collaboration and academic skill development among peers, with a focus on insights and trends in the field of Computer Science.</li>
                <li>Contributing as a core committee member for HIMTI BINUS flagship events.</li>
              </ul>
            </div>
          </div>

          <h4 className="leading-none text-left uppercase tracking-tighter mb-4 md:mb-6 border-b border-outline-variant pb-3 font-bold text-xl md:text-2xl reveal reveal-up">HIMTI Events Highlights</h4>

          {/* Spotlight Events Timeline */}
          <div className="flex flex-col gap-0 mb-8 md:mb-12 relative border-outline-variant ml-3 md:ml-6">

            {/* Role 1 */}
            <div className="group flex flex-col md:flex-row justify-between py-6 md:py-8 gap-8 md:gap-12 items-start relative pl-8 md:pl-16 border-b border-outline-variant last:border-0 reveal reveal-up">
              <div className="absolute left-0 h-full w-[2px] bg-outline-variant top-0"></div>
              <div className="absolute left-0 -translate-x-1/2 flex items-center justify-center top-6 md:top-[34px] z-10">
                <div className="w-8 h-8 rounded-full border-2 border-outline-variant bg-background flex items-center justify-center transition-all duration-300 timeline-circle">
                  <span className="font-bold text-[#A3B18A] text-xs md:text-sm group-hover:text-white">1</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center w-full max-w-xl lg:max-w-2xl pr-2 md:pr-4">
                <div className="mb-3">
                  <span className="text-xl md:text-2xl font-bold text-primary block mb-1.5 leading-snug tracking-tight">HIMTI COMPANY VISIT 2025 | Coordinator of Registration Division</span>
                  <span className="text-sm md:text-base font-semibold text-on-surface-variant uppercase tracking-wider block">August 2025 - October 2025</span>
                </div>
                <ul className="list-disc pl-5 text-base md:text-[17px] leading-relaxed text-on-surface-variant space-y-2">
                  <li>Designed and managed end-to-end registration system including registration forms, entry/exit tickets, and attendance sheets for participants and committee members.</li>
                  <li>Oversaw e-certificate preparation for both participants and committee, coordinating with relevant divisions for distribution.</li>
                  <li>Collaborated cross-functionally with the Promotion Division and provided on-site support during the event.</li>
                </ul>
              </div>
              <div className="w-full md:w-[380px] lg:w-[440px] xl:w-[480px] relative flex-shrink-0 md:ml-auto self-center md:self-start">
                <Carousel dots={false} aspect="aspect-[16/10]" images={['/images/experience/comvis1,2025-1.jpg', '/images/experience/comvis1,2025-2.jpg', '/images/experience/comvis1,2025-3.jpg']} />
              </div>
            </div>

            {/* Role 2 */}
            <div className="group flex flex-col md:flex-row justify-between py-6 md:py-8 gap-8 md:gap-12 items-start relative pl-8 md:pl-16 border-b border-outline-variant last:border-0 reveal reveal-up">
              <div className="absolute left-0 h-full w-[2px] bg-outline-variant top-0"></div>
              <div className="absolute left-0 -translate-x-1/2 flex items-center justify-center top-6 md:top-[34px] z-10">
                <div className="w-8 h-8 rounded-full border-2 border-outline-variant bg-background flex items-center justify-center transition-all duration-300 timeline-circle">
                  <span className="font-bold text-[#A3B18A] text-xs md:text-sm group-hover:text-white">2</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center w-full max-w-xl lg:max-w-2xl pr-2 md:pr-4">
                <div className="mb-3">
                  <span className="text-xl md:text-2xl font-bold text-primary block mb-1.5 leading-snug tracking-tight">TECHFEST 2025 | Technical Division Staff</span>
                  <span className="text-sm md:text-base font-semibold text-on-surface-variant uppercase tracking-wider block">April 2025 - July 2025</span>
                </div>
                <ul className="list-disc pl-5 text-base md:text-[17px] leading-relaxed text-on-surface-variant space-y-2">
                  <li>Managed precise timekeeping and ZOOM operations for a hybrid event with 50+ online and 30+ on-site participants.</li>
                  <li>Recorded and archived all online sessions, ensuring complete documentation of the event.</li>
                  <li>Provided real-time technical support across both virtual and physical event environments.</li>
                </ul>
              </div>
              <div className="w-full md:w-[380px] lg:w-[440px] xl:w-[480px] relative flex-shrink-0 md:ml-auto self-center md:self-start">
                <Carousel dots={false} aspect="aspect-[16/10]" images={['/images/experience/techfest2025-1.jpg', '/images/experience/techfest2025-2.jpg', '/images/experience/techfest2025-3.jpg', '/images/experience/techfest2025-4.jpg']} />
              </div>
            </div>

            {/* Role 3 */}
            <div className="group flex flex-col md:flex-row justify-between py-6 md:py-8 gap-8 md:gap-12 items-start relative pl-8 md:pl-16 border-b border-outline-variant last:border-0 reveal reveal-up">
              <div className="absolute left-0 h-full w-[2px] bg-outline-variant top-0"></div>
              <div className="absolute left-0 -translate-x-1/2 flex items-center justify-center top-6 md:top-[34px] z-10">
                <div className="w-8 h-8 rounded-full border-2 border-outline-variant bg-background flex items-center justify-center transition-all duration-300 timeline-circle">
                  <span className="font-bold text-[#A3B18A] text-xs md:text-sm group-hover:text-white">3</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center w-full max-w-xl lg:max-w-2xl pr-2 md:pr-4">
                <div className="mb-3">
                  <span className="text-xl md:text-2xl font-bold text-primary block mb-1.5 leading-snug tracking-tight">SESVENT 2024 | Vice Coordinator of Technical Division</span>
                  <span className="text-sm md:text-base font-semibold text-on-surface-variant uppercase tracking-wider block">September 2024 - October 2024</span>
                </div>
                <ul className="list-disc pl-5 text-base md:text-[17px] leading-relaxed text-on-surface-variant space-y-2">
                  <li>Managed ZOOM operations to ensure smooth execution of multiple online sessions attended by 300+ new activists.</li>
                  <li>Led technical support for on-site activities and coordinated with the team.</li>
                  <li>Successfully carried out cross-functional duties, organizing & executing public transportation.</li>
                </ul>
              </div>
              <div className="w-full md:w-[380px] lg:w-[440px] xl:w-[480px] relative flex-shrink-0 md:ml-auto self-center md:self-start">
                <Carousel dots={false} aspect="aspect-[16/10]" images={['/images/experience/sesvent2024-1.jpg', '/images/experience/sesvent2024-2.jpg', '/images/experience/sesvent2024-3.jpg']} />
              </div>
            </div>

            {/* Role 4 */}
            <div className="group flex flex-col md:flex-row justify-between py-6 md:py-8 gap-8 md:gap-12 items-start relative pl-8 md:pl-16 border-b border-outline-variant last:border-0 reveal reveal-up">
              <div className="absolute left-0 h-full w-[2px] bg-outline-variant top-0"></div>
              <div className="absolute left-0 -translate-x-1/2 flex items-center justify-center top-6 md:top-[34px] z-10">
                <div className="w-8 h-8 rounded-full border-2 border-outline-variant bg-background flex items-center justify-center transition-all duration-300 timeline-circle">
                  <span className="font-bold text-[#A3B18A] text-xs md:text-sm group-hover:text-white">4</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center w-full max-w-xl lg:max-w-2xl pr-2 md:pr-4">
                <div className="mb-3">
                  <span className="text-xl md:text-2xl font-bold text-primary block mb-1.5 leading-snug tracking-tight">HISHOT 2024 | Domestic Study Tour Staff</span>
                  <span className="text-sm md:text-base font-semibold text-on-surface-variant uppercase tracking-wider block">April 2024 - October 2024</span>
                </div>
                <ul className="list-disc pl-5 text-base md:text-[17px] leading-relaxed text-on-surface-variant space-y-2">
                  <li>Managed planning & execution, including logistical and accommodation coordination for a domestic study tour involving 60+ participants.</li>
                  <li>Contributed to securing CIMB Niaga as a partner for the domestic study destination.</li>
                  <li>Coordinated with external vendors to arrange transportation and catering.</li>
                </ul>
              </div>
              <div className="w-full md:w-[380px] lg:w-[440px] xl:w-[480px] relative flex-shrink-0 md:ml-auto self-center md:self-start">
                <Carousel dots={false} aspect="aspect-[16/10]" images={['/images/experience/hishot2024-1.jpg', '/images/experience/hishot2024-2.jpg', '/images/experience/hishot2024-3.jpg']} />
              </div>
            </div>

            {/* Role 5 */}
            <div className="group flex flex-col md:flex-row justify-between py-6 md:py-8 gap-8 md:gap-12 items-start relative pl-8 md:pl-16 border-b border-outline-variant last:border-0 reveal reveal-up">
              <div className="absolute left-0 h-full w-[2px] bg-outline-variant top-0"></div>
              <div className="absolute left-0 -translate-x-1/2 flex items-center justify-center top-6 md:top-[34px] z-10">
                <div className="w-8 h-8 rounded-full border-2 border-outline-variant bg-background flex items-center justify-center transition-all duration-300 timeline-circle">
                  <span className="font-bold text-[#A3B18A] text-xs md:text-sm group-hover:text-white">5</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center w-full max-w-xl lg:max-w-2xl pr-2 md:pr-4">
                <div className="mb-3">
                  <span className="text-xl md:text-2xl font-bold text-primary block mb-1.5 leading-snug tracking-tight">TECHNO 2024 | Sponsor Division Staff</span>
                  <span className="text-sm md:text-base font-semibold text-on-surface-variant uppercase tracking-wider block">April 2024 - September 2024</span>
                </div>
                <ul className="list-disc pl-5 text-base md:text-[17px] leading-relaxed text-on-surface-variant space-y-2">
                  <li>Contributed to the division's achievement of securing over Rp15 million in total funds.</li>
                  <li>Assisted with F&B fundraising and paid-promote implementation, ensuring a financial surplus.</li>
                  <li>Supported cross-divisional operations as an usher, providing event support for 600+ new students.</li>
                </ul>
              </div>
              <div className="w-full md:w-[380px] lg:w-[440px] xl:w-[480px] relative flex-shrink-0 md:ml-auto self-center md:self-start">
                <Carousel dots={false} aspect="aspect-[16/10]" images={['/images/experience/techno2024-1.jpg', '/images/experience/techno2024-2.jpg', '/images/experience/techno2024-3.jpg']} />
              </div>
            </div>

          </div>

          <button
            className="w-full flex justify-between items-center py-4 px-5 md:px-6 border border-outline-variant hover:bg-surface-container transition-colors duration-300 mt-8"
            onClick={() => setShowArchives(!showArchives)}
          >
            <span className="font-bold text-sm md:text-base uppercase text-primary tracking-tight text-left">VIEW OTHER HIMTI ROLES & ARCHIVES</span>
            <span className="material-symbols-outlined text-primary transition-transform duration-300" style={{ transform: showArchives ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
          </button>

          {showArchives && (
            <div className="w-full border border-t-0 border-outline-variant p-6 bg-surface-container-lowest" id="himti-archives">
              <p className="font-body-md text-on-surface-variant">Archived roles and experiences will be displayed here.</p>
            </div>
          )}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal for Photo Preview */}
      {previewImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
            onClick={() => setPreviewImage(null)}
          >
            <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase truncate max-w-[75vw]">
                {previewImage.title}
              </span>
              <button
                type="button"
                aria-label="Close preview"
                onClick={() => setPreviewImage(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-colors pointer-events-auto"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <img
              src={previewImage.src}
              alt={previewImage.title}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/15 transition-all duration-300"
            />
          </div>,
          document.body
        )}
    </section>
  );
};

export default Experience;
