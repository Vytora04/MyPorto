import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const SelectedWorks = () => {
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (!previewImage) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setPreviewImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewImage]);

  const openPreview = (src, title) => {
    setPreviewImage({ src, title });
  };

  return (
    <section className="pt-8 pb-section-gap px-container-padding bg-surface scroll-mt-24" id="selected-works">
      <div className="col-span-full flex justify-center mb-12 md:mb-24">
        <h2 className="font-black leading-none text-center uppercase tracking-tighter fade-up title-hover-effect cursor-default text-[clamp(2rem,6vw,5.5rem)]">SELECTED WORKS</h2>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Highlighted Card */}
        <div className="sm:col-span-2 lg:col-span-3 bg-surface-container-lowest border-2 border-academic-sage/50 flex flex-col lg:flex-row rounded-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 reveal reveal-up p-6 sm:p-8 gap-6 md:gap-8 items-start lg:items-center justify-between">
          {/* Left: Publication Figure Thumbnail */}
          <div
            className="w-full sm:w-44 lg:w-48 aspect-square rounded-xl overflow-hidden border border-outline-variant/60 flex-shrink-0 relative group/pubimg cursor-zoom-in self-center lg:self-auto"
            onClick={() => openPreview('/images/project/project_dp.png', 'Optimizing Differential Privacy for Effective Machine Learning-Based Financial Fraud Detection')}
            title="Click to view full figure"
          >
            <img
              src="/images/project/project_dp.png"
              alt="Differential Privacy Financial Fraud Detection"
              className="w-full h-full object-cover group-hover/pubimg:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/pubimg:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined text-[15px]">open_in_full</span>
            </div>
          </div>

          {/* Middle: Publication Details */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-academic-sage text-white text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">menu_book</span> Highlighted Publication
              </span>
              <span className="text-xs text-academic-sage font-bold uppercase tracking-wide">IEEE ICoDSE 2025</span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-ghibli-dark tracking-tight mb-2 leading-tight">
              Optimizing Differential Privacy for Effective Machine Learning-Based Financial Fraud Detection
            </h3>
            <p className="text-xs text-gray-500 font-medium mb-3">
              By <span className="font-bold text-gray-700">Kevin Fujianto</span>, <span className="font-bold text-academic-sage underline decoration-wavy">Fahimsyach Lokanta</span>, <span className="font-bold text-gray-700">Henry Lucky</span>, and <span className="font-bold text-gray-700">Derwin Suhartono</span>
            </p>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed max-w-4xl">
              Optimizes differential privacy (DP) in financial fraud detection, balancing compliance (GDPR/CCPA) with machine learning model accuracy.
            </p>
          </div>
          
          {/* Right: Tags & Action Links */}
          <div className="w-full lg:w-auto flex flex-col gap-3 md:gap-4 min-w-[220px] border-t lg:border-t-0 lg:border-l border-outline-variant pt-5 lg:pt-0 lg:pl-8">
            <div className="flex flex-wrap gap-1.5 mb-1">
              <span className="px-2.5 py-0.5 bg-purple-50 text-purple-700 border border-purple-200 text-[10px] font-bold uppercase rounded-full">Differential Privacy</span>
              <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold uppercase rounded-full">Machine Learning</span>
              <span className="px-2.5 py-0.5 bg-red-50 text-red-700 border border-red-200 text-[10px] font-bold uppercase rounded-full">Fraud Detection</span>
            </div>
            <a className="w-full py-2.5 px-4 bg-academic-sage hover:bg-academic-sage/90 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2" href="https://doi.org/10.1109/ICoDSE68111.2025.11351709" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-[16px]">menu_book</span> IEEE Xplore (DOI)
            </a>
            <a className="w-full py-2.5 px-4 border border-outline hover:bg-surface-container text-primary rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2" href="https://www.semanticscholar.org/paper/Optimizing-Differential-Privacy-for-Effective-Fraud-Fujianto-Lokanta/e5565bc8ac4131df8a8bef493e02a2f8db7306ea" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-[16px]">school</span> Semantic Scholar
            </a>
          </div>
        </div>

        {/* Card 1 */}
        <div className="bg-surface-container-lowest border border-outline-variant flex flex-col rounded-b-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 reveal reveal-up">
          <div
            className="relative w-full aspect-video border-b border-outline-variant overflow-hidden group/projimg cursor-zoom-in"
            onClick={() => openPreview('/images/project/project1.png', 'SkillBridge')}
            title="Click to view full image"
          >
            <img alt="SkillBridge" className="w-full h-full object-cover group-hover/projimg:scale-105 transition-transform duration-500" src="/images/project/project1.png" loading="lazy" decoding="async" />
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/45 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/projimg:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined text-[16px]">open_in_full</span>
            </div>
          </div>
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
            <div className="flex flex-wrap gap-4 pt-4 border-t border-outline-variant">
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://github.com/Vytora04/SkillBridge" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">code</span> CODE</a>
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://binusianorg-my.sharepoint.com/personal/fahimsyach_lokanta_binus_ac_id/_layouts/15/guestaccess.aspx?share=IQA86RsyaWxGQ5JCEgeKMWVYAY4mWfxKqwDG9uzMJV0TfP4&e=bRsMUX" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">description</span> DOCUMENTATION</a>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-surface-container-lowest border border-outline-variant flex flex-col rounded-b-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 reveal reveal-up">
          <div
            className="relative w-full aspect-video border-b border-outline-variant overflow-hidden group/projimg cursor-zoom-in"
            onClick={() => openPreview('/images/project/project2.png', 'SMARTNEWSSUMM')}
            title="Click to view full image"
          >
            <img alt="SMARTNEWSSUMM" className="w-full h-full object-cover group-hover/projimg:scale-105 transition-transform duration-500" src="/images/project/project2.png" loading="lazy" decoding="async" />
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/45 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/projimg:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined text-[16px]">open_in_full</span>
            </div>
          </div>
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
            <div className="flex flex-wrap gap-4 pt-4 border-t border-outline-variant">
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://github.com/Vytora04/SmartNewsSumm" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">code</span> CODE</a>
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://binusianorg-my.sharepoint.com/personal/fahimsyach_lokanta_binus_ac_id/_layouts/15/guestaccess.aspx?share=IQCM72BQs4xqTrzePGOfhhdZAfqCaFIzXzScqQRRTIeExEk&e=nmeg7h" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">description</span> DOCUMENTATION</a>
            </div>
          </div>
        </div>
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
            <div className="flex flex-wrap gap-4 pt-4 border-t border-outline-variant">
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://github.com/Vytora04/QuizOn" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">code</span> CODE</a>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-surface-container-lowest border border-outline-variant flex flex-col rounded-b-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 reveal reveal-up">
          <div
            className="relative w-full aspect-video border-b border-outline-variant overflow-hidden group/projimg cursor-zoom-in"
            onClick={() => openPreview('/images/project/project4.png', 'DIAGNOSIFY')}
            title="Click to view full image"
          >
            <img alt="DIAGNOSIFY" className="w-full h-full object-cover group-hover/projimg:scale-105 transition-transform duration-500" src="/images/project/project4.png" loading="lazy" decoding="async" />
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/45 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/projimg:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined text-[16px]">open_in_full</span>
            </div>
          </div>
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
            <div className="flex flex-wrap gap-4 pt-4 border-t border-outline-variant">
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://github.com/Vytora04/Diagnosify" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">code</span> CODE</a>
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://diagnosify-inky.vercel.app" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">open_in_new</span> LIVE DEMO (FRONTEND only)</a>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="bg-surface-container-lowest border border-outline-variant flex flex-col rounded-b-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 reveal reveal-up">
          <div
            className="relative w-full aspect-video border-b border-outline-variant overflow-hidden group/projimg cursor-zoom-in"
            onClick={() => openPreview('/images/project/project5.png', 'LAPORCERDAS')}
            title="Click to view full image"
          >
            <img alt="LAPORCERDAS" className="w-full h-full object-cover group-hover/projimg:scale-105 transition-transform duration-500" src="/images/project/project5.png" loading="lazy" decoding="async" />
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/45 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/projimg:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined text-[16px]">open_in_full</span>
            </div>
          </div>
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
            <div className="flex flex-wrap gap-4 pt-4 border-t border-outline-variant">
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://github.com/Vytora04/LaporCerdas" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">code</span> CODE</a>
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://vytora04.github.io/LaporCerdas/" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">open_in_new</span> LIVE DEMO (Frontend Only)</a>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="bg-surface-container-lowest border border-outline-variant flex flex-col rounded-b-[1.25rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 reveal reveal-up">
          <div
            className="relative w-full aspect-video border-b border-outline-variant overflow-hidden group/projimg cursor-zoom-in"
            onClick={() => openPreview('/images/project/project6.jpg', 'SIGMARIZZ')}
            title="Click to view full image"
          >
            <img alt="SIGMARIZZ" className="w-full h-full object-cover group-hover/projimg:scale-105 transition-transform duration-500" src="/images/project/project6.jpg" loading="lazy" decoding="async" />
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/45 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/projimg:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined text-[16px]">open_in_full</span>
            </div>
          </div>
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
            <div className="flex flex-wrap gap-4 pt-4 border-t border-outline-variant">
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://github.com/Vytora04/SigmaRizz" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">code</span> CODE</a>
              <a className="flex items-center gap-1 text-sm font-bold uppercase text-primary hover:text-outline transition-colors" href="https://vytora.notion.site/sigmarizz-dba?pvs=74" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">description</span> DOCUMENTATION</a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal for Project Screenshots */}
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

export default SelectedWorks;
