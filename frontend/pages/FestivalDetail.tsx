import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FESTIVALS } from '../constants';
import { ArrowLeft, CloudSun, Ticket, Users, Waves, MessageSquare, Sparkles } from 'lucide-react';
import { generateSurvivalGuide } from '../services/geminiService';

const FestivalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const festival = FESTIVALS.find(f => f.id === id);
  
  const [activeTab, setActiveTab] = useState<'info' | 'lineup' | 'prep'>('info');
  const [survivalGuide, setSurvivalGuide] = useState<string>('');
  const [isLoadingGuide, setIsLoadingGuide] = useState(false);

  useEffect(() => {
    if (activeTab === 'prep' && !survivalGuide && festival) {
      setIsLoadingGuide(true);
      generateSurvivalGuide(festival.name).then(guide => {
        setSurvivalGuide(guide);
        setIsLoadingGuide(false);
      });
    }
  }, [activeTab, festival, survivalGuide]);

  if (!festival) {
    return <div className="p-8 text-center font-bold text-villan-danger text-glow-danger text-xl mt-20">The connection is lost in the void.</div>;
  }

  return (
    <div className="min-h-screen pb-36 bg-villan-darker">
      {/* Immersive Hero with Cyber Tarot Halo (Image 1 style) */}
      <div className="relative h-[45vh] w-full overflow-hidden rounded-b-[2.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.8)]">
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-8 left-6 z-40 p-3 glass-premium rounded-full text-white hover:bg-white/10 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        
        {/* Glowing Halo */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-[6px] border-transparent z-10 animate-spin-slow" style={{ background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)) padding-box, linear-gradient(to right, #ff007f, #00f0ff) border-box' }}></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-villan-accent/30 blur-2xl z-10 animate-pulse"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-villan-purple/30 to-villan-accent/20 mix-blend-overlay z-10 animate-breathe"></div>
        
        <img 
          src={festival.imageUrl} 
          alt={festival.name} 
          className="w-full h-full object-cover opacity-60 scale-105 animate-float filter contrast-125 saturate-150" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-villan-darker via-villan-darker/60 to-transparent z-20"></div>
        
        <div className="absolute bottom-8 left-6 right-6 z-30">
          <div className="flex gap-3 mb-4">
            <span className="px-3 py-1.5 glass-premium rounded-full text-[9px] font-bold text-villan-accent uppercase tracking-[0.2em] border-villan-accent/30">
              {festival.dates}
            </span>
            {festival.status === 'Active' && (
              <span className="px-3 py-1.5 bg-villan-danger/20 text-villan-danger border border-villan-danger/50 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(255,0,127,0.4)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-villan-danger rounded-full animate-pulse"></span>
                FLOWING
              </span>
            )}
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter leading-[1.1] drop-shadow-2xl">
            {festival.name}
          </h1>
        </div>
      </div>

      {/* Action Bar - Ethereal Button */}
      <div className="px-6 -mt-6 relative z-40">
        <Link 
          to={`/live/${festival.id}`}
          className="w-full relative group overflow-hidden bg-iridescent text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_30px_rgba(157,0,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] hover:-translate-y-1 border border-white/20"
        >
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Waves size={24} className="animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          <span className="tracking-widest text-lg drop-shadow-md">SYNC FREQUENCIES</span>
        </Link>
      </div>

      {/* Premium Glass Tabs */}
      <div className="px-6 mt-8">
        <div className="flex p-1.5 glass-premium rounded-2xl">
          {(['info', 'lineup', 'prep'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]' 
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab === 'prep' ? 'Visions' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'info' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-gray-300 leading-relaxed text-sm font-medium glass-panel p-5 rounded-2xl">{festival.description}</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-premium p-5 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-villan-accent/10 blur-xl rounded-full"></div>
                <Ticket className="text-villan-accent mb-3 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" size={24} />
                <div className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Energy Exchange</div>
                <div className="font-bold mt-1.5 text-sm text-white">{festival.pricing}</div>
              </div>
              <div className="glass-premium p-5 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-villan-warning/10 blur-xl rounded-full"></div>
                <CloudSun className="text-villan-warning mb-3 drop-shadow-[0_0_8px_rgba(255,170,0,0.5)]" size={24} />
                <div className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Atmosphere</div>
                <div className="font-bold mt-1.5 text-sm text-white">Sunny, 85°F</div>
              </div>
            </div>

            <div className="glass-premium rounded-2xl p-5 flex items-center justify-between group cursor-pointer hover:border-villan-purple/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-villan-purple/10 rounded-xl text-villan-purple group-hover:scale-110 transition-transform shadow-[inset_0_0_10px_rgba(157,0,255,0.2)]">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">Collective Whisper</div>
                  <div className="text-[10px] text-villan-purple mt-1">342 SOULS RESONATING</div>
                </div>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-lg text-[10px] font-bold uppercase tracking-widest group-hover:bg-villan-purple/20 group-hover:text-white transition-colors border border-white/5">
                Tune In
              </div>
            </div>
          </div>
        )}

        {activeTab === 'lineup' && (
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-5">
              <Users size={18} className="text-villan-accent" />
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Sonic Guides</h3>
            </div>
            {festival.lineup.map((artist, idx) => (
              <div key={idx} className="glass-premium p-5 rounded-xl flex items-center justify-between hover:border-villan-accent/40 transition-colors cursor-default group">
                <span className="font-bold text-lg tracking-tight text-gray-200 group-hover:text-white transition-colors">{artist}</span>
                <div className="w-2 h-2 rounded-full bg-villan-surface group-hover:bg-villan-accent group-hover:shadow-[0_0_10px_rgba(0,240,255,0.8)] transition-all"></div>
              </div>
            ))}
            <button className="w-full py-4 mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-villan-accent border border-villan-accent/30 rounded-xl hover:bg-villan-accent/10 transition-colors shadow-[inset_0_0_20px_rgba(0,240,255,0.05)]">
              Reveal Full Journey
            </button>
          </div>
        )}

        {activeTab === 'prep' && (
          <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Pastel Waves Background (Image 8 style) */}
            <div className="relative overflow-hidden bg-pastel-waves p-6 rounded-2xl border border-villan-purple/30 shadow-[0_0_30px_rgba(157,0,255,0.1),inset_0_0_20px_rgba(255,255,255,0.05)]">
              
              {/* SVG Wavy Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="#fff" strokeWidth="0.5" className="animate-flow"/>
                <path d="M0,60 Q25,80 50,60 T100,60" fill="none" stroke="#fff" strokeWidth="0.5" className="animate-flow" style={{animationDelay: '1s'}}/>
                <path d="M0,40 Q25,20 50,40 T100,40" fill="none" stroke="#fff" strokeWidth="0.5" className="animate-flow" style={{animationDelay: '2s'}}/>
              </svg>

              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
              
              <h3 className="text-xs font-bold text-white mb-6 flex items-center gap-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] uppercase tracking-widest relative z-10">
                <Sparkles size={16} />
                The Oracle's Vision
              </h3>
              
              {isLoadingGuide ? (
                <div className="space-y-4 text-xs relative z-10">
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="text-white animate-pulse">✧</span> Gazing into the ether...
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="text-white animate-pulse delay-75">✧</span> Aligning cosmic energies...
                  </div>
                  <div className="h-1 bg-black/20 rounded overflow-hidden mt-6">
                    <div className="h-full bg-white w-1/2 animate-[flow_2s_linear_infinite] shadow-[0_0_10px_rgba(255,255,255,1)]"></div>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-white space-y-4 leading-relaxed relative z-10 font-medium drop-shadow-md">
                  {survivalGuide.split('\n').map((line, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {line.trim() && <span className="text-white mt-0.5 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">✧</span>}
                      <p>{line}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="glass-premium p-5 rounded-2xl text-center hover:border-blue-500/40 transition-colors group">
                 <div className="text-3xl mb-3 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform">💧</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Life Source</div>
               </div>
               <div className="glass-premium p-5 rounded-2xl text-center hover:border-orange-500/40 transition-colors group">
                 <div className="text-3xl mb-3 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] group-hover:scale-110 transition-transform">⛺️</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest text-orange-400">Sanctuary</div>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FestivalDetail;
