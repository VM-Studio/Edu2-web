'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Scale, Gavel, Play, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import WhatsAppIcon from '@/components/whatsapp-icon';

// Componente FAQ Item con acordeón - Diseño minimalista moderno
function FAQItem({ number, question, answer }: { number: number; question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`group relative bg-white rounded-xl transition-all duration-500 overflow-hidden ${
      isOpen 
        ? 'shadow-[0_8px_30px_rgb(0,0,0,0.12)] scale-[1.01]' 
        : 'shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgb(0,0,0,0.08)]'
    }`}>
      {/* Barra lateral decorativa que crece */}
      <div className={`absolute left-0 top-0 bottom-0 bg-slate-900 transition-all duration-500 ${
        isOpen ? 'w-1.5' : 'w-0 group-hover:w-1'
      }`}></div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left"
      >
        <div className="flex items-center gap-5 md:gap-6 flex-1">
          {/* Número minimalista */}
          <div className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center text-lg md:text-xl font-bold shrink-0 transition-all duration-500 ${
            isOpen 
              ? 'border-slate-900 bg-slate-900 text-white scale-110 rotate-12' 
              : 'border-slate-300 text-slate-400 group-hover:border-slate-400 group-hover:scale-105'
          }`}>
            {number}
          </div>
          
          <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
            isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
          }`}>
            {question}
          </h3>
        </div>
        
        {/* Flecha minimalista */}
        <div className={`shrink-0 transition-all duration-500 ${
          isOpen ? 'rotate-180 text-slate-900' : 'text-slate-400 group-hover:text-slate-600'
        }`}>
          <ChevronDown className="w-6 h-6 md:w-7 md:h-7" />
        </div>
      </button>
      
      {/* Respuesta con animación */}
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
          {/* Fondo sutil para la respuesta */}
          <div className="bg-slate-50 rounded-lg p-5 md:p-6 ml-15 md:ml-18 border-l-4 border-slate-900">
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
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
    <>
      {/* 1. HERO - SIMPLIFICADO */}
      <section className="relative py-12 md:py-16 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
        {/* Efectos de fondo modernos */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-700/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-600/20 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-8">
              
              {/* Primera fila: Título + Video (centrados horizontalmente) */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Título */}
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
                    ¿Tu obra social rechazó cubrir tu cirugía maxilofacial?
                  </h1>
                </div>
                
                {/* Video */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-linear-to-r from-slate-600 to-slate-700 rounded-2xl blur-2xl opacity-50"></div>
                  <div className="relative aspect-video bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
                          <Play className="w-10 h-10 text-white ml-1" />
                        </div>
                        <p className="text-sm text-white font-semibold">Video explicativo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Segunda fila: Subtítulo (ocupa 2 columnas completas) */}
              <div>
                <p className="text-lg md:text-xl text-slate-100 leading-relaxed max-w-5xl">
                  Somos abogados especializados en amparos de salud en Buenos Aires. Nos encargamos de todo el reclamo para que consigas la cobertura que te corresponde por ley.
                </p>
              </div>

              {/* Tercera fila: Botones a la izquierda */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Botón Primario - WhatsApp */}
                <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-base px-8 py-6 rounded-2xl">
                  <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2 h-5 w-5" />
                    Consultá tu caso gratis
                  </a>
                </Button>
                
                {/* Botón Secundario - Scroll */}
                <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-base px-8 py-6 rounded-2xl">
                  <Link href="#como-funciona">
                    Ver cómo funciona
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. CÓMO FUNCIONA */}
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
              <Button size="lg" asChild className="bg-slate-900 hover:bg-slate-800 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-lg px-8 py-6">
                <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Quiero que evalúen mi caso
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUÉ CIRUGÍAS RECLAMAMOS */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-slate-100 rounded-full blur-[100px] opacity-50"></div>
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
              <div className="group bg-linear-to-br from-white to-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Cirugía ortognática</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Corrección de maloclusiones y deformidades maxilares. Una de las más rechazadas con el argumento de &ldquo;estética&rdquo;.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cirugía 2 */}
              <div className="group bg-linear-to-br from-white to-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Gavel className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Cirugía maxilofacial</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Intervenciones en mandíbula, maxilar y estructuras faciales por razones funcionales o reconstructivas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cirugía 3 */}
              <div className="group bg-linear-to-br from-white to-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Mentoplastia</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Corrección del mentón cuando afecta la mordida, respiración o está asociada a otros problemas maxilares.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cirugía 4 */}
              <div className="group bg-linear-to-br from-white to-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Otras cirugías</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Si tu caso no está en la lista, consultanos igual. Evaluamos cada situación.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild className="bg-slate-900 hover:bg-slate-800 shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-lg px-8 py-6">
                <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Consultá por tu cirugía
                </a>
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
                  <div className="absolute -inset-1 bg-linear-to-br from-slate-900 to-slate-700 rounded-full blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-48 h-48 bg-linear-to-br from-slate-200 to-slate-300 rounded-full mx-auto flex items-center justify-center shadow-xl">
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
                  <div className="absolute -inset-1 bg-linear-to-br from-slate-900 to-slate-700 rounded-full blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-48 h-48 bg-linear-to-br from-slate-200 to-slate-300 rounded-full mx-auto flex items-center justify-center shadow-xl">
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
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[120px] opacity-50"></div>
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
                  <svg className="w-12 h-12 text-slate-900/20" fill="currentColor" viewBox="0 0 32 32">
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
                  <svg className="w-12 h-12 text-slate-900/20" fill="currentColor" viewBox="0 0 32 32">
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
                  <svg className="w-12 h-12 text-slate-900/20" fill="currentColor" viewBox="0 0 32 32">
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
      <section id="contacto" className="py-20 md:py-28 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-700/20 rounded-full blur-[150px] animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Tu cirugía no puede esperar. Tu reclamo tampoco.
              </h2>
              <p className="text-xl md:text-2xl text-slate-200 font-light max-w-3xl mx-auto">
                Dejanos tus datos y te contactamos en menos de 24 horas para evaluar tu caso sin compromiso.
              </p>
              <div className="h-1 w-24 bg-white/30 rounded-full mx-auto mt-8"></div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl p-10 md:p-12 rounded-3xl border-2 border-white/20 shadow-2xl hover:border-white/30 transition-all">
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
              <Button size="lg" variant="outline" asChild className="bg-white/5 hover:bg-white/10 text-white border-2 border-white/30 hover:border-white backdrop-blur-sm shadow-xl hover:scale-105 transition-all px-10 py-7 font-semibold text-lg rounded-2xl">
                <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-3 h-6 w-6" />
                  Chatear ahora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
