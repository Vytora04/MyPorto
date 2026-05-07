import React, { useState } from 'react';
import Carousel from './Carousel';

const Experience = () => {
  const [showArchives, setShowArchives] = useState(false);

  return (
    <section className="py-section-gap px-container-padding border-b border-outline-variant" id="featured-experience">
      <div className="col-span-full flex justify-center mb-24 w-full">
        <h2 className="font-black leading-none text-center uppercase tracking-tighter fade-up title-hover-effect cursor-default text-[6vw]">FEATURED EXPERIENCE</h2>
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        {/* ICPC Block */}
        <div className="mb-32 w-full">
          <Carousel images={[
            '/images/experience/icpc1.jpg',
            '/images/experience/icpc2.jpg',
            '/images/experience/icpc3.jpg'
          ]} />
          <h3 className="font-black leading-[0.9] tracking-tighter uppercase text-primary mb-8 pb-8 border-b border-primary text-[clamp(2.5rem,5vw,4.2rem)]">ICPC (International Collegiate Programming Contest)</h3>
          <div className="max-w-[600px] w-full text-left mr-auto">
            <h4 className="font-bold text-black text-2xl uppercase tracking-tight mb-2 whitespace-nowrap">Registration Staff</h4>
            <p className="font-label-caps text-on-surface-variant mb-6 uppercase">October 2024 - December 2024</p>
            <ul className="list-disc pl-5 font-body-lg text-on-surface-variant space-y-2">
              <li>Successfully facilitated the registration for 500+ student and faculty teams, ensuring a smooth registration process for the INC 2024 competition.</li>
              <li>Provided direct on-site operational support, ensuring positive experience for Asia Pacific participants.</li>
              <li>Coordinated with team for seamless operations for 100+ participants during ICPC competition.</li>
            </ul>
          </div>
        </div>

        {/* HIMTI BINUS Block */}
        <div className="mb-24 w-full">
          <Carousel images={[
            '/images/experience/himti1.jpg',
            '/images/experience/himti2.jpg',
            '/images/experience/himti3.jpg',
            '/images/experience/himti4.jpg',
            '/images/experience/himti5.jpg',
            '/images/experience/himticertif1.jpg'
          ]} />
          <h3 className="font-black leading-[0.9] tracking-tighter uppercase text-primary mb-8 pb-8 border-b border-primary text-[clamp(2.5rem,5vw,4.2rem)]">HIMTI BINUS</h3>
          <div className="mb-16 max-w-[600px] w-full text-left mr-auto">
            <h4 className="font-bold text-black text-2xl uppercase tracking-tight mb-2 whitespace-nowrap">Education Activist (Academic Event Subdivision)</h4>
            <p className="font-label-caps text-on-surface-variant mb-6 uppercase">March 2024 - January 2026</p>
            <ul className="list-disc pl-5 font-body-lg text-on-surface-variant space-y-2">
              <li>Competitively selected through a rigorous multi-stage recruitment process to serve as an Education Activist in BINUS University's official Computer Science student organization.</li>
              <li>Enhancing collaboration and academic skill development among peers, with a focus on insights and trends in the field of Computer Science.</li>
              <li>Contributing as a core committee member for HIMTI BINUS flagship events.</li>
            </ul>
          </div>
          
          <h4 className="leading-none text-left uppercase tracking-tighter mb-12 border-b border-outline-variant pb-4 font-medium text-3xl">HIMTI Events Highlights</h4>
          
          {/* Spotlight Events Timeline */}
          <div className="flex flex-col gap-0 mb-12 relative border-outline-variant ml-6">
            
            {/* Role 1 */}
            <div className="group flex flex-col md:flex-row py-12 gap-gutter items-start relative pl-16 border-b border-outline-variant last:border-0">
              <div className="absolute left-0 h-full w-[2px] bg-outline-variant top-0"></div>
              <div className="absolute left-0 -translate-x-1/2 flex items-center justify-center top-[51px] z-10">
                <div className="w-8 h-8 rounded-full border-2 border-outline-variant bg-background flex items-center justify-center transition-all duration-300 timeline-circle">
                  <span className="font-label-caps text-[#A3B18A] text-sm group-hover:text-white">1</span>
                </div>
              </div>
              <div className="flex-[3] flex flex-col justify-center max-w-[600px]">
                <div className="mb-4">
                  <span className="font-headline-md text-primary block mb-2">HIMTI COMPANY VISIT 2025 | Coordinator of Registration Division</span>
                  <span className="font-label-caps text-on-surface-variant uppercase">August 2025 - October 2025</span>
                </div>
                <ul className="list-disc pl-5 font-body-md text-on-surface-variant space-y-2">
                  <li>Designed and managed end-to-end registration system including registration forms, entry/exit tickets, and attendance sheets for participants and committee members.</li>
                  <li>Oversaw e-certificate preparation for both participants and committee, coordinating with relevant divisions for distribution.</li>
                  <li>Collaborated cross-functionally with the Promotion Division and provided on-site support during the event.</li>
                </ul>
              </div>
              <div className="w-full flex-[2] relative flex-shrink-0">
                <Carousel dots={false} images={['/images/experience/comvis1,2025-1.jpg', '/images/experience/comvis1,2025-2.jpg', '/images/experience/comvis1,2025-3.jpg']} />
              </div>
            </div>

            {/* Role 2 */}
            <div className="group flex flex-col md:flex-row py-12 gap-gutter items-start relative pl-16 border-b border-outline-variant last:border-0">
              <div className="absolute left-0 h-full w-[2px] bg-outline-variant top-0"></div>
              <div className="absolute left-0 -translate-x-1/2 flex items-center justify-center top-[51px] z-10">
                <div className="w-8 h-8 rounded-full border-2 border-outline-variant bg-background flex items-center justify-center transition-all duration-300 timeline-circle">
                  <span className="font-label-caps text-[#A3B18A] text-sm group-hover:text-white">2</span>
                </div>
              </div>
              <div className="flex-[3] flex flex-col justify-center max-w-[600px]">
                <div className="mb-4">
                  <span className="font-headline-md text-primary block mb-2">TECHFEST 2025 | Technical Division Staff</span>
                  <span className="font-label-caps text-on-surface-variant uppercase">April 2025 - July 2025</span>
                </div>
                <ul className="list-disc pl-5 font-body-md text-on-surface-variant space-y-2">
                  <li>Managed precise timekeeping and ZOOM operations for a hybrid event with 50+ online and 30+ on-site participants.</li>
                  <li>Recorded and archived all online sessions, ensuring complete documentation of the event.</li>
                  <li>Provided real-time technical support across both virtual and physical event environments.</li>
                </ul>
              </div>
              <div className="w-full flex-[2] relative flex-shrink-0">
                <Carousel dots={false} images={['/images/experience/techfest2025-1.jpg', '/images/experience/techfest2025-2.jpg', '/images/experience/techfest2025-3.jpg', '/images/experience/techfest2025-4.jpg']} />
              </div>
            </div>

            {/* Role 3 */}
            <div className="group flex flex-col md:flex-row py-12 gap-gutter items-start relative pl-16 border-b border-outline-variant last:border-0">
              <div className="absolute left-0 h-full w-[2px] bg-outline-variant top-0"></div>
              <div className="absolute left-0 -translate-x-1/2 flex items-center justify-center top-[51px] z-10">
                <div className="w-8 h-8 rounded-full border-2 border-outline-variant bg-background flex items-center justify-center transition-all duration-300 timeline-circle">
                  <span className="font-label-caps text-[#A3B18A] text-sm group-hover:text-white">3</span>
                </div>
              </div>
              <div className="flex-[3] flex flex-col justify-center max-w-[600px]">
                <div className="mb-4">
                  <span className="font-headline-md text-primary block mb-2">SESVENT 2024 | Vice Coordinator of Technical Division</span>
                  <span className="font-label-caps text-on-surface-variant uppercase">September 2024 - October 2024</span>
                </div>
                <ul className="list-disc pl-5 font-body-md text-on-surface-variant space-y-2">
                  <li>Managed ZOOM operations to ensure smooth execution of multiple online sessions attended by 300+ new activists.</li>
                  <li>Led technical support for on-site activities and coordinated with the team.</li>
                  <li>Successfully carried out cross-functional duties, organizing & executing public transportation.</li>
                </ul>
              </div>
              <div className="w-full flex-[2] relative flex-shrink-0">
                <Carousel dots={false} images={['/images/experience/sesvent2024-1.jpg', '/images/experience/sesvent2024-2.jpg', '/images/experience/sesvent2024-3.jpg']} />
              </div>
            </div>

            {/* Role 4 */}
            <div className="group flex flex-col md:flex-row py-12 gap-gutter items-start relative pl-16 border-b border-outline-variant last:border-0">
              <div className="absolute left-0 h-full w-[2px] bg-outline-variant top-0"></div>
              <div className="absolute left-0 -translate-x-1/2 flex items-center justify-center top-[51px] z-10">
                <div className="w-8 h-8 rounded-full border-2 border-outline-variant bg-background flex items-center justify-center transition-all duration-300 timeline-circle">
                  <span className="font-label-caps text-[#A3B18A] text-sm group-hover:text-white">4</span>
                </div>
              </div>
              <div className="flex-[3] flex flex-col justify-center max-w-[600px]">
                <div className="mb-4">
                  <span className="font-headline-md text-primary block mb-2">HISHOT 2024 | Domestic Study Tour Staff</span>
                  <span className="font-label-caps text-on-surface-variant uppercase">April 2024 - October 2024</span>
                </div>
                <ul className="list-disc pl-5 font-body-md text-on-surface-variant space-y-2">
                  <li>Managed planning & execution, including logistical and accommodation coordination for a domestic study tour involving 60+ participants.</li>
                  <li>Contributed to securing CIMB Niaga as a partner for the domestic study destination.</li>
                  <li>Coordinated with external vendors to arrange transportation and catering.</li>
                </ul>
              </div>
              <div className="w-full flex-[2] relative flex-shrink-0">
                <Carousel dots={false} images={['/images/experience/hishot2024-1.jpg', '/images/experience/hishot2024-2.jpg', '/images/experience/hishot2024-3.jpg']} />
              </div>
            </div>

            {/* Role 5 */}
            <div className="group flex flex-col md:flex-row py-12 gap-gutter items-start relative pl-16 border-b border-outline-variant last:border-0">
              <div className="absolute left-0 h-full w-[2px] bg-outline-variant top-0"></div>
              <div className="absolute left-0 -translate-x-1/2 flex items-center justify-center top-[51px] z-10">
                <div className="w-8 h-8 rounded-full border-2 border-outline-variant bg-background flex items-center justify-center transition-all duration-300 timeline-circle">
                  <span className="font-label-caps text-[#A3B18A] text-sm group-hover:text-white">5</span>
                </div>
              </div>
              <div className="flex-[3] flex flex-col justify-center max-w-[600px]">
                <div className="mb-4">
                  <span className="font-headline-md text-primary block mb-2">TECHNO 2024 | Sponsor Division Staff</span>
                  <span className="font-label-caps text-on-surface-variant uppercase">April 2024 - September 2024</span>
                </div>
                <ul className="list-disc pl-5 font-body-md text-on-surface-variant space-y-2">
                  <li>Contributed to the division's achievement of securing over Rp15 million in total funds.</li>
                  <li>Assisted with F&B fundraising and paid-promote implementation, ensuring a financial surplus.</li>
                  <li>Supported cross-divisional operations as an usher, providing event support for 600+ new students.</li>
                </ul>
              </div>
              <div className="w-full flex-[2] relative flex-shrink-0">
                <Carousel dots={false} images={['/images/experience/techno2024-1.jpg', '/images/experience/techno2024-2.jpg', '/images/experience/techno2024-3.jpg']} />
              </div>
            </div>

          </div>
          
          <button 
            className="w-full flex justify-between items-center py-4 px-6 border border-outline-variant hover:bg-surface-container transition-colors duration-300 mt-8" 
            onClick={() => setShowArchives(!showArchives)}
          >
            <span className="font-bold uppercase text-primary tracking-tight text-left">VIEW OTHER HIMTI ROLES & ARCHIVES</span>
            <span className="material-symbols-outlined text-primary transition-transform duration-300" style={{ transform: showArchives ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
          </button>
          
          {showArchives && (
            <div className="w-full border border-t-0 border-outline-variant p-6 bg-surface-container-lowest" id="himti-archives">
              <p className="font-body-md text-on-surface-variant">Archived roles and experiences will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
