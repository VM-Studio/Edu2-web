'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  number: number;
  question: string;
  answer: string;
}

export default function FAQItem({ number, question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`group relative bg-white rounded-xl transition-all duration-500 overflow-hidden ${
      isOpen 
        ? 'shadow-[0_8px_30px_rgb(0,0,0,0.12)] scale-[1.01]' 
        : 'shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgb(0,0,0,0.08)]'
    }`}>
      {/* Barra lateral decorativa que crece */}
      <div className={`absolute left-0 top-0 bottom-0 bg-slate-900 transition-all duration-500 ${
        isOpen ? 'w-1.5' : 'w-0 group-hover:w-1'
      }`}></div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left"
      >
        <div className="flex items-center gap-5 md:gap-6 flex-1">
          {/* Número minimalista */}
          <div className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center text-lg md:text-xl font-bold shrink-0 transition-all duration-500 ${
            isOpen 
              ? 'border-yellow-600 bg-yellow-600 text-slate-900 scale-110 rotate-12' 
              : 'border-yellow-600/40 text-slate-900 group-hover:border-yellow-600 group-hover:scale-105'
          }`}>
            {number}
          </div>
          
          <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
            isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
          }`}>
            {question}
          </h3>
        </div>
        
        {/* Flecha minimalista */}
        <div className={`shrink-0 transition-all duration-500 ${
          isOpen ? 'rotate-180 text-slate-900' : 'text-slate-400 group-hover:text-slate-600'
        }`}>
          <ChevronDown className="w-6 h-6 md:w-7 md:h-7" />
        </div>
      </button>
      
      {/* Respuesta con animación */}
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
          {/* Fondo sutil para la respuesta */}
          <div className="bg-slate-50 rounded-lg p-5 md:p-6 ml-15 md:ml-18 border-l-4 border-slate-900">
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
