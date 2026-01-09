import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';
import FAQItem from '@/components/faq-item';

export const metadata: Metadata = {
  title: "Casos de Éxito | Resultados Reales - Salud Legal",
  description: "Conocé los casos que ganamos: cirugías ortognáticas, mentoplastias y reconstrucciones maxilofaciales. +95% de sentencias favorables.",
};

export default function CasosDeExitoPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
              Casos de Éxito
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 font-light leading-relaxed">
              Estos son algunos de los casos que ganamos recientemente, demostrando nuestro compromiso y experiencia en conseguir las coberturas que corresponden por ley.
            </p>
          </div>
        </div>
      </section>

      {/* Casos de Éxito - Sección Completa */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Caso 1 - Cirugía Ortognática */}
              <div className="bg-linear-to-br from-slate-900 to-slate-800 text-white p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-slate-700 hover:shadow-3xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                {/* Efecto de fondo animado */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] opacity-50"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Cirugía Ortognática</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-green-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Prestación:</span> Cobertura total de cirugía ortognática bimaxilar con cirujano de preferencia
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-green-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Obra Social:</span> OSDE (había rechazado argumentando "motivos estéticos")
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-green-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Resultado:</span> Sentencia favorable en 3 meses. Cirugía realizada con 100% de cobertura
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-slate-400 italic">
                      El paciente presentaba maloclusión clase III y apnea del sueño. Logramos demostrar la necesidad médica funcional.
                    </p>
                  </div>
                </div>
              </div>

              {/* Caso 2 - Mentoplastia Funcional */}
              <div className="bg-linear-to-br from-slate-900 to-slate-800 text-white p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-slate-700 hover:shadow-3xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                {/* Efecto de fondo animado */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] opacity-50"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Mentoplastia Funcional</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-green-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Prestación:</span> Mentoplastia con cobertura de materiales e implantes
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-green-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Obra Social:</span> Swiss Medical (negaba cobertura por considerar la intervención cosmética)
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-green-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Resultado:</span> Amparo concedido en 2.5 meses. Cirugía autorizada con el profesional elegido por el paciente
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-slate-400 italic">
                      Retrognatismo mandibular severo con disfunción de ATM y dificultades respiratorias documentadas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Caso 3 - Reconstrucción Maxilofacial */}
              <div className="bg-linear-to-br from-slate-900 to-slate-800 text-white p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-slate-700 hover:shadow-3xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                {/* Efecto de fondo animado */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] opacity-50"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Reconstrucción Maxilofacial</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-green-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Prestación:</span> Reconstrucción mandibular post-traumática con injerto óseo y placas de titanio
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-green-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Obra Social:</span> Galeno (rechazaba materiales específicos argumentando costos elevados)
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-green-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Resultado:</span> Medida cautelar urgente concedida en 15 días. Cirugía realizada con todos los materiales necesarios
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-slate-400 italic">
                      Secuela de accidente con fractura mandibular compleja. Urgencia médica que requirió acción judicial inmediata.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 md:py-24 bg-linear-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-slate-600 font-semibold uppercase tracking-wider text-sm">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">
                Dudas frecuentes
              </h2>
            </div>

            <div className="space-y-4">
              <FAQItem 
                number={1}
                question="¿La consulta inicial tiene costo?"
                answer="Evaluamos tu caso y te decimos si podemos ayudarte."
              />

              <FAQItem 
                number={2}
                question="¿Cuánto tarda el proceso?"
                answer="La mayoría de los amparos se resuelven entre 2 y 4 meses. Depende del caso y del juzgado."
              />

              <FAQItem 
                number={3}
                question="¿Funciona con cualquier obra social o prepaga?"
                answer="Sí. Trabajamos con obras sociales, prepagas y también con PAMI."
              />

              <FAQItem 
                number={4}
                question="¿Necesito tener el rechazo por escrito?"
                answer="Ayuda, pero no es obligatorio. Si te lo negaron de palabra o te dan vueltas sin respuesta formal, también podemos actuar."
              />

              <FAQItem 
                number={5}
                question="¿Y si pierdo el caso?"
                answer="La tasa de éxito en amparos de salud es muy alta. Te explicamos los riesgos antes de avanzar."
              />
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
              ¿Tu caso puede ser el próximo éxito?
            </h2>
            <p className="text-lg md:text-xl text-slate-200 mb-8 font-light">
              Evaluamos tu situación y te decimos si es viable. El primer paso es contactarnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100 shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all px-8 py-6 font-bold text-base rounded-2xl">
                <Link href="/contacto">Consultá tu caso →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
