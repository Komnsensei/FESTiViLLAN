import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Radio, AlertTriangle, Users, Database, Settings, ArrowLeft, Send, Zap, ShieldAlert, UploadCloud, Image as ImageIcon } from 'lucide-react';

const OrganizerDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [broadcastMsg, setBroadcastMsg] = useState('');
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success'>('idle');

  const handleBroadcast = () => {
    if (!broadcastMsg) return;
    setIsBroadcasting(true);
    setTimeout(() => {
      setIsBroadcasting(false);
      setBroadcastMsg('');
      alert('Broadcast sent to all active vessels on the grid.');
    }, 1500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadStatus('uploading');
      // Simulate upload delay
      setTimeout(() => {
        setUploadStatus('success');
        setTimeout(() => setUploadStatus('idle'), 3000);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#05000a] text-white p-6 relative overflow-hidden font-sans pb-24">
      {/* Command Center Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,rgba(157,0,255,0.15)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Header */}
      <header className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-3 glass-premium rounded-xl text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-villan-purple/10 border border-villan-purple/30 mb-1">
              <Database size={12} className="text-villan-purple animate-pulse" />
              <span className="text-[9px] font-mono font-bold tracking-widest text-villan-purple uppercase">Server Uplink Active</span>
            </div>
            <h1 className="text-2xl font-black tracking-tighter text-white drop-shadow-lg">
              GRID COMMAND
            </h1>
          </div>
        </div>
        <div className="w-12 h-12 rounded-xl glass-premium flex items-center justify-center border-villan-accent/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <Settings size={20} className="text-villan-accent animate-spin-slow" />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        
        {/* Telemetry Overview */}
        <div className="glass-premium p-6 rounded-[2rem] border-white/10 space-y-6">
          <h2 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2">
            <Activity size={14} className="text-villan-accent" /> Live Telemetry
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0a0014] p-4 rounded-2xl border border-white/5">
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Active Souls</div>
              <div className="text-3xl font-black text-white flex items-center gap-2">
                14,203 <Users size={16} className="text-villan-purple" />
              </div>
              <div className="text-[9px] text-villan-accent mt-2">+42 in last minute</div>
            </div>
            
            <div className="bg-[#0a0014] p-4 rounded-2xl border border-white/5">
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Grid Load</div>
              <div className="text-3xl font-black text-white flex items-center gap-2">
                42% <Zap size={16} className="text-villan-warning" />
              </div>
              <div className="w-full h-1 bg-gray-800 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-villan-warning w-[42%] shadow-[0_0_10px_rgba(255,170,0,0.8)]"></div>
              </div>
            </div>
          </div>

          <div className="bg-villan-danger/10 p-4 rounded-2xl border border-villan-danger/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-villan-danger/20 rounded-lg">
                <ShieldAlert size={20} className="text-villan-danger animate-pulse" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Active SOS Beacons</div>
                <div className="text-[10px] text-villan-danger uppercase tracking-widest">2 Requires Attention</div>
              </div>
            </div>
            <button className="px-4 py-2 bg-villan-danger text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-red-600 transition-colors">
              View
            </button>
          </div>
        </div>

        {/* Oracle Override (Broadcast) */}
        <div className="glass-premium p-6 rounded-[2rem] border-villan-purple/30 shadow-[0_0_30px_rgba(157,0,255,0.05)] flex flex-col">
          <h2 className="text-xs font-mono font-bold text-villan-purple uppercase tracking-[0.2em] flex items-center gap-2 mb-6 text-glow-purple">
            <Radio size={14} /> Oracle Override (Push)
          </h2>
          
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-xs text-gray-400 leading-relaxed">
              Inject messages directly into the collective consciousness. This will appear as an ethereal whisper to all active vessels on the grid.
            </p>
            
            <textarea 
              value={broadcastMsg}
              onChange={(e) => setBroadcastMsg(e.target.value)}
              placeholder="Enter transmission data..."
              className="flex-1 w-full bg-[#0a0014] border border-villan-purple/30 rounded-xl p-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-villan-purple focus:shadow-[0_0_15px_rgba(157,0,255,0.2)] transition-all resize-none font-mono"
            />
            
            <button 
              onClick={handleBroadcast}
              disabled={!broadcastMsg || isBroadcasting}
              className="w-full bg-iridescent p-[1px] rounded-xl flex items-center justify-center transition-all disabled:opacity-50 group"
            >
              <div className="w-full h-full bg-[#0a0014] rounded-xl py-4 flex items-center justify-center gap-2 group-hover:bg-transparent transition-colors">
                {isBroadcasting ? (
                  <span className="text-sm font-bold text-white tracking-widest uppercase animate-pulse">Transmitting...</span>
                ) : (
                  <>
                    <Send size={16} className="text-white" />
                    <span className="text-sm font-bold text-white tracking-widest uppercase">Broadcast to Grid</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Asset Management (Upload) */}
        <div className="glass-premium p-6 rounded-[2rem] border-villan-accent/30 shadow-[0_0_30px_rgba(0,240,255,0.05)] flex flex-col md:col-span-2">
          <h2 className="text-xs font-mono font-bold text-villan-accent uppercase tracking-[0.2em] flex items-center gap-2 mb-6 text-glow-accent">
            <UploadCloud size={14} /> Grid Assets & Overlays
          </h2>
          
          <div className={`flex-1 border-2 border-dashed rounded-2xl bg-[#0a0014]/50 flex flex-col items-center justify-center p-8 transition-all cursor-pointer group relative overflow-hidden ${uploadStatus === 'uploading' ? 'border-villan-purple bg-villan-purple/10' : uploadStatus === 'success' ? 'border-villan-accent bg-villan-accent/10' : 'border-villan-accent/30 hover:bg-villan-accent/5 hover:border-villan-accent/60'}`}>
            
            <input 
              type="file" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
              onChange={handleFileUpload}
              disabled={uploadStatus !== 'idle'}
              accept="image/*,.svg"
            />
            
            {uploadStatus === 'idle' && (
              <>
                <div className="w-16 h-16 rounded-full bg-villan-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ImageIcon size={28} className="text-villan-accent drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-2">Upload Sacred Geometry</h3>
                <p className="text-xs text-gray-500 font-mono text-center max-w-md">
                  Drag and drop map overlays, stage banners, or custom aura textures here. Supported formats: PNG, JPG, SVG.
                </p>
              </>
            )}

            {uploadStatus === 'uploading' && (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-[3px] border-villan-purple/30 border-t-villan-purple animate-spin mb-4"></div>
                <h3 className="text-sm font-bold text-villan-purple tracking-widest uppercase animate-pulse text-glow-purple">Syncing to Grid...</h3>
              </div>
            )}

            {uploadStatus === 'success' && (
              <div className="flex flex-col items-center animate-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-villan-accent/20 flex items-center justify-center mb-4">
                  <Zap size={28} className="text-villan-accent drop-shadow-[0_0_15px_rgba(0,240,255,1)]" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-widest uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Asset Integrated</h3>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrganizerDashboard;
