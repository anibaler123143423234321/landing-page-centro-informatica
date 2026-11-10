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
* **Prohibición Estricta de Frameworks**: No utilizar React, Next.js, Vite ni dependencias con hidratación de cliente en este directorio. Se eliminaron todos los chunks y scripts residuales (`self.__next_f.push`).
* **Estructura de Archivos**:
  - `index.html`: Portada principal (visualización activa en Live Server: `http://127.0.0.1:5500/landing-page-centro-informatica/index.html`).
  - `about-us.html`: Quiénes somos, misión, visión y convenios.
  - `service.html` & `service-details.html`: Catálogo de cursos y detalle de rutas de acreditación.
  - `team.html` & `team-details.html`: Plana docente e instructores certificados.
  - `pricing-table.html`: Tarifario oficial, modalidades de pago y cuentas bancarias.
  - `faq.html`: Preguntas frecuentes de acreditación y trámites.
  - `contact.html`: Sedes (Pimentel y Aguirre 933), mesa de partes y formulario.
* **Hojas de Estilos y Tokens**:
  - [`assets/css/custom-cinf.css`](assets/css/custom-cinf.css): Tokens USS (`#073299` Azul USS, `#00b4d8` Cian, `#1e293b` Pizarra), header compacto y desplegables.
* **JavaScript Ligero**:
  - [`assets/js/main.js`](assets/js/main.js): Carrusel rotativo hero, drawer móvil y modal de búsqueda.

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

## 🖼️ 4. Inventario de Imágenes y Roadmap de Sustitución

### ✅ Fase 1: Hero Carousel (Completado con Nano Banana / Imagen 3)
* `assets/images/main-slider/banner-1.jpg`: Modern tech hub nocturno con interfaces holográficas de IA / chatbot y estudiantes universitarios.
* `assets/images/main-slider/banner-2.jpg`: Plana docente e instructores de tecnología en laboratorio universitario moderno.
* `assets/images/main-slider/banner-3.jpg`: Centro de acreditación digital con estudiantes en analítica de datos y multipantallas.

### ⏳ Fase 2: Imágenes Pendientes de Sustitución (Poolix Placeholders $\rightarrow$ Activos USS CINF)
El sitio aún conserva imágenes del template de mantenimiento de piscinas que deben sustituirse progresivamente por fotografías académicas y tecnológicas:

| Archivo Placeholder | Sección en Landing | Concepto / Reemplazo Requerido |
|---|---|---|
| `assets/images/resource/feature-image-1.jpg` | Bloque 1: Chatbot CINF 24/7 | Captura o render 3D de asistente virtual / soporte digital universitario. |
| `assets/images/resource/feature-image-2.jpg` | Bloque 2: Acreditación Computación | Estudiante con laptop en campus o laboratorio universitario. |
| `assets/images/resource/feature-image-3.jpg` | Bloque 3: Certificación MOS | Credencial Microsoft Office Specialist / examen Certiport. |
| `assets/images/resource/about.jpg` | Sección Quiénes Somos | Fachada oficial del Campus USS Pimentel o moderna sala de cómputo. |
| `assets/images/resource/service-1.jpg` a `service-4.jpg` | Tarjetas de Cursos | Interfaces de software (Word 365, Excel 365, Power BI, AutoCAD). |
| `assets/images/resource/team-1.jpg` a `team-4.jpg` | Plana Docente CINF | Fotos formales de los docentes (Ing. Dagner Chuman, Mg. Carlos Silva, etc.). |
| `assets/images/gallery/gallery-1.jpg` a `gallery-4.jpg` | Galería de Infraestructura | Instalaciones reales de laboratorios y aulas de cómputo USS. |
| `assets/images/resource/blog-1.jpg` y `blog-2.jpg` | Comunicados Académicos | Eventos de tecnología, talleres de acreditación y aperturas de ciclo. |
| `assets/images/resource/image-1.jpg` y `image-2.jpg` | Banners CTA | Fondos abstractos tecnológicos en azul institucional USS. |

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
* **Horario de Atención:** Lun - Vie: 8:00 AM - 1:00 PM y 2:00 PM - 6:00 PM | Sáb: 8:00 AM - 1:00 PM

---

## 📋 7. Checklist de Tareas del Proyecto

- [x] Estructura estática limpia HTML5/CSS/JS (cero React, cero Next.js).
- [x] Header traducido 100% al español.
- [x] Header compactado a 68px en una sola fila (`flex-wrap: nowrap`).
- [x] Desplegables con fondo blanco puro y chevron CSS nítido.
- [x] Botón derecho redundante de Chatbot eliminado del header.
- [x] Generación de 3 fondos hero con Nano Banana (AI, Docentes, Acreditación).
- [ ] Sustituir imágenes de `feature-image-1..3` (Servicios destacados).
- [ ] Sustituir imagen de `about.jpg` por campus universitario USS.
- [ ] Sustituir imágenes de cursos `service-1..4` (Word, Excel, Power BI, AutoCAD).
- [ ] Actualizar fotos de la plana docente en `team-1..4` con fotos reales del equipo CINF.
- [ ] Actualizar fotos de la galería de infraestructura `gallery-1..4`.
- [ ] Conectar formularios de contacto con API/endpoint de tickets CINF.

