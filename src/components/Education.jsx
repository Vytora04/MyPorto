import React from 'react';

const Education = () => {
  return (
    <section className="py-section-gap px-container-padding border-b border-outline-variant bg-surface">
      <div className="col-span-full flex justify-center mb-24">
        <h2 className="font-black leading-none text-center uppercase tracking-tighter fade-up title-hover-effect cursor-default text-[6vw]">ACADEMIC HISTORY</h2>
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col gap-16">
        {/* Block 1 */}
        <div className="flex flex-col items-start max-w-4xl">
          <h2 className="font-black text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-tighter uppercase text-primary mb-4">Universiti Malaya</h2>
          <h3 className="font-headline-md text-academic-sage uppercase mb-12">Undergraduate Exchange Programme (Inbound) | March 2026 - Present</h3>
          <ul className="space-y-4 font-body-lg text-on-surface-variant text-left list-none pl-0">
            <li className="flex items-start"><span className="mr-4 text-academic-sage">•</span> Part of the Long-Term Mobility Programme (Semester Exchange) inbound to Malaysia.</li>
            <li className="flex items-start"><span className="mr-4 text-academic-sage">•</span> Enrolled in the Faculty of Computer Science and Information Technology.</li>
            <li className="flex items-start"><span className="mr-4 text-academic-sage">•</span> Focusing on specialized coursework and international academic collaboration.</li>
          </ul>
        </div>
        {/* Block 2 */}
        <div className="flex flex-col items-start max-w-4xl">
          <h2 className="font-black text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-tighter uppercase text-primary mb-4">BINUS University @Alam Sutera</h2>
          <h3 className="font-headline-md text-academic-sage uppercase mb-12">Computer Science (Global Class) | September 2023 - Present</h3>
          <ul className="space-y-4 font-body-lg text-on-surface-variant text-left list-none pl-0">
            <li className="flex items-start"><span className="mr-4 text-academic-sage">•</span> Core academic focus: Algorithm and Programming, Database Systems, and Software Engineering.</li>
            <li className="flex items-start"><span className="mr-4 text-academic-sage">•</span> Advanced research and practical interests in AI, Machine Learning, and NLP.</li>
            <li className="flex items-start"><span className="mr-4 text-academic-sage">•</span> Actively engaged in student leadership and spiritual development through HIMTI and KMB.</li>
          </ul>
        </div>
        {/* Block 3 */}
        <div className="flex flex-col items-start max-w-4xl">
          <h2 className="font-black text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-tighter uppercase text-primary mb-4">PENABUR Gading Serpong Senior High School</h2>
          <h3 className="font-headline-md text-academic-sage uppercase mb-12">Natural Sciences | July 2020 - May 2023</h3>
          <ul className="space-y-4 font-body-lg text-on-surface-variant text-left list-none pl-0">
            <li className="flex items-start"><span className="mr-4 text-academic-sage">•</span> Specialized academic focus in Mathematics, Physics, and Informatics.</li>
            <li className="flex items-start"><span className="mr-4 text-academic-sage">•</span> Developed competitive logic skills through Programming Club and cultural exchange in Japanese Club.</li>
            <li className="flex items-start"><span className="mr-4 text-academic-sage">•</span> Achieved Bebras Computational Thinking Challenge recognition.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
