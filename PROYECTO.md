# Salud Legal - Web de Estudio Jurídico

Sitio web profesional para estudio jurídico especializado en reclamos de cobertura de salud y amparos para cirugías maxilofaciales.

## 🎯 Objetivo del Sitio

Landing comercial y de autoridad experta para:
- Atraer pacientes con rechazo de cobertura para cirugías maxilofaciales/ortognáticas/mentoplastia
- Explicar en lenguaje simple el proceso de reclamo legal (amparo)
- Generar contactos calificados (formularios, WhatsApp, llamadas)

**Métrica mental**: Que cada visita entienda en 10 segundos que este abogado está especializado justo en su problema.

## 🏗️ Estructura del Sitio

### Páginas Principales

#### 1. **Inicio** (`/`)
- ✅ Hero con H1 claro y CTAs destacados
- ✅ Sección "Así trabajamos" (4 pasos)
- ✅ "Problemas típicos" (3 casos comunes)
- ✅ Cirugías que reclamamos (4 tipos)
- ✅ Equipo profesional
- ✅ Testimonios de pacientes
- ✅ FAQ (5 preguntas)
- ✅ Formulario de contacto final

#### 2. **Servicios** (`/servicios`)
- ✅ Intro general sobre especialización
- ✅ 4 servicios detallados:
  - Cirugía ortognática
  - Mentoplastia funcional
  - Reconstrucciones maxilofaciales
  - Otras cirugías
- ✅ "Por qué elegirnos" (3 beneficios)
- ✅ CTAs específicos

#### 3. **Blog** (`/blog`)
- ✅ Listado de 6 artículos educativos
- ✅ Títulos SEO-friendly sobre derechos de cobertura
- ✅ Metadata (fecha, tiempo lectura, categoría)
- ✅ Página de artículo individual (`/blog/[slug]`)
- ✅ Artículos relacionados

**Artículos incluidos:**
1. ¿Qué hacer si tu obra social rechaza una cirugía maxilofacial?
2. Diferencia entre cirugía estética y funcional
3. Cómo funciona un amparo de salud en Argentina
4. Qué documentos necesitás para reclamar cobertura
5. Cobertura de mentoplastia: cuándo la obra social debe cubrirla
6. Ley 26.682 y PMO: qué está obligada a cubrir tu obra social

#### 4. **Contacto** (`/contacto`)
- ✅ Formulario completo con campos:
  - Nombre completo
  - Email
  - Teléfono/WhatsApp
  - Obra social/Prepaga
  - Tipo de cirugía (dropdown)
  - Mensaje
  - Checkbox de términos
- ✅ Información de contacto directo
- ✅ Horarios de atención
- ✅ Aviso de confidencialidad

#### 5. **Gracias** (`/gracias`)
- ✅ Página de confirmación post-formulario
- ✅ Mensaje de éxito
- ✅ CTA a WhatsApp y volver al inicio

### Componentes Globales

#### Header
- Logo "Salud Legal" con ícono de balanza
- Navegación: Inicio | Servicios | Blog | Contacto
- Botón destacado "Consulta gratis"
- Botón WhatsApp
- Menú hamburguesa responsive

#### Footer
- 4 columnas:
  - Información del estudio
  - Enlaces principales
  - Servicios
  - Contacto
- Links a redes sociales
- Datos legales

#### WhatsApp Button (Flotante)
- Botón fijo en esquina inferior derecha
- Animación pulse
- Visible en todas las páginas
- Link a WhatsApp Business

## 🎨 Stack Tecnológico

- **Framework**: Next.js 16 con App Router
- **Lenguaje**: TypeScript
- **Estilo**: Tailwind CSS v4
- **Componentes UI**: shadcn/ui (Button, Input, Textarea)
- **Iconos**: lucide-react
- **Fuente**: Inter (Google Fonts)
- **Utilidades**: clsx, tailwind-merge, class-variance-authority

## 🎨 Diseño y UX

### Paleta de Colores
- **Principal**: Slate 900/950 (confianza, seriedad)
- **Secundario**: Slate 50-300 (fondos limpios)
- **Acentos**: Verde 600 (WhatsApp), Rojo 50-600 (alertas)
- **Texto**: Slate 600-900

### Características de Diseño
- ✅ Mobile-first responsive
- ✅ Animaciones suaves (hover states, transitions)
- ✅ Cards con bordes y sombras sutiles
- ✅ Gradientes modernos en heroes
- ✅ Iconografía minimalista
- ✅ Espaciado amplio y legible

### Accesibilidad
- Contraste adecuado (WCAG)
- Tamaño de letra legible (16-18px base)
- Botones con tamaño táctil adecuado
- Estructura semántica HTML5

## 📱 Tono de Comunicación

### Público Objetivo
- Pacientes (o familiares) de Buenos Aires
- Con cirugías indicadas: maxilofacial, ortognática, mentoplastia
- Obras sociales/prepagas que rechazaron cobertura
- Personas frustradas, confundidas, con miedo

### Estilo
- ✅ **Empático y claro**, sin tecnicismos
- ✅ Mensajes clave:
  - "No estás solo, esto pasa mucho"
  - "Tenés derechos concretos"
  - "Hay un equipo que sabe cómo resolverlo"
- ✅ Enfoque en soluciones, no en problemas
- ✅ Llamados a la acción directos y claros

## 🔍 SEO y Palabras Clave

### Keywords Principales
- "Abogado cirugías maxilofaciales Buenos Aires"
- "Reclamo cobertura cirugía maxilofacial obra social"
- "Amparo salud cirugía ortognática"
- "Abogado reclamos obras sociales Buenos Aires"

### Optimizaciones Implementadas
- ✅ H1 único por página
- ✅ Meta titles descriptivos
- ✅ Meta descriptions atractivas
- ✅ Open Graph tags (layout principal)
- ✅ URLs limpias y semánticas
- ✅ Estructura de headings jerárquica

## 🚀 Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 📦 Dependencias Principales

```json
{
  "next": "16.0.6",
  "react": "19.2.0",
  "typescript": "~5.7.2",
  "tailwindcss": "4.0.0-beta.16",
  "@radix-ui/react-slot": "^1.1.1",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0",
  "lucide-react": "^0.469.0"
}
```

## 📁 Estructura de Archivos

```
edu2-web/
├── app/
│   ├── layout.tsx          # Layout raíz con Header/Footer/WhatsApp
│   ├── page.tsx            # Página de inicio
│   ├── globals.css         # Estilos globales
│   ├── blog/
│   │   ├── page.tsx        # Listado de artículos
│   │   └── [slug]/
│   │       └── page.tsx    # Artículo individual
│   ├── contacto/
│   │   └── page.tsx        # Formulario de contacto
│   ├── servicios/
│   │   └── page.tsx        # Página de servicios
│   └── gracias/
│       └── page.tsx        # Confirmación
├── components/
│   ├── header.tsx          # Navegación principal
│   ├── footer.tsx          # Footer global
│   ├── whatsapp-button.tsx # Botón flotante WhatsApp
│   └── ui/
│       ├── button.tsx      # Componente Button
│       ├── input.tsx       # Componente Input
│       └── textarea.tsx    # Componente Textarea
├── lib/
│   └── utils.ts            # Utilidades (cn function)
└── public/                 # Assets estáticos
```

## ✅ Checklist de Cumplimiento

### Según Documento de Planificación

- ✅ **Objetivo general**: Landing comercial + autoridad experta
- ✅ **Público objetivo**: Pacientes con rechazos de cobertura
- ✅ **Tono**: Empático, claro, sin tecnicismos
- ✅ **Estructura del sitio**: Inicio, Servicios, Blog, Contacto
- ✅ **Página HOME**:
  - Hero con H1 claro ✅
  - Subtítulo y CTAs ✅
  - Cómo trabajamos (4 pasos) ✅
  - Problemas típicos ✅
  - Cirugías que reclamamos ✅
  - Por qué elegirnos ✅
  - Testimonios ✅
  - FAQ ✅
  - Formulario contacto ✅
- ✅ **Página SERVICIOS**:
  - Intro general ✅
  - 4 servicios detallados ✅
  - Proceso de trabajo ✅
  - CTAs específicos ✅
- ✅ **Página BLOG**:
  - Listado de artículos ✅
  - Títulos SEO-friendly ✅
  - Extractos y metadata ✅
  - Página de artículo individual ✅
- ✅ **Página CONTACTO**:
  - Formulario completo con todos los campos ✅
  - Datos directos ✅
  - Aviso confidencialidad ✅
- ✅ **Elementos transversales**:
  - Header con navegación ✅
  - Footer con datos legales ✅
  - Botón flotante WhatsApp ✅
- ✅ **Funcionalidad**:
  - 100% responsive ✅
  - Mobile-first ✅
  - Click-to-call ✅
  - Formularios con validación ✅
- ✅ **SEO**:
  - Meta titles y descriptions ✅
  - H1 únicos ✅
  - URLs limpias ✅
  - Open Graph tags ✅

## 📞 Contacto de Configuración

**WhatsApp**: +54 9 11 1234-5678 (cambiar en código)
**Email**: contacto@estudiomedico.com (cambiar en código)

## 📝 Notas de Implementación

1. **Formularios**: Actualmente redirigen a `/gracias`. Conectar con servicio de email (Resend, EmailJS, etc.)
2. **WhatsApp**: Actualizar número real en todos los componentes
3. **Imágenes**: Agregar fotos reales del equipo y casos (actualmente placeholders)
4. **Blog**: Los slugs de artículos están listos pero las páginas individuales necesitan contenido real
5. **Analytics**: Agregar Google Analytics / Meta Pixel si es necesario
6. **Google Business**: Configurar perfil y vincular

## 🎯 Próximos Pasos Recomendados

1. Reemplazar placeholders con contenido real
2. Integrar servicio de email para formularios
3. Agregar Google Analytics
4. Configurar Google Business Profile
5. Optimizar imágenes (agregar fotos profesionales)
6. Implementar más artículos de blog
7. A/B testing de CTAs
8. Configurar dominio y hosting (Vercel recomendado)

## 📄 Licencia

Proyecto privado - Todos los derechos reservados
