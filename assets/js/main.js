/**
 * CINF USS - Main Interactive Controller
 * Archivo: assets/js/main.js
 */
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const mainHeader = document.querySelector('.main-header');
  const mobileNavTogglers = document.querySelectorAll('.mobile-nav-toggler');
  const mobileMenuCloseBtn = document.querySelector('.mobile-menu .close-btn');
  const mobileMenuBackdrop = document.querySelector('.mobile-menu .menu-backdrop');
  const navOverlay = document.querySelector('.nav-overlay');
  const dropdownBtns = document.querySelectorAll('.mobile-menu .dropdown-btn');
  const searchPopup = document.getElementById('search-popup');
  const searchTogglers = document.querySelectorAll('.search-toggler');
  const closeSearchBtn = document.querySelector('.close-search');

  /* ==========================================
     1. CONTROL DE STICKY HEADER AL HACER SCROLL
     ========================================== */
  const handleStickyHeader = () => {
    if (!mainHeader) return;
    if (window.scrollY > 110) {
      mainHeader.classList.add('fixed-header');
      body.classList.add('fixed-header');
    } else {
      mainHeader.classList.remove('fixed-header');
      body.classList.remove('fixed-header');
    }
  };

  window.addEventListener('scroll', handleStickyHeader, { passive: true });
  handleStickyHeader();

  /* ==========================================
     2. CONTROL DEL MENÚ MÓVIL (ABRIR / CERRAR)
     ========================================== */
  const openMobileMenu = () => {
    body.classList.add('mobile-menu-visible');
    if (navOverlay) navOverlay.classList.remove('is-hidden');
  };

  const closeMobileMenu = () => {
    body.classList.remove('mobile-menu-visible');
    if (navOverlay) navOverlay.classList.add('is-hidden');
  };

  mobileNavTogglers.forEach((toggler) => {
    toggler.addEventListener('click', openMobileMenu);
  });

  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  }

  if (mobileMenuBackdrop) {
    mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileMenu);
  }

  /* ==========================================
     3. ACORDEÓN DE SUBMENÚS EN VERSIÓN MÓVIL
     ========================================== */
  dropdownBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const parentLi = btn.closest('li.dropdown');
      const subMenu = parentLi ? parentLi.querySelector('ul') : null;

      if (!subMenu) return;

      const isOpen = btn.classList.contains('open');

      // Cerrar otros submenús abiertos
      dropdownBtns.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.classList.remove('open');
          const otherUl = otherBtn.closest('li.dropdown')?.querySelector('ul');
          if (otherUl) {
            otherUl.classList.remove('sub-menu-open');
            otherUl.classList.add('sub-menu-hidden');
          }
        }
      });

      // Alternar el submenú seleccionado
      btn.classList.toggle('open', !isOpen);
      subMenu.classList.toggle('sub-menu-open', !isOpen);
      subMenu.classList.toggle('sub-menu-hidden', isOpen);
    });
  });

  /* ==========================================
     4. CONTROL DEL POPUP DE BÚSQUEDA
     ========================================== */
  if (searchPopup) {
    searchTogglers.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        searchPopup.classList.add('popup-visible');
        body.classList.add('search-visible');
      });
    });

    if (closeSearchBtn) {
      closeSearchBtn.addEventListener('click', () => {
        searchPopup.classList.remove('popup-visible');
        body.classList.remove('search-visible');
      });
    }
  }

  /* ==========================================
     5. CIERRE CON TECLA ESCAPE (ACCESIBILIDAD)
     ========================================== */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      if (searchPopup) {
        searchPopup.classList.remove('popup-visible');
        body.classList.remove('search-visible');
      }
    }
  });

  /* ==========================================
     6. MARCAR ITEM ACTIVO SEGÚN RUTA ACTUAL
     ========================================== */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.navigation > li');

  navItems.forEach((li) => {
    const mainLink = li.querySelector(':scope > a');
    if (mainLink && mainLink.getAttribute('href') === currentPath) {
      navItems.forEach((item) => item.classList.remove('current'));
      li.classList.add('current');
    }
  });
});
