import React from 'react';

const Capabilities = () => {
  return (
    <section className="py-section-gap px-container-padding border-b border-outline-variant bg-surface" id="capabilities">
      <div className="col-span-full flex justify-center mb-24">
        <h2 className="font-black leading-none text-center uppercase tracking-tighter fade-up title-hover-effect cursor-default text-[6vw]">CAPABILITIES</h2>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: PROGRAMMING */}
        <div className="flex flex-col">
          <h3 className="font-black text-4xl leading-[0.9] tracking-tighter uppercase mb-12">PROGRAMMING</h3>
          <ul className="space-y-6">
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">terminal</span></div><span className="font-bold uppercase tracking-tight text-xl">C / C++</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">code</span></div><span className="font-bold uppercase tracking-tight text-xl">PYTHON</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">database</span></div><span className="font-bold uppercase tracking-tight text-xl">SQL</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">html</span></div><span className="font-bold uppercase tracking-tight text-xl">HTML</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">css</span></div><span className="font-bold uppercase tracking-tight text-xl">CSS</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">bar_chart</span></div><span className="font-bold uppercase tracking-tight text-xl">R</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">javascript</span></div><span className="font-bold uppercase tracking-tight text-xl">JAVASCRIPT (EXPLORING)</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">coffee</span></div><span className="font-bold uppercase tracking-tight text-xl">JAVA (EXPLORING)</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">app_shortcut</span></div><span className="font-bold uppercase tracking-tight text-xl">FLUTTER (EXPLORING)</span></li>
          </ul>
        </div>
        {/* Column 2: TOOLS */}
        <div className="flex flex-col">
          <h3 className="font-black text-4xl leading-[0.9] tracking-tighter uppercase mb-12">TOOLS</h3>
          <ul className="space-y-6">
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">code_blocks</span></div><span className="font-bold uppercase tracking-tight text-xl">VISUAL STUDIO CODE</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">terminal</span></div><span className="font-bold uppercase tracking-tight text-xl">GITHUB</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">draw</span></div><span className="font-bold uppercase tracking-tight text-xl">FIGMA</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">cloud</span></div><span className="font-bold uppercase tracking-tight text-xl">GOOGLE COLAB</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">developer_mode</span></div><span className="font-bold uppercase tracking-tight text-xl">CODEBLOCK / DEVC++</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">database</span></div><span className="font-bold uppercase tracking-tight text-xl">MYSQL WORKBENCH</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">laptop_chromebook</span></div><span className="font-bold uppercase tracking-tight text-xl">ECLIPSE FOR JAVA</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">analytics</span></div><span className="font-bold uppercase tracking-tight text-xl">RSTUDIO</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">model_training</span></div><span className="font-bold uppercase tracking-tight text-xl">RAPIDMINER</span></li>
          </ul>
        </div>
        {/* Column 3: SOFTWARE */}
        <div className="flex flex-col">
          <h3 className="font-black text-4xl leading-[0.9] tracking-tighter uppercase mb-12">SOFTWARE</h3>
          <ul className="space-y-6">
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">description</span></div><span className="font-bold uppercase tracking-tight text-xl">MICROSOFT OFFICE SUITE</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">cloud</span></div><span className="font-bold uppercase tracking-tight text-xl">GOOGLE WORKSPACE</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">forum</span></div><span className="font-bold uppercase tracking-tight text-xl">DISCORD</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">videocam</span></div><span className="font-bold uppercase tracking-tight text-xl">ZOOM</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">palette</span></div><span className="font-bold uppercase tracking-tight text-xl">CANVA</span></li>
            <li className="flex items-center gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-white">book</span></div><span className="font-bold uppercase tracking-tight text-xl">NOTION</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
