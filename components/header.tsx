'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg border-b border-slate-200' 
        : 'bg-white/95 backdrop-blur-sm border-b border-slate-100'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Izquierda */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-3">
              {/* Ícono Legal + Salud */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Escudo de protección legal */}
                  <path d="M20 4L8 9V17C8 25 12 31 20 36C28 31 32 25 32 17V9L20 4Z" 
                        className="fill-slate-900 group-hover:fill-slate-800 transition-colors" 
                        stroke="currentColor" 
                        strokeWidth="1.5"/>
                  {/* Cruz médica en el centro */}
                  <path d="M20 14V26M14 20H26" 
                        className="stroke-white group-hover:stroke-yellow-600 transition-colors" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"/>
                </svg>
              </div>
              {/* Texto del logo */}
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-slate-900 font-bold text-lg tracking-tight">Salud Legal</span>
                <span className="text-slate-600 text-xs font-medium tracking-wide">Especialistas en Amparos</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation + Button - Derecha */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <Link href="/" className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors rounded-lg hover:bg-slate-50">
              Inicio
            </Link>
            <Link href="/servicios" className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors rounded-lg hover:bg-slate-50">
              Reclamos
            </Link>
            <Link href="/blog" className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors rounded-lg hover:bg-slate-50">
              Blog
            </Link>
            
            {/* CTA Button - Contacto */}
            <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-xl transition-all font-semibold ml-2">
              <Link href="/contacto">Consulta Gratis</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-200 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-slate-600 hover:text-slate-900 font-medium py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="text-slate-600 hover:text-slate-900 font-medium py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reclamos
              </Link>
              <Link
                href="/blog"
                className="text-slate-600 hover:text-slate-900 font-medium py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="pt-4 mt-2 border-t border-slate-200">
                <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white shadow-md font-semibold">
                  <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>Consulta Gratis</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
