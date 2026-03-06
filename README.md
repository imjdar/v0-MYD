# 🛋️ Feria Mueble y Decoración 2026 — Web Oficial

Bienvenido al repositorio oficial de la **Feria Mueble y Decoración**, Edición VI (Quito, Ecuador). Este proyecto está desarrollado con las últimas tecnologías en el ecosistema de **React** y **Next.js**, priorizando el rendimiento (SEO, tiempos de carga), la experiencia de usuario (UX/UI premium) y la mantenibilidad del código (arquitectura limpia y tipado seguro).

---

## 🚀 Tecnologías Principales (Tech Stack)

- **Framework**: [Next.js 14/15](https://nextjs.org/) (App Router, Turbopack)
- **UI & Estilos**: [React 18+](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Alertas y Modales**: [SweetAlert2](https://sweetalert2.github.io/)
- **Despliegue (Recomendado)**: [Vercel](https://vercel.com/)
- **Backend (BD & Correos)**: Google Apps Script + Google Sheets + Gmail

---

## 🛠️ Configuración e Inicialización

### 1. Variables de Entorno
El proyecto utiliza una política estricta de **"cero valores quemados en el código"**. Toda la configuración (URLs, RRSS, fechas, colores) se carga desde un archivo `.env.local`. Crea este archivo en la raíz del proyecto basándote en esta plantilla:

\`\`\`env
# API & Integraciones
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/.../exec

# Información del Sitio
NEXT_PUBLIC_SITE_URL=https://muebleydecoracion.com.ec

# Redes Sociales & Contacto
NEXT_PUBLIC_WHATSAPP_URL=https://wa.link/...
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/muebleydecoracion
NEXT_PUBLIC_MAPS_URL=https://maps.google.com/?q=...
NEXT_PUBLIC_PHONE_1=098 893 9148
NEXT_PUBLIC_PHONE_2=099 893 8002

# Medios (Imágenes y Videos Externos)
NEXT_PUBLIC_HERO_VIDEO_URL=https://cdn/.../video.mp4

# Fechas del Evento
NEXT_PUBLIC_EVENT_START=2026-04-03
NEXT_PUBLIC_EVENT_END=2026-04-19
NEXT_PUBLIC_EVENT_DATES="Del 3 al 19 de Abril 2026"

# Estudio Creativo (Footer)
NEXT_PUBLIC_STUDIO_URL=https://growco2026.com
NEXT_PUBLIC_STUDIO_NAME=Growco 2026
\`\`\`

> **Nota Técnica**: Todas las variables se centralizan y validan en `lib/config.ts`. Si falta una variable crítica durante el despliegue, el proyecto arrojará un error descriptivo para prevenir fallas en vivo.

### 2. Instalación y Ejecución Local

\`\`\`bash
# Instalar dependencias
npm install
# o yarn install / pnpm install

# Iniciar el servidor de desarrollo en localhost:3000
npm run dev

# Generar el build de producción para verificar optimizaciones
npm run build
\`\`\`

---

## ✨ Características Principales y Funcionalidad

### 📝 Sistema de Obtención de Leads (Pases de Cortesía)
El formulario de la página principal (Popup de registro) cuenta con características premium:
- **Validación Estricta de Cédula/RUC (Módulo 10)**: Valida la identidad ECUATORIANA asegurando que cumpla el algoritmo oficial (10-13 dígitos, validación de provincia, suma ponderada).
- **Protección de Datos (LOPDP)**: Popups informativos sobre la Ley de Protección de Datos de Ecuador y normativas de comunicaciones comerciales integrados directo en los checkboxes.
- **Micro-interacciones**: SCROLLBAR estilizado, inputs con anillo de foco dinámico, y validación en tiempo real para habilitar o deshabilitar el botón de envío indicando *(X pendientes)*.

### ✉️ Integración Serverless backend con GOOGLE APPS SCRIPT
El formulario se conecta a un Apps Script sin necesidad de servidores intermedios complejos:
1. El usuario completa el formulario y se hace un request **POST** como `text/plain` para sortear restricciones estrictas de CORS.
2. Google Sheets verifica en tiempo real si existe manipulación o registro duplicado (Validando por Cédula, Celular o Correo).
3. Si los datos son correctos, los persiste en su BD (hojas de cálculo).
4. Google **`MailApp`** envía automáticamente el correo de confirmación con el pase en formato **HTML**.

### 🎨 Diseño de Interfaz e Interacciones
- **Video Hero Screen**: Integración nativa de Video `<video>` reproduciéndose automáticamente en bucle como primera impresión en la portada, sin superposiciones de texto molestas, asegurando visibilidad total en móviles.
- **Carrusel Infinito (Marcas)**: Un render limpio con `<Image>` de Next.js que optimiza logos con saltos asíncronos y fundido a los bordes.
- **Componentes Sensibles (`useScrollReveal`)**: Componentes que reaccionan entrando elegantemente a la pantalla al hacer Scroll mediante `IntersectionObserver`.

---

## 📈 Optimización (SEO & Rendimiento)

Durante el desarrollo de esta interfaz se aplicaron las mejores prácticas de **Search Engine Optimization** y Web Core Vitals:

1. **Next.js Image (`next/image`)**:
   - Todas las etiquetas de imagen nativas (`<img>`) han sido actualizadas a `<Image>`. Esto trae consigo auto-conversión a formatos modernos (WebP, AVIF) reduciendo el peso en red en un 70%.
   - Soporte automático de **Lazy Loading** y prevención del Layout Shift (CLS).
2. **Estructura Semántica (Schema/JSON-LD)**:
   - Se inyecta la Metadata `Event` estructurada en `<head>`, diciéndole a los indexadores (Google, Bing) todas las fechas, locación y detalles del evento en lenguaje de base de datos de buscadores.
   - Metadatos dinámicos como Open Graph optimizado listos para compartir previsualizaciones en WhatsApp y Facbook usando la imagen hero del evento.
3. **Optimización Preload**:
   - El video hero (.mp4) y las imágenes más críticas (`/images/hero-feria.jpg`) cuentan con prefetcheo explícito en `app/layout.tsx` a través de `<link rel="preload">` y `dns-prefetch`, agilizando la métrica **Largest Contentful Paint**.
4. **Respuesta Rápida y Limpia**:
   - Todas las rutas compilan estáticamente (`Static prerendered` en build), y Next.js puede servir los contenidos HTML + JS optimizados desde Edge en tiempos inferiores a 100ms.

---

*Feria Mueble y Decoración 2026. Proyecto desarrollado con arquitectura frontend de alto nivel.*
