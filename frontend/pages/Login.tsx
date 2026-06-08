import React from 'react';
import { Hexagon, Music, Mail, Apple } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-[#05000a] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Ethereal Background */}
      <div className="absolute inset-0 bg-sacred-geometry opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(157,0,255,0.15)_0%,transparent_70%)] animate-breathe mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[500px] max-h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.15)_0%,transparent_70%)] animate-breathe mix-blend-screen pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
        {/* Logo */}
        <div className="mb-12 text-center">
          <div className="w-24 h-24 mx-auto mb-6 relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-[2px] border-villan-accent/30 border-t-villan-accent animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full border-[2px] border-villan-purple/30 border-b-villan-purple animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
            <Hexagon size={40} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          </div>
          <h1 className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 drop-shadow-2xl leading-none">
            FESTi<br/><span className="text-iridescent">Villan</span>
          </h1>
          <p className="text-gray-400 mt-4 font-mono text-xs uppercase tracking-[0.3em]">Sync Your Frequency</p>
        </div>

        {/* OAuth Buttons */}
        <div className="w-full space-y-4">
          <button 
            onClick={onLogin}
            className="w-full glass-premium p-4 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-all group border-[#1DB954]/30 hover:border-[#1DB954]/60 hover:shadow-[0_0_20px_rgba(29,185,84,0.2)]"
          >
            <div className="w-10 h-10 rounded-full bg-[#1DB954]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Music size={20} className="text-[#1DB954]" />
            </div>
            <span className="font-bold text-sm tracking-wide">Continue with Spotify</span>
          </button>

          <button 
            onClick={onLogin}
            className="w-full glass-premium p-4 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-all group border-white/20 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Apple size={20} className="text-white" />
            </div>
            <span className="font-bold text-sm tracking-wide">Continue with Apple</span>
          </button>

          <button 
            onClick={onLogin}
            className="w-full glass-premium p-4 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-all group border-blue-500/30 hover:border-blue-500/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={20} className="text-blue-400" />
            </div>
            <span className="font-bold text-sm tracking-wide">Continue with Google</span>
          </button>
        </div>

        <p className="mt-8 text-[10px] text-gray-500 text-center max-w-xs">
          By syncing, you agree to the Astral Terms of Service and Karmic Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
