import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_USER } from '../constants';
import { Sparkles, CheckCircle2, Activity, Shield, Users, Zap, SmartphoneNfc, Settings } from 'lucide-react';

type NFCState = 'idle' | 'scanning' | 'success';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [nfcState, setNfcState] = useState<NFCState>('idle');
  const [connections, setConnections] = useState(MOCK_USER.connections);

  const handleTapNFC = () => {
    if (nfcState !== 'idle') return;
    
    setNfcState('scanning');
    
    setTimeout(() => {
      setNfcState('success');
      setConnections(prev => prev + 1);
      
      setTimeout(() => {
        setNfcState('idle');
      }, 4000);
    }, 2500);
  };

  return (
    <div className="min-h-screen pb-36 pt-12 px-6 relative overflow-hidden bg-[#05000a]">
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-villan-purple/15 blur-[100px] rounded-full pointer-events-none mix-blend-screen animate-breathe"></div>
      <div className="absolute bottom-[20%] left-[-20%] w-[70vw] h-[70vw] bg-villan-accent/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-breathe" style={{ animationDelay: '2s' }}></div>

      <header className="mb-8 relative z-10 flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-premium mb-3 border-villan-purple/30 shadow-[0_0_15px_rgba(157,0,255,0.15)]">
            <Sparkles size={14} className="text-villan-purple" />
            <span className="text-[10px] font-bold tracking-widest text-villan-purple uppercase">Aura Signature</span>
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-white drop-shadow-lg flex items-center gap-3">
            {MOCK_USER.raveName}
            {/* Secret link to Organizer Dashboard for demo */}
            <button onClick={() => navigate('/organizer')} className="text-gray-600 hover:text-villan-accent transition-colors">
              <Settings size={16} />
            </button>
          </h1>
        </div>
        
        {/* Organic/Alien Avatar Background (Image 4 style) */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,127,0.4)_0%,transparent_70%)] animate-pulse-fast blur-md"></div>
          <svg className="absolute inset-0 w-full h-full animate-spin-slow opacity-50" viewBox="0 0 100 100">
            <path d="M50 10 Q60 40 90 50 Q60 60 50 90 Q40 60 10 50 Q40 40 50 10" fill="none" stroke="#ff007f" strokeWidth="1" filter="drop-shadow(0 0 4px #ff007f)"/>
          </svg>
          <div className="w-16 h-16 rounded-full glass-premium p-1 border-villan-danger/50 shadow-[0_0_20px_rgba(255,0,127,0.4)] relative overflow-hidden z-10">
            <img src={MOCK_USER.avatarUrl} alt="Avatar" className="w-full h-full rounded-full object-cover filter contrast-125 saturate-150" />
          </div>
        </div>
      </header>

      <div className="space-y-6 relative z-10">
        
        {/* Stats & Bio Card */}
        <div className="glass-premium rounded-[2rem] p-6 relative overflow-hidden border-white/10">
          <div className="absolute top-0 left-0 w-full h-1 bg-iridescent opacity-50"></div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Vessel: {MOCK_USER.name}</div>
            <div className="flex items-center gap-1.5 bg-villan-purple/10 px-3 py-1 rounded-full border border-villan-purple/30">
              <Users size={12} className="text-villan-purple" />
              <span className="text-[10px] font-bold text-villan-purple">{connections} SOULS</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-300 leading-relaxed font-medium mb-5 italic">
            "{MOCK_USER.bio}"
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#0a0014] p-3 rounded-xl border border-white/5 flex items-center gap-3">
              <Activity size={16} className="text-villan-accent" />
              <div>
                <div className="text-[9px] text-gray-500 uppercase tracking-widest">Vibration</div>
                <div className="text-xs font-bold text-white">Harmonic</div>
              </div>
            </div>
            <div className="bg-[#0a0014] p-3 rounded-xl border border-white/5 flex items-center gap-3">
              <Zap size={16} className="text-villan-warning" />
              <div>
                <div className="text-[9px] text-gray-500 uppercase tracking-widest">Energy</div>
                <div className="text-xs font-bold text-white">Radiant</div>
              </div>
            </div>
          </div>
        </div>

        {/* Twin Orbs NFC Section (Images 5 & 7 style) */}
        <div className="glass-premium rounded-[2rem] p-8 text-center relative overflow-hidden border-villan-purple/20 shadow-[0_10px_40px_rgba(157,0,255,0.05)]">
          
          <h2 className="text-xs font-bold text-iridescent uppercase tracking-[0.3em] mb-8">
            Soul Sync Protocol
          </h2>

          <div className="relative flex justify-center items-center h-40 mb-6 cursor-pointer" onClick={handleTapNFC}>
            
            {/* Left Orb (Purple) */}
            <div className={`absolute w-20 h-20 rounded-full bg-villan-purple/20 border-2 border-villan-purple shadow-[0_0_30px_rgba(157,0,255,0.6),inset_0_0_20px_rgba(157,0,255,0.4)] flex items-center justify-center transition-all duration-1000 ${nfcState === 'scanning' || nfcState === 'success' ? 'left-[20%]' : 'left-4'}`}>
              <div className="w-full h-full rounded-full animate-neural-pulse opacity-50 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.1\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' filter=\'url(%23n)\' opacity=\'0.5\' fill=\'%239d00ff\'/%3E%3C/svg%3E')]"></div>
            </div>

            {/* Right Orb (Cyan) */}
            <div className={`absolute w-20 h-20 rounded-full bg-villan-accent/20 border-2 border-villan-accent shadow-[0_0_30px_rgba(0,240,255,0.6),inset_0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center transition-all duration-1000 ${nfcState === 'scanning' || nfcState === 'success' ? 'right-[20%]' : 'right-4'}`}>
              <div className="w-full h-full rounded-full animate-neural-pulse opacity-50 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.1\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' filter=\'url(%23n)\' opacity=\'0.5\' fill=\'%2300f0ff\'/%3E%3C/svg%3E')]"></div>
            </div>

            {/* Lightning Connection */}
            {(nfcState === 'scanning' || nfcState === 'success') && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-2 flex items-center justify-center z-10">
                <div className="w-full h-[2px] bg-white shadow-[0_0_15px_#fff,0_0_30px_#00f0ff,0_0_40px_#9d00ff] animate-lightning"></div>
                <svg className="absolute w-full h-12 animate-lightning" style={{ animationDelay: '0.1s' }} viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 L20,0 L40,20 L60,5 L80,15 L100,10" fill="none" stroke="#00f0ff" strokeWidth="1" filter="drop-shadow(0 0 4px #00f0ff)"/>
                </svg>
                <svg className="absolute w-full h-12 animate-lightning" style={{ animationDelay: '0.2s' }} viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 L15,18 L35,2 L55,15 L75,5 L100,10" fill="none" stroke="#9d00ff" strokeWidth="1" filter="drop-shadow(0 0 4px #9d00ff)"/>
                </svg>
              </div>
            )}

            {/* Success Icon */}
            {nfcState === 'success' && (
              <div className="absolute z-20 animate-in zoom-in duration-300">
                <CheckCircle2 size={48} className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)]" />
              </div>
            )}
          </div>

          <div className="h-12 flex items-center justify-center">
            {nfcState === 'idle' && (
              <p className="text-sm font-bold text-gray-300 tracking-widest uppercase animate-pulse">
                Bring Auras Together
              </p>
            )}
            {nfcState === 'scanning' && (
              <p className="text-sm font-bold text-villan-accent tracking-widest uppercase text-glow-accent">
                Harmonizing Frequencies...
              </p>
            )}
            {nfcState === 'success' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <p className="text-sm font-bold text-white tracking-widest uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                  Souls Synced
                </p>
                <p className="text-[10px] text-gray-400 mt-1">Added "Cyber Fairy" to your constellation.</p>
              </div>
            )}
          </div>
        </div>

        {/* Emergency Info Summary */}
        <div className="glass-premium rounded-[2rem] p-6 border-red-900/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-villan-danger shadow-[0_0_15px_rgba(255,0,127,1)]"></div>
          
          <div className="flex items-center gap-2 mb-4">
            <Shield size={16} className="text-villan-danger" />
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Karmic Return Data</h3>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center bg-[#0a0014] p-3 rounded-xl border border-white/5">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Life Force Type</span>
              <span className="text-sm font-black text-red-400">{MOCK_USER.bloodType}</span>
            </div>
            <div className="bg-[#0a0014] p-3 rounded-xl border border-white/5">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">Vessel Notes</span>
              <span className="text-xs font-medium text-gray-300">{MOCK_USER.medicalInfo}</span>
            </div>
          </div>
          
          <p className="text-[9px] text-gray-500 mt-4 text-center uppercase tracking-widest">
            This data guides your vessel back if lost.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Profile;
