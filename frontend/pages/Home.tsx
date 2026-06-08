import React from 'react';
import { Link } from 'react-router-dom';
import { FESTIVALS } from '../constants';
import { MapPin, Calendar, ChevronRight, RadioReceiver } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pb-36 pt-14 px-6 relative overflow-hidden">
      {/* Deep Ethereal Ambient Glows (Neural Wave Vibe) */}
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-villan-purple/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-breathe"></div>
      <div className="absolute bottom-[10%] right-[-20%] w-[80vw] h-[80vw] bg-villan-accent/15 blur-[130px] rounded-full pointer-events-none mix-blend-screen animate-breathe" style={{ animationDelay: '2s' }}></div>
      
      {/* Neural Wave SVG Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,200 C150,300 200,50 500,150 S800,300 1000,100" fill="none" stroke="#00f0ff" strokeWidth="2" className="neural-path" filter="drop-shadow(0 0 8px #00f0ff)"/>
        <path d="M-100,250 C100,100 300,400 600,200 S900,50 1000,250" fill="none" stroke="#9d00ff" strokeWidth="2" className="neural-path" style={{animationDelay: '1s'}} filter="drop-shadow(0 0 8px #9d00ff)"/>
      </svg>

      <header className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium mb-6 border-villan-purple/30 shadow-[0_0_20px_rgba(157,0,255,0.2)]">
          <RadioReceiver size={14} className="text-villan-accent animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-iridescent uppercase">Frequencies Aligned</span>
        </div>
        <h1 className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 drop-shadow-2xl leading-none">
          FESTi<br/><span className="text-iridescent">Villan</span>
        </h1>
        <p className="text-gray-300 mt-4 font-medium text-sm max-w-[280px] leading-relaxed border-l-2 border-villan-purple/50 pl-4">
          Harmonize your journey. Tune into the collective consciousness of the festival.
        </p>
      </header>

      <div className="space-y-6 relative z-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-villan-accent animate-pulse shadow-[0_0_10px_rgba(0,240,255,1)]"></span>
            Active Resonances
          </h2>
        </div>
        
        <div className="grid gap-8">
          {FESTIVALS.map((fest) => (
            <Link 
              key={fest.id} 
              to={`/festival/${fest.id}`}
              className="group block cyber-tarot overflow-hidden active:scale-[0.97] transition-all duration-500"
            >
              <div className="h-56 w-full relative overflow-hidden rounded-t-[1.4rem]">
                {/* Cyber Tarot Halo Effect (Image 1 & 2 style) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-[4px] border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 animate-spin-slow" style={{ background: 'linear-gradient(#05000a, #05000a) padding-box, linear-gradient(to right, #ff007f, #00f0ff) border-box' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-villan-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

                <div className="absolute inset-0 bg-villan-darker/60 z-10 group-hover:bg-villan-darker/30 transition-colors duration-700 mix-blend-multiply"></div>
                <img 
                  src={fest.imageUrl} 
                  alt={fest.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000 ease-out filter group-hover:contrast-125 group-hover:saturate-150" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05000a] via-[#05000a]/60 to-transparent z-10"></div>
                
                <div className="absolute bottom-5 left-6 z-20 pr-6">
                  <h3 className="text-2xl font-black text-white tracking-tight drop-shadow-lg leading-tight group-hover:text-glow-accent transition-all">{fest.name}</h3>
                </div>
                
                {fest.status === 'Active' && (
                  <div className="absolute top-5 right-5 z-20 glass-premium bg-villan-danger/10 border-villan-danger/50 text-villan-danger text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(255,0,127,0.5)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-villan-danger animate-pulse"></span>
                    FLOWING
                  </div>
                )}
              </div>
              
              <div className="p-6 flex justify-between items-center bg-[#05000a] relative z-20 rounded-b-[1.4rem]">
                <div className="space-y-2.5">
                  <div className="flex items-center text-xs font-medium text-gray-300 tracking-wide">
                    <MapPin size={14} className="mr-2.5 text-villan-accent" /> {fest.location}
                  </div>
                  <div className="flex items-center text-xs font-medium text-gray-300 tracking-wide">
                    <Calendar size={14} className="mr-2.5 text-villan-purple" /> {fest.dates}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full glass-premium flex items-center justify-center group-hover:bg-iridescent group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <ChevronRight size={20} strokeWidth={2.5} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
