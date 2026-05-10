import React from 'react';

const SelectedWorks = () => {
  return (
    <section className="py-section-gap px-container-padding bg-surface scroll-mt-24" id="selected-works">
      <div className="col-span-full flex justify-center mb-24">
        <h2 className="font-black leading-none text-center uppercase tracking-tighter fade-up title-hover-effect cursor-default text-[6vw]">SELECTED WORKS</h2>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-surface-container-lowest border border-outline-variant flex flex-col rounded-b-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 reveal reveal-up">
          <img alt="SkillBridge" className="w-full aspect-video object-cover border-b border-outline-variant" src="/images/project/project1.png" />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-primary uppercase tracking-tight mb-2">SkillBridge</h3>
            <p className="font-body-md text-on-surface-variant mb-6 flex-grow">Connect with non-profits to share skills, collaborate on projects, and match talent with meaningful opportunities.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-red-100 text-red-800 border border-red-200 text-xs font-bold uppercase rounded-full">Laravel (Blade)</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 border border-indigo-200 text-xs font-bold uppercase rounded-full">PHP</span>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 border border-cyan-200 text-xs font-bold uppercase rounded-full">Tailwind CSS</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 border border-purple-200 text-xs font-bold uppercase rounded-full">Vite</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 border border-yellow-200 text-xs font-bold uppercase rounded-full">JavaScript</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold uppercase rounded-full">MySQL</span>
            </div>
            <div className="flex gap-4 pt-4 border-t border-outline-variant">
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://github.com/Vytora04/SkillBridge" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">code</span> CODE</a>
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://binusianorg-my.sharepoint.com/personal/fahimsyach_lokanta_binus_ac_id/_layouts/15/guestaccess.aspx?share=IQA86RsyaWxGQ5JCEgeKMWVYAY4mWfxKqwDG9uzMJV0TfP4&e=bRsMUX" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">description</span> DOCUMENTATION</a>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-surface-container-lowest border border-outline-variant flex flex-col rounded-b-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 reveal reveal-up">
          <img alt="SMARTNEWSSUMM" className="w-full aspect-video object-cover border-b border-outline-variant" src="/images/project/project2.png" />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-primary uppercase tracking-tight mb-2">SMARTNEWSSUMM</h3>
            <p className="font-body-md text-on-surface-variant mb-6 flex-grow">Generates clear, concise news summaries using a hybrid approach with retrieval support to ensure context and accuracy.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 border border-yellow-200 text-xs font-bold uppercase rounded-full">PYTHON</span>
              <span className="px-3 py-1 bg-teal-100 text-teal-800 border border-teal-200 text-xs font-bold uppercase rounded-full">FASTAPI</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 border border-red-200 text-xs font-bold uppercase rounded-full">STREAMLIT</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 border border-orange-200 text-xs font-bold uppercase rounded-full">PYTORCH</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold uppercase rounded-full">TRANSFORMERS</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 border border-purple-200 text-xs font-bold uppercase rounded-full">PEFT (LORA)</span>
            </div>
            <div className="flex gap-4 pt-4 border-t border-outline-variant">
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://github.com/Vytora04/SmartNewsSumm" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">code</span> CODE</a>
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://binusianorg-my.sharepoint.com/personal/fahimsyach_lokanta_binus_ac_id/_layouts/15/guestaccess.aspx?share=IQCM72BQs4xqTrzePGOfhhdZAfqCaFIzXzScqQRRTIeExEk&e=nmeg7h" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">description</span> DOCUMENTATION</a>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        {/* Card 3 */}
        <div className="bg-surface-container-lowest border border-outline-variant flex flex-col rounded-b-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 reveal reveal-up">
          {/* image coming soon */}
          <div className="w-full aspect-video bg-surface-container-high border-b border-outline-variant flex items-center justify-center">
            <span className="text-on-surface-variant font-bold text-sm uppercase">Image Coming Soon</span>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-primary uppercase tracking-tight mb-2">QUIZON</h3>
            <p className="font-body-md text-on-surface-variant mb-6 flex-grow">Interactive mobile quiz app for Indonesian users to test and grow knowledge across categories with smooth gameplay.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold uppercase rounded-full">FLUTTER (DART)</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 border border-yellow-200 text-xs font-bold uppercase rounded-full">FIREBASE AUTH</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 border border-purple-200 text-xs font-bold uppercase rounded-full">SHARED PREFERENCES</span>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 border border-cyan-200 text-xs font-bold uppercase rounded-full">GOOGLE FONTS</span>
            </div>
            <div className="flex gap-4 pt-4 border-t border-outline-variant">
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://github.com/Vytora04/QuizOn" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">code</span> CODE</a>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-surface-container-lowest border border-outline-variant flex flex-col rounded-b-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 reveal reveal-up">
          <img alt="DIAGNOSIFY" className="w-full aspect-video object-cover border-b border-outline-variant" src="/images/project/project4.png" />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-primary uppercase tracking-tight mb-2">DIAGNOSIFY</h3>
            <p className="font-body-md text-on-surface-variant mb-6 flex-grow">Enables disease risk prediction using trained machine-learning models, with support for uploading custom datasets.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold uppercase rounded-full">TYPESCRIPT</span>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 border border-cyan-200 text-xs font-bold uppercase rounded-full">REACT</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 border border-purple-200 text-xs font-bold uppercase rounded-full">VITE</span>
              <span className="px-3 py-1 bg-teal-100 text-teal-800 border border-teal-200 text-xs font-bold uppercase rounded-full">TAILWIND CSS</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 border border-yellow-200 text-xs font-bold uppercase rounded-full">PYTHON</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 border border-gray-200 text-xs font-bold uppercase rounded-full">FLASK</span>
            </div>
            <div className="flex gap-4 pt-4 border-t border-outline-variant">
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://github.com/Vytora04/Diagnosify" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">code</span> CODE</a>
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://diagnosify-inky.vercel.app" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">open_in_new</span> LIVE DEMO (FRONTEND only)</a>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="bg-surface-container-lowest border border-outline-variant flex flex-col rounded-b-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 reveal reveal-up">
          <img alt="LAPORCERDAS" className="w-full aspect-video object-cover border-b border-outline-variant" src="/images/project/project5.png" />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-primary uppercase tracking-tight mb-2">LAPORCERDAS</h3>
            <p className="font-body-md text-on-surface-variant mb-6 flex-grow">Community reporting app to submit public-service complaints, track report status, view history, and provide feedback.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-red-100 text-red-800 border border-red-200 text-xs font-bold uppercase rounded-full">HTML</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 border border-indigo-200 text-xs font-bold uppercase rounded-full">CSS</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 border border-yellow-200 text-xs font-bold uppercase rounded-full">JAVASCRIPT</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold uppercase rounded-full">PYTHON</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 border border-orange-200 text-xs font-bold uppercase rounded-full">JUPYTER / COLAB</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 border border-purple-200 text-xs font-bold uppercase rounded-full">FIGMA</span>
            </div>
            <div className="flex gap-4 pt-4 border-t border-outline-variant">
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://github.com/Vytora04/LaporCerdas" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">code</span> CODE</a>
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://vytora04.github.io/LaporCerdas/" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">open_in_new</span> LIVE DEMO (Frontend Only)</a>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="bg-surface-container-lowest border border-outline-variant flex flex-col rounded-b-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 reveal reveal-up">
          <img alt="SIGMARIZZ" className="w-full aspect-video object-cover border-b border-outline-variant" src="/images/project/project6.jpg" />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-primary uppercase tracking-tight mb-2">SIGMARIZZ</h3>
            <p className="font-body-md text-on-surface-variant mb-6 flex-grow">Library database project focusing on schema design, SQL queries, and core DBMS concepts like indexing and optimization.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold uppercase rounded-full">SQL</span>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 border border-cyan-200 text-xs font-bold uppercase rounded-full">MYSQL</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 border border-indigo-200 text-xs font-bold uppercase rounded-full">MYSQL WORKBENCH</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 border border-purple-200 text-xs font-bold uppercase rounded-full">DATABASE DESIGN</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 border border-orange-200 text-xs font-bold uppercase rounded-full">ERD / DIAGRAMS</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 border border-yellow-200 text-xs font-bold uppercase rounded-full">DRAW.IO</span>
            </div>
            <div className="flex gap-4 pt-4 border-t border-outline-variant">
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://github.com/Vytora04/SigmaRizz" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">code</span> CODE</a>
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://vytora.notion.site/sigmarizz-dba?pvs=74" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">description</span> DOCUMENTATION</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
