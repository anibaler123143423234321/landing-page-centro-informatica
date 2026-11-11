/**
 * CINF USS - Interacciones de páginas interiores
 * Archivo: assets/js/pages-cinf.js
 * Catálogo (filtros y búsqueda), copiado de códigos de pago y
 * apertura de preguntas frecuentes enlazadas.
 */
document.addEventListener('DOMContentLoaded', () => {
  // "Análisis" y "analisis" deben encontrar lo mismo
  const normalize = (text) =>
    (text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .trim();

  /* ==========================================
     1. CATÁLOGO: FILTROS POR CATEGORÍA Y BÚSQUEDA
     ========================================== */
  const catalog = document.querySelector('[data-cinf-catalog]');

  if (catalog) {
    const courses = Array.from(catalog.querySelectorAll('[data-cinf-course]'));
    const filters = Array.from(document.querySelectorAll('[data-cinf-filter]'));
    const searchInput = document.querySelector('[data-cinf-search]');
    const counter = document.querySelector('[data-cinf-count]');
    const emptyState = document.querySelector('[data-cinf-empty]');
    const resetButton = document.querySelector('[data-cinf-reset]');

    let activeCategory = 'todos';
    let activeQuery = '';

    const render = () => {
      let visible = 0;

      courses.forEach((course) => {
        const matchesCategory = activeCategory === 'todos' || course.dataset.category === activeCategory;
        const matchesQuery = !activeQuery || normalize(course.textContent).includes(activeQuery);
        const show = matchesCategory && matchesQuery;

        course.hidden = !show;
        if (show) visible += 1;
      });

      filters.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.cinfFilter === activeCategory));
      });

      if (counter) {
        counter.textContent =
          visible === 1 ? 'Mostrando 1 curso' : `Mostrando ${visible} de ${courses.length} cursos`;
      }

      if (emptyState) emptyState.hidden = visible > 0;
    };

    filters.forEach((button) => {
      button.addEventListener('click', () => {
        activeCategory = button.dataset.cinfFilter;
        render();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        activeQuery = normalize(searchInput.value);
        render();
      });
    }

    if (resetButton) {
      resetButton.addEventListener('click', () => {
        activeCategory = 'todos';
        activeQuery = '';
        if (searchInput) searchInput.value = '';
        render();
      });
    }

    // El buscador del encabezado envía ?search-input=...; el menú puede enviar ?categoria=...
    const params = new URLSearchParams(window.location.search);
    const queryFromUrl = params.get('search-input');
    const categoryFromUrl = params.get('categoria');

    if (categoryFromUrl && filters.some((button) => button.dataset.cinfFilter === categoryFromUrl)) {
      activeCategory = categoryFromUrl;
    }

    if (queryFromUrl) {
      activeQuery = normalize(queryFromUrl);
      if (searchInput) searchInput.value = queryFromUrl;
    }

    render();

    if (queryFromUrl || categoryFromUrl) {
      catalog.scrollIntoView({ block: 'start' });
    }
  }

  /* ==========================================
     2. COPIAR CÓDIGOS DE PAGO AL PORTAPAPELES
     ========================================== */
  document.querySelectorAll('[data-cinf-copy]').forEach((button) => {
    const label = button.querySelector('[data-cinf-copy-label]');
    const originalText = label ? label.textContent : '';

    button.addEventListener('click', async () => {
      const value = button.dataset.cinfCopy;

      try {
        await navigator.clipboard.writeText(value);
      } catch (error) {
        // Sin permiso de portapapeles (o abierto como archivo local): copia clásica
        const helper = document.createElement('textarea');
        helper.value = value;
        helper.setAttribute('readonly', '');
        helper.className = 'cinf-visually-hidden';
        document.body.appendChild(helper);
        helper.select();
        document.execCommand('copy');
        helper.remove();
      }

      if (label) {
        label.textContent = 'Copiado';
        window.setTimeout(() => {
          label.textContent = originalText;
        }, 2000);
      }
    });
  });

  /* ==========================================
     3. ABRIR LA PREGUNTA O EL AVISO ENLAZADO POR #ANCLA
     ========================================== */
  const openLinkedItem = () => {
    if (!window.location.hash) return;

    let target = null;
    try {
      target = document.querySelector(window.location.hash);
    } catch (error) {
      return;
    }

    if (target && target.tagName === 'DETAILS') {
      target.open = true;
      target.scrollIntoView({ block: 'center' });
    }
  };

  openLinkedItem();
  window.addEventListener('hashchange', openLinkedItem);
});
