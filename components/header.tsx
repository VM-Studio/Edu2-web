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
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Navigation - Izquierda */}
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/" className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors rounded-lg hover:bg-slate-50">
              Inicio
            </Link>
            <Link href="/servicios" className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors rounded-lg hover:bg-slate-50">
              Servicios
            </Link>
            <Link href="/blog" className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors rounded-lg hover:bg-slate-50">
              Blog
            </Link>
            <Link href="/contacto" className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors rounded-lg hover:bg-slate-50">
              Contacto
            </Link>
          </nav>

          {/* CTA Buttons - Derecha */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg transition-all font-semibold">
              <Link href="/contacto">Consulta gratis</Link>
            </Button>
            <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg transition-all font-semibold">
              <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
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
                Servicios
              </Link>
              <Link
                href="/blog"
                className="text-slate-600 hover:text-slate-900 font-medium py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contacto"
                className="text-slate-600 hover:text-slate-900 font-medium py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex flex-col gap-3 pt-6 border-t border-slate-200 mt-4">
                <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white shadow-md font-semibold">
                  <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>Consulta gratis</Link>
                </Button>
                <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white shadow-md font-semibold">
                  <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
