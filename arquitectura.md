## 🏗️ Arquitectura Técnica - JPTracker

### 1. Visión general de la arquitectura

La aplicación JPTracker está estructurada en una arquitectura modular basada en dos grandes bloques funcionales:

- **Módulo de búsqueda y seguimiento de empleos internacionales**
- **Módulo de búsqueda y seguimiento de procesos de procurement**

Ambos módulos comparten una base tecnológica común y están diseñados para funcionar como secciones independientes pero integradas, lo que permite escalar o adaptar el sistema por separado si se requiere.

A nivel técnico, la arquitectura se inspira en principios **Jamstack**, separando claramente el frontend (React + Tailwind), el backend (Express para scrapers o APIs propias), y los servicios en la nube (Firebase, MongoDB, Vercel).

---

### 🔧 Componentes principales

- **Frontend:** Aplicación web en React + Vite, con TailwindCSS para estilos y React Router para navegación por módulos.
- **Backend (opcional en MVP):** Node.js + Express, pensado para scrapers y futuras APIs internas.
- **Base de datos (según uso):**
  - **Firebase Firestore:** Datos de usuarios, seguimientos, notas, progreso.
  - **MongoDB Atlas:** Datos externos (empleos, licitaciones, APIs).
- **Autenticación:** Firebase Authentication.
- **Hosting:** Vercel (principal), Firebase Hosting (opcional).
- **Almacenamiento:** Firebase Storage (uso futuro).
- **Admin Panel:** Firebase Console (futuro: React personalizado).

---

### 2. Organización de carpetas (estructura base del proyecto)

El proyecto seguirá una estructura modular por responsabilidad, basada en prácticas recomendadas para aplicaciones React escalables:

src/
├── assets/ # Imágenes, íconos y otros recursos estáticos
├── components/ # Componentes reutilizables (botones, cards, headers, etc.)
├── features/ # Agrupación de funcionalidades específicas (ej. tracking, búsqueda)
├── pages/ # Páginas por sección del sitio (careers, procurement, explore...)
├── routes/ # Configuración de rutas (React Router)
├── services/ # Llamadas a APIs, integración con Firebase, etc.
├── styles/ # Estilos globales y configuraciones de Tailwind
├── utils/ # Funciones utilitarias y helpers generales
└── App.tsx # Archivo principal de la app

Cada módulo (por ejemplo, empleos o procurement) se construye como una combinación de:
- Página principal (Home)
- Página de búsqueda
- Página de seguimiento
- Página de detalle
- Página de análisis

Esta organización permite aislar la lógica y reutilizar componentes entre módulos.

---

### 3. Flujo general de interacción

- El usuario accede desde la landing page principal.
- Selecciona el módulo (empleos o procurement).
- Realiza búsquedas con filtros avanzados.
- Agrega ítems a su seguimiento personal.
- Consulta gráficos y progreso en el dashboard.
- Puede autenticarse para guardar su seguimiento personalizado.


---
---

### 4. Consideraciones técnicas y escalabilidad

- **Modularidad:** La separación por módulos (empleos, procurement, explore) permite desarrollar, escalar o mantener cada sección de forma independiente.
- **Desacople Frontend/Backend:** El MVP puede funcionar sin backend propio gracias a Firebase, pero está previsto incorporar scrapers y endpoints propios en fases siguientes.
- **Internacionalización (futuro):** Se contempla incluir soporte multilingüe para escalar a otros países.
- **Mobile first:** El diseño con Tailwind permite escalar fácilmente a dispositivos móviles desde el inicio.
- **Despliegue continuo:** La conexión con GitHub + Vercel permite hacer despliegues automáticos en cada push a la rama principal.

---

### ✅ Estado actual

La arquitectura técnica aquí descrita refleja la versión más reciente del prototipo funcional creado en Google AI Studio (julio-agosto 2025), y sirve como base para iniciar el desarrollo real de la aplicación.

Cualquier cambio estructural posterior deberá ser documentado en este archivo para mantener trazabilidad técnica del proyecto.
