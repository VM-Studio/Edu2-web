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
                      Consultá tu caso
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
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              
              {/* Cirugía 1 */}
              <div className="group bg-linear-to-br from-white to-slate-50 p-4 md:p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="shrink-0 mx-auto sm:mx-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
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
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-slate-900">Cirugía ortognática</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Corrección de maloclusiones y deformidades maxilares. Una de las más rechazadas con el argumento de &ldquo;estética&rdquo;.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cirugía 2 */}
              <div className="group bg-linear-to-br from-white to-slate-50 p-4 md:p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="shrink-0 mx-auto sm:mx-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
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
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-slate-900">Cirugía maxilofacial</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Intervenciones en mandíbula, maxilar y estructuras faciales por razones funcionales o reconstructivas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cirugía 3 */}
              <div className="group bg-linear-to-br from-white to-slate-50 p-4 md:p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="shrink-0 mx-auto sm:mx-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
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
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-slate-900">Mentoplastia</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Corrección del mentón cuando afecta la mordida, respiración o está asociada a otros problemas maxilares.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cirugía 4 */}
              <div className="group bg-linear-to-br from-white to-slate-50 p-4 md:p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="shrink-0 mx-auto sm:mx-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Scale className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-slate-900">Otras cirugías</h3>
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
            <div className="text-center mb-12 md:mb-16">
              <span className="text-slate-600 font-semibold uppercase tracking-wider text-sm">Proceso Simple</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
                Un proceso simple, nosotros nos encargamos de todo
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative">
              {/* Línea conectora en desktop */}
              <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-slate-300 via-slate-400 to-slate-300"></div>
              
              {/* Paso 1 */}
              <div className="text-center relative">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-linear-to-br from-slate-900 to-slate-700 text-white rounded-2xl flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-4 md:mb-6 shadow-lg relative z-10 transform hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-900">Contactanos</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Nos escribís por WhatsApp o completás el formulario. Te respondemos en menos de 24 horas.
                </p>
              </div>

              {/* Paso 2 */}
              <div className="text-center relative">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-linear-to-br from-slate-900 to-slate-700 text-white rounded-2xl flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-4 md:mb-6 shadow-lg relative z-10 transform hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-900">Evaluamos tu caso</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Nuestro equipo médico-legal analiza tu situación y te decimos si podemos ayudarte.
                </p>
              </div>

              {/* Paso 3 */}
              <div className="text-center relative">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-linear-to-br from-slate-900 to-slate-700 text-white rounded-2xl flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-4 md:mb-6 shadow-lg relative z-10 transform hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-900">Presentamos el amparo</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Armamos toda la documentación y presentamos el reclamo judicial. Vos no tenés que hacer nada.
                </p>
              </div>

              {/* Paso 4 */}
              <div className="text-center relative">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-linear-to-br from-slate-900 to-slate-700 text-white rounded-2xl flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-4 md:mb-6 shadow-lg relative z-10 transform hover:scale-110 transition-transform">
                  4
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-900">Conseguís tu cobertura</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  La justicia ordena a tu obra social que cubra la cirugía. La mayoría de los casos se resuelven en 2 a 4 meses.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 md:mt-16">
              <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-yellow-600/10 text-slate-900 border-2 border-yellow-600/60 hover:border-yellow-600 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-2xl font-semibold">
                <Link href="/contacto">
                  Quiero que evalúen mi caso
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 MODALIDAD DE TRABAJO */}
      <section className="py-16 md:py-24 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-700/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-slate-300 font-semibold uppercase tracking-wider text-sm">Metodología Profesional</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-white">
                Modalidad de Trabajo
              </h2>
              <p className="text-slate-200 mt-6 text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
                Un proceso ordenado, profesional y <span className="font-semibold text-white">100% online</span> para tu comodidad
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
              {/* Paso 1 */}
              <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-6 md:p-8 hover:border-white/40 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center text-slate-900 font-bold text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Consulta profesional y admisión</h3>
                    <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                      Primera evaluación a cargo del <span className="font-semibold text-white">Dr. Eduardo Robles</span>, quien analiza personalmente la viabilidad de tu caso.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-6 md:p-8 hover:border-white/40 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center text-slate-900 font-bold text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Indicaciones y documentación</h3>
                    <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                      Te guiamos en la recolección de toda la documentación necesaria y te damos indicaciones precisas para cada paso del proceso.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-6 md:p-8 hover:border-white/40 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center text-slate-900 font-bold text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Registro y gestiones digitales</h3>
                    <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                      Registro en Correo Argentino y acceso a la plataforma de gestiones de tu obra social. Todo de forma digital y simplificada.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-6 md:p-8 hover:border-white/40 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center text-slate-900 font-bold text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Equipo interdisciplinario</h3>
                    <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                      Articulación con <span className="font-semibold text-white">médicos, psicólogos y/o trabajadora social</span> cuando sea necesario para fundamentar tu caso.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paso 5 */}
              <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-6 md:p-8 hover:border-white/40 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center text-slate-900 font-bold text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform">
                      5
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Asignación del equipo legal</h3>
                    <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                      Puede intervenir el Dr. Robles o cualquiera de los miembros del estudio jurídico según la estrategia definida para tu caso.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paso 6 */}
              <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-6 md:p-8 hover:border-white/40 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center text-slate-900 font-bold text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform">
                      6
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Presentación y seguimiento</h3>
                    <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                      Envío de la demanda y <span className="font-semibold text-white">seguimiento integral</span> por nuestra parte hasta la resolución favorable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Destacado de modalidad online */}
            <div className="text-center">
              <div className="inline-block bg-green-500/20 backdrop-blur-sm border-2 border-green-400/30 rounded-2xl px-6 md:px-8 py-4 md:py-5 mx-4">
                <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-white font-bold text-lg md:text-xl">
                    Modalidad 100% online para tu comodidad
                  </p>
                </div>
                <p className="text-slate-200 text-xs md:text-sm mt-2 md:mt-3">
                  Sin necesidad de traslados. Todo el proceso se gestiona de forma remota.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUIÉNES SOMOS */}
      <section className="py-16 md:py-24 bg-linear-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-slate-600 font-semibold uppercase tracking-wider text-sm">Nuestro Equipo</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
                Un equipo especializado en esto
              </h2>
              <p className="text-slate-600 mt-4 md:mt-6 text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
                No somos un estudio generalista. Nos dedicamos exclusivamente a reclamos de cobertura de salud, y trabajamos con médicos especialistas que entienden tu caso desde lo clínico y lo legal.
              </p>
            </div>

            <div className="max-w-3xl mx-auto px-4">
              {/* Perfil Dr. Eduardo Robles */}
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-1 bg-linear-to-br from-slate-900 to-slate-700 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-40 h-40 md:w-48 md:h-48 bg-linear-to-br from-slate-200 to-slate-300 rounded-2xl mx-auto flex items-center justify-center shadow-xl border border-yellow-600/40">
                    <Scale className="w-20 h-20 md:w-24 md:h-24 text-slate-600" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-slate-900">Dr. Eduardo Robles</h3>
                <p className="text-base md:text-lg font-semibold text-slate-700 mb-4 px-4">Abogado, Diplomado en Derecho a la Salud</p>
                <div className="text-slate-600 leading-relaxed max-w-2xl mx-auto space-y-3 text-left">
                  <p className="text-sm md:text-base">
                    Con <span className="font-semibold text-slate-900">10 años de experiencia en derecho sanitario</span>, el Dr. Robles ha trabajado en distintos roles jurídicos dentro de la Administración Pública, brindándole una comprensión profunda del sistema de salud desde adentro.
                  </p>
                  <p className="text-sm md:text-base">
                    <span className="font-semibold text-slate-900">Ex docente de la Universidad de Buenos Aires (UBA)</span>, combina su experiencia académica con una práctica especializada exclusivamente en reclamos de cobertura médica.
                  </p>
                  <p className="text-sm md:text-base">
                    Es quien <span className="font-semibold text-slate-900">personalmente realiza las evaluaciones iniciales y la admisión de cada caso</span>, garantizando un análisis detallado y estratégico desde el primer contacto.
                  </p>
                </div>
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
            <div className="text-center mb-12 md:mb-16">
              <span className="text-slate-600 font-semibold uppercase tracking-wider text-sm">Resultados Comprobados</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
                Casos de Éxito
              </h2>
              <p className="text-slate-600 mt-4 md:mt-6 text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
                Estos son algunos de los casos que ganamos recientemente, demostrando nuestro compromiso y experiencia en conseguir las coberturas que corresponden por ley.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Caso 1 - Cirugía Ortognática */}
              <div className="bg-linear-to-br from-slate-900 to-slate-800 text-white p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-slate-700 hover:shadow-3xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                {/* Efecto de fondo animado */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] opacity-50"></div>
                
                <div className="relative z-10">
                  {/* Badge superior */}
                  <div className="inline-block px-3 py-1.5 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30 mb-4 md:mb-6">
                    <span className="text-xs font-bold text-green-300 uppercase tracking-wide">Caso Ganado</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Cirugía Ortognática</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs font-bold">✓</span>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Prestación:</span> Cobertura total de cirugía ortognática bimaxilar con cirujano de preferencia
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs font-bold">✓</span>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Obra Social:</span> OSDE (había rechazado argumentando "motivos estéticos")
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs font-bold">✓</span>
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
                  {/* Badge superior */}
                  <div className="inline-block px-3 py-1.5 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30 mb-4 md:mb-6">
                    <span className="text-xs font-bold text-green-300 uppercase tracking-wide">Caso Ganado</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Mentoplastia Funcional</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs font-bold">✓</span>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Prestación:</span> Mentoplastia con cobertura de materiales e implantes
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs font-bold">✓</span>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Obra Social:</span> Swiss Medical (negaba cobertura por considerar la intervención cosmética)
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs font-bold">✓</span>
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
                  {/* Badge superior */}
                  <div className="inline-block px-3 py-1.5 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30 mb-4 md:mb-6">
                    <span className="text-xs font-bold text-green-300 uppercase tracking-wide">Caso Ganado</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Reconstrucción Maxilofacial</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs font-bold">✓</span>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Prestación:</span> Reconstrucción mandibular post-traumática con injerto óseo y placas de titanio
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs font-bold">✓</span>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Obra Social:</span> Galeno (rechazaba materiales específicos argumentando costos elevados)
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs font-bold">✓</span>
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

            {/* Nota estadística */}
            <div className="mt-10 md:mt-12 text-center px-4">
              <div className="inline-block bg-green-50 border-2 border-green-200 px-6 md:px-8 py-3 md:py-4 rounded-2xl">
                <p className="text-slate-700 font-semibold text-base md:text-lg">
                  <span className="text-green-600 font-bold text-xl md:text-2xl">+95%</span> de nuestros casos resultan en sentencias favorables
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

      {/* 7. CTA FINAL + FORMULARIO DE CONTACTO */}
      <HomeContactForm />
    </>
  );
}
