# 📐 Arquitectura Técnica - JPTracker

## 1. Visión general de la arquitectura

La aplicación JPTracker está estructurada en una arquitectura modular dividida en dos grandes bloques funcionales:

- **Módulo de búsqueda y seguimiento de empleos internacionales**
- **Módulo de búsqueda y seguimiento de oportunidades de procurement**

Ambos módulos comparten una base tecnológica común y están diseñados para operar de forma independiente pero integrada, lo que permite escalar, adaptar o monetizar por separado.

A nivel técnico, la arquitectura sigue una estructura de tipo **Jamstack** (JavaScript, APIs, Markup), con una separación clara entre frontend, backend y servicios en la nube.

### Componentes principales:

- **Frontend:** Desarrollado en React.
- **Backend:** API construida con Node.js + Express.
- **Base de datos:** MongoDB Atlas (colecciones separadas por módulo).
- **Autenticación:** Firebase Authentication.
- **Almacenamiento y hosting:** Firebase + GitHub Pages (fases iniciales).
- **Panel de administración:** Firebase Console (con opción futura de panel personalizado).
