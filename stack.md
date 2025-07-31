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
- **Framework:** React.js
- **Estilos:** TailwindCSS
- **Navegación:** React Router
- **Llamadas a APIs:** Axios
- **Despliegue:** Vercel

📌 *Motivo:* React es moderno, modular y fácil de escalar. Vercel permite publicar rápidamente con integración a GitHub.

---

### 2. Backend (Lógica del servidor y APIs)
- **Entorno de ejecución:** Node.js
- **Framework:** Express.js
- **Llamadas a servicios externos:** Axios
- **Despliegue:** Render.com o Firebase Functions (por definir)

📌 *Motivo:* Node.js + Express es rápido de montar, tiene alta comunidad y permite escribir APIs REST de forma sencilla.

---

### 3. Base de datos

#### 3.1. Datos de usuarios y postulaciones (módulo empleo)
- **Base de datos:** Firebase Firestore

#### 3.2. Datos scrapings / procesos procurement
- **Base de datos:** MongoDB Atlas

📌 *Motivo:* Firestore es ideal para autogestión de usuarios y ofrece autenticación integrada. MongoDB es más flexible para estructuras semivariadas.

---

### 4. Autenticación
- **Proveedor:** Firebase Authentication
- **Modos de acceso:** Email/contraseña, Google, GitHub (por definir)

📌 *Motivo:* Proveedor seguro, fácil de implementar y compatible con Firestore.

---

### 5. Scraping / Integración de datos externos
- **Herramientas:** 
  - Puppeteer (automatización de navegador)
  - Axios + Cheerio (scraping directo de HTML)
  - APIs públicas (cuando estén disponibles)

📌 *Motivo:* Alternativas para obtener datos donde no hay APIs oficiales disponibles.

---

### 6. Almacenamiento de archivos (futuro)
- **Firebase Storage:** Para cargar CV, cartas de presentación u otros documentos.

---

### 7. Panel de Administración (Admin Panel)
- **Inicialmente:** Firebase Admin Console
- **Futuro:** Desarrollo personalizado con React + acceso seguro

📌 *Motivo:* Para monitorear usuarios, datos y actividades sin necesidad de programar un panel complejo al principio.

---

### 8. Control de versiones
- **Sistema:** Git
- **Repositorio:** GitHub (se habilitará en etapas posteriores)

---

## 🔐 Seguridad y privacidad
- Toda la información se almacena y transmite usando HTTPS.
- Las reglas de seguridad en Firebase limitarán accesos por rol.
- En fases futuras se incluirán:
  - Política de privacidad
  - Términos y condiciones
  - Autenticación multifactor para admins

---

## 🛠️ Herramientas adicionales

| Herramienta        | Uso propuesto                         |
|--------------------|----------------------------------------|
| Google AI Studio   | Creación de prototipos y pruebas visuales rápidas |
| ChatGPT            | Soporte técnico y generación de código |
| VS Code            | Editor de desarrollo principal         |
| Excel              | Planeación de filtros y lógicas iniciales |
| Planner            | Seguimiento del roadmap de desarrollo  |

### 📐 Arquitectura técnica del sistema

> Ver archivo separado: `arquitectura.md` para la descripción completa y actualizada de la arquitectura técnica.


