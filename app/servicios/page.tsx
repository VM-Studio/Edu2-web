import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Gavel, Scale, ArrowRight, Clock, Shield, Target } from 'lucide-react';
import type { Metadata } from 'next';
import WhatsAppIcon from '@/components/whatsapp-icon';

export const metadata: Metadata = {
  title: "Servicios | Cirugías que Reclamamos - Salud Legal",
  description: "Reclamamos cirugía ortognática, mentoplastia funcional, reconstrucciones maxilofaciales y más. Consulta gratis sin cargo.",
};

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-5">
              <span className="text-xs font-semibold">Especialistas en reclamos médicos</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Cirugías que reclamamos
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 font-light">
              Si tu cirugía tiene indicación médica, podemos reclamarla. Trabajamos <span className="font-semibold text-white">exclusivamente</span> en reclamos de cobertura de salud.
            </p>
            <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100 shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all px-8 py-6 font-bold text-base rounded-2xl">
              <a href="#contacto">
                Consulta gratis <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Nuestras especialidades
              </h2>
              <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                Casos en los que tenemos <span className="font-semibold text-slate-900">mayor experiencia y éxito</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Servicio 1 */}
              <div className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-slate-200 hover:border-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Cirugía ortognática</h3>
                <p className="text-base text-slate-600 mb-5 leading-relaxed">
                  La cirugía <span className="font-semibold text-slate-900">más rechazada</span> y la que más experiencia tenemos recuperando. Se utiliza para corregir deformidades maxilomandibulares que afectan:
                </p>
                <ul className="space-y-2.5 mb-5">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Mordida y masticación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Respiración (apnea del sueño)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Función de la articulación temporomandibular (ATM)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Fonación y deglución</span>
                  </li>
                </ul>
                <div className="bg-slate-50 border-l-4 border-slate-900 p-4 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">Importante:</strong> Las obras sociales suelen rechazarla catalogándola como &ldquo;estética&rdquo;, pero cuando hay indicación médica, la cobertura es obligatoria según la Ley 26.682.
                  </p>
                </div>
              </div>

              {/* Servicio 2 */}
              <div className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-slate-200 hover:border-slate-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Mentoplastia funcional</h3>
                <p className="text-base text-slate-600 mb-5 leading-relaxed">
                  Cirugía de mentón cuando existe retrognatia (mentón hacia atrás) o prognatismo que genera problemas funcionales:
                </p>
                <ul className="space-y-2.5 mb-5">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Dificultad en la masticación</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Problemas respiratorios</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Disfunción de la ATM</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Alteraciones fonéticas</span>
                  </li>
                </ul>
                <div className="bg-slate-50 border-l-4 border-slate-900 p-4 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">Clave:</strong> Es fundamental demostrar el componente funcional con estudios médicos (cefalometría, estudios del sueño, evaluación de ATM).
                  </p>
                </div>
              </div>

              {/* Servicio 3 */}
              <div className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-slate-200 hover:border-slate-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Gavel className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Reconstrucciones maxilofaciales</h3>
                <p className="text-base text-slate-600 mb-5 leading-relaxed">
                  Cirugías reconstructivas complejas en casos de:
                </p>
                <ul className="space-y-2.5 mb-5">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Secuelas post-traumáticas (accidentes, golpes)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Post-resección tumoral (cáncer)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Malformaciones congénitas (labio leporino, fisuras)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Síndromes craneofaciales</span>
                  </li>
                </ul>
                <div className="bg-slate-50 border-l-4 border-slate-900 p-4 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">Cobertura:</strong> Estos casos suelen tener menos trabas, pero muchas veces la obra social niega materiales específicos o el equipo quirúrgico completo.
                  </p>
                </div>
              </div>

              {/* Servicio 4 */}
              <div className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-slate-200 hover:border-slate-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Otras cirugías maxilofaciales</h3>
                <p className="text-base text-slate-600 mb-5 leading-relaxed">
                  También reclamamos otras intervenciones con indicación médica:
                </p>
                <ul className="space-y-2.5 mb-5">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Cirugía de ATM (articulación temporomandibular)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Implantes dentales post-oncológicos</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Extracciones complejas con indicación médica</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">Tratamientos de patologías de glándulas salivales</span>
                  </li>
                </ul>
                <div className="bg-slate-50 border-l-4 border-slate-900 p-4 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">¿No ves tu caso?</strong> Consultanos igual. Evaluamos cada situación de forma gratuita.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 md:py-20 bg-linear-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
              ¿Por qué elegirnos?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group text-center bg-white p-5 rounded-xl shadow-md border-2 border-slate-200 hover:border-slate-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Especialización exclusiva</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  No somos un estudio generalista. Nos dedicamos <span className="font-semibold text-slate-900">100%</span> a reclamos de cobertura de salud.
                </p>
              </div>

              <div className="group text-center bg-white p-5 rounded-xl shadow-md border-2 border-slate-200 hover:border-slate-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Sin honorarios anticipados</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Solo cobramos si ganamos. Nuestro éxito está <span className="font-semibold text-slate-900">directamente ligado</span> al tuyo.
                </p>
              </div>

              <div className="group text-center bg-white p-5 rounded-xl shadow-md border-2 border-slate-200 hover:border-slate-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Respuesta rápida</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Evaluamos tu caso en <span className="font-semibold text-slate-900">menos de 24 horas</span> y te decimos si es viable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              ¿Tu caso no está en la lista?
            </h2>
            <p className="text-lg md:text-xl text-slate-200 mb-8 font-light">
              Consultanos igual. Si tu cirugía tiene indicación médica, podemos evaluar el reclamo de forma <span className="font-semibold text-white">completamente gratuita</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100 shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all px-8 py-6 font-bold text-base rounded-2xl">
                <a href="/contacto">Consulta gratis →</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/5 hover:bg-white/10 text-white border-2 border-white/30 hover:border-white backdrop-blur-sm shadow-xl hover:scale-105 transition-all px-8 py-6 font-semibold text-base rounded-2xl">
                <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
