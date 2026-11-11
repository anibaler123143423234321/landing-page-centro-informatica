# 🌐 Landing Page Centro de Informática USS

Portal informativo del **Centro de Informática (CINF · PROTECH XP)** de la Universidad Señor de Sipán: acreditación en Computación, catálogo de cursos, tarifas, equipo y canales de atención.

> **Nota:** Esta carpeta es **100% HTML, CSS y JavaScript puro**. No usa React, Vite, Node.js ni `node_modules`, y no necesita compilación.

---

## 📁 Contenido y Estructura

```
landing-page-centro-informatica/
├── index.html              # Portada: acceso al Chatbot y al Portal GEX
├── about-us.html           # Sobre el CINF: historia, misión, visión, pilares y alianzas
├── service.html            # Catálogo de cursos con filtros por categoría
├── service-details.html    # Ficha de la Ruta PROTECH XP (Word 365 + Excel 365)
├── pricing-table.html      # Tarifas, modalidades de pago y canales autorizados
├── team.html               # Jefatura, coordinación y especialistas
├── testmonial.html         # Experiencias de estudiantes por carrera
├── faq.html                # Preguntas frecuentes
├── blog.html               # Noticias y convocatorias
├── contact.html            # Sedes, horarios y canales de atención
├── docs/
│   └── prompts-imagenes-nano-banana.md   # Prompts para generar las fotografías
└── assets/
    ├── css/                # Estilos (ver tabla)
    ├── js/                 # main.js (header) y pages-cinf.js (páginas interiores)
    ├── images/             # Fotografías, logotipos y SVG propios (images/cinf/)
    └── media/              # Tipografías e íconos que cargan las hojas de estilo
```

El HTML no lleva estilos ni scripts en línea: los estilos están en `assets/css/` y el comportamiento en `assets/js/`.

### Hojas de estilo

| Archivo | Contenido |
|---|---|
| `bootstrap.min.css` | Framework Bootstrap 5 |
| `theme-base.min.css` | Estilos base, reset y layout del tema |
| `fontawesome.all.min.css` | Íconos Font Awesome |
| `animate.min.css` | Animate.css e íconos del tema |
| `swiper.min.css` | Carrusel Swiper |
| `swiper-icons.css` | Íconos de Swiper y **tipografías del sitio** (no eliminar) |
| `jquery-ui.min.css` | Componentes jQuery UI |
| `modal-video.min.css` | Animaciones de modales de video |
| `header-cinf.css` | Header, desplegables y menú móvil (las 10 páginas) |
| `custom-cinf.css` | Portada (`index.html`) |
| `pages-cinf.css` | Componentes `cinf-*` de las 9 páginas interiores |

Las ocho primeras son de la plantilla base y no se editan. Si cambias una hoja `*-cinf.css`, sube el número de `?v=` en las páginas que la cargan para que el navegador no use la versión en caché.

### Header y pie de página

Son idénticos en las 10 páginas. Para cambiarlos, edita `index.html` y replica el bloque en las demás.

---

## 🚀 Cómo Ver la Landing Page

Usa un servidor web local. Abrir los archivos con doble clic también funciona, salvo los enlaces `/chatbot`, `/tickets` y `/gex`, que solo resuelve Vercel en producción.

- Con Python:
  ```bash
  cd /Users/dagnerchumanlluen/Documents/USS/landing-page-centro-informatica
  python3 -m http.server 8080
  ```
  Y abre `http://localhost:8080` en tu navegador.
- Con la extensión Live Server de VSCode / Antigravity IDE: clic derecho sobre `index.html` > "Open with Live Server".

---

## 📚 Fuentes del Contenido

Los textos, precios y cursos salen del ecosistema CINF. Si cambian allí, hay que actualizarlos aquí:

| Dato | Fuente |
|---|---|
| Cursos, códigos y agrupaciones de escuelas | `ecosistema-cinf/src/data/agrupacionesData.ts` |
| Tarifas, modalidades de pago y Gente con Experiencia | Láminas de `ecosistema-cinf/acreditaciones-uss/` |
| Validación de competencias y convalidación | `uss-gex/src/data/planesComputacion.ts` |
| Indicadores (matriculados, cursos, docentes, certificaciones) | `ecosistema-cinf/src/data/academicData.json` |
| Enlaces de servicios | `ENLACES_ECOSISTEMA_CINF.md` |
