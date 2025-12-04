import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | Derecho a la Salud y Cobertura Médica - Salud Legal",
  description: "Artículos sobre tus derechos como paciente, cómo reclamar cobertura de cirugías y qué hacer si tu obra social rechaza tu tratamiento.",
};

// Array de artículos del blog
const articulos = [
  {
    id: 1,
    slug: "que-hacer-si-obra-social-rechaza-cirugia-maxilofacial",
    titulo: "¿Qué hacer si tu obra social rechaza una cirugía maxilofacial?",
    extracto: "Te explicamos paso a paso qué acciones tomar cuando tu obra social o prepaga niega la cobertura de una cirugía maxilofacial con indicación médica.",
    fecha: "2025-01-15",
    categoria: "Guías Prácticas",
    tiempoLectura: "5 min",
  },
  /*{
    id: 2,
    slug: "diferencia-cirugia-estetica-funcional-reclamos",
    titulo: "Diferencia entre cirugía estética y funcional en los reclamos de cobertura",
    extracto: "Una de las excusas más comunes de las obras sociales es catalogar cirugías funcionales como estéticas. Aprende a diferenciarlas y a defender tu caso.",
    fecha: "2025-01-10",
    categoria: "Conceptos Legales",
    tiempoLectura: "6 min",
  },
  {
    id: 3,
    slug: "como-funciona-amparo-salud-argentina",
    titulo: "Cómo funciona un amparo de salud en Argentina para cirugías ortognáticas",
    extracto: "El amparo es una herramienta legal rápida y efectiva para conseguir cobertura. Te contamos cómo funciona, cuánto tarda y qué necesitás.",
    fecha: "2025-01-05",
    categoria: "Procedimientos",
    tiempoLectura: "7 min",
  },
  {
    id: 4,
    slug: "documentos-necesarios-reclamar-cobertura-prepaga",
    titulo: "Qué documentos necesitás para reclamar cobertura a tu prepaga",
    extracto: "Lista completa de documentación médica y administrativa que vas a necesitar para iniciar un reclamo exitoso contra tu obra social o prepaga.",
    fecha: "2024-12-28",
    categoria: "Guías Prácticas",
    tiempoLectura: "4 min",
  },
  {
    id: 5,
    slug: "cobertura-mentoplastia-cuando-obra-social-debe-cubrirla",
    titulo: "Cobertura de mentoplastia: cuándo la obra social debe cubrirla",
    extracto: "La mentoplastia no siempre es estética. Cuando tiene indicación funcional (problemas de mordida, respiración o ATM), tu obra social debe cubrirla.",
    fecha: "2024-12-20",
    categoria: "Tipos de Cirugías",
    tiempoLectura: "5 min",
  },
  {
    id: 6,
    slug: "ley-26682-pmo-que-cubre-obra-social",
    titulo: "Ley 26.682 y PMO: qué está obligada a cubrir tu obra social",
    extracto: "Conocé tus derechos según la legislación argentina. El Programa Médico Obligatorio establece coberturas mínimas que toda obra social debe cumplir.",
    fecha: "2024-12-15",
    categoria: "Marco Legal",
    tiempoLectura: "8 min",
  },*/
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="text-sm font-semibold">Blog de Derecho a la Salud</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Conocé tus derechos
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-light">
              Artículos educativos sobre cobertura de salud, reclamos a obras sociales y amparos para cirugías maxilofaciales.
            </p>
          </div>
        </div>
      </section>

      {/* Listado de artículos */}
      <section className="py-24 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articulos.map((articulo) => (
                <Link
                  key={articulo.id}
                  href={`/blog/${articulo.slug}`}
                  className="group"
                >
                  <article className="h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col border border-slate-100 hover:border-slate-200">
                    {/* Imagen placeholder con overlay gradiente */}
                    <div className="relative h-52 bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
                      
                      {/* Categoría flotante */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white border-2 border-yellow-600 text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg">
                          {articulo.categoria}
                        </span>
                      </div>
                      
                      {/* Overlay gradiente sutil */}
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
                    </div>

                    {/* Contenido */}
                    <div className="flex flex-col flex-1 p-6">
                      {/* Metadata compacta */}
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(articulo.fecha).toLocaleDateString('es-AR', { day: 'numeric', month: 'short' })}</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span className="font-semibold">{articulo.tiempoLectura}</span>
                        </div>
                      </div>

                      {/* Título */}
                      <h2 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-slate-700 transition-colors leading-tight line-clamp-3">
                        {articulo.titulo}
                      </h2>

                      {/* Extracto */}
                      <p className="text-slate-600 mb-5 leading-relaxed text-sm line-clamp-3 flex-1">
                        {articulo.extracto}
                      </p>

                      {/* Link con flecha */}
                      <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm group-hover:gap-3 transition-all pt-2 border-t border-slate-100">
                        <span>Leer artículo</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Mensaje si necesitas más artículos */}
            <div className="text-center mt-20">
              <div className="inline-block bg-white border-2 border-slate-200 rounded-3xl p-12 max-w-3xl shadow-2xl hover:border-slate-900 transition-all hover:-translate-y-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">
                  ¿Tenés dudas sobre tu caso?
                </h3>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Si no encontraste la respuesta que buscabas, contactanos directamente y te asesoramos <span className="font-semibold text-slate-900">sin cargo</span>.
                </p>
                <Button size="lg" asChild className="bg-linear-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 shadow-2xl hover:scale-105 transition-all px-10 py-7 font-bold text-lg rounded-2xl">
                  <Link href="/contacto">
                    Consulta gratuita →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
