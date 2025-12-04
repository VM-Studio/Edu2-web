import { Button } from '@/components/ui/button';
import { FileText, Scale, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FAQItem from '@/components/faq-item';
import HomeContactForm from '@/components/home-contact-form';

export default function HomePage() {

  return (
    <>
      {/* 1. HERO - DOS COLUMNAS */}
      <section className="relative py-12 md:py-16 bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden">
        {/* Efectos de fondo modernos - optimizados para móvil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-slate-600/20 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Grid de dos columnas: Izquierda contenido, Derecha video */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Columna Izquierda: Todo el texto y botones */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
                  ¿Tu obra social rechazó cubrir tu cirugía maxilofacial?
                </h1>
                
                <p className="text-lg md:text-xl text-slate-100 leading-relaxed">
                  Somos abogados especializados en amparos de salud en Buenos Aires. Nos encargamos de todo el reclamo para que consigas la cobertura que te corresponde por ley.
                </p>

                {/* Botones */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  {/* Botón Primario */}
                  <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-base px-8 py-6 rounded-2xl font-bold">
                    <Link href="/contacto">
                      Consultá tu caso gratis
                    </Link>
                  </Button>
                  
                  {/* Botón Secundario */}
                  <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-yellow-600/10 text-white border-2 border-yellow-600/60 hover:border-yellow-600 shadow-xl transition-colors text-base px-8 py-6 rounded-2xl font-semibold">
                    <Link href="#como-funciona">
                      Ver cómo funciona
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Columna Derecha: Solo video */}
              <div className="relative">
                <div className="relative aspect-video bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center border-2 border-white/30 hover:scale-110 hover:bg-white/20 transition-transform">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                      <p className="text-sm text-white font-semibold">Video explicativo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUÉ CIRUGÍAS RECLAMAMOS */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="hidden md:block absolute top-0 right-0 w-[300px] h-[300px] bg-slate-100 rounded-full blur-3xl opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Título de sección */}
            <div className="text-center mb-16">
              <span className="text-slate-600 font-semibold uppercase tracking-wider text-sm">Especialización</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">
                Casos en los que podemos ayudarte
              </h2>
            </div>

            {/* Grid de tarjetas */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Cirugía 1 */}
              <div className="group bg-linear-to-br from-white to-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <div className="w-28 h-28 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
                      <Image 
                        src="/orthognathic.gif" 
                        alt="Cirugía ortognática" 
                        width={112} 
                        height={112}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Cirugía ortognática</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Corrección de maloclusiones y deformidades maxilares. Una de las más rechazadas con el argumento de &ldquo;estética&rdquo;.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cirugía 2 */}
              <div className="group bg-linear-to-br from-white to-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <div className="w-28 h-28 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
                      <Image 
                        src="/maxillofacial.gif" 
                        alt="Cirugía maxilofacial" 
                        width={112} 
                        height={112}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Cirugía maxilofacial</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Intervenciones en mandíbula, maxilar y estructuras faciales por razones funcionales o reconstructivas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cirugía 3 */}
              <div className="group bg-linear-to-br from-white to-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <div className="w-28 h-28 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
                      <Image 
                        src="/mentoplastia.gif" 
                        alt="Mentoplastia" 
                        width={112} 
                        height={112}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Mentoplastia</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Corrección del mentón cuando afecta la mordida, respiración o está asociada a otros problemas maxilares.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cirugía 4 */}
              <div className="group bg-linear-to-br from-white to-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <div className="w-28 h-28 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Scale className="w-14 h-14 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Otras cirugías</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Si tu caso no está en la lista, consultanos igual. Evaluamos cada situación.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-16 md:py-24 bg-linear-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-slate-600 font-semibold uppercase tracking-wider text-sm">Proceso Simple</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">
                Un proceso simple, nosotros nos encargamos de todo
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Línea conectora en desktop */}
              <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-slate-300 via-slate-400 to-slate-300"></div>
              
              {/* Paso 1 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-linear-to-br from-slate-900 to-slate-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10 transform hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Contactanos</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nos escribís por WhatsApp o completás el formulario. Te respondemos en menos de 24 horas.
                </p>
              </div>

              {/* Paso 2 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-linear-to-br from-slate-900 to-slate-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10 transform hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Evaluamos tu caso</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nuestro equipo médico-legal analiza tu situación y te decimos si podemos ayudarte.
                </p>
              </div>

              {/* Paso 3 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-linear-to-br from-slate-900 to-slate-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10 transform hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Presentamos el amparo</h3>
                <p className="text-slate-600 leading-relaxed">
                  Armamos toda la documentación y presentamos el reclamo judicial. Vos no tenés que hacer nada.
                </p>
              </div>

              {/* Paso 4 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-linear-to-br from-slate-900 to-slate-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10 transform hover:scale-110 transition-transform">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Conseguís tu cobertura</h3>
                <p className="text-slate-600 leading-relaxed">
                  La justicia ordena a tu obra social que cubra la cirugía. La mayoría de los casos se resuelven en 2 a 4 meses.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-yellow-600/10 text-slate-900 border-2 border-yellow-600/60 hover:border-yellow-600 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-lg px-8 py-6 rounded-2xl font-semibold">
                <Link href="/contacto">
                  Quiero que evalúen mi caso
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUIÉNES SOMOS */}
      <section className="py-16 md:py-24 bg-linear-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-slate-600 font-semibold uppercase tracking-wider text-sm">Nuestro Equipo</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">
                Un equipo especializado en esto
              </h2>
              <p className="text-slate-600 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
                No somos un estudio generalista. Nos dedicamos exclusivamente a reclamos de cobertura de salud, y trabajamos con médicos especialistas que entienden tu caso desde lo clínico y lo legal.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Perfil 1 */}
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-1 bg-linear-to-br from-slate-900 to-slate-700 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-48 h-48 bg-linear-to-br from-slate-200 to-slate-300 rounded-2xl mx-auto flex items-center justify-center shadow-xl border border-yellow-600/40">
                    <Scale className="w-24 h-24 text-slate-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">[Nombre del abogado]</h3>
                <p className="text-slate-600 leading-relaxed max-w-md mx-auto">
                  Abogado especializado en derecho de la salud. [X] años ayudando a pacientes a conseguir la cobertura que les negaron.
                </p>
              </div>

              {/* Perfil 2 */}
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-1 bg-linear-to-br from-slate-900 to-slate-700 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-48 h-48 bg-linear-to-br from-slate-200 to-slate-300 rounded-2xl mx-auto flex items-center justify-center shadow-xl border border-yellow-600/40">
                    <FileText className="w-24 h-24 text-slate-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">[Nombre del médico o segundo profesional]</h3>
                <p className="text-slate-600 leading-relaxed max-w-md mx-auto">
                  [Especialidad]. Trabaja junto al equipo legal para fundamentar cada caso con criterio médico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CASOS DE ÉXITO */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-slate-600 font-semibold uppercase tracking-wider text-sm">Testimonios Reales</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">
                Pacientes que ya lo lograron
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonio 1 */}
              <div className="bg-linear-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all duration-300">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14c0-3.3-2.7-6-6-6zm16 0c-3.3 0-6 2.7-6 6v10h8V14c0-3.3-2.7-6-6-6z"/>
                  </svg>
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed text-lg">
                  &ldquo;Me rechazaron la ortognática dos veces diciendo que era estética. En 3 meses tenía la orden judicial y me operé con cobertura total.&rdquo;
                </p>
                <p className="text-slate-900 font-bold">
                  — María L., cirugía ortognática
                </p>
              </div>

              {/* Testimonio 2 */}
              <div className="bg-linear-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all duration-300">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14c0-3.3-2.7-6-6-6zm16 0c-3.3 0-6 2.7-6 6v10h8V14c0-3.3-2.7-6-6-6z"/>
                  </svg>
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed text-lg">
                  &ldquo;No sabía que podía reclamar. Me contacté sin muchas esperanzas y hoy ya estoy operado. Se encargaron de todo.&rdquo;
                </p>
                <p className="text-slate-900 font-bold">
                  — Gonzalo R., cirugía maxilofacial
                </p>
              </div>

              {/* Testimonio 3 */}
              <div className="bg-linear-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl hover:border-slate-300 transition-all duration-300">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14c0-3.3-2.7-6-6-6zm16 0c-3.3 0-6 2.7-6 6v10h8V14c0-3.3-2.7-6-6-6z"/>
                  </svg>
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed text-lg">
                  &ldquo;Mi prepaga me daba vueltas hace más de un año. Con el amparo, en 2 meses estaba resuelto.&rdquo;
                </p>
                <p className="text-slate-900 font-bold">
                  — Carolina M., mentoplastia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PREGUNTAS FRECUENTES */}
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
                answer="No. Evaluamos tu caso sin cargo y te decimos si podemos ayudarte."
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

      {/* 7. CTA FINAL + FORMULARIO DE CONTACTO */}
      <HomeContactForm />
    </>
  );
}
