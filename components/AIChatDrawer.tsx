
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User, ChevronRight } from 'lucide-react';
import { chatWithPortfolioAI } from '../geminiService';
import { Message } from '../types';

const AIChatDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hey there! I\'m Agoro\'s AI agent. Ask me anything about his projects or technical skills.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await chatWithPortfolioAI(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* FAB */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-neon-green text-black p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all glow-green animate-bounce"
      >
        <Bot size={28} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full max-w-md bg-[#0d0d0d] border-l border-white/10 z-[60] transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center text-neon-green">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white">Portfolio AI</h3>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
                <span className="text-[10px] text-neon-green/80 uppercase tracking-widest">Active System</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white p-2">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl flex items-start gap-2 ${m.role === 'user' ? 'bg-neon-blue text-black ml-4' : 'glass border-white/10 text-gray-200 mr-4'}`}>
                {m.role === 'model' && <Bot size={18} className="mt-1 shrink-0 text-neon-green" />}
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
                {m.role === 'user' && <User size={18} className="mt-1 shrink-0 text-black/50" />}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="glass p-3 rounded-2xl flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-white/5">
          <div className="relative flex items-center">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Agoro's work..."
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 px-4 pr-12 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all text-sm text-white"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-2 text-neon-green disabled:text-gray-600 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
          {/* Updated the model name in the footer for accuracy */}
          <p className="text-[10px] text-gray-500 mt-2 text-center uppercase tracking-widest">Powered by Gemini Flash Lite</p>
        </form>
      </div>
    </>
  );
};

export default AIChatDrawer;
