'use client';

import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import WhatsAppIcon from '@/components/whatsapp-icon';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    obraSocial: '',
    tipoCirugia: '',
    mensaje: '',
    aceptaTerminos: false,
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.aceptaTerminos) {
      alert('Debes aceptar los términos para continuar');
      return;
    }
    // Aquí iría la lógica de envío del formulario
    router.push('/gracias');
  };

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 lg:py-28 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="text-sm font-semibold">Respuesta en 24 horas</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              Contactanos
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-200 mb-4 md:mb-5 font-light px-4">
              Contanos tu caso y un abogado especialista te responderá dentro de las próximas <span className="font-semibold text-white">24 horas</span>.
            </p>
            <p className="text-base md:text-lg text-slate-300 px-4">
              Toda la información que nos envíes será tratada con <span className="font-semibold text-white">estricta confidencialidad</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Formulario - 3 columnas */}
            <div className="lg:col-span-3">
              <div className="bg-white border-2 border-slate-200 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-900">
                  Formulario de consulta
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  {/* Nombre completo */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm md:text-base font-bold mb-2 md:mb-3 text-slate-900">
                      Nombre y apellido <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all shadow-lg text-base md:text-lg"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    />
                  </div>

                  {/* Email y Teléfono */}
                  <div className="grid md:grid-cols-2 gap-5 md:gap-8">
                    <div>
                      <label htmlFor="email" className="block text-sm md:text-base font-bold mb-2 md:mb-3 text-slate-900">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all shadow-lg text-base md:text-lg"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm md:text-base font-bold mb-2 md:mb-3 text-slate-900">
                        Teléfono / WhatsApp <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        required
                        className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all shadow-lg text-base md:text-lg"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Obra Social y Tipo de cirugía */}
                  <div className="grid md:grid-cols-2 gap-5 md:gap-8">
                    <div>
                      <label htmlFor="obraSocial" className="block text-sm md:text-base font-bold mb-2 md:mb-3 text-slate-900">
                        Obra social / Prepaga <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="obraSocial"
                        required
                        placeholder="Ej: OSDE, Swiss Medical, etc."
                        className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all shadow-lg text-base md:text-lg"
                        value={formData.obraSocial}
                        onChange={(e) => setFormData({ ...formData, obraSocial: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="tipoCirugia" className="block text-sm md:text-base font-bold mb-2 md:mb-3 text-slate-900">
                        Tipo de cirugía <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="tipoCirugia"
                        required
                        className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all shadow-lg text-base md:text-lg"
                        value={formData.tipoCirugia}
                        onChange={(e) => setFormData({ ...formData, tipoCirugia: e.target.value })}
                      >
                        <option value="">Seleccioná...</option>
                        <option value="maxilofacial">Cirugía maxilofacial</option>
                        <option value="ortognatica">Cirugía ortognática</option>
                        <option value="mentoplastia">Mentoplastia funcional</option>
                        <option value="reconstruccion">Reconstrucción maxilofacial</option>
                        <option value="otra">Otra cirugía</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className="block text-sm md:text-base font-bold mb-2 md:mb-3 text-slate-900">
                      Contanos brevemente qué pasó <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={6}
                      className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all resize-none shadow-lg text-base md:text-lg"
                      placeholder="Ej: Mi obra social rechazó mi cirugía ortognática hace 3 meses. Tengo la indicación del cirujano maxilofacial y todos los estudios..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    ></textarea>
                  </div>

                  {/* Checkbox de términos */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terminos"
                      required
                      className="mt-1 w-5 h-5 rounded border-2 border-slate-300 text-slate-900 focus:ring-2 focus:ring-slate-900"
                      checked={formData.aceptaTerminos}
                      onChange={(e) => setFormData({ ...formData, aceptaTerminos: e.target.checked })}
                    />
                    <label htmlFor="terminos" className="text-xs md:text-sm text-slate-600">
                      Acepto que la información ingresada será utilizada para responder a mi consulta y será tratada con estricta confidencialidad. <span className="text-red-600">*</span>
                    </label>
                  </div>

                  {/* Botón enviar */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-linear-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white shadow-2xl hover:scale-[1.02] transition-all text-lg md:text-xl py-6 md:py-8 font-bold rounded-2xl"
                  >
                    Enviar consulta gratuita →
                  </Button>

                  <div className="flex items-center justify-center gap-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                    <p className="text-sm md:text-base text-slate-600 font-semibold">
                      Te responderemos en menos de 24 horas
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Información de contacto - 2 columnas */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contacto directo */}
              <div className="bg-linear-to-br from-slate-950 to-slate-800 text-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-2xl border-2 border-slate-700">
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Contacto directo</h3>
                
                <div className="space-y-6 md:space-y-8">
                  {/* WhatsApp */}
                  <div className="flex items-start gap-4 md:gap-5 group cursor-pointer">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white/20 transition-all">
                      <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <p className="font-bold mb-1 md:mb-2 text-base md:text-lg">WhatsApp</p>
                      <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-white transition text-base md:text-lg break-all">
                        +54 9 11 1234-5678
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 md:gap-5 group cursor-pointer">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white/20 transition-all">
                      <Mail className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <p className="font-bold mb-1 md:mb-2 text-base md:text-lg">Email</p>
                      <a href="mailto:contacto@estudiomedico.com" className="text-slate-200 hover:text-white transition text-base md:text-lg break-all">
                        contacto@estudiomedico.com
                      </a>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start gap-4 md:gap-5 group cursor-pointer">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white/20 transition-all">
                      <Phone className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <p className="font-bold mb-1 md:mb-2 text-base md:text-lg">Teléfono</p>
                      <a href="tel:+541112345678" className="text-slate-200 hover:text-white transition text-base md:text-lg">
                        (011) 1234-5678
                      </a>
                    </div>
                  </div>

                  {/* Ubicación */}
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <p className="font-bold mb-1 md:mb-2 text-base md:text-lg">Ubicación</p>
                      <p className="text-slate-200 text-base md:text-lg">
                        Ciudad Autónoma de Buenos Aires
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horario */}
              <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl border-2 border-slate-200">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    <Clock className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-900">Horario de atención</h3>
                    <p className="text-slate-700 mb-2 text-base md:text-lg font-semibold">
                      Lunes a Viernes: 9:00 - 18:00 hs
                    </p>
                    <p className="text-sm md:text-base text-slate-600">
                      Consultas por WhatsApp las 24hs
                    </p>
                  </div>
                </div>
              </div>

              {/* Confidencialidad */}
              <div className="bg-green-50 border-2 border-green-300 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-900 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
                  Confidencialidad garantizada
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Toda la información que nos proporciones es tratada con <span className="font-semibold text-slate-900">total confidencialidad</span> profesional y no será compartida con terceros.
                </p>
              </div>

              {/* CTA WhatsApp */}
              <Button size="lg" asChild className="w-full bg-linear-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-2xl hover:scale-105 transition-all py-6 md:py-7 font-bold text-base md:text-lg rounded-2xl">
                <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                  Escribinos por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
