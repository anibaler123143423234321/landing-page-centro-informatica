/**
 * Header Modular CINF USS (landing-page-centro-informatica)
 * Altura fija: 76px, SOLO el logo oficial USS, sin textos agregados ni botones a la derecha.
 */
(function () {
  function renderHeader() {
    const el = document.getElementById('cinf-header');
    if (!el) return;

    el.className = 'cinf-unified-header';
    el.innerHTML = `
      <div class="cinf-nav-wrap">
        <a href="/" class="cinf-nav-brand" title="Centro de Informática USS" aria-label="Centro de Informática USS, volver al inicio">
          <img src="assets/images/logo-uss.png" alt="Universidad Señor de Sipán" width="851" height="293" />
        </a>
      </div>
    `;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHeader);
  } else {
    renderHeader();
  }
})();
