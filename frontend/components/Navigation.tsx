import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hexagon, Waves, Sparkles, Flame } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  const isLive = location.pathname.startsWith('/live');
  const isProfile = location.pathname === '/profile';

  let translatePct = '0%';
  if (isLive) translatePct = '100%';
  else if (isProfile) translatePct = '200%';
  else if (isActive('/lost')) translatePct = '300%';

  return (
    <div className="fixed bottom-8 left-0 w-full px-6 z-50 pointer-events-none">
      <nav className="pointer-events-auto max-w-md mx-auto glass-premium rounded-full p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
        <div className="flex justify-between items-center relative">
          
          {/* Active Indicator Pill - Iridescent */}
          <div 
            className="absolute h-full w-1/4 bg-iridescent opacity-20 rounded-full transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]"
            style={{ 
              transform: `translateX(${translatePct})` 
            }}
          />

          <Link 
            to="/" 
            className={`flex-1 flex flex-col items-center py-2.5 relative z-10 transition-all duration-300 ${isActive('/') ? 'text-villan-accent text-glow-accent scale-105' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <Hexagon size={20} strokeWidth={isActive('/') ? 2.5 : 2} />
            <span className="text-[9px] mt-1.5 font-bold tracking-[0.2em] uppercase">Nexus</span>
          </Link>
          
          <Link 
            to="/live/active" 
            className={`flex-1 flex flex-col items-center py-2.5 relative z-10 transition-all duration-300 ${isLive ? 'text-villan-danger text-glow-purple scale-105' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <div className={`absolute inset-0 bg-villan-danger/20 rounded-full blur-xl transition-opacity duration-300 ${isLive ? 'opacity-100 animate-breathe' : 'opacity-0'}`}></div>
            <Waves size={20} strokeWidth={isLive ? 2.5 : 2} className={isLive ? 'animate-pulse-fast' : ''} />
            <span className="text-[9px] mt-1.5 font-bold tracking-[0.2em] uppercase">Flow</span>
          </Link>

          <Link 
            to="/profile" 
            className={`flex-1 flex flex-col items-center py-2.5 relative z-10 transition-all duration-300 ${isProfile ? 'text-villan-purple drop-shadow-[0_0_15px_rgba(176,38,255,0.8)] scale-105' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <Sparkles size={20} strokeWidth={isProfile ? 2.5 : 2} />
            <span className="text-[9px] mt-1.5 font-bold tracking-[0.2em] uppercase">Aura</span>
          </Link>

          <Link 
            to="/lost" 
            className="flex-1 flex flex-col items-center py-2.5 relative z-10 text-gray-500 hover:text-villan-warning transition-all duration-300 hover:scale-105"
          >
            <Flame size={20} strokeWidth={2} />
            <span className="text-[9px] mt-1.5 font-bold tracking-[0.2em] uppercase">Beacon</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
