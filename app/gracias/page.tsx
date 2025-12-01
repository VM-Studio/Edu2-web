'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle, Home } from 'lucide-react';
import Link from 'next/link';
import WhatsAppIcon from '@/components/whatsapp-icon';

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="mb-10 inline-flex items-center justify-center w-32 h-32 bg-green-500/20 rounded-full animate-pulse shadow-2xl">
          <CheckCircle className="w-20 h-20 text-green-400" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
          ¡Consulta enviada con éxito!
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-200 mb-12 font-light leading-relaxed">
          Recibimos tu consulta correctamente. Nuestro equipo la revisará y te contactaremos en las próximas <span className="font-semibold text-white">24 horas</span> para evaluar tu caso de forma <span className="font-semibold text-white">gratuita</span>.
        </p>

        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border-2 border-white/20 mb-12 shadow-2xl">
          <p className="text-slate-100 mb-3 text-xl font-bold">
            ¿Necesitás una respuesta más rápida?
          </p>
          <p className="text-slate-200 text-lg">
            Escribinos directamente por WhatsApp y te respondemos <span className="font-semibold text-white">al instante</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100 shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all px-10 py-7 font-bold text-lg rounded-2xl">
            <Link href="/">
              <Home className="mr-3 h-6 w-6" />
              Volver al inicio
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-white/5 hover:bg-white/10 text-white border-2 border-white/30 hover:border-white backdrop-blur-sm shadow-xl hover:scale-105 transition-all px-10 py-7 font-semibold text-lg rounded-2xl">
            <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-3 h-6 w-6" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
