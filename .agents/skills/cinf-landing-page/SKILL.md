---
name: cinf-landing-page
description: >-
  Manual de Arquitectura, Especificaciones y Roadmap Visual de la Landing Page del Centro de Informática USS (landing-page-centro-informatica).
  Usar al trabajar en maquetación HTML/CSS/JS, sustitución de imágenes, secciones, cursos, docentes o tarifas de la landing.
---

# 🌐 Manual de Arquitectura, Especificaciones y Roadmap Visual — Landing Page CINF USS
**Centro de Informática (CINF · PROTECH XP) — Universidad Señor de Sipán**

---

## 🎯 1. Objetivo y Propósito del Proyecto

Construir y perfeccionar el portal web estático y vitrina informativa oficial para estudiantes y postulantes de la **Universidad Señor de Sipán (USS)**, diseñado para:
1. **Acreditación Curricular en Computación**: Informar y orientar sobre las vías de acreditación obligatorias para egreso y bachillerato:
   - **Ruta PROTECH XP**: Ofimática Word 365, Excel 365 y certificación internacional Microsoft MOS.
   - **Plan Tradicional**: Computación II y III.
2. **Programa Especial "Gente con Experiencia" (GEX)**: Modalidad para adultos que trabajan (EPE/Subéxito), con módulos CISCO NetAcad (S/ 550 total en 3 etapas, exclusivo Chiclayo).
3. **Catálogo de Cursos & Especializaciones**: Ofimática Word 365, Excel 365 Avanzado, Power BI para Análisis de Datos, AutoCAD 2D/3D y Certificación MOS (Certiport).
4. **Acceso Rápido al Ecosistema Digital CINF**:
   - Asistente Virtual: [Chatbot CINF 24/7](https://informatica-uss.vercel.app/)
   - Mesa de Ayuda: [Mesa de Tickets CINF](https://informatica-uss.vercel.app/tickets)
   - Trámites y Contacto: WhatsApp `+51 986 724 506`, Campus Principal Pimentel y Sede Elías Aguirre 933.

---

## 🏛️ 2. Arquitectura Técnica y Restricciones de Desarrollo

* **Stack Obligatorio**: **HTML5 estático semántico, CSS modular y Vanilla JavaScript puro**.
* **Prohibición Estricta de Frameworks**: No utilizar React, Next.js, Vite ni dependencias con hidratación de cliente en este directorio.
* **Separación de capas**: el HTML no lleva bloques `<style>`, atributos `style=""` ni `<script>` en línea. Los estilos van en `assets/css/` y el comportamiento en `assets/js/`.
* **Estructura de Archivos**:
  - `index.html`: Portada principal (portal de 2 tarjetas: Chatbot y GEX).
  - `about-us.html`: Quiénes somos, historia, misión, visión, pilares y alianzas.
  - `service.html` & `service-details.html`: Catálogo de cursos con filtros y ficha de la Ruta PROTECH XP.
  - `pricing-table.html`: Tarifario oficial, modalidades de pago y canales autorizados.
  - `team.html`: Jefatura, coordinación y especialistas.
  - `testmonial.html`: Experiencias de estudiantes por carrera.
  - `faq.html`: Preguntas frecuentes de acreditación y trámites.
  - `blog.html`: Noticias y convocatorias.
  - `contact.html`: Sedes, horarios y canales de atención.
* **Hojas de Estilos**:
  - Base de la plantilla (no editar): `bootstrap.min.css`, `theme-base.min.css`, `fontawesome.all.min.css`, `animate.min.css`, `swiper.min.css`, `jquery-ui.min.css`, `modal-video.min.css` y `swiper-icons.css`. Esta última contiene además las tipografías del sitio (Inter, Oswald, Poppins y Playfair Display): no eliminarla.
  - [`assets/css/header-cinf.css`](assets/css/header-cinf.css): header compacto, desplegables y menú móvil. Lo cargan las 10 páginas.
  - [`assets/css/custom-cinf.css`](assets/css/custom-cinf.css): portada (`index.html`).
  - [`assets/css/pages-cinf.css`](assets/css/pages-cinf.css): componentes `cinf-*` de las 9 páginas interiores, con tokens USS (`#073299` azul, `#00b4d8` cian, `#ff5e14` naranja).
* **JavaScript Ligero**:
  - [`assets/js/main.js`](assets/js/main.js): header fijo, menú móvil, buscador y elemento activo del menú.
  - [`assets/js/pages-cinf.js`](assets/js/pages-cinf.js): filtros y búsqueda del catálogo, copiado del código de pago y apertura de preguntas enlazadas.
* **Header y pie de página**: son idénticos en las 10 páginas. Si cambian, se editan en `index.html` y se replican en las demás.
* **Versión de caché**: al modificar una hoja `*-cinf.css`, sube su `?v=` en las páginas que la cargan.

---

## 🧭 3. Estándar de Cabecera (Header Compacto 68px)

1. **Dimensiones**: Altura fija de **68px** (tanto en cabecera superior como en flotante *sticky*) con logotipo USS CINF (42px) y separador vertical de 1px.
2. **Navegación en una sola fila (`flex-wrap: nowrap`)**:
   - **Inicio**: Portada Principal, Sobre el CINF, Sedes y Horarios.
   - **Nosotros**: Quiénes Somos, Plana Docente, Testimonios, Preguntas Frecuentes.
   - **Acreditación**: Ruta PROTECH XP, Plan Tradicional, Programa GEX, Tarifas.
   - **Cursos**: Word 365, Excel 365, Power BI, AutoCAD, MOS, Ver Catálogo.
   - **Trámites & Soporte**: Mesa de Tickets CINF, Chatbot Asistente, Guía de Pagos, Mesa de Partes USS.
   - **Contacto**: Contacto y Sedes.
3. **Desplegador Blanco de Alto Contraste**: Fondo blanco puro (`#ffffff`), borde superior azul USS (`#073299`), texto slate `#1e293b`, hover `#f0f7ff` y flechas chevron nativas en CSS (sin caracteres rotos).
4. **Columna Derecha Limpia**: Buscador modal (`search-toggler`) + Bloque WhatsApp CINF directo (`+51 986 724 506`). Sin botones redundantes.

---

## 🖼️ 4. Inventario de Imágenes

Las imágenes de la plantilla original ya se eliminaron. Todas las que quedan son académicas o tecnológicas.

| Carpeta | Contenido |
|---|---|
| `assets/images/cinf/` | SVG propios: íconos de cursos (`curso-*.svg`), ilustraciones de cabecera (`ilustracion-*.svg`), patrón de circuito y motivo del pie de página. |
| `assets/images/tech/` | Logotipos e íconos tecnológicos (Microsoft, Cisco, chatbot, nube). |
| `assets/images/main-slider/` | `banner-1..3.jpg`: fondos de cabecera de Noticias, Equipo y Catálogo. |
| `assets/images/resource/` | Fotos de contenido (`service-1..4`, `feature-image-1..3`, `image-1..2`, `blog-1..2`), `about.jpg` y retratos del equipo (`team-1..4.jpg`). |
| `assets/images/gallery/` | `gallery-1..4.jpg`: entornos de aprendizaje de Nosotros. |

Para regenerar o mejorar una imagen, usa los prompts de [`docs/prompts-imagenes-nano-banana.md`](docs/prompts-imagenes-nano-banana.md) y guarda el resultado con el mismo nombre de archivo: no hay que tocar el HTML.

Pendientes de imagen:

* Reemplazar `gallery-1..4.jpg` por fotografías reales de los laboratorios.
* Regenerar `feature-image-3.jpg` (el certificado muestra un nombre inventado).
* Unificar el fondo y el encuadre de `team-1..4.jpg`.

---

## 💰 5. Reglas de Negocio y Tarifas Oficiales

* **PROTECH XP**: S/ 420.00 (Chiclayo) / S/ 240.00 (Filiales).
  - Al contado (-5%): S/ 399.00 (Chiclayo) / S/ 228.00 (Filial).
  - En 3 cuotas: S/ 140.00 (Chiclayo) / S/ 80.00 (Filial).
  - En 2 cuotas: S/ 210.00 (Chiclayo) / S/ 120.00 (Filial).
  - Diferido (+5% recargo): S/ 441.00 (Chiclayo) / S/ 252.00 (Filial).
* **Plan Tradicional (Computación II y III)**: S/ 330.00 (solo Chiclayo, al contado S/ 313.50).
* **Taller de Certificación Internacional MOS**: S/ 340.00 (Chiclayo) / S/ 280.00 (Filial).
* **Gente con Experiencia (GEX)**: S/ 550.00 total (Ene-Mar S/ 300, Abr-Jul Cisco Gratis, Ago S/ 250).

---

## 📞 6. Canales de Contacto Oficiales
* **WhatsApp Oficial CINF:** `+51 986 724 506` (`https://wa.me/51986724506`)
* **Central Telefónica:** `(074) 481610`
* **Correo Institucional:** `centro.informatica@uss.edu.pe`
* **Campus Principal:** Km 5 Carretera a Pimentel, Chiclayo
* **Sede Chiclayo:** Calle Elías Aguirre 933, Chiclayo
* **Horario de Atención:** Lun - Vie: 8:00 AM - 1:00 PM y 2:00 PM - 6:00 PM | Sáb: 9:00 AM - 12:00 PM

---

## 📋 7. Checklist de Tareas del Proyecto

- [x] Estructura estática limpia HTML5/CSS/JS (cero React, cero Next.js).
- [x] Header compacto de una sola fila, igual en las 10 páginas.
- [x] Hojas de estilo con nombres semánticos (sin hashes de compilación).
- [x] Contenido oficial del CINF en las 9 páginas interiores.
- [x] Eliminadas las imágenes y referencias de la plantilla original.
- [x] Estilos y scripts fuera del HTML.
- [ ] Reemplazar la galería por fotografías reales de los laboratorios.
- [ ] Reemplazar los textos referenciales de `testmonial.html` por testimonios autorizados.
- [ ] Validar con Jefatura la misión, la visión y los canales de pago publicados.
- [ ] Corregir el enlace de YouTube del pie de página (hoy responde 404).
