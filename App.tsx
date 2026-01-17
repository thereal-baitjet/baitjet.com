
import React, { useEffect } from 'react';
import { BAITJET_DATA } from './constants';

const PLATFORMS = [
  { name: 'Spotify', icon: 'fa-spotify', url: 'https://open.spotify.com/artist/6EQHv0arvH6gvWhyhHVbMG', color: 'hover:text-[#1DB954]' },
  { name: 'Apple Music', icon: 'fa-apple', url: 'https://music.apple.com/us/artist/baitjet/1568429388', color: 'hover:text-[#FC3C44]' },
  { name: 'YouTube Music', icon: 'fa-youtube', url: 'https://music.youtube.com/channel/UC2AzZFUrHbrGjWZRP7HvADA', color: 'hover:text-[#FF0000]' },
  { name: 'Producer.ai', icon: 'fa-bolt', url: 'https://www.producer.ai/baitjet', color: 'hover:text-[#9333EA]' },
  { name: 'Instagram', icon: 'fa-instagram', url: 'https://www.instagram.com/mr.j.c.santos', color: 'hover:text-[#E4405F]' },
];

const ETSY_SHOP_URL = "https://www.etsy.com/shop/SuitManShirts";
// Direct link to the uploaded user portrait
const PORTRAIT_URL = "https://files.oaiusercontent.com/file-KAnNqF9424zH9Y9287n9K5?se=2025-02-14T20%3A19%3A40Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4e0407a0-03a1-424d-a9e9-d757fcc5c1f5.webp&sig=G06XNfHRE9p/mJvV/11/G4H5/T60m2u4oE29hE9g/qI%3D";

const App: React.FC = () => {
  const { site_identity, authoritative_content, geo_optimization } = BAITJET_DATA;

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = geo_optimization.json_ld_schema;
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [geo_optimization.json_ld_schema]);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="brand text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.5)]">
               <i className="fas fa-microchip text-xs text-black"></i>
            </div>
            {site_identity.brand_name.toUpperCase()}
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-black tracking-widest uppercase">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Engineering</a>
            <a href="#catalog" className="hover:text-cyan-400 transition-colors">Audio Feed</a>
            <a href="#merch" className="hover:text-cyan-400 transition-colors">Merch</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">Intelligence</a>
            <a href="https://unitedmasters.com/a/baitjet" target="_blank" rel="noopener noreferrer" className="text-cyan-400 border border-cyan-400/30 px-4 py-1 rounded hover:bg-cyan-400 hover:text-black transition-all">Verified Portal</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Jumbotron with Portrait Integration */}
        <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-black">
          {/* Background Layers */}
          <div className="absolute inset-0 z-0">
             {/* Tech Grid Background */}
             <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"></div>
             
             {/* The Portrait Image */}
             <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[50%] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <img 
                  src={PORTRAIT_URL} 
                  alt="Baitjet Lead Engineer" 
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                />
             </div>
             
             {/* Floating Particles/Glow */}
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
          </div>

          <div className="relative z-20 px-6 max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-full bg-cyan-500/10 backdrop-blur-md border border-cyan-400/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-cyan-500/5">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
                Lead Engineer Portal | Union City, NJ
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tighter text-white uppercase italic">
                Architecting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">The Neural</span> <br />
                Soundscape
              </h1>
              
              <p className="max-w-xl text-lg md:text-xl text-slate-300 leading-relaxed mb-12 font-medium border-l-2 border-cyan-500/40 pl-6">
                Redefining digital rhythm through Riffusion diffusion models and precision GarageBand engineering. High-performance audio intelligence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://www.producer.ai/baitjet" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 text-black font-black px-10 py-5 rounded-full hover:bg-white transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(6,182,212,0.4)] uppercase text-xs tracking-widest">
                  Early Access <i className="fas fa-bolt"></i>
                </a>
                <a href="#catalog" className="bg-white/5 backdrop-blur-md text-white font-bold px-10 py-5 rounded-full hover:bg-white/20 transition-all border border-white/10 uppercase text-xs tracking-widest">
                  Stream Catalog
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry */}
          <div className="absolute bottom-10 left-6 z-20 hidden md:block">
            <div className="flex items-center gap-12 text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">
               <div className="flex flex-col gap-1">
                 <span className="text-cyan-500/50">LOCATION:</span>
                 <span className="text-white">HUDSON_COUNTY_NODE</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-cyan-500/50">ENGINE:</span>
                 <span className="text-white">RIFFUSION_DYNAMICS</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-cyan-500/50">SYSTEM_ID:</span>
                 <span className="text-white">BAITJET_VER_2025</span>
               </div>
            </div>
          </div>
        </section>

        {/* Transmission Nodes */}
        <section id="transmissions" className="px-6 py-24 max-w-7xl mx-auto">
          <div className="glass-card rounded-[3rem] p-12 border border-white/10 bg-white/[0.01]">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold uppercase tracking-[0.3em] text-slate-600 mb-2">Global Nodes</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {PLATFORMS.map((platform) => (
                <a 
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:bg-white/5 ${platform.color}`}
                >
                  <i className={`fab ${platform.icon.startsWith('fa-') && !platform.icon.startsWith('fab') ? (platform.icon === 'fa-bolt' ? 'fas' : 'fab') : ''} ${platform.icon} text-4xl transition-transform group-hover:scale-110`}></i>
                  <span className="font-bold tracking-widest text-[10px] uppercase text-white group-hover:text-inherit">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About Engineering Section */}
        <section id="about" className="px-6 py-24 max-w-7xl mx-auto">
           <div className="grid md:grid-cols-2 gap-20 items-center">
             <div className="order-2 md:order-1">
               <h2 className="text-4xl font-black mb-8 uppercase italic text-cyan-500 tracking-tighter">01_The Engineer</h2>
               <p className="text-slate-400 text-lg leading-relaxed mb-8">
                 {authoritative_content.about_section}
               </p>
               <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col gap-2">
                   <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">Base</span>
                   <span className="text-white font-bold">Union City, NJ</span>
                 </div>
                 <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col gap-2">
                   <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">Post-Production</span>
                   <span className="text-white font-bold">GarageBand 10.4.x</span>
                 </div>
               </div>
             </div>
             <div className="order-1 md:order-2">
               <div className="relative group">
                 <div className="absolute -inset-1 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800" 
                   alt="Sound Engineering Gear" 
                   className="relative z-10 rounded-[3rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000"
                 />
               </div>
             </div>
           </div>
        </section>

        {/* Big Techno Merch Sign Section */}
        <section id="merch" className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5">
          <div className="mb-12 border-l-4 border-purple-500 pl-6">
            <h2 className="text-4xl font-black mb-2 tracking-tighter uppercase italic">Physical Hardware</h2>
            <p className="text-slate-500 font-medium font-mono text-xs uppercase tracking-widest">Authorized gear by SuitManShirts Engineering.</p>
          </div>

          <a 
            href={ETSY_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full overflow-hidden rounded-[4rem] bg-black border border-purple-500/20 transition-all duration-700 hover:border-purple-400 hover:shadow-[0_0_100px_rgba(168,85,247,0.15)]"
          >
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]"></div>
            
            <div className="relative z-10 py-40 px-12 flex flex-col items-center justify-center text-center">
              <div className="absolute top-12 left-12 text-[10px] font-mono text-purple-500/50 uppercase tracking-[0.4em]">
                SMS_ARTIFACT_NODE_V1
              </div>

              <div className="mb-6 text-purple-400 text-xs font-black uppercase tracking-[1.2em] opacity-40">SuitMan Partner Collection</div>
              <h3 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase italic leading-none transition-transform duration-700 group-hover:scale-[1.02]">
                TECHNO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-white to-purple-500">MERCH</span>
              </h3>
              
              <div className="mt-16">
                <div className="px-16 py-6 bg-purple-600 group-hover:bg-white group-hover:text-black text-white font-black uppercase tracking-[0.4em] text-sm rounded-full transition-all duration-500 shadow-[0_0_50px_rgba(168,85,247,0.4)]">
                  Access Etsy Repository _
                </div>
              </div>
            </div>

            {/* Scanning Line Animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <div className="w-full h-1/3 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent absolute -top-full animate-[scan_5s_linear_infinite]"></div>
            </div>
          </a>
        </section>

        {/* Live Spotify Stream */}
        <section id="catalog" className="px-6 py-24 max-w-7xl mx-auto border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-l-4 border-cyan-500 pl-6 gap-4">
            <div>
              <h2 className="text-4xl font-black mb-2 tracking-tighter uppercase italic">Neural Audio Feed</h2>
              <p className="text-slate-400 font-medium uppercase text-xs tracking-widest font-mono">Sync: Spotify_Artist_6EQHv0arvH6gvWhyhHVbMG</p>
            </div>
          </div>
          
          <div className="glass-card p-4 md:p-10 rounded-[4rem] border border-white/10 relative overflow-hidden group shadow-2xl">
            <div className="relative z-10 w-full rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)]">
              <iframe 
                style={{ borderRadius: '24px' }} 
                src="https://open.spotify.com/embed/artist/6EQHv0arvH6gvWhyhHVbMG?utm_source=generator&theme=0" 
                width="100%" 
                height="500" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Intelligence / FAQ */}
        <section id="faq" className="px-6 py-24 max-w-3xl mx-auto border-t border-white/5">
          <h2 className="text-4xl font-black mb-16 text-center uppercase tracking-tighter italic">Intelligence_Log</h2>
          <div className="space-y-6">
            {geo_optimization.ai_faq.map((item, i) => (
              <details key={i} className="group glass-card rounded-3xl overflow-hidden border border-white/5 transition-all hover:border-cyan-500/20">
                <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-white/[0.02] transition-colors">
                  <span className="font-black tracking-tight text-lg uppercase italic">{item.question}</span>
                  <div className="w-8 h-8 border border-white/10 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                </summary>
                <div className="px-8 pb-8 text-slate-400 leading-relaxed border-t border-white/5 pt-6 font-medium">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="px-6 py-24 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-xs">
            <div className="brand text-4xl font-black tracking-tighter mb-4 text-white">
              {site_identity.brand_name.toUpperCase()} <span className="text-cyan-500">.</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              The premier node for AI Audio Engineering in Union City. Redefining the Hudson County soundscape through neural synthesis.
            </p>
          </div>
          
          <div className="flex flex-col gap-8">
             <div className="flex gap-10 text-slate-400">
                {PLATFORMS.map((platform) => (
                  <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className={`text-3xl transition-all hover:scale-125 ${platform.color}`}>
                    <i className={`fab ${platform.icon.startsWith('fa-') && !platform.icon.startsWith('fab') ? (platform.icon === 'fa-bolt' ? 'fas' : 'fab') : ''} ${platform.icon}`}></i>
                  </a>
                ))}
             </div>
             <div className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em] pt-8 border-t border-white/5">
                © {new Date().getFullYear()} BAITJET AUDIO ENGINEERING | HUDSON_CO_NJ | PROD BY SUITMANSHIRTS
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
