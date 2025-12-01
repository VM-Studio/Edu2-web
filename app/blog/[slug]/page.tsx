import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "¿Qué hacer si tu obra social rechaza una cirugía maxilofacial? | Blog",
  description: "Guía completa paso a paso sobre qué hacer cuando tu obra social rechaza tu cirugía maxilofacial. Conocé tus derechos y opciones legales.",
};

export default function ArticuloBlogPage() {
  return (
    <>
      {/* Header del artículo */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href="/blog" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition">
                <ArrowLeft className="w-4 h-4" />
                Volver al blog
              </Link>
            </div>

            {/* Categoría */}
            <div className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold mb-6">
              Guías Prácticas
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              ¿Qué hacer si tu obra social rechaza una cirugía maxilofacial?
            </h1>

            {/* Metadata */}
            <div className="flex items-center gap-6 text-slate-600 mb-8 pb-8 border-b-2 border-slate-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>15 de enero de 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5 minutos de lectura</span>
              </div>
            </div>

            {/* Contenido del artículo */}
            <div className="prose prose-lg max-w-none">
              {/* Introducción */}
              <div className="bg-slate-50 border-l-4 border-slate-900 p-6 rounded-r-xl mb-8">
                <p className="text-lg text-slate-700 font-medium mb-0">
                  <strong>Situación común:</strong> Tu médico te indicó una cirugía maxilofacial por problemas funcionales (mordida, respiración, ATM), pero tu obra social o prepaga la rechazó diciendo que es &ldquo;estética&rdquo; o que &ldquo;no está cubierta&rdquo;.
                </p>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed">
                Esta es una de las situaciones más frustrantes que puede enfrentar un paciente. Te sentís impotente, enojado y sin saber qué hacer. La buena noticia es que <strong>tenés derechos concretos y herramientas legales</strong> para que tu obra social cumpla con la cobertura que te corresponde.
              </p>

              {/* Paso 1 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900">
                1. No te quedes solo con el &ldquo;NO&rdquo;
              </h2>
              <p className="text-slate-600 leading-relaxed">
                El primer error que cometen muchos pacientes es aceptar el rechazo sin más. Si tu cirugía tiene <strong>indicación médica</strong>, no es opcional para la obra social: <strong>es obligatoria</strong> según la Ley 26.682 y el Programa Médico Obligatorio (PMO).
              </p>

              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Lo que tenés que saber
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Si hay <strong>indicación médica</strong>, no pueden catalogarla como estética</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Tenés derecho a una <strong>segunda opinión médica</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>La obra social tiene <strong>plazos límite</strong> para responder</span>
                  </li>
                </ul>
              </div>

              {/* Paso 2 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900">
                2. Pedí el rechazo por escrito
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Esto es clave. Si te dijeron que no de forma verbal (por teléfono, en una ventanilla), <strong>exigí que te lo den por escrito</strong>. Necesitás ese documento para poder reclamar.
              </p>
              <p className="text-slate-600 leading-relaxed">
                El rechazo debe incluir:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>El <strong>motivo específico</strong> del rechazo</li>
                <li>La <strong>normativa</strong> que supuestamente lo ampara</li>
                <li>La <strong>vía de reclamo</strong> que podés seguir</li>
              </ul>

              {/* Paso 3 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900">
                3. Reuní toda la documentación médica
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Para avanzar con un reclamo, vas a necesitar:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3">Documentación clínica</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Prescripción médica detallada</li>
                    <li>• Historia clínica</li>
                    <li>• Estudios complementarios (cefalometría, tomografías, estudios del sueño)</li>
                    <li>• Informes de interconsultas</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3">Documentación administrativa</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Carta de rechazo de la obra social</li>
                    <li>• Credencial de afiliado</li>
                    <li>• Comprobantes de pago de cuota</li>
                    <li>• Reclamos previos (si los hiciste)</li>
                  </ul>
                </div>
              </div>

              {/* Paso 4 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900">
                4. Iniciá el reclamo formal
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Hay dos vías principales:
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-white border-2 border-slate-900 p-6 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-lg mb-3">Opción A: Reclamo administrativo</h4>
                  <p className="text-slate-600 mb-3">
                    Presentar un reclamo formal ante la Superintendencia de Servicios de Salud o el área de reclamos de tu obra social.
                  </p>
                  <div className="flex items-start gap-2 text-sm">
                    <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600"><strong>Desventaja:</strong> Puede ser lento (meses) y muchas veces no resuelve el problema.</span>
                  </div>
                </div>

                <div className="bg-white border-2 border-green-600 p-6 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-lg mb-3">Opción B: Amparo de salud (recomendado)</h4>
                  <p className="text-slate-600 mb-3">
                    Es una acción judicial rápida. Un juez ordena a la obra social que brinde la cobertura mientras se resuelve el caso de fondo.
                  </p>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-slate-600"><strong>Ventaja:</strong> Se resuelve en 2-4 meses promedio y tiene alta tasa de éxito.</span>
                  </div>
                </div>
              </div>

              {/* Paso 5 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900">
                5. Consultá con un abogado especialista
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Los reclamos de salud tienen particularidades técnicas y plazos estrictos. Un abogado especializado en derecho de la salud puede:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-8">
                <li>Analizar tu caso y decirte si es viable</li>
                <li>Preparar toda la documentación legal</li>
                <li>Presentar el amparo ante el juzgado correcto</li>
                <li>Acompañarte en todo el proceso hasta obtener la orden judicial</li>
              </ul>

              {/* CTA Final */}
              <div className="bg-linear-to-br from-slate-950 to-slate-800 text-white p-10 rounded-3xl my-12">
                <h3 className="text-2xl font-bold mb-4">
                  ¿Te rechazaron tu cirugía?
                </h3>
                <p className="text-slate-300 mb-6 text-lg">
                  Evaluamos tu caso sin costo. Si es viable, te acompañamos en todo el proceso sin honorarios por adelantado.
                </p>
                <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100">
                  <Link href="/contacto">
                    Consulta gratuita
                  </Link>
                </Button>
              </div>

              {/* Conclusión */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900">
                Conclusión
              </h2>
              <p className="text-slate-600 leading-relaxed">
                El rechazo de una cirugía maxilofacial <strong>no es definitivo</strong>. Tenés herramientas legales concretas para defender tu derecho a la salud. Lo más importante es actuar rápido, reunir la documentación correcta y contar con asesoramiento especializado.
              </p>
              <p className="text-slate-600 leading-relaxed">
                No estás solo en esto. Hay profesionales que se dedican exclusivamente a ayudar a pacientes en tu situación.
              </p>
            </div>

            {/* Navegación artículos relacionados */}
            <div className="mt-16 pt-8 border-t-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">
                Artículos relacionados
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/diferencia-cirugia-estetica-funcional-reclamos" className="group p-6 border-2 border-slate-200 rounded-xl hover:border-slate-900 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2 text-slate-900 group-hover:text-slate-700">
                    Diferencia entre cirugía estética y funcional
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Aprende a diferenciarlas y a defender tu caso.
                  </p>
                </Link>
                <Link href="/blog/como-funciona-amparo-salud-argentina" className="group p-6 border-2 border-slate-200 rounded-xl hover:border-slate-900 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-lg mb-2 text-slate-900 group-hover:text-slate-700">
                    Cómo funciona un amparo de salud
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Todo lo que necesitás saber sobre el proceso de amparo.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
