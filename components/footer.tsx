import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-slate-900 to-slate-950 text-white py-8 overflow-hidden">
      {/* Efectos de fondo integrados */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Contenido en una sola línea en desktop, apilado en mobile */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            {/* Info de contacto */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-slate-400">
              <a href="tel:+5491112345678" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+54 9 11 1234-5678</span>
              </a>
              <span className="hidden sm:block text-slate-600">•</span>
              <a href="mailto:info@saludlegal.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@saludlegal.com</span>
              </a>
              <span className="hidden sm:block text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>

            {/* Copyright y Links legales */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs text-slate-500">
              <span>© {new Date().getFullYear()}</span>
              <span className="hidden sm:block">•</span>
              <Link href="/terminos" className="hover:text-slate-300 transition-colors">
                Términos
              </Link>
              <span>•</span>
              <Link href="/privacidad" className="hover:text-slate-300 transition-colors">
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
