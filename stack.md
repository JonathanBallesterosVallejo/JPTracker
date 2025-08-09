# 🧱 Stack Tecnológico Oficial - JPtracker

**Versión:** MVP v1.0  
**Fecha de definición:** 2025-08-01  
**Responsable:** [Jonathan_Ballesteros_Vallejo]  
**Apoyo técnico:** Asistente IA ChatGPT

---

## 🎯 Propósito del documento

Este documento define el stack tecnológico oficial para el desarrollo de la app **JPtracker**, que conecta profesionales con oportunidades laborales y de contratación (procurement) en el sector de la cooperación internacional y multilateralismo. Aquí se detallan las herramientas, tecnologías y servicios que se utilizarán para el desarrollo y despliegue del MVP.

---

## 🧩 Componentes del Stack

### 1. Frontend (Interfaz de usuario)
- **Framework:** React.js (inicializado con Vite)
- **Estilos:** TailwindCSS
- **Navegación:** React Router DOM (rutas modulares por sección)
- **Gestión de estado:** Context API (para roles, sesión y estado básico del usuario)
- **Llamadas a APIs:** Axios (cuando aplique)
- **Despliegue:** Vercel

📌 *Motivo:* React con Vite permite desarrollo rápido y modular. Tailwind facilita un diseño limpio y responsivo. React Router ya está implementado en el prototipo por módulos. Vercel es ideal para despliegue ágil y gratuito desde GitHub.


---

### 2. Backend (Lógica del servidor y APIs)
- **Entorno de ejecución:** Node.js
- **Framework:** Express.js (solo si es necesario para scrapers o funcionalidades específicas del servidor)
- **Llamadas a servicios externos:** Axios
- **Uso actual:** No implementado en el prototipo. Planeado para versión 2.
- **Despliegue (cuando aplique):** Render.com o Firebase Functions (por definir)

📌 *Motivo:* Node.js + Express se mantendrá como opción para futuras funciones del backend (scrapers, endpoints propios, etc.). No se requiere para las vistas actuales del prototipo. El frontend puede operar completamente conectado a Firebase y servicios externos.


---

### 3. Base de datos

#### 3.1. Datos de usuarios, seguimiento y actividad
- **Base de datos principal:** Firebase Firestore
- **Uso:** Guardar usuarios, registros de empleos o tenders seguidos, notas personales, estados de seguimiento, fechas clave.

#### 3.2. Datos de oportunidades externas (scraping/API)
- **Base de datos secundaria:** MongoDB Atlas
- **Uso:** Almacenar los datos obtenidos por scraper/API (puestos laborales, licitaciones, agencias, etc.)

📌 *Motivo:* Firestore ofrece autenticación integrada y escalabilidad para usuarios y datos personalizados. MongoDB se adapta mejor para importar fuentes externas con estructuras variables.


---

### 4. Autenticación
- **Proveedor:** Firebase Authentication
- **Modos de acceso iniciales:** Email/contraseña
- **Modos adicionales (futuro):** Acceso con Google y GitHub

📌 *Motivo:* Firebase Authentication es seguro, fácil de integrar con Firestore, y suficiente para el MVP. En etapas futuras se habilitará autenticación social si es necesario.

---

### 5. Scraping / Integración de datos externos
- **Herramientas previstas:** 
  - Puppeteer (automatización de navegador para portales sin API)
  - Axios + Cheerio (scraping directo desde HTML)
  - APIs públicas (cuando estén disponibles)
- **Almacenamiento de resultados:** MongoDB Atlas

📌 *Motivo:* Algunas agencias y portales no ofrecen APIs abiertas. Se usarán distintas estrategias para capturar datos y alimentar la base de datos de oportunidades laborales y de procurement.


---

### 6. Almacenamiento de archivos (futuro)
- **Servicio propuesto:** Firebase Storage
- **Uso previsto:** Carga de archivos como CV, cartas de presentación, documentos requeridos por licitaciones, entre otros.

📌 *Motivo:* Firebase Storage se integra bien con Firebase Auth y Firestore, facilitando el manejo de archivos por usuario.

---

### 7. Panel de Administración
- **Etapa actual:** No se incluye en el MVP.
- **Solución provisional:** Uso del panel de Firebase Console para monitoreo de usuarios y datos.
- **Futuro:** Desarrollo de un panel personalizado con React y control de acceso por roles.

📌 *Motivo:* Para esta primera versión, Firebase ofrece una forma rápida de gestión sin necesidad de código adicional. El panel personalizado será parte de futuras versiones para mayor control y visualización.


---

### 8. Control de versiones
- **Sistema:** Git
- **Repositorio:** GitHub (ya habilitado y sincronizado)

📌 *Motivo:* Git permite controlar cambios de manera ordenada, trabajar con ramas y colaborar. GitHub es ideal para mantener respaldo y despliegue automatizado.

---

## 🔐 Seguridad y privacidad
- Toda la información se almacena y transmite usando HTTPS.
- Las reglas de seguridad en Firebase limitarán accesos por rol (por ejemplo, usuarios vs administradores).
- En fases futuras se incluirán:
  - Política de privacidad
  - Términos y condiciones
  - Autenticación multifactor para admins
  - Logs de actividad para auditoría

📌 *Motivo:* Estas medidas buscan garantizar que los datos personales y los documentos cargados estén protegidos desde el diseño.

---

## 🛠️ Herramientas adicionales

| Herramienta        | Uso propuesto                                      |
|--------------------|-----------------------------------------------------|
| Google AI Studio   | Creación de prototipos y pruebas visuales rápidas   |
| ChatGPT            | Soporte técnico, generación de código y mentoría    |
| VS Code            | Editor de desarrollo principal                      |
| Excel / Planner    | Planeación de filtros, flujos y seguimiento del proyecto |

---

### 🧱 Arquitectura técnica del sistema

> Ver archivo separado: `arquitectura.md` para la descripción completa y actualizad



