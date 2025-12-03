'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    obraSocial: '',
    tipoCirugia: '',
    estadoRechazo: '',
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    router.push('/gracias');
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-700/20 rounded-full blur-[150px] animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Tu cirugía no puede esperar. Tu reclamo tampoco.
            </h2>
            <p className="text-xl md:text-2xl text-slate-200 font-light max-w-3xl mx-auto">
              Dejanos tus datos y te contactamos en menos de 24 horas para evaluar tu caso sin compromiso.
            </p>
            <div className="h-1 w-24 bg-white/30 rounded-full mx-auto mt-8"></div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl border-2 border-white/20 shadow-2xl hover:border-white/30 transition-all">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="nombre" className="block text-base font-semibold mb-3 text-slate-100">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/95 text-slate-900 border-2 border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all hover:border-slate-400 text-lg shadow-lg"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-base font-semibold mb-3 text-slate-100">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/95 text-slate-900 border-2 border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all hover:border-slate-400 text-lg shadow-lg"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="obraSocial" className="block text-base font-semibold mb-3 text-slate-100">
                  Obra social / Prepaga
                </label>
                <input
                  type="text"
                  id="obraSocial"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/95 text-slate-900 border-2 border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all hover:border-slate-400 text-lg shadow-lg"
                  value={formData.obraSocial}
                  onChange={(e) => setFormData({ ...formData, obraSocial: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="tipoCirugia" className="block text-base font-semibold mb-3 text-slate-100">
                  Tipo de cirugía
                </label>
                <input
                  type="text"
                  id="tipoCirugia"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/95 text-slate-900 border-2 border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all hover:border-slate-400 text-lg shadow-lg"
                  placeholder="Ej: Ortognática, Maxilofacial..."
                  value={formData.tipoCirugia}
                  onChange={(e) => setFormData({ ...formData, tipoCirugia: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="estadoRechazo" className="block text-base font-semibold mb-3 text-slate-100">
                ¿Ya te rechazaron la cobertura?
              </label>
              <select
                id="estadoRechazo"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/95 text-slate-900 border-2 border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all hover:border-slate-400 text-lg shadow-lg"
                value={formData.estadoRechazo}
                onChange={(e) => setFormData({ ...formData, estadoRechazo: e.target.value })}
              >
                <option value="">Seleccioná una opción...</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
                <option value="vueltas">Me dan vueltas</option>
              </select>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-white text-slate-900 hover:bg-slate-100 shadow-2xl hover:shadow-white/20 transition-all hover:scale-[1.02] text-xl py-8 font-bold rounded-2xl"
            >
              Quiero que me contacten
            </Button>

            <div className="flex items-center justify-center gap-3 mt-6">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <p className="text-sm text-slate-300">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </form>

          <div className="text-center mt-16">
            <p className="text-slate-200 mb-6 text-lg">
              ¿Preferís escribirnos directo?
            </p>
            <Button size="lg" variant="outline" asChild className="bg-yellow-600/5 hover:bg-yellow-600/10 text-white border-2 border-yellow-600/60 hover:border-yellow-600 backdrop-blur-sm shadow-xl hover:scale-105 transition-all px-10 py-7 font-semibold text-lg rounded-2xl">
              <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                <svg className="mr-3 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chatear ahora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
