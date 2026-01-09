import { Button } from '@/components/ui/button';
import { Scale, Play } from 'lucide-react';
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
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl mx-auto overflow-hidden shadow-xl border-4 border-slate-200">
                    <Image 
                      src="/abogado.png" 
                      alt="Dr. Eduardo Robles - Abogado especializado en Derecho a la Salud" 
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-slate-900">Dr. Eduardo Robles</h3>
                <p className="text-base md:text-lg font-semibold text-slate-700 mb-6 md:mb-8 px-4">Abogado, Diplomado en Derecho a la Salud</p>
                <div className="text-slate-600 leading-relaxed max-w-2xl mx-auto space-y-5 md:space-y-6 text-left">
                  <p className="text-sm md:text-base">
                    Con <span className="font-semibold text-slate-900">10 años de experiencia en derecho sanitario</span>, el Dr. Robles ha trabajado en distintos roles jurídicos dentro de la Administración Pública, brindándole una comprensión profunda del sistema de salud desde adentro.
                  </p>
                  <p className="text-sm md:text-base">
                    <span className="font-semibold text-slate-900">Ex docente de la Universidad de Buenos Aires (UBA)</span>, combina su experiencia académica con una práctica especializada exclusivamente en reclamos de cobertura médica.
                  </p>
                  <p className="text-sm md:text-base">
                    Es quien <span className="font-semibold text-slate-900">personalmente realiza las evaluaciones iniciales y la admisión de cada caso</span>, garantizando un análisis detallado y estratégico desde el primer contacto.
                  </p>
                  <p className="text-sm md:text-base">
                    Su enfoque se centra en entender no solo los aspectos legales, sino también las implicancias médicas de cada procedimiento, trabajando de manera interdisciplinaria con profesionales de la salud para construir argumentos sólidos que respalden el derecho de cada paciente a recibir la atención que necesita.
                  </p>
                  <p className="text-sm md:text-base">
                    El equipo del estudio cuenta con abogados especializados en derecho sanitario y constitucional, así como con una red de profesionales médicos y psicólogos que colaboran en la evaluación y fundamentación de cada caso particular.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor sutil entre secciones */}
      <div className="relative h-8 bg-linear-to-b from-white via-slate-50 to-white">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200/60"></div>
        </div>
      </div>

      {/* 5. CASOS DE ÉXITO - PREVIEW */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Contenido centrado - sin imagen */}
            <div className="max-w-4xl mx-auto">
              
              {/* Contenido y CTA */}
              <div className="space-y-6 text-center">
                <div>
                  <span className="text-slate-600 font-semibold uppercase tracking-wider text-sm">Resultados Comprobados</span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
                    Casos de Éxito
                  </h2>
                </div>
                
                <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                  Conocé los casos reales que ganamos: cirugías ortognáticas, mentoplastias funcionales y reconstrucciones maxilofaciales. Cada caso representa una victoria para nuestros clientes y la defensa del derecho a la salud.
                </p>

                {/* Mini preview de casos */}
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="flex flex-col items-center gap-3 bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-green-500 hover:shadow-md transition-all">
                    <div className="w-5 h-5 rounded-md border-2 border-green-600 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-slate-900 mb-1">Cirugía Ortognática</p>
                      <p className="text-sm text-slate-600">OSDE - Sentencia en 3 meses</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3 bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-green-500 hover:shadow-md transition-all">
                    <div className="w-5 h-5 rounded-md border-2 border-green-600 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-slate-900 mb-1">Mentoplastia Funcional</p>
                      <p className="text-sm text-slate-600">Swiss Medical - Amparo en 2.5 meses</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3 bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-green-500 hover:shadow-md transition-all">
                    <div className="w-5 h-5 rounded-md border-2 border-green-600 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-slate-900 mb-1">Reconstrucción Maxilofacial</p>
                      <p className="text-sm text-slate-600">Galeno - Cautelar en 15 días</p>
                    </div>
                  </div>
                </div>

                {/* Botón Leer Más */}
                <div className="pt-6">
                  <Button size="lg" asChild className="bg-linear-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-base md:text-lg px-8 py-6 rounded-2xl font-bold">
                    <Link href="/casos-de-exito">
                      Ver todos los casos de éxito →
                    </Link>
                  </Button>
                </div>
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
