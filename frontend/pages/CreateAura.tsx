import React, { useState } from 'react';
import { Sparkles, User, HeartPulse, ShieldAlert, ChevronRight } from 'lucide-react';

interface CreateAuraProps {
  onComplete: () => void;
}

const CreateAura: React.FC<CreateAuraProps> = ({ onComplete }) => {
  const [auraColor, setAuraColor] = useState('#00f0ff');

  const colors = [
    { hex: '#00f0ff', name: 'Ethereal Cyan' },
    { hex: '#9d00ff', name: 'Astral Purple' },
    { hex: '#ff007f', name: 'Vibrant Magenta' },
    { hex: '#ffaa00', name: 'Golden Aura' },
  ];

  return (
    <div className="min-h-screen bg-[#05000a] pb-24 pt-12 px-6 relative overflow-hidden">
      {/* Dynamic Aura Background */}
      <div 
        className="absolute top-0 left-0 w-full h-96 blur-[150px] opacity-30 transition-colors duration-1000 pointer-events-none"
        style={{ backgroundColor: auraColor }}
      ></div>
      <div className="absolute inset-0 bg-sacred-geometry opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-md mx-auto">
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-premium mb-4 border-white/10">
            <Sparkles size={14} style={{ color: auraColor }} className="animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300">Initialization</span>
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-white drop-shadow-lg">
            Manifest Your <span style={{ color: auraColor }} className="transition-colors duration-500">Aura</span>
          </h1>
          <p className="text-gray-400 mt-3 text-sm">Define your energetic signature for the grid.</p>
        </header>

        <div className="space-y-6">
          {/* Aura Color Selection */}
          <div className="glass-premium p-6 rounded-[2rem]">
            <label className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] mb-4 block">Select Frequency</label>
            <div className="flex justify-between">
              {colors.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setAuraColor(c.hex)}
                  className={`w-12 h-12 rounded-full transition-all duration-300 relative ${auraColor === c.hex ? 'scale-110' : 'scale-90 opacity-50 hover:opacity-100'}`}
                  style={{ backgroundColor: c.hex, boxShadow: auraColor === c.hex ? `0 0 20px ${c.hex}` : 'none' }}
                >
                  {auraColor === c.hex && (
                    <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-50"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Identity Form */}
          <div className="glass-premium p-6 rounded-[2rem] space-y-5">
            <div>
              <label className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <User size={12} /> Rave Name
              </label>
              <input 
                type="text" 
                placeholder="e.g. Neon Nomad"
                className="w-full bg-[#0a0014] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <Sparkles size={12} /> Bio / Mantra
              </label>
              <textarea 
                placeholder="Your vibe attracts your tribe..."
                rows={2}
                className="w-full bg-[#0a0014] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Karmic Return (Emergency) Form */}
          <div className="glass-premium p-6 rounded-[2rem] space-y-5 border-villan-danger/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-villan-danger"></div>
            <h3 className="text-xs font-bold text-villan-danger uppercase tracking-widest flex items-center gap-2 mb-4">
              <ShieldAlert size={14} /> Karmic Return Data
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] mb-2 block">Blood Type</label>
                <select className="w-full bg-[#0a0014] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-villan-danger/50 appearance-none">
                  <option>O+</option><option>O-</option><option>A+</option><option>A-</option>
                  <option>B+</option><option>B-</option><option>AB+</option><option>AB-</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] mb-2 block">Anchor Phone</label>
                <input 
                  type="tel" 
                  placeholder="Emergency #"
                  className="w-full bg-[#0a0014] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-villan-danger/50"
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <HeartPulse size={12} /> Medical Notes
              </label>
              <input 
                type="text" 
                placeholder="Allergies, conditions..."
                className="w-full bg-[#0a0014] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-villan-danger/50"
              />
            </div>
          </div>

          <button 
            onClick={onComplete}
            className="w-full relative group overflow-hidden bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
            style={{ boxShadow: `0 0 30px ${auraColor}40` }}
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: auraColor }}></div>
            <span className="tracking-widest text-lg relative z-10">ENTER THE NEXUS</span>
            <ChevronRight size={20} className="relative z-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAura;
