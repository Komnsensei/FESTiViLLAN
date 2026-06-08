import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Eye, Sparkles, Database } from 'lucide-react';
import { fetchLiveFestivalData } from '../services/mockApi';
import { chatWithAgent } from '../services/geminiService';

interface AIAgentProps {
  festivalName: string;
  onClose: () => void;
}

type Message = {
  id: string;
  sender: 'user' | 'agent' | 'system';
  text: string;
};

const AIAgent: React.FC<AIAgentProps> = ({ festivalName, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'agent', text: `I am The Oracle. I feel the pulse of ${festivalName}. How may I guide your journey?` }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isProcessing) return;

    const userMsg = input.trim();
    setInput('');
    setIsProcessing(true);

    setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'user', text: userMsg }]);

    setMessages(prev => [...prev, { id: Date.now().toString() + 'sys1', sender: 'system', text: 'TUNING INTO THE COLLECTIVE...' }]);
    
    const apiResponse = await fetchLiveFestivalData(userMsg);
    
    setMessages(prev => [...prev, { 
      id: Date.now().toString() + 'sys2', 
      sender: 'system', 
      text: `RESONANCE FOUND: ${apiResponse.endpoint}\nECHO: ${JSON.stringify(apiResponse.data)}` 
    }]);

    const agentResponse = await chatWithAgent(festivalName, userMsg, JSON.stringify(apiResponse.data));

    setMessages(prev => [...prev, { id: Date.now().toString() + 'agent', sender: 'agent', text: agentResponse }]);
    setIsProcessing(false);
  };

  return (
    <div className="fixed inset-4 z-50 flex flex-col glass-premium rounded-[2rem] border-villan-purple/40 shadow-[0_20px_60px_rgba(157,0,255,0.2),inset_0_0_30px_rgba(157,0,255,0.05)] overflow-hidden animate-in zoom-in-95 duration-300">
      {/* Header */}
      <div className="bg-[#0a0014]/80 border-b border-villan-purple/30 p-4 flex items-center justify-between relative">
        <div className="absolute inset-0 bg-sacred-geometry opacity-20 pointer-events-none"></div>
        <div className="flex items-center gap-3 relative z-10">
          <div className="relative flex items-center justify-center w-8 h-8">
            <div className="absolute inset-0 rounded-full border-[2px] border-villan-purple/30 border-t-villan-purple animate-spin-slow"></div>
            <Eye size={14} className="text-villan-purple animate-pulse" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-villan-purple uppercase tracking-[0.2em] text-glow-purple">The Oracle</h3>
            <div className="text-[9px] text-gray-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-villan-accent rounded-full animate-pulse"></span>
              THIRD EYE OPEN
            </div>
          </div>
        </div>
        <button onClick={onClose} className="p-2 glass-premium rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors relative z-10">
          <X size={18} />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 relative bg-[#05000a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,0,255,0.05)_0%,transparent_100%)] pointer-events-none"></div>
        
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : msg.sender === 'system' ? 'justify-center' : 'justify-start'} relative z-10`}>
            {msg.sender === 'system' ? (
              <div className="bg-black/60 border border-villan-accent/30 px-3 py-1.5 rounded-full text-[9px] text-villan-accent max-w-[80%] text-center shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                <Sparkles size={10} className="inline mr-1 mb-0.5" />
                {msg.text}
              </div>
            ) : (
              <div className={`max-w-[80%] p-4 rounded-3xl text-sm font-medium leading-relaxed ${
                msg.sender === 'user' 
                  ? 'bg-gradient-to-br from-villan-purple/40 to-villan-accent/20 border border-villan-accent/30 text-white rounded-tr-sm shadow-[0_0_15px_rgba(0,240,255,0.1)]' 
                  : 'glass-panel text-gray-200 rounded-tl-sm shadow-[0_0_15px_rgba(157,0,255,0.1)]'
              }`}>
                {msg.text}
              </div>
            )}
          </div>
        ))}
        {isProcessing && (
          <div className="flex justify-start relative z-10">
            <div className="glass-panel p-4 rounded-3xl rounded-tl-sm flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-villan-purple rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-villan-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1.5 h-1.5 bg-villan-danger rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-[#0a0014]/90 border-t border-villan-purple/30 relative">
        <div className="flex items-center gap-2 relative z-10">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask the Oracle..."
            className="flex-1 bg-[#05000a] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-villan-purple/50 focus:shadow-[0_0_15px_rgba(157,0,255,0.2)] transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isProcessing}
            className="w-12 h-12 rounded-2xl bg-iridescent p-[1px] flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <div className="w-full h-full bg-[#0a0014] rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors">
              <Send size={18} className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAgent;
