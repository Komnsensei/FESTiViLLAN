import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface SOSFlasherProps {
  onClose: () => void;
}

const SOSFlasher: React.FC<SOSFlasherProps> = ({ onClose }) => {
  const [isWhite, setIsWhite] = useState(false);
  const [mode, setMode] = useState<'strobe' | 'morse'>('strobe');

  // Simple strobe effect
  useEffect(() => {
    let interval: number;
    if (mode === 'strobe') {
      interval = window.setInterval(() => {
        setIsWhite(prev => !prev);
      }, 100); // 100ms flash rate
    }
    return () => clearInterval(interval);
  }, [mode]);

  // Morse code SOS (... --- ...)
  useEffect(() => {
    if (mode !== 'morse') return;

    let timeout: number;
    const dot = 200;
    const dash = 600;
    const gap = 200;
    const letterGap = 600;
    const wordGap = 1400;

    const pattern = [
      dot, gap, dot, gap, dot, letterGap, // S
      dash, gap, dash, gap, dash, letterGap, // O
      dot, gap, dot, gap, dot, wordGap // S
    ];

    let step = 0;

    const runPattern = () => {
      if (step >= pattern.length) {
        step = 0; // Loop
      }

      const duration = pattern[step];
      const isLightOn = step % 2 === 0; // Even steps are lights on, odd are gaps

      setIsWhite(isLightOn);

      timeout = window.setTimeout(() => {
        step++;
        runPattern();
      }, duration);
    };

    runPattern();

    return () => clearTimeout(timeout);
  }, [mode]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-colors duration-75 ${isWhite ? 'bg-white' : 'bg-black'}`}
      onClick={() => setIsWhite(prev => !prev)} // Manual toggle on tap if needed
    >
      <button 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className={`absolute top-8 right-8 p-4 rounded-full ${isWhite ? 'bg-black text-white' : 'bg-white text-black'}`}
      >
        <X size={32} />
      </button>

      <div className={`absolute bottom-20 flex gap-4 ${isWhite ? 'text-black' : 'text-white'}`}>
        <button 
          onClick={(e) => { e.stopPropagation(); setMode('strobe'); }}
          className={`px-6 py-3 rounded-full font-bold border-2 ${mode === 'strobe' ? 'bg-current text-inverse' : 'border-current'}`}
          style={{ backgroundColor: mode === 'strobe' ? (isWhite ? 'black' : 'white') : 'transparent', color: mode === 'strobe' ? (isWhite ? 'white' : 'black') : 'inherit' }}
        >
          STROBE
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); setMode('morse'); }}
          className={`px-6 py-3 rounded-full font-bold border-2 ${mode === 'morse' ? 'bg-current text-inverse' : 'border-current'}`}
          style={{ backgroundColor: mode === 'morse' ? (isWhite ? 'black' : 'white') : 'transparent', color: mode === 'morse' ? (isWhite ? 'white' : 'black') : 'inherit' }}
        >
          MORSE SOS
        </button>
      </div>
      
      <div className={`text-6xl font-black tracking-widest opacity-50 pointer-events-none ${isWhite ? 'text-black' : 'text-white'}`}>
        SOS
      </div>
    </div>
  );
};

export default SOSFlasher;
