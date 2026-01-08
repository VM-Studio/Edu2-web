import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative bg-white py-16 md:py-20 border-t-2 border-slate-200">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Columna 1: Empresa */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Salud Legal</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Especialistas en reclamos de cobertura médica. Te ayudamos a conseguir la autorización judicial para tu cirugía.
              </p>
            </div>

            {/* Columna 2: Contacto */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Contacto</h4>
              <div className="space-y-4">
                <a href="tel:+5491112345678" className="flex items-start gap-3 text-slate-600 hover:text-slate-900 transition-colors group">
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                  <span className="text-sm">+54 9 11 1234-5678</span>
                </a>
                <a href="mailto:info@saludlegal.com" className="flex items-start gap-3 text-slate-600 hover:text-slate-900 transition-colors group">
                  <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                  <span className="text-sm">info@saludlegal.com</span>
                </a>
                <div className="flex items-start gap-3 text-slate-600">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <span className="text-sm">Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>

            {/* Columna 3: Sitemap - Servicios */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Servicios</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/servicios" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                    Cirugía Ortognática
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                    Mentoplastia Funcional
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                    Reconstrucciones Maxilofaciales
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                    Otras Cirugías
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 4: Sitemap - Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-slate-900">Navegación</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                    Reclamos
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-slate-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Salud Legal. Todos los derechos reservados.
              </p>
              <div className="flex gap-6 text-sm text-slate-600">
                <Link href="/terminos" className="hover:text-slate-900 transition-colors">
                  Términos y condiciones
                </Link>
                <Link href="/privacidad" className="hover:text-slate-900 transition-colors">
                  Política de privacidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
