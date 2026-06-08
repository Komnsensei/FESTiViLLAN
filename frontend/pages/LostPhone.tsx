import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_USER } from '../constants';
import { Phone, HeartPulse, Flame, ArrowLeft, Lock } from 'lucide-react';

const LostPhone: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#05000a] text-white flex flex-col relative overflow-hidden font-sans">
      {/* Ethereal Warning Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,127,0.15)_0%,transparent_100%)] animate-breathe mix-blend-screen"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-villan-danger/30 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-villan-danger/30 to-transparent pointer-events-none"></div>

      {/* Hidden exit button for the owner */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 p-4 opacity-5 hover:opacity-100 transition-opacity z-50"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-10 relative z-10">
        
        <div className="animate-float">
          <Flame size={80} className="text-villan-danger mx-auto mb-6 drop-shadow-[0_0_30px_rgba(255,0,127,0.8)]" />
          <h1 className="text-5xl font-black uppercase tracking-tighter text-villan-danger drop-shadow-[0_0_20px_rgba(255,0,127,0.5)]">
            KARMIC RETURN
          </h1>
          <p className="text-gray-300 mt-4 text-lg font-medium tracking-widest uppercase text-[10px] border border-villan-danger/30 inline-block px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
            Please guide this vessel home
          </p>
        </div>

        <div className="w-full max-w-sm glass-premium border-villan-danger/40 rounded-[2.5rem] p-8 space-y-8 shadow-[0_20px_60px_rgba(255,0,127,0.15)] relative overflow-hidden">
          <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(255,0,127,0.05)] pointer-events-none"></div>

          <div>
            <div className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-2">Wandering Soul</div>
            <div className="text-4xl font-black tracking-tight text-white drop-shadow-md">{MOCK_USER.name}</div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-villan-danger/50 to-transparent"></div>

          <div>
            <div className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-4 flex items-center justify-center gap-2">
              <Phone size={14} className="text-villan-accent" /> Earthly Anchor
            </div>
            <div className="text-xl font-bold text-villan-accent mb-4 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">{MOCK_USER.emergencyContactName}</div>
            <a 
              href={`tel:${MOCK_USER.emergencyContactPhone}`} 
              className="block w-full bg-gradient-to-r from-villan-purple to-villan-danger hover:from-villan-danger hover:to-villan-purple text-white py-5 rounded-2xl text-2xl font-black tracking-wider transition-all shadow-[0_0_30px_rgba(157,0,255,0.5)] hover:shadow-[0_0_40px_rgba(255,0,127,0.7)] hover:-translate-y-1 border border-white/20"
            >
              {MOCK_USER.emergencyContactPhone}
            </a>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-villan-danger/50 to-transparent"></div>

          <div className="text-left bg-[#0a0014]/60 p-6 rounded-2xl border border-villan-danger/30 shadow-[inset_0_0_20px_rgba(255,0,127,0.1)]">
            <div className="text-[10px] text-villan-danger uppercase tracking-[0.2em] font-bold mb-4 flex items-center gap-2 text-glow-danger">
              <HeartPulse size={16} /> Vessel Integrity
            </div>
            <div className="text-sm text-gray-200 mb-3 flex items-center justify-between bg-black/30 p-3 rounded-xl border border-white/5">
              <span className="font-black text-white tracking-widest text-[10px] uppercase">Life Force</span> 
              <span className="text-villan-danger font-black text-lg drop-shadow-[0_0_5px_rgba(255,0,127,0.8)]">{MOCK_USER.bloodType}</span>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed font-medium bg-black/30 p-4 rounded-xl border border-white/5">
              {MOCK_USER.medicalInfo}
            </div>
          </div>

        </div>

        <div className="flex items-center gap-2 text-[9px] text-gray-500 uppercase tracking-[0.2em] font-bold bg-black/50 px-4 py-2 rounded-full border border-gray-800">
          <Lock size={12} /> Vessel locked. Karmic info only.
        </div>
      </div>
    </div>
  );
};

export default LostPhone;
