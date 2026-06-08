import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_POIS, FESTIVALS, MOCK_HEATMAP } from '../constants';
import { Flame, Droplets, Cross, Coffee, MapPin, Waves, MessageCircle, Navigation2, Sparkles, Crosshair, Map as MapIcon, List, Tent, Speaker, Eye } from 'lucide-react';
import SOSFlasher from '../components/SOSFlasher';
import AIAgent from '../components/AIAgent';
import { generateSecretRumors } from '../services/geminiService';

const LiveVillan: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showSOS, setShowSOS] = useState(false);
  const [showAgent, setShowAgent] = useState(false);
  const [rumor, setRumor] = useState<string>('Tuning into the collective...');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('map');
  const [basecamp, setBasecamp] = useState<{x: number, y: number} | null>(null);

  const festival = FESTIVALS.find(f => f.id === id) || FESTIVALS[0];

  useEffect(() => {
    generateSecretRumors(festival.name).then(setRumor);
    const interval = setInterval(() => {
      generateSecretRumors(festival.name).then(setRumor);
    }, 300000);
    return () => clearInterval(interval);
  }, [festival.name]);

  const getIconForPOI = (type: string, size: number = 18) => {
    switch(type) {
      case 'water': return <Droplets size={size} className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.9)]" />;
      case 'medic': return <Cross size={size} className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]" />;
      case 'food': return <Coffee size={size} className="text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.9)]" />;
      case 'washroom': return <MapPin size={size} className="text-gray-400" />;
      case 'stage': return <Speaker size={size} className="text-villan-purple drop-shadow-[0_0_8px_rgba(157,0,255,0.9)]" />;
      default: return <MapPin size={size} className="text-villan-accent drop-shadow-[0_0_8px_rgba(0,240,255,0.9)]" />;
    }
  };

  const filteredPOIs = activeFilter === 'all' 
    ? MOCK_POIS 
    : MOCK_POIS.filter(poi => poi.type === activeFilter);

  const handlePinBasecamp = () => {
    setBasecamp({ x: 50, y: 50 });
  };

  return (
    <div className="min-h-screen bg-[#05000a] text-white pb-36 relative overflow-hidden font-sans">
      {showSOS && <SOSFlasher onClose={() => setShowSOS(false)} />}
      {showAgent && <AIAgent festivalName={festival.name} onClose={() => setShowAgent(false)} />}

      {/* Ethereal Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-sacred-geometry opacity-10"></div>
        
        {/* Breathing Energy Field */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(157,0,255,0.1)_0%,transparent_70%)] animate-breathe mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[500px] max-h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.1)_0%,transparent_70%)] animate-breathe mix-blend-screen" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Top Status Bar - Ethereal Style */}
      <div className="glass-premium border-b border-villan-danger/30 p-4 sticky top-0 z-40 flex justify-between items-center shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-8 h-8">
            <div className="absolute inset-0 rounded-full border-[2px] border-villan-danger/30 border-t-villan-danger animate-spin"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-villan-danger animate-pulse shadow-[0_0_10px_rgba(255,0,127,1)]"></div>
          </div>
          <span className="font-black tracking-[0.2em] text-villan-danger text-xl text-glow-danger">FLOW STATE</span>
        </div>
        <div className="text-[9px] font-bold text-villan-accent uppercase tracking-widest bg-villan-accent/10 px-3 py-1.5 rounded-full border border-villan-accent/30 shadow-[inset_0_0_10px_rgba(0,240,255,0.1)]">
          {festival.name.substring(0, 12)}...
        </div>
      </div>

      <div className="p-6 space-y-8 relative z-10">
        
        {/* Emergency Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setShowSOS(true)}
            className="bg-gradient-to-br from-red-600 to-red-900 border border-red-500 text-white p-4 rounded-[2rem] font-black text-xl flex flex-col items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,0,127,0.4),inset_0_0_20px_rgba(255,255,255,0.2)] active:scale-95 transition-all hover:shadow-[0_0_50px_rgba(255,0,127,0.8)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Flame size={40} className="animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] relative z-10" />
            <span className="tracking-[0.2em] relative z-10 drop-shadow-md">BEACON</span>
          </button>
          
          <div className="grid grid-rows-2 gap-4">
            <button className="glass-premium border-blue-500/40 rounded-2xl flex items-center justify-center gap-3 font-bold text-blue-400 active:bg-blue-900/50 transition-all shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-400">
              <Droplets size={22} className="drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" /> <span className="tracking-widest text-sm">WATER</span>
            </button>
            <button className="glass-premium border-red-500/40 rounded-2xl flex items-center justify-center gap-3 font-bold text-red-400 active:bg-red-900/50 transition-all shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:border-red-400">
              <Cross size={22} className="drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" /> <span className="tracking-widest text-sm">HEALER</span>
            </button>
          </div>
        </div>

        {/* Secret Chatter (Gemini) - Ethereal Whisper Style */}
        <div className="glass-panel rounded-2xl p-5 relative overflow-hidden shadow-[0_0_30px_rgba(157,0,255,0.08)]">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-iridescent shadow-[0_0_15px_rgba(157,0,255,1)]"></div>
          
          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="flex items-center gap-2 text-villan-purple text-glow-purple">
              <Waves size={18} className="animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Ethereal Echo</span>
            </div>
            <span className="text-[10px] text-villan-purple/80 border border-villan-purple/30 px-2 py-0.5 rounded-full">RESONANCE: HIGH</span>
          </div>
          
          <p className="text-sm text-gray-200 leading-relaxed relative z-10 italic">
            <span className="text-villan-purple mr-2 drop-shadow-[0_0_5px_rgba(157,0,255,0.8)]">✧</span>
            "{rumor}"
          </p>
        </div>

        {/* Astral Map Section */}
        <div className="relative z-10">
          <div className="flex justify-between items-end mb-5">
            <div className="flex items-center gap-3">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2">
                <div className="w-2 h-2 bg-villan-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]"></div>
                Astral Map
              </h3>
              
              {/* View Toggle */}
              <div className="flex bg-[#0a0014] border border-white/10 rounded-lg p-1">
                <button 
                  onClick={() => setViewMode('map')}
                  className={`p-1.5 rounded-md transition-colors ${viewMode === 'map' ? 'bg-villan-purple/30 text-villan-purple' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  <MapIcon size={14} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-villan-purple/30 text-villan-purple' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  <List size={14} />
                </button>
              </div>
            </div>

            <select 
              className="bg-[#0a0014] text-[10px] font-bold border border-villan-purple/30 rounded-lg px-3 py-2 outline-none text-villan-purple appearance-none shadow-[inset_0_0_10px_rgba(157,0,255,0.05)]"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              <option value="all">[ ALL ENERGIES ]</option>
              <option value="stage">[ SONIC GUIDES ]</option>
              <option value="water">[ LIFE SOURCE ]</option>
              <option value="medic">[ HEALERS ]</option>
              <option value="chill">[ SANCTUARIES ]</option>
            </select>
          </div>

          {viewMode === 'map' ? (
            <div className="space-y-4">
              {/* Interactive Map Container */}
              <div className="relative w-full aspect-square glass-premium rounded-[2rem] border-villan-purple/30 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8),inset_0_0_50px_rgba(157,0,255,0.05)]">
                
                {/* Ethereal Map Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,0,255,0.1)_0%,transparent_100%)]"></div>

                {/* Structured Festival Layout SVG */}
                <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Festival Grounds Outline */}
                  <path d="M10,50 C10,10 90,10 90,50 C90,90 10,90 10,50 Z" fill="rgba(157,0,255,0.05)" stroke="#9d00ff" strokeWidth="0.5" strokeDasharray="2 2" />
                  
                  {/* Main Pathways */}
                  <path d="M50,85 L50,15 M50,50 L85,45 M50,50 L15,45" fill="none" stroke="#00f0ff" strokeWidth="0.5" filter="drop-shadow(0 0 2px #00f0ff)" opacity="0.6" />
                  
                  {/* Stage Zones (Glowing Circles) */}
                  <circle cx="50" cy="15" r="8" fill="rgba(255,0,127,0.1)" stroke="#ff007f" strokeWidth="0.5" filter="drop-shadow(0 0 4px #ff007f)" />
                  <circle cx="85" cy="45" r="6" fill="rgba(157,0,255,0.1)" stroke="#9d00ff" strokeWidth="0.5" filter="drop-shadow(0 0 4px #9d00ff)" />
                  <circle cx="15" cy="45" r="6" fill="rgba(0,240,255,0.1)" stroke="#00f0ff" strokeWidth="0.5" filter="drop-shadow(0 0 4px #00f0ff)" />
                  
                  {/* Central Hub */}
                  <circle cx="50" cy="50" r="4" fill="none" stroke="#fff" strokeWidth="0.5" strokeDasharray="1 1" />
                  
                  {/* Camping/Sanctuary Zone */}
                  <polygon points="35,85 65,85 70,95 30,95" fill="rgba(255,170,0,0.1)" stroke="#ffaa00" strokeWidth="0.5" filter="drop-shadow(0 0 2px #ffaa00)" />
                </svg>

                {/* Energy Nodes (Heatmap) */}
                {MOCK_HEATMAP.map((spot, i) => (
                  <div 
                    key={`heat-${i}`} 
                    className={`absolute w-40 h-40 -ml-20 -mt-20 rounded-full blur-3xl mix-blend-screen pointer-events-none transition-opacity duration-1000 animate-breathe ${
                      spot.intensity === 'high' ? 'bg-villan-danger/40' : 
                      spot.intensity === 'medium' ? 'bg-villan-warning/30' : 
                      'bg-villan-accent/20'
                    }`} 
                    style={{ left: `${spot.x}%`, top: `${spot.y}%`, animationDelay: `${i * 0.5}s` }}
                  ></div>
                ))}

                {/* POI Markers */}
                {filteredPOIs.map(poi => (
                  <div 
                    key={poi.id} 
                    className="absolute -ml-3 -mt-3 group cursor-pointer" 
                    style={{ left: `${poi.coordinates.x}%`, top: `${poi.coordinates.y}%` }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-black/50 rounded-full blur-sm"></div>
                      {getIconForPOI(poi.type, 20)}
                      
                      {/* Tooltip on hover/tap */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                        <div className="glass-panel text-[9px] px-3 py-1.5 rounded-full text-white shadow-xl border-villan-purple/50">
                          {poi.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Basecamp Marker */}
                {basecamp && (
                  <div className="absolute -ml-4 -mt-4 z-10" style={{ left: `${basecamp.x}%`, top: `${basecamp.y}%` }}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-villan-warning/30 rounded-full blur-md animate-pulse"></div>
                      <Tent size={28} className="text-villan-warning drop-shadow-[0_0_15px_rgba(255,170,0,1)] relative z-10" />
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[8px] font-bold text-villan-warning uppercase tracking-widest">Sanctuary</div>
                    </div>
                  </div>
                )}

                {/* User Position (Center) */}
                <div className="absolute top-1/2 left-1/2 -ml-2 -mt-2 z-20">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-16 h-16 border border-villan-accent/40 rounded-full animate-ripple"></div>
                    <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)] border-2 border-[#0a0014]"></div>
                  </div>
                </div>
              </div>

              {/* Map Controls */}
              <div className="flex gap-3">
                <button 
                  onClick={handlePinBasecamp}
                  className="flex-1 glass-premium py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-villan-warning border-villan-warning/30 hover:bg-villan-warning/10 transition-colors flex items-center justify-center gap-2 shadow-[inset_0_0_15px_rgba(255,170,0,0.05)]"
                >
                  <Tent size={14} /> Set Sanctuary
                </button>
                <button className="flex-1 glass-premium py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-villan-accent border-villan-accent/30 hover:bg-villan-accent/10 transition-colors flex items-center justify-center gap-2 shadow-[inset_0_0_15px_rgba(0,240,255,0.05)]">
                  <Crosshair size={14} /> Center Aura
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredPOIs.map(poi => (
                <div key={poi.id} className="glass-premium p-4 rounded-2xl flex items-center justify-between group hover:border-villan-purple/40 transition-all hover:shadow-[0_0_20px_rgba(157,0,255,0.1)]">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#0a0014] rounded-xl border border-white/5 group-hover:scale-110 transition-transform shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]">
                      {getIconForPOI(poi.type)}
                    </div>
                    <div>
                      <div className="font-bold text-sm tracking-wide text-gray-200 group-hover:text-white transition-colors">{poi.name}</div>
                      <div className="text-[9px] text-gray-500 uppercase tracking-[0.2em] mt-1">{poi.type}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-villan-purple font-bold text-lg text-glow-purple">{poi.distance}</span>
                    <button className="text-[9px] font-bold text-gray-500 uppercase mt-1 flex items-center gap-1 hover:text-villan-purple transition-colors tracking-widest">
                      <Navigation2 size={12} /> Flow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* AI Agent FAB */}
      <button 
        onClick={() => setShowAgent(true)}
        className="fixed bottom-28 right-6 w-14 h-14 rounded-full glass-premium bg-iridescent p-[2px] flex items-center justify-center shadow-[0_0_20px_rgba(157,0,255,0.4)] z-40 group hover:scale-110 transition-transform"
      >
        <div className="w-full h-full bg-[#0a0014] rounded-full flex items-center justify-center">
          <Eye size={24} className="text-white group-hover:animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
        </div>
      </button>
    </div>
  );
};

export default LiveVillan;
